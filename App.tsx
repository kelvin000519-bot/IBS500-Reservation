// App.tsx
// -----------------------------------------------------------
// ✅ 모든 import를 상대 경로(./src/...)로 최종 변환했습니다.
// -----------------------------------------------------------
import { Switch, Route } from "wouter";
import { queryClient } from "./src/lib/queryClient"; 
import { QueryClientProvider } from "@tanstack/react-query";

// ⬇️ @/ 경로를 './src/'로 수정
import { Toaster } from "./src/components/ui/toaster"; 
import { TooltipProvider } from "./src/components/ui/tooltip";
import { useAuth } from "./src/hooks/useAuth";
import NotFound from "./src/pages/not-found";
import Landing from "./src/pages/Landing";
import Home from "./src/pages/Home";
import Admin from "./src/pages/Admin";

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