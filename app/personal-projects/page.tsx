import type { Metadata } from "next";
import { PersonalProjectsSection } from "@/components/sections/personal-projects";

export const metadata: Metadata = {
  title: "Personal Projects",
  description:
    "Personal animation tests, videos and sketches by Tommaso Tamburini.",
  alternates: { canonical: "/personal-projects" },
  openGraph: {
    url: "/personal-projects",
    title: "Personal Projects | Tommaso Tamburini",
  },
};

export default function PersonalProjectsPage() {
  return <PersonalProjectsSection />;
}
