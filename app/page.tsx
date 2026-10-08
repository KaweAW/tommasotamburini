import type { Metadata } from "next";
import { BioSection } from "@/components/sections/bio";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function BioPage() {
  return <BioSection />;
}
