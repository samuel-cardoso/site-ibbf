import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/convite", changeFrequency: "monthly", priority: 0.7 },
  { path: "/no-que-cremos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/agenda", changeFrequency: "weekly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const lastModified = new Date();

  return routing.locales.flatMap((locale) =>
    pages.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${path}`])
        ),
      },
    }))
  );
}
