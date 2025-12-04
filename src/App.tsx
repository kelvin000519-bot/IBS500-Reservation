// App.tsx (src 폴더 안에 있음)
// -----------------------------------------------------------
// ✅ App.tsx가 src 안에 있으므로, 경로는 src를 기준으로 상대적으로 짧아집니다.
// -----------------------------------------------------------
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient.ts"; // ⬅️ "./src/" 제거
import { QueryClientProvider } from "@tanstack/react-query";

// ⬇️ 모든 경로에서 './src/' 제거
import { Toaster } from "./components/ui/toaster.tsx"; 
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { useAuth } from "./hooks/useAuth.ts";
import NotFound from "./pages/not-found.tsx";
import Landing from "./pages/Landing.tsx";
import Home from "./pages/Home.tsx";
import Admin from "./pages/Admin.tsx";

function Router() {
    // ... (Router 컴포넌트 내부 코드는 그대로 유지)
    const { isAuthenticated, isLoading } = useAuth();
    // ...
}

function App() {
    // ... (App 컴포넌트 내부 코드는 그대로 유지)
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