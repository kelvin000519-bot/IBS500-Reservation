// index.tsx (전체 코드 복사/붙여넣기)

// ✅ 1. CSS 파일 Import 추가 (src 폴더 바로 아래에 index.css 파일이 있다고 가정)
import './src/index.css'; 

// --- 2. React 및 Firebase 클라이언트 Import ---
import React from 'react'; 
import { createRoot } from 'react-dom/client'; 
import App from './src/App'; 

// Firebase 클라이언트 SDK Import (V9 모듈 방식)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// --- 3. Firebase 설정 (고객님의 실제 키 값 사용) ---
const firebaseConfig = {
  // ... (Firebase 설정 코드는 그대로 유지)
  apiKey: "AIzaSyCG7V6dUYxjON_Qu9ldU_EXD6D3EKaYuRg",
  authDomain: "nmr-scheduler.firebaseapp.com",
  projectId: "nmr-scheduler",
  storageBucket: "nmr-scheduler.firebasestorage.app",
  messagingSenderId: "836300942062",
  appId: "1:836300942062:web:c8b13f5e3855249107a1ff",
  measurementId: "G-FNN0SBXEQ0"
};

// --- 4. Firebase 초기화 ---
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

console.log("Reservation UI Initialized. Firebase connection successful."); 

// --- 5. React 앱 렌더링 ---
const rootElement = document.getElementById('root'); 

if (rootElement) {
    const root = createRoot(rootElement);
    
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Fatal Error: Could not find element with id 'root' to mount React application.");
}