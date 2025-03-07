"use client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import RefreshToken from "./refresh-token";
import { ToastContainer } from "react-toastify";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const AppContext = createContext({
  sessionToken: "",
  setSessionToken: (sessionToken: string) => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default function AppProvider({
  children,
  inititalSessionToken = "",
}: {
  children: React.ReactNode;
  inititalSessionToken?: string;
}) {
  const [sessionToken, setSessionToken] = useState(inititalSessionToken);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ sessionToken, setSessionToken }}>
        {children}
        <ToastContainer position="bottom-right" autoClose={2000} className='text-[14px]'/>
        <RefreshToken />
      </AppContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
