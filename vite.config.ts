import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  
  // 1. root 설정은 파일이 루트에 있으므로 제거 (Vite가 기본값으로 프로젝트 루트 사용)
  // root: "client",  <- 이 줄은 제거되어야 합니다.

  build: {
    // 2. outDir은 Netlify가 기대하는 루트의 'dist'로 유지
    outDir: "dist",
    emptyOutDir: true,
    
    // 3. **가장 중요:** entry point를 강제로 지정하는 input 설정을 제거합니다. 
    //    index.html이 루트에 있으므로 Vite가 자동으로 index.html을 찾고
    //    그 안의 <script src="./index.tsx">를 따라가도록 유도합니다.
    // rollupOptions: { input: './index.tsx', },  <- 이 섹션 전체를 제거합니다.
  },

  ssr: {
    noExternal: ['express', 'firebase', 'http'] 
  },
  
  resolve: {
    alias: {
      // 파일이 루트에 있으므로, src 폴더를 가리키도록 수정합니다.
      "@": "/src", 
    },
  },
});