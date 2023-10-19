export namespace Ex {
  export function notNull<T>(e: T) {
    if (e == null) {
      throw "Erro, Objeto nulo";
    } else {
      return e;
    }
  }

  export function formatTextBetweenAsterisks(text: string): string {
    return text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
  }

  export const convertItem = <T>(item: any): T => {
    return item;
  };

  export function useErrorToast() {
    function exibirToastDeErro(texto: string) {
      const errorToastElement = document.getElementById("error-toast");

      if (errorToastElement) {
        errorToastElement.innerText = texto;
        errorToastElement.classList.add("active");
        setTimeout(() => {
          errorToastElement.classList.remove("active");
        }, 3000);
      }
    }

    function exibirToast(texto: string) {
      const errorToastElement = document.getElementById("toast");

      if (errorToastElement) {
        errorToastElement.innerText = texto;
        errorToastElement.classList.add("active");
        setTimeout(() => {
          errorToastElement.classList.remove("active");
        }, 3000);
      }
    }

    return { exibirToast, exibirToastDeErro };
  }

  export function capitalizeFirstLetter(str: string) {
    const words = str.toLowerCase().split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }

  export function replaceNumberWithText(
    input: string,
    textMappings: string[]
  ): string {
    return input.replace(/\{\{(\d+)\}\}/g, (_, number) => {
      const numericIndex = parseInt(number, 10) - 1;
      return textMappings[numericIndex] || `{{${number}}}`;
    });
  }

  export const setStorage = (key: string, str: string) => {
    localStorage.setItem(key, str);
  };

  export const getStorage = (key: string) => {
    return localStorage.getItem(key);
  };
}

// export namespace Ex {
//   export function notNull<T>(e: T) {
//     if (e == null) {
//       throw "Erro, Objeto nulo";
//     } else {
//       return e;
//     }
//   }

//   export function formatTextBetweenAsterisks(text: string): string {
//     return text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
//   }

//   export const convertItem = <T>(item: any): T => {
//     return item;
//   };

//   export const modeTheme = (): { t: string; b: boolean } => {
//     const theme = getStorage("theme") || "dark";

//     // @ts-ignore
//     let newMode =
//       ui("mode") == "dark" ? { t: "light", b: false } : { t: "dark", b: true };
//     // @ts-ignore
//     ui("mode", newMode.t);

//     if (newMode.b) {
//       document.body.classList.add("dark-body");
//       document.body.classList.remove("light-body");
//     } else {
//       document.body.classList.remove("dark-body");
//       document.body.classList.add("light-body");
//     }

//     setStorage("theme", newMode.t);

//     return newMode;
//   };
//   export const modeThemeBlackInit = (): { t: string; b: boolean } => {
//     const theme = getStorage("theme") || "light";

//     // @ts-ignore
//     ui("mode", theme);

//     if (theme === "dark") {
//       document.body.classList.add("dark-body");
//       document.body.classList.remove("light-body");
//     } else {
//       document.body.classList.remove("dark-body");
//       document.body.classList.add("light-body");
//     }

//     return { t: theme, b: theme === "dark" };
//   };

//   export const isThemeBlackInit = (): { t: string; b: boolean } => {
//     const theme = getStorage("theme") || "light";
//     return { t: theme, b: theme === "dark" };
//   };

//   export function useErrorToast() {
//     function exibirToastDeErro(texto: string) {
//       const errorToastElement = document.getElementById("error-toast");

//       if (errorToastElement) {
//         errorToastElement.innerText = texto;
//         errorToastElement.classList.add("active");
//         setTimeout(() => {
//           errorToastElement.classList.remove("active");
//         }, 3000);
//       }
//     }

//     function exibirToast(texto: string) {
//       const errorToastElement = document.getElementById("toast");

//       if (errorToastElement) {
//         errorToastElement.innerText = texto;
//         errorToastElement.classList.add("active");
//         setTimeout(() => {
//           errorToastElement.classList.remove("active");
//         }, 3000);
//       }
//     }

//     return { exibirToast, exibirToastDeErro };
//   }

//   export function capitalizeFirstLetter(str: string) {
//     const words = str.toLowerCase().split(" ");
//     const capitalizedWords = words.map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(" ");
//   }

//   export function replaceNumberWithText(
//     input: string,
//     textMappings: string[]
//   ): string {
//     return input.replace(/\{\{(\d+)\}\}/g, (_, number) => {
//       const numericIndex = parseInt(number, 10) - 1;
//       return textMappings[numericIndex] || `{{${number}}}`;
//     });
//   }

//   export const setStorage = (key: string, str: string) => {
//     localStorage.setItem(key, str);
//   };

//   export const getStorage = (key: string) => {
//     return localStorage.getItem(key);
//   };
// }
