import type { Metadata } from "next";
import { Big_Shoulders, Kode_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

const headingFont = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
});

const bodyFont = Kode_Mono({
  variable: "--font-kode",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thomas L.",
  description: "Creative Front-End Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
