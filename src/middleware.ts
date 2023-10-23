import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "es", "fr", "pt"],
  defaultLocale: "pt",
});

export const config = {
  // Pule todos os caminhos que não devem ser internacionalizados.
  // Este exemplo pula certas pastas e todos os caminhos com um ponto (por exemplo, favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
