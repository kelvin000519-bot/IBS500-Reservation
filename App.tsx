// App.tsx
// -----------------------------------------------------------
// ✅ 모든 로컬 파일 경로에 './src'를 명시적으로 추가했습니다.
// -----------------------------------------------------------
import { Switch, Route } from "wouter";
import { queryClient } from "./src/lib/queryClient"; // ⬅️ 수정
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./src/components/ui/toaster"; // ⬅️ 수정 (Tailwind/Shadcn UI 컴포넌트)
import { TooltipProvider } from "./src/components/ui/tooltip"; // ⬅️ 수정
import { useAuth } from "./src/hooks/useAuth"; // ⬅️ 수정
import NotFound from "./src/pages/not-found"; // ⬅️ 수정
import Landing from "./src/pages/Landing"; // ⬅️ 수정
import Home from "./src/pages/Home"; // ⬅️ 수정
import Admin from "./src/pages/Admin"; // ⬅️ 수정

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

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