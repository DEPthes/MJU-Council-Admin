import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { Suspense } from "react";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<></>}>
        <Router />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
