import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simone Sugliano — Web Developer & Problem Solver",
  description:
    "Portfolio personale di Simone Sugliano, Web Developer specializzato in siti moderni, veloci e ottimizzati SEO. Progetti reali, soluzioni concrete.",
  metadataBase: new URL("https://tuodominio.it"),

  // FAVICON
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // PRELOAD HERO LCP
  other: {
    link: [
      {
        rel: "preload",
        href: "/heroPortfolio.webp",
        as: "image",
        type: "image/webp",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
