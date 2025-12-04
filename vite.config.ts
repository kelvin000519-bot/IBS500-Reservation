import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  
  // 1. **제거:** 'client' 폴더를 빌드 루트로 지정하는 설정을 제거합니다.
  //    (파일이 루트에 있으므로, Vite는 이제 루트를 기준으로 파일을 찾습니다.)
  // root: "client",  ⬅️ 이 줄을 삭제합니다.

  build: {
    // Netlify가 최종적으로 배포할 빌드 결과물을 저장할 위치를 명시합니다.
    outDir: "dist",  // ⬅️ outDir을 루트 폴더의 'dist'로 되돌립니다.
    emptyOutDir: true,
    
    // 2. **추가:** 엔트리 포인트(진입점)를 명시적으로 .tsx 파일로 지정합니다.
    rollupOptions: {
        // 파일이 루트에 있으므로, 경로는 `./index.tsx`입니다.
        input: './index.tsx', // ⬅️ 경로를 최상위 루트 기준으로 변경합니다.
    },
  },

  ssr: {
    // 빌드 시 Express나 Firebase를 외부 모듈로 처리하여 충돌을 방지합니다.
    noExternal: ['express', 'firebase', 'http'] 
  },
  
  // 3. 별칭(alias) 설정을 단순화합니다.
  resolve: {
    alias: {
      // 이제 루트가 client가 아니므로, alias 경로도 루트 기준으로 수정해야 합니다.
      "@": "/src", 
    },
  },
});