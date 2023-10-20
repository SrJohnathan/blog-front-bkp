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
      // @ts-ignore
      ui("mode", newTheme);
      localStorage.setItem("theme",newTheme)
      setClassTheme(newTheme)
      return newTheme;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme as "light" | "dark");
    setIsDark(savedTheme === "dark");
    setClassTheme(savedTheme)

    // @ts-ignore
    ui("mode", savedTheme as "light" | "dark");
  }, []);

  const setClassTheme = (str:string) => {

    if (str === "dark") {
      document.body.classList.add("dark-body")
      document.body.classList.remove("light-body")
    } else {
      document.body.classList.remove("dark-body")
      document.body.classList.add("light-body")
    }


  }


  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
