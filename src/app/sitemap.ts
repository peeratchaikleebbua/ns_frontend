import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    // can furthur optimization by formating todo as dynamic route
    // create dynamic sitemap here

  return [
    {
      url: 'http://localhost:3000/todo',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}