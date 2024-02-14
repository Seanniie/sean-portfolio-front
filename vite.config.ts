import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // React 플러그인
    tsconfigPaths(), // tsconfig 경로 별칭을 해석하는 플러그인
    checker({ typescript: true }), // TypeScript 타입 체크 플러그인
  ],
});
