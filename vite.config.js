import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());

  const API_URL = `${env.VITE_API_URL ?? 'http://localhost:3000'}`;
  const PORT = `${env.VITE_PORT ?? '3000'}`;

  return {
    server: {
      proxy: {
        '/api': API_URL,
      },
      port: PORT,
    },
    build: {
      outDir: 'public',
    },
    plugins: [react()],
  };
});