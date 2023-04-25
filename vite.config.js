import { defineConfig } from 'vite'
import path from 'path';
import colors from './api/colors.json';

function makeSassList(name, values) {
  return "$" + name + ":\n  " + values.join(",\n  ") + ";\n\n";
}

function makeSassVariables() {
  const colorVars = Object.keys(colors).map(c => `"${c}" ${colors[c]}`);
  return makeSassList('colors', colorVars);
}

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    lib: {
      name: 'toolkit',
      entry: 'index.js',
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
  css: {
    postcss: "..",
    preprocessorOptions: {
      scss: {
        additionalData: makeSassVariables(),
      }
    }
  },
  server: {
    hmr: false
  }
})
