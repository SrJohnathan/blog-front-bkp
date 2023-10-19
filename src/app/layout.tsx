"use client";

import "../styles/beer.min.css";
import "./globals.css";
import "../extension/libs/cdn/beer.min";
import "../extension/libs/cdn/material-dynamic-colors.min";
import { ThemeModeProvider } from "@/context/ThemeModeContext";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta lang="pt-PT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google" content="notranslate" />
        <title>Blog STW</title>

        <meta property="og:title" content={"Blog STW"} />
        <meta property="og:type" content={`website`} />
        <meta property="og:url" content={"https://blog.stwipis.com/"} />
        <meta
          property="og:image"
          content={"https://blog.stwipis.com/Component_5.png"}
        />
        <meta property="og:description" content={"Conquiste Sua Viagem"} />
      </head>
      <body>
        <ThemeModeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeModeProvider>
      </body>
    </html>
  );
}
