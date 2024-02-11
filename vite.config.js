import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'C:/work/eastclinic/qi/public/vendors/east-search-panel', // Specify the output directory using forward slashes
    filenameHashing: false,
    assetsDir: '', // Set assetsDir to an empty string
    assetsInlineMaxSize:0,

    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        manualChunks
      },

    }
  },
})
function manualChunks(id) {
  if (id.includes('node_modules/@vue')) {
    return 'vue_core';
  }
}