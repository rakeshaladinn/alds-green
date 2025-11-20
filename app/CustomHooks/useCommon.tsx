"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ToastType {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

interface CommonContextType {
  user: any;
  setUser: (user: any | null) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
  toggleSidebar: () => void;
  toasts: ToastType[];
  addToast: (message: string, type: "success" | "error" | "info") => void;
  removeToast: (id: number) => void;
}

const CommonContext = createContext<CommonContextType | undefined>(undefined);

export const CommonProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastType[]>([]);

  // Toggle sidebar state
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const addToast = (message: string, type: "success" | "error" | "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 2000); // Auto-remove after 8 seconds
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <CommonContext.Provider
      value={{
        user,
        setUser,
        sidebarOpen,
        setSidebarOpen, // This will now be correctly typed as a setter for the boolean state
        toggleSidebar,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export const useCommon = () => {
  const context = useContext(CommonContext);
  if (!context) {
    throw new Error("useCommon must be used within an AppProvider");
  }
  return context;
};
