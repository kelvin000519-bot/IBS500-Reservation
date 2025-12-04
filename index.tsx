// --- 1. React 및 Firebase 클라이언트 Import ---
import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App'; // ⬅️ 원본 App 컴포넌트의 오류 가능성을 배제하기 위해 주석 처리합니다. 

// Firebase 클라이언트 SDK Import (V9 모듈 방식)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// --- 2. Firebase 설정 (고객님의 실제 키 값 포함) ---
// 이전에 입력하신 정확한 키를 사용합니다.
const firebaseConfig = {
  apiKey: "AIzaSyCG7V6dUYxjON_Qu9ldU_EXD6D3EKaYuRg",
  authDomain: "nmr-scheduler.firebaseapp.com",
  projectId: "nmr-scheduler",
  storageBucket: "nmr-scheduler.firebasestorage.app",
  messagingSenderId: "836300942062",
  appId: "1:836300942062:web:c8b13f5e3855249107a1ff",
  measurementId: "G-FNN0SBXEQ0"
};

// --- 3. Firebase 초기화 ---
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

console.log("Reservation UI Initialized. Firebase connection successful."); 

// --- 4. React 앱 렌더링 (임시 테스트 코드) ---
// HTML의 <div id="root">와 일치하는 요소를 찾습니다.
const rootElement = document.getElementById('root'); 

if (rootElement) {
    const root = createRoot(rootElement);
    
    root.render(
        <React.StrictMode>
            {/* 최종적으로 이 JSX 코드가 Netlify에서 렌더링되어야 합니다. */}
            <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f0f0f0', border: '2px solid #007bff' }}>
                <h1>✅ Netlify Load Test SUCCESS!</h1>
                <p>If you see this, the React and Netlify connection is working perfectly.</p>
                <p>The problem was related to file path and Git tracking.</p>
            </div>
        </React.StrictMode>
    );
} else {
    console.error("Fatal Error: Could not find element with id 'root' to mount React application.");
}