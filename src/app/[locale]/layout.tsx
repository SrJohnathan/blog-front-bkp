import React from "react";
import CustomHead from "@/components/CustomHead/CustomHead";
import BeerComponent from "@/components/BeerComponent/BeerComponent";
import { ThemeModeProvider } from "@/context/ThemeModeContext";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { notFound } from "next/navigation";


export const fetchCache = 'force-no-store'
export const revalidate = 0 // seconds
export const dynamic = 'force-dynamic'


export function generateStaticParams() {
  return [
    { locale: "pt" },
    { locale: "es" },
    { locale: "en" },
    { locale: "fr" },
  ];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <head>
          <meta name="google-adsense-account" content="ca-pub-5042411247457773"/>
          <script async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5042411247457773"
                  crossOrigin="anonymous"></script>
          <CustomHead />
        </head>
        <body>
          <BeerComponent />
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
