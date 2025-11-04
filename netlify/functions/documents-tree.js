const fs = require('fs');
const path = require('path');

function buildFileTree(dirPath, basePath = '', idPrefix = '') {
  const items = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry, index) => {
    // Skip hidden files and node_modules
    if (entry.name.startsWith('.')) return;

    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.join(basePath, entry.name);
    const id = idPrefix ? `${idPrefix}-${index + 1}` : `${index + 1}`;

    if (entry.isDirectory()) {
      const children = buildFileTree(fullPath, relativePath, id);
      items.push({
        id,
        name: entry.name,
        type: 'folder',
        path: relativePath,
        children,
      });
    } else {
      items.push({
        id,
        name: entry.name,
        type: 'file',
        path: relativePath,
      });
    }
  });

  return items.sort((a, b) => {
    // Folders first, then files, both alphabetically
    if (a.type !== b.type) {
      return a.type === 'folder' ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
}

exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Try multiple possible paths for documents directory
    // In Netlify functions, the working directory and __dirname can vary
    const possiblePaths = [
      path.resolve(__dirname, '../..', 'documents'), // From function dir up to repo root
      path.resolve(process.cwd(), 'documents'), // From current working directory
      path.resolve(process.cwd(), 'dist', 'documents'), // From dist folder (build output)
      path.resolve('/opt/build/repo/documents'), // Netlify build environment
      path.resolve('/opt/build/repo/dist/documents'), // Netlify build dist
    ];
    
    let documentsPath = null;
    for (const testPath of possiblePaths) {
      try {
        if (fs.existsSync(testPath) && fs.statSync(testPath).isDirectory()) {
          documentsPath = testPath;
          console.log('Found documents at:', documentsPath);
          break;
        }
      } catch (e) {
        // Continue to next path
      }
    }
    
    if (!documentsPath) {
      console.error('Documents directory not found. Tried paths:', possiblePaths);
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ 
          error: 'Documents directory not found',
          tried: possiblePaths,
          cwd: process.cwd(),
          __dirname: __dirname
        }),
      };
    }
    
    const fileTree = buildFileTree(documentsPath, '');
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(fileTree),
    };
  } catch (error) {
    console.error('Error building file tree:', error);
    console.error('Stack:', error.stack);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Failed to read documents directory',
        message: error.message,
        stack: error.stack
      }),
    };
  }
};

