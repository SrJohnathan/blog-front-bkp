"use client";

import "../styles/beer.min.css";
import "./globals.css";
import "../extension/libs/cdn/beer.min";
import "../extension/libs/cdn/material-dynamic-colors.min";
import { useTranslations, NextIntlClientProvider } from "next-intl";
import { ThemeModeProvider } from "@/context/ThemeModeContext";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations("Layout");

  let messages;
  try {
    messages = require(`../../messages/${locale}.json`);
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
  }

  // export default function RootLayout({
  //   children,
  // }: {
  //   children: React.ReactNode;
  // }) {
  //   const t = useTranslations("Layout");

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={t("lang")}>
        <head>
          <meta charSet="UTF-8" />
          <meta lang={t("metaLang")} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="google" content="notranslate" />
          <title>{t("title")}</title>

          <meta property="og:title" content={t("ogTitle")} />
          <meta property="og:type" content={t("ogType")} />
          <meta property="og:url" content={t("ogUrl")} />
          <meta property="og:image" content={t("ogImage")} />
          <meta property="og:description" content={t("ogDescription")} />
        </head>
        <body>
          <ThemeModeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeModeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

// "use client";

// import "../styles/beer.min.css";
// import "./globals.css";
// import "../extension/libs/cdn/beer.min";
// import "../extension/libs/cdn/material-dynamic-colors.min";
// import { ThemeModeProvider } from "@/context/ThemeModeContext";
// import { Header } from "@/components/Header/Header";
// import { Footer } from "@/components/Footer/Footer";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   console.log("RootLayout render");

//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <meta lang="pt-PT" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//         <meta name="google" content="notranslate" />
//         <title>Blog STW</title>

//         <meta property="og:title" content={"Blog STW"} />
//         <meta property="og:type" content={`website`} />
//         <meta property="og:url" content={"https://blog.stwipis.com/"} />
//         <meta
//           property="og:image"
//           content={"https://blog.stwipis.com/Component_5.png"}
//         />
//         <meta property="og:description" content={"Conquiste Sua Viagem"} />
//       </head>
//       <body>
//         <ThemeModeProvider>
//           <Header />
//           {children}
//           <Footer />
//         </ThemeModeProvider>
//       </body>
//     </html>
//   );
// }
