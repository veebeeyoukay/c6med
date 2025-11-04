import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { documentsPlugin } from "./vite-plugin-documents";
import { copyFileSync, mkdirSync, readdirSync } from "fs";

// Plugin to copy documents folder to dist during build
function copyDocumentsPlugin() {
  return {
    name: 'copy-documents',
    writeBundle() {
      const srcDir = path.resolve(__dirname, 'documents');
      const destDir = path.resolve(__dirname, 'dist/documents');
      
      function copyRecursive(src: string, dest: string) {
        mkdirSync(dest, { recursive: true });
        const entries = readdirSync(src, { withFileTypes: true });
        
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          
          if (entry.isDirectory()) {
            copyRecursive(srcPath, destPath);
          } else {
            copyFileSync(srcPath, destPath);
          }
        }
      }
      
      try {
        copyRecursive(srcDir, destDir);
        console.log('Documents folder copied to dist');
      } catch (error) {
        console.error('Error copying documents:', error);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    documentsPlugin(),
    mode === 'development' &&
    componentTagger(),
    mode === 'production' && copyDocumentsPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
