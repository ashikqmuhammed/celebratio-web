"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext<any>(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
