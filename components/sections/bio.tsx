"use client";

import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { storyboardProjects } from "@/lib/data";

export function BioSection() {
  const { t } = useLanguage();
  const router = useRouter();

  // The biography text contains highlighted titles (<span class="clickable-storyboard" data-storyboard="id">).
  // Clicking one opens the matching storyboard or animation on its own page.
  const handleTextClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>(
      ".clickable-storyboard",
    );
    const id = target?.getAttribute("data-storyboard");
    if (!id) return;
    const isStoryboard = storyboardProjects.some((p) => p.id === id);
    router.push(`${isStoryboard ? "/storyboard" : "/animation"}?open=${id}`);
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
        <div className="flex w-full justify-center lg:w-1/3 lg:justify-start">
          <Card className="w-full max-w-xs overflow-hidden sm:max-w-sm lg:max-w-none">
            <CardContent className="p-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9023%20-%20Copia.png-ZXGUsYe7ncLr3WCIieABGdrH44KCk5.jpeg"
                alt="Tommaso Tamburini"
                className="h-80 w-full rounded-lg object-cover object-center md:h-96"
              />
            </CardContent>
          </Card>
        </div>
        <div className="w-full space-y-4 lg:w-2/3 lg:space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-primary">{t.bio.title}</h1>
            <p className="mt-1 font-semibold text-black/70 md:hidden">
              {t.subtitle}
            </p>
          </div>
          <div
            className="space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-sm"
            onClick={handleTextClick}
          >
            {t.bio.content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
