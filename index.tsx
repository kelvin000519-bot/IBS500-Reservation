// index.tsx 파일의 렌더링 부분을 아래와 같이 수정합니다.

// import App from './App';  ⬅️ 이 줄의 주석을 해제합니다.
import App from './App'; 

// ... (Firebase 초기화 코드 생략)

// ... (4. React 앱 렌더링 부분)
const rootElement = document.getElementById('root'); 

if (rootElement) {
    const root = createRoot(rootElement);
    
    root.render(
        <React.StrictMode>
            {/* 🎯 여기를 다시 <App /> 컴포넌트로 변경합니다. */}
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Fatal Error: Could not find element with id 'root' to mount React application.");
}