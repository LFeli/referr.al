import './globals.css';

import type { Metadata } from "next";
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: "reffer.al",
};

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium'
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
