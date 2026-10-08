import type { Metadata } from "next";
import { AnimationSection } from "@/components/sections/animation";

export const metadata: Metadata = {
  title: "Animation",
  description:
    "2D animation work by Tommaso Tamburini on feature films and series for Disney, Netflix, Fox Animation and Toei Animation, with the 2025 reel.",
  alternates: { canonical: "/animation" },
  openGraph: { url: "/animation", title: "Animation | Tommaso Tamburini" },
};

export default function AnimationPage() {
  return <AnimationSection />;
}
