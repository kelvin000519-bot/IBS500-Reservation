// App.tsx
// -----------------------------------------------------------
// ✅ 모든 로컬 파일 경로에 확장자를 명시적으로 추가했습니다.
// -----------------------------------------------------------
import { Switch, Route } from "wouter";
import { queryClient } from "./src/lib/queryClient.ts"; // ⬅️ .ts 확장자 추가
import { QueryClientProvider } from "@tanstack/react-query";

// ⬇️ '@/' 경로를 './src/'로 바꾸고 확장자(.tsx)를 추가했습니다.
import { Toaster } from "./src/components/ui/toaster.tsx"; 
import { TooltipProvider } from "./src/components/ui/tooltip.tsx";
import { useAuth } from "./src/hooks/useAuth.ts"; // ⬅️ .ts 확장자 추가 (훅/유틸리티는 보통 .ts)
import NotFound from "./src/pages/not-found.tsx"; // ⬅️ .tsx 확장자 추가 (페이지 컴포넌트는 보통 .tsx)
import Landing from "./src/pages/Landing.tsx";
import Home from "./src/pages/Home.tsx";
import Admin from "./src/pages/Admin.tsx";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  // ... (Router 컴포넌트 내부 코드는 그대로 유지)
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
          <p className="text-muted-foreground">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      {!isAuthenticated ? (
        <Route path="/" component={Landing} />
      ) : (
        <>
          <Route path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;