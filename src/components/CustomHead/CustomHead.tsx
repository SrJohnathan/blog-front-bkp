"use client";

import { useTranslations } from "next-intl";

export default function CustomHead() {
  const t = useTranslations("CustomHead");

  return (
    <>
      <meta charSet="UTF-8" />
      <meta lang={t("metaLang")} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="google" content="notranslate" />
      <title>{t("title")}</title>

      <meta property="og:title" content={t("ogTitle")} />
      <meta property="og:type" content={t("ogType")} />
      <meta property="og:url" content={t("ogUrl")} />
      <meta property="og:image" content={t("ogImage")} />
      <meta property="og:description" content={t("ogDescription")} />

      <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/open-sans" />

      {/* Font preconnects */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      {/* Favicon */}
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
    </>
  );
}
