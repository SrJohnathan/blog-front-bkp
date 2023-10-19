"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeModeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeModeContext = createContext<ThemeModeContextProps>({
  theme: "light",
  toggleTheme: () => {},
  isDark: false,
});

interface Props {
  children: ReactNode;
}

export const ThemeModeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setIsDark(newTheme === "dark");

      return newTheme;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme as "light" | "dark");
    setIsDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-body");
      document.body.classList.remove("light-body");
    } else {
      document.body.classList.remove("dark-body");
      document.body.classList.add("light-body");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
