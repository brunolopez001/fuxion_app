import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Esto permite usar process.env.API_KEY en el código del cliente de forma segura
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});