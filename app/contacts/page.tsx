import type { Metadata } from "next";
import { ContactsSection } from "@/components/sections/contacts";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Contact Tommaso Tamburini for freelance collaborations, conferences and workshops: email, LinkedIn and Instagram.",
  alternates: { canonical: "/contacts" },
  openGraph: { url: "/contacts", title: "Contacts | Tommaso Tamburini" },
};

export default function ContactsPage() {
  return <ContactsSection />;
}
