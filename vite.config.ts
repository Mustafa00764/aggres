import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Убедитесь, что выходная папка корректно настроена
  },
  server: {
    open: true,
  },
});
