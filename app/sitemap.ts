import type { MetadataRoute } from "next";
import { pageKeys, routes, siteUrl } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageKeys.map((key) => ({
    url: `${siteUrl}${routes[key] === "/" ? "" : routes[key]}`,
    changeFrequency: key === "bio" ? "monthly" : "yearly",
    priority: key === "bio" ? 1 : 0.8,
  }));
}
