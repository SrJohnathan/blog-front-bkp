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
    console.log("toggleTheme chamado");
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setIsDark(newTheme === "dark");

      // @ts-ignore
      ui("mode", newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    console.log("entrou no useEffect 1");
    console.log("RootLayout montado");

    const savedTheme = localStorage.getItem("theme") || "light";
    console.log("Recuperando tema do localStorage:", savedTheme);
    setTheme(savedTheme as "light" | "dark");
    setIsDark(savedTheme === "dark");

    // @ts-ignore
    ui("mode", savedTheme);
  }, []);

  useEffect(() => {
    console.log("entrou no useEffect 2");
    if (theme === "dark") {
      document.body.classList.add("dark-body");
      document.body.classList.remove("light-body");
    } else {
      document.body.classList.remove("dark-body");
      document.body.classList.add("light-body");
    }
    console.log("Definindo tema no localStorage:", theme);
    localStorage.setItem("theme", theme);
    console.log("rodando novamente");
  }, []);

  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
