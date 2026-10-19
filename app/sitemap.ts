import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://example.com/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://example.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://example.com/services", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://example.com/projects", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://example.com/process", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://example.com/insights", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: "https://example.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://example.com/start-project", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
