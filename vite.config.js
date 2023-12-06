import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    lib: {
      name: 'toolkit',
      entry: 'toolkit.js',
      fileName: 'toolkit',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') return 'toolkit.css';
        }
      }
    },
  },
  plugins: [eslint()],
  server: {
    hmr: false
  }
})
