import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Utiliza la ruta base '/kasa/' para producción, pero usa '/' para desarrollo local.
const base = process.env.NODE_ENV === 'production' ? '/kasa/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
});