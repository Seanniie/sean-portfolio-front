import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(), // React 플러그인
    tsconfigPaths(), // tsconfig 경로 별칭을 해석하는 플러그인
    ...(mode !== 'production' ? [checker({ typescript: true })] : []), // TypeScript 타입 체크 플러그인
  ],
  build: {
    // 프로덕션 환경에서만 소스 맵 비활성화
    sourcemap: mode !== 'production',
    assetsInlineLimit: 4096, // 4KB 미만 파일을 인라인으로 처리하여 요청 수 줄임
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop(); // 파일 확장자를 추출
          if (/^(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(extType)) {
            return `assets/img/[name]-[hash][extname]`;
          } else if (/^(css|scss|sass)$/i.test(extType)) {
            return `assets/css/[name]-[hash][extname]`;
          } else if (/^(js|ts|jsx|tsx)$/i.test(extType)) {
            return `assets/js/[name]-[hash][extname]`;
          } else {
            return `assets/misc/[name]-[hash][extname]`;
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
      // 동적 가져오기를 사용하여 코드 분할 최적화
      manualChunks(id) {
        if (id.includes('node_modules')) {
          // 노드 모듈에서 오는 모든 코드를 'vendors' 청크로 분할
          return 'vendors';
        }
      },
    },
  },
}));
