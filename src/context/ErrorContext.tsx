// src/context/ErrorContext.tsx
import { createContext, useContext, ReactNode, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";

interface ErrorContextType {
  setError: (message: string | null) => void;
  clearError: () => void;
}

const ErrorContext = createContext<ErrorContextType>({
  setError: () => {},
  clearError: () => {},
});

export function ErrorProvider({ children }: { children: ReactNode }) {
  const setError = useCallback((message: string | null) => {
    if (message) {
      toast.error(message);
    }
  }, []);

  const clearError = useCallback(() => {
    toast.dismiss();
  }, []);

  return (
    <ErrorContext.Provider value={{ setError, clearError }}>
      {children}
      {/* Central Toaster Viewport */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
          },
        }}
      />
    </ErrorContext.Provider>
  );
}

export const useError = () => useContext(ErrorContext);
