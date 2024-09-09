import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ravi.perfectbase.dev",
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "monthly",
      alternates: {
        languages: {
          ja: "https://ravi.perfectbase.dev/ja",
          "pt-BR": "https://ravi.perfectbase.dev/pt-BR",
        },
      },
    },
  ];
}
