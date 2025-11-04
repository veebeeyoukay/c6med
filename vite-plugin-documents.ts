import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  path: string;
  children?: FileItem[];
}

function buildFileTree(dirPath: string, basePath: string = '', idPrefix: string = ''): FileItem[] {
  const items: FileItem[] = [];
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

function findFileByPath(fileTree: FileItem[], targetPath: string): FileItem | null {
  for (const item of fileTree) {
    if (item.path === targetPath) {
      return item;
    }
    if (item.children) {
      const found = findFileByPath(item.children, targetPath);
      if (found) return found;
    }
  }
  return null;
}

export function documentsPlugin(): Plugin {
  const documentsPath = path.resolve(__dirname, 'documents');

  return {
    name: 'vite-plugin-documents',
    configureServer(server) {
      // API endpoint to get file tree
      server.middlewares.use('/api/documents/tree', (req, res, next) => {
        if (req.method !== 'GET') {
          return next();
        }

        try {
          const fileTree = buildFileTree(documentsPath, '');
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(JSON.stringify(fileTree));
        } catch (error) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Failed to read documents directory' }));
        }
      });

      // API endpoint to get file content
      server.middlewares.use('/api/documents/file', (req, res, next) => {
        if (req.method !== 'GET') {
          return next();
        }

        const url = new URL(req.url || '', `http://${req.headers.host}`);
        const filePath = url.searchParams.get('path');

        if (!filePath) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'File path is required' }));
          return;
        }

        try {
          // Sanitize path to prevent directory traversal
          const sanitizedPath = path.normalize(filePath).replace(/^(\.\.(\/|\\|$))+/, '');
          const fullPath = path.join(documentsPath, sanitizedPath);

          // Ensure the file is within the documents directory
          if (!fullPath.startsWith(documentsPath)) {
            res.statusCode = 403;
            res.end(JSON.stringify({ error: 'Access denied' }));
            return;
          }

          if (!fs.existsSync(fullPath)) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'File not found' }));
            return;
          }

          const stats = fs.statSync(fullPath);
          if (stats.isDirectory()) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Path is a directory, not a file' }));
            return;
          }

          // Check if file is binary (PDF, DOCX, etc.)
          const ext = path.extname(fullPath).toLowerCase();
          const textExtensions = ['.txt', '.md', '.csv', '.json', '.js', '.ts', '.jsx', '.tsx', '.html', '.css', '.xml'];
          const isTextFile = textExtensions.includes(ext);

          if (isTextFile) {
            try {
              const content = fs.readFileSync(fullPath, 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ content, path: filePath }));
            } catch (error: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: `Failed to read file as text: ${error.message}` }));
            }
          } else {
            // For binary files, return a message indicating they should be downloaded
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ 
              content: `This file (${ext}) is a binary file and cannot be displayed in the viewer. Please download it to view.`,
              path: filePath,
              isBinary: true 
            }));
          }
        } catch (error: any) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: error.message || 'Failed to read file' }));
        }
      });

      // Serve static files from documents folder
      server.middlewares.use('/documents', (req, res, next) => {
        try {
          if (!req.url) {
            return next();
          }

          const requestedPath = decodeURIComponent(req.url);
          const filePath = path.join(documentsPath, requestedPath);
          
          // Ensure the file is within the documents directory
          const resolvedPath = path.resolve(filePath);
          if (!resolvedPath.startsWith(path.resolve(documentsPath))) {
            res.statusCode = 403;
            res.end('Access denied');
            return;
          }

          if (!fs.existsSync(resolvedPath)) {
            return next();
          }

          const stats = fs.statSync(resolvedPath);
          if (stats.isDirectory()) {
            return next();
          }

          // Determine MIME type
          const ext = path.extname(resolvedPath).toLowerCase();
          const mimeTypes: Record<string, string> = {
            '.pdf': 'application/pdf',
            '.doc': 'application/msword',
            '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            '.xls': 'application/vnd.ms-excel',
            '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            '.ppt': 'application/vnd.ms-powerpoint',
            '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            '.txt': 'text/plain',
            '.csv': 'text/csv',
            '.md': 'text/markdown',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
          };
          const contentType = mimeTypes[ext] || 'application/octet-stream';

          // Read and serve the file
          const fileContent = fs.readFileSync(resolvedPath);
          res.setHeader('Content-Type', contentType);
          res.setHeader('Content-Length', fileContent.length);
          res.setHeader('Content-Disposition', `inline; filename="${path.basename(resolvedPath)}"`);
          res.statusCode = 200;
          res.end(fileContent);
        } catch (error: any) {
          console.error('Error serving document:', error);
          res.statusCode = 500;
          res.end('Error serving file');
        }
      });
    },
  };
}

