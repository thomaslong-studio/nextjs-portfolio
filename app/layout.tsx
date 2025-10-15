import type { Metadata } from "next";
import { Big_Shoulders, Kode_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import ScrollProgressWrapper from "./components/scroll-progress-wrapper";

import { Analytics } from '@vercel/analytics/next';

const headingFont = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
});

const bodyFont = Kode_Mono({
  variable: "--font-kode",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thomas L. - Creative Front-End Developer",
  description: "Creative Front-End Developer crafting beautiful, modern web experiences. Let's build something together.",
  keywords: ["front-end developer", "web developer", "creative developer", "portfolio"],
  authors: [{ name: "Thomas Longworth" }],
  openGraph: {
    title: "Thomas L. - Creative Front-End Developer",
    description: "Creative Front-End Developer crafting beautiful, modern web experiences. Let's build something together.",
    url: "https://thomasl.dev",
    siteName: "Thomas L. Portfolio",
    images: [
      {
        url: "/twitter_card.png",
        width: 1200,
        height: 630,
        alt: "Thomas L. - Creative Front-End Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas L. - Creative Front-End Developer",
    description: "Creative Front-End Developer crafting beautiful, modern web experiences. Let's build something together.",
    images: ["/thomas_l_hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollProgressWrapper />
        <Analytics />
      </body>
    </html>
  );
}
