"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { animationProjects } from "@/lib/data";
import type { AnimationProject } from "@/lib/types";

function AnimationContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<AnimationProject | null>(null);

  // Links from the biography use /animation?open=<id> to open a player directly.
  const openId = searchParams.get("open");
  useEffect(() => {
    const match = animationProjects.find((a) => a.id === openId);
    if (match) setSelected(match);
  }, [openId]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-center text-3xl font-bold text-primary">
        {t.animation.title}
      </h1>

      <div className="-mx-4 mb-8 md:mx-0 md:mb-12">
        {/* Animation reel */}
        <div style={{ padding: "31.5% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1118699935?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1&sidedock=0&sharing=0"
            frameBorder="0"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="ANIMATION REEL 2025"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {animationProjects.map((animation) => (
          <button
            key={animation.id}
            type="button"
            onClick={() => setSelected(animation)}
            className="text-left"
            aria-label={`${animation.title} (${animation.year})`}
          >
            <Card className="max-md:gap-0 max-md:py-0 group relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="relative overflow-hidden p-0">
                <img
                  src={animation.thumbnail || "/placeholder.svg"}
                  alt={`Animation ${animation.title}`}
                  loading="lazy"
                  className="h-40 w-full bg-gray-100 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-52 md:h-64"
                />
                {animation.id === "blue-box" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="text-xl font-bold text-white md:text-2xl">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 hidden items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                  <div className="text-center text-white">
                    <h2 className="mb-2 text-xl font-bold">
                      {animation.title}
                    </h2>
                    <p className="text-sm">{animation.year}</p>
                  </div>
                </div>
              </CardContent>
              {/* Touch screens have no hover, so the title is always visible there */}
              <div className="px-2 py-2 text-center md:hidden">
                <p className="text-sm font-semibold leading-tight text-foreground">
                  {animation.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {animation.year}
                </p>
              </div>
            </Card>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/20 bg-black/95 px-4 py-2 md:p-6">
            <h2 className="text-xl font-bold text-white md:text-2xl">
              {t.animation.title}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close"
              className="h-11 w-11 text-white hover:bg-white/20"
              onClick={() => setSelected(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-4 md:space-y-6 md:p-6">
            {selected.id === "blue-box" ? (
              <div className="w-full max-w-4xl">
                <img
                  src={selected.thumbnail || "/placeholder.svg"}
                  alt={selected.title}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
            ) : (
              <div
                className="w-full max-w-4xl [&_iframe]:max-w-full"
                dangerouslySetInnerHTML={{ __html: selected.vimeoEmbed }}
              />
            )}

            <div className="space-y-1 text-center text-white md:space-y-2">
              <h3 className="text-xl font-bold md:text-2xl">
                {selected.title}
              </h3>
              <p className="text-base text-white/80 md:text-lg">
                {selected.year}
              </p>
              <p className="text-base font-semibold text-primary">
                {selected.distributor}
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 p-4 md:p-6">
            <h3 className="mb-3 text-center text-lg font-semibold text-white md:mb-4">
              Other Animations
            </h3>
            <div className="mx-auto grid max-w-4xl grid-cols-3 gap-2 md:grid-cols-6 md:gap-4">
              {animationProjects
                .filter((anim) => anim.id !== selected.id)
                .map((animation) => (
                  <button
                    key={animation.id}
                    type="button"
                    onClick={() => setSelected(animation)}
                    aria-label={animation.title}
                    className="text-left"
                  >
                    <Card className="group cursor-pointer transition-all duration-300 hover:scale-105">
                      <CardContent className="relative overflow-hidden p-0">
                        <img
                          src={animation.thumbnail || "/placeholder.svg"}
                          alt={animation.title}
                          className="h-20 w-full bg-gray-100 object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="px-2 text-center text-xs font-semibold text-white">
                            {animation.title}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function AnimationSection() {
  return (
    <Suspense fallback={null}>
      <AnimationContent />
    </Suspense>
  );
}
