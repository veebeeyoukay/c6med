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
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Get the documents directory path
    // In Netlify functions, __dirname points to the function directory
    // We need to go up to the repo root
    const repoRoot = path.resolve(__dirname, '../..');
    const documentsPath = path.join(repoRoot, 'documents');
    
    const fileTree = buildFileTree(documentsPath, '');
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(fileTree),
    };
  } catch (error) {
    console.error('Error building file tree:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Failed to read documents directory' }),
    };
  }
};

