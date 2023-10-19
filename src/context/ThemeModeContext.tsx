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
    // console.log("Toggle chamado, theme:", theme);
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      // console.log("Toggling theme de:", prevTheme, "para:", newTheme);
      setIsDark(newTheme === "dark");

      // @ts-ignore
      ui("mode", newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    console.log("primeiro useEffect chamado.");
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme as "light" | "dark");
    setIsDark(savedTheme === "dark");

    // @ts-ignore
    ui("mode", savedTheme);
  }, []);

  useEffect(() => {
    console.log("Segundo useEffect chamado.");
    if (theme === "dark") {
      document.body.classList.add("dark-body");
      document.body.classList.remove("light-body");
    } else {
      document.body.classList.remove("dark-body");
      document.body.classList.add("light-body");
    }
    localStorage.setItem("theme", theme);

    // @ts-ignore
    ui("mode", theme);
  }, [theme]);

  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

/////////////////

// "use client";

// import {
//   createContext,
//   ReactNode,
//   useEffect,
//   useState,
//   useContext,
// } from "react";

// // Define the properties expected in the ThemeModeContext
// interface ThemeModeContextProps {
//   theme: "light" | "dark";
//   toggleTheme: () => void;
// }

// // Default context data
// const defaultContextData = {
//   theme: "light",
//   toggleTheme: () => {},
// };

// // Create the context with default values
// export const ThemeModeContext =
//   createContext<ThemeModeContextProps>(defaultContextData);

// // Props for the provider component
// interface Props {
//   children: ReactNode;
// }

// // The provider component itself
// export const ThemeModeProvider = ({ children }: Props) => {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   // Function to toggle the theme
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   // Initialize the theme based on saved value in localStorage
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme as "light" | "dark");
//   }, []);

//   // Apply the theme class to the body and save the theme to localStorage
//   useEffect(() => {
//     if (theme === "dark") {
//       document.body.classList.add("dark-body");
//       document.body.classList.remove("light-body");
//     } else {
//       document.body.classList.remove("dark-body");
//       document.body.classList.add("light-body");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <ThemeModeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeModeContext.Provider>
//   );
// };

// // Custom hook to use the theme context
// export const useTheme = () => {
//   const context = useContext(ThemeModeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeModeProvider");
//   }
//   return context;
// };

///////////////////////////////

// "use client";

// import { createContext, ReactNode, useEffect, useState } from "react";

// export const ThemeModeContext = createContext<{ theme: "light" | "dark" }>({
//   theme: "light",
// });

// interface Props {
//   children: ReactNode;
// }

// export const ThemeModeProvider = ({ children }: Props) => {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme as "light" | "dark");
//   }, []);

//   useEffect(() => {
//     if (theme === "dark") {
//       document.body.classList.add("dark-body");
//       document.body.classList.remove("light-body");
//     } else {
//       document.body.classList.remove("dark-body");
//       document.body.classList.add("light-body");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <ThemeModeContext.Provider value={{ theme }}>
//       {children}
//     </ThemeModeContext.Provider>
//   );
// };

///////////////////////////

// import { createContext, ReactNode, useEffect, useState } from "react";
// import { Ex } from "@/extension/ex";

// export const SettingsContext = createContext<{ theme: "light" | "dark" }>({
//   theme: "light",
// });

// interface Props {
//   children: ReactNode;
// }

// export const Settings = ({ children }: Props) => {
//   const [theme, setTheme] = useState<{ theme: "light" | "dark" }>();

//   useEffect(() => {
//     console.log(theme);

//     setTheme({ theme: Ex.modeThemeBlackInit().t as any });
//   }, []);

//   return (
//     <SettingsContext.Provider
//       value={{ theme: theme === undefined ? "light" : theme.theme }}
//     >
//       {children}
//     </SettingsContext.Provider>
//   );
// };
