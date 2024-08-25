import type { DefaultSeoProps } from "next-seo";

// Next-Seo Setup for SEO Template

export const NEXT_SEO_DEFAULT: DefaultSeoProps = {
  defaultTitle: "Todo App Default",
  description: "Todo App for CRUD",
  canonical: "http://localhost:3000",
  openGraph: {
    title: "Todo App",
    description: "Todo App for Create Update Read Delete",
    type: "website",
    locale: "en_US",
    url: "localhost:3000",
    siteName: "Todo App",
  },
  twitter: {
    handle: '@Todo',
    site: "@Todo",
    cardType: "summary_large_image"
  }
};
