import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Example from "./components/Example";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    )
}