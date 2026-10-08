import type { Metadata } from "next";
import { StoryboardSection } from "@/components/sections/storyboard";

export const metadata: Metadata = {
  title: "Storyboard",
  description:
    "Storyboard projects by Tommaso Tamburini: story artist work and boards for animated series and shorts.",
  alternates: { canonical: "/storyboard" },
  openGraph: { url: "/storyboard", title: "Storyboard | Tommaso Tamburini" },
};

export default function StoryboardPage() {
  return <StoryboardSection />;
}
