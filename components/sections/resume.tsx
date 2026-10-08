"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function ResumeSection() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        {t.curriculum.title}
      </h1>

      <div className="mb-8 grid grid-cols-3 gap-4 sm:grid-cols-5 sm:gap-6">
        <div className="contents">
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-DH6WzxzOwqMUnlfiOrHN7A3YWqj4fg.jpeg"
              alt="Disney+"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix-QeCSjBU9nPBROTqDIZZVK4TS3EOBao.webp"
              alt="Netflix"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-W6PPVPx5tnaoMUOuuWyRUeG6kyDB5w.png"
              alt="Cartoon Network"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-6ECdJ7IX94ogA2CndjYuOTCYknG4CO.jpeg"
              alt="PlayStation"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-aYVjV1WFYM2l6hxJ2Ajm1qfVKZ5rXw.jpeg"
              alt="Toei Animation"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
        <div className="contents">
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-QbKAI2mFyiAViXi9o2V6ANJVPABiAI.png"
              alt="Tonic DNA"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Bb7ESDcBDnKPdDth5mqK0Q6nNOtB1G.png"
              alt="Apple TV"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-VBpHAVZEZlh2D4TufUHb4y7MvYROG3.png"
              alt="Maga Animation Studio"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-CQ11LHXbLIIumWeERAeYN8myGAP8nN.png"
              alt="RAI"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-AtSqmnTsXRxxxHTKc4R8zpy3B7L0C9.png"
              alt="Final Frontier"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Button asChild className="gap-2">
          <a href="/cv-tommaso-tamburini.pdf" download>
            <Download className="h-4 w-4" />
            {t.curriculum.downloadCV}
          </a>
        </Button>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center border-b border-border pb-4">
            {t.curriculum.experience}
          </h2>
          <div className="space-y-8">
            {t.curriculum.jobs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h4 className="font-bold text-primary text-lg text-center">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((job, jobIndex) => (
                    <div key={jobIndex} className="text-center space-y-1">
                      <h5 className="font-semibold text-base">
                        {job.title} {job.company}
                      </h5>
                      <p className="text-sm font-medium">{job.role}</p>
                      <p className="text-xs text-muted-foreground">
                        {job.studio}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center border-b border-border pb-4">
            {t.curriculum.software}
          </h2>
          <div className="text-center space-y-2 text-sm">
            {t.curriculum.softwareList.map((software, index) => (
              <p key={index}>• {software}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center border-b border-border pb-4">
            {t.curriculum.languages}
          </h2>
          <div className="text-center space-y-2 text-sm">
            {t.curriculum.languagesList.map((lang, index) => (
              <p key={index}>{lang}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center border-b border-border pb-4">
            {t.curriculum.hobbies}
          </h2>
          <div className="text-center text-sm">
            <p>{t.curriculum.hobbiesList}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
