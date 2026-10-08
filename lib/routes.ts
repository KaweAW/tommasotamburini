import type { PageKey } from "./types";

/** URL of every section. The keys match `translations.<lang>.nav`. */
export const routes: Record<PageKey, string> = {
  bio: "/",
  animation: "/animation",
  storyboard: "/storyboard",
  personalprojects: "/personal-projects",
  curriculum: "/resume",
  contacts: "/contacts",
};

export const pageKeys = Object.keys(routes) as PageKey[];

export const siteUrl = "https://www.tommasotamburini.com";
