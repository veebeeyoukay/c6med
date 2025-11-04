const fs = require('fs');
const path = require('path');

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

  // Get file path from query string
  const filePath = event.queryStringParameters?.path;

  if (!filePath) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'File path is required' }),
    };
  }

  try {
    // Try multiple possible paths for documents directory
    const possiblePaths = [
      path.resolve(__dirname, '../..', 'documents'),
      path.resolve(process.cwd(), 'documents'),
      path.resolve(process.cwd(), 'dist', 'documents'),
      path.resolve('/opt/build/repo/documents'),
      path.resolve('/opt/build/repo/dist/documents'),
    ];
    
    let documentsPath = null;
    for (const testPath of possiblePaths) {
      try {
        if (fs.existsSync(testPath) && fs.statSync(testPath).isDirectory()) {
          documentsPath = testPath;
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
        body: JSON.stringify({ error: 'Documents directory not found' }),
      };
    }
    
    // Sanitize path to prevent directory traversal
    const sanitizedPath = path.normalize(filePath).replace(/^(\.\.(\/|\\|$))+/, '');
    const fullPath = path.join(documentsPath, sanitizedPath);

    // Ensure the file is within the documents directory
    const resolvedDocumentsPath = path.resolve(documentsPath);
    const resolvedFilePath = path.resolve(fullPath);
    
    if (!resolvedFilePath.startsWith(resolvedDocumentsPath)) {
      return {
        statusCode: 403,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Access denied' }),
      };
    }

    if (!fs.existsSync(resolvedFilePath)) {
      return {
        statusCode: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'File not found' }),
      };
    }

    const stats = fs.statSync(resolvedFilePath);
    if (stats.isDirectory()) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Path is a directory, not a file' }),
      };
    }

    // Check if file is binary (PDF, DOCX, etc.)
    const ext = path.extname(resolvedFilePath).toLowerCase();
    const textExtensions = ['.txt', '.md', '.csv', '.json', '.js', '.ts', '.jsx', '.tsx', '.html', '.css', '.xml'];
    const isTextFile = textExtensions.includes(ext);

    if (isTextFile) {
      try {
        const content = fs.readFileSync(resolvedFilePath, 'utf-8');
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
          body: JSON.stringify({ content, path: filePath }),
        };
      } catch (error) {
        return {
          statusCode: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({ error: `Failed to read file as text: ${error.message}` }),
        };
      }
    } else {
      // For binary files, return a message indicating they should be downloaded
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ 
          content: `This file (${ext}) is a binary file and cannot be displayed in the viewer. Please download it to view.`,
          path: filePath,
          isBinary: true 
        }),
      };
    }
  } catch (error) {
    console.error('Error reading file:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message || 'Failed to read file' }),
    };
  }
};

