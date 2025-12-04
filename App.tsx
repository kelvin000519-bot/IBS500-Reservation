// App.tsx
import React from 'react';

// ✅ 경로 수정: TimeTable이 src 폴더 바로 아래에 있으므로, 경로에 확장자(.tsx)를 추가합니다.
import TimeTable from './src/TimeTable.tsx'; // ⬅️ 확장자 추가
// import 다른 컴포넌트들... (고객님의 기존 import 목록 유지)

const App = () => {
  return (
    // 🚨 여기에 고객님의 원래 예약 시스템 구조를 복원합니다.
    <div className="app-container">
      {/* <Header /> */}
      <TimeTable /> 
      {/* <Footer /> */}
    </div>
  );
};

export default App;