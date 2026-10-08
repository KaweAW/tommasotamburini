import type { Metadata } from "next";
import { ResumeSection } from "@/components/sections/resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Work experience, software and languages of Tommaso Tamburini, 2D animator and story artist. Download the CV as PDF.",
  alternates: { canonical: "/resume" },
  openGraph: { url: "/resume", title: "Resume | Tommaso Tamburini" },
};

export default function ResumePage() {
  return <ResumeSection />;
}
