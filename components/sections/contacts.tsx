"use client";

import { Mail, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export function ContactsSection() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        {t.contacts.title}
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <Card className="group cursor-pointer transition-all duration-300 max-md:gap-0 max-md:py-0 hover:shadow-lg hover:scale-105">
          <CardContent className="p-4 text-center md:p-6">
            <a
              href="mailto:tomtambu74@hotmail.it"
              className="flex flex-row items-center gap-4 md:flex-col md:gap-0 md:space-y-4"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white">
                <Mail className="h-8 w-8" />
              </div>
              <h2 className="text-lg font-semibold text-primary">Email</h2>
            </a>
          </CardContent>
        </Card>

        <Card className="group cursor-pointer transition-all duration-300 max-md:gap-0 max-md:py-0 hover:shadow-lg hover:scale-105">
          <CardContent className="p-4 text-center md:p-6">
            <a
              href="https://www.linkedin.com/in/tommaso-tamburini-373b8195/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-4 md:flex-col md:gap-0 md:space-y-4"
            >
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-primary">LinkedIn</h2>
            </a>
          </CardContent>
        </Card>

        <Card className="group cursor-pointer transition-all duration-300 max-md:gap-0 max-md:py-0 hover:shadow-lg hover:scale-105">
          <CardContent className="p-4 text-center md:p-6">
            <a
              href="https://www.instagram.com/tom.tambu?igsh=MWRlY2E2bWV4dmQ2aA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-4 md:flex-col md:gap-0 md:space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                <Instagram className="h-8 w-8" />
              </div>
              <h2 className="text-lg font-semibold text-primary">Instagram</h2>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
