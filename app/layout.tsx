import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Noto_Sans_KR, Roboto } from "next/font/google";
import Header from "./(root)/_component/Header";
import Footer from "./(root)/_component/Footer";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--roboto-font",
});

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--noto-font",
});

export const metadata: Metadata = {
  title: "서울로봇고 동아리",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${noto_sans_kr.variable} ${roboto.variable} bg-black overflow-y-scroll`}
      >
        {children}
        <Header />
        <Footer />
      </body>
    </html>
  );
}
