import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // All Agent
      allow: "/",
      disallow: "/login", // Allow all route except login page
    },
    sitemap: "http://localhost:3000/sitemap.xml",
  };
}
