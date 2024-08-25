import NavBar from "@/components/header/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NS_test TODO App",
  description: "ns_test todo app",
  openGraph: {
    title: "Todo App",
    description: "Todo App for Create Update Read Delete",
    type: "website",
    locale: "en_US",
    url: "localhost:3000",
    siteName: "Todo App",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
