import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MagistrTheOne - Senior Fullstack Developer & AI Architect",
  description: "Senior Fullstack Developer + AI. Отец нейросетей NEON(QTG), Prometheus(AGI), EON(КМА). 22+ патента в области AI. Краснодар 2025",
  keywords: "Fullstack Developer, AI, Machine Learning, Neural Networks, Patents, Краснодар, MagistrTheOne",
  authors: [{ name: "MagistrTheOne" }],
  creator: "MagistrTheOne",
  openGraph: {
    title: "MagistrTheOne - Senior Fullstack Developer & AI Architect",
    description: "Senior Fullstack Developer + AI. Отец нейросетей NEON(QTG), Prometheus(AGI), EON(КМА). 22+ патента в области AI.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark smooth-scroll">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden leading-relaxed`}
      >
        {children}
      </body>
    </html>
  );
}
