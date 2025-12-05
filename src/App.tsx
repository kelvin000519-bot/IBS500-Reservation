// App.tsx (src 폴더 안에 있음)

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient.ts"; 
import { QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "./components/ui/toaster.tsx"; 
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { useAuth } from "./hooks/useAuth.ts";
import NotFound from "./pages/not-found.tsx";
import Landing from "./pages/Landing.tsx";
import Home from "./pages/Home.tsx";
import Admin from "./pages/Admin.tsx";

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