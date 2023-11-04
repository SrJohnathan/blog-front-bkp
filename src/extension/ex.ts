import axios from "axios";

export namespace Ex {
  export function api() {
    return axios.create({
      baseURL: process.env.API,
     // baseURL: "https://stw-blog-backend.herokuapp.com",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  export function apiClient() {
    return axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  export function notNull<T>(e: T) {
    if (e == null) {
      throw "Erro, Objeto nulo";
    } else {
      return e;
    }
  }

  export function formatLoadUrl(str: string) {
    return `https://${"stw-docs-plus"}.s3.amazonaws.com/${str}`;
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
