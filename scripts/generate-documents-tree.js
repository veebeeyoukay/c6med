import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

// Generate the file tree
const documentsPath = path.resolve(__dirname, '../documents');
const outputPath = path.resolve(__dirname, '../dist/documents-tree.json');

try {
  const fileTree = buildFileTree(documentsPath, '');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(fileTree, null, 2));
  console.log('Generated documents-tree.json');
} catch (error) {
  console.error('Error generating documents tree:', error);
  process.exit(1);
}

