"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { getImageUrl, storyboardProjects } from "@/lib/data";
import type { StoryboardProject } from "@/lib/types";

function StoryboardContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<StoryboardProject | null>(null);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  const open = (project: StoryboardProject) => {
    setSelected(project);
    setIndex(0);
  };
  const close = useCallback(() => {
    setSelected(null);
    setIndex(0);
  }, []);
  const next = useCallback(() => {
    if (selected) setIndex((i) => (i + 1) % selected.imageCount);
  }, [selected]);
  const prev = useCallback(() => {
    if (selected)
      setIndex((i) => (i - 1 + selected.imageCount) % selected.imageCount);
  }, [selected]);

  // Links from the biography use /storyboard?open=<id>.
  const openId = searchParams.get("open");
  useEffect(() => {
    const match = storyboardProjects.find((p) => p.id === openId);
    if (match) open(match);
  }, [openId]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, next, prev, close]);

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-center text-3xl font-bold text-primary">
        {t.storyboard.title}
      </h1>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
        {storyboardProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => open(project)}
            className="text-left"
            aria-label={project.title}
          >
            <Card className="group cursor-pointer transition-all duration-300 max-md:gap-0 max-md:py-0 hover:scale-105 hover:shadow-lg">
              <CardContent className="relative overflow-hidden p-0">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={`Storyboard ${project.title}`}
                  loading="lazy"
                  className="h-40 w-full bg-gray-100 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-52 md:h-64"
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                  <div className="text-center text-white">
                    <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
                    <p className="text-sm">
                      {project.imageCount} {t.storyboard.images}
                    </p>
                  </div>
                </div>
              </CardContent>
              <div className="px-2 py-2 text-center md:hidden">
                <p className="text-sm font-semibold leading-tight text-foreground">
                  {project.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {project.imageCount} {t.storyboard.images}
                </p>
              </div>
            </Card>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onTouchStart={(e) =>
            (touchStartX.current = e.changedTouches[0].screenX)
          }
          onTouchEnd={(e) => {
            const distance = touchStartX.current - e.changedTouches[0].screenX;
            if (Math.abs(distance) > 50) distance > 0 ? next() : prev();
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close"
            className="absolute right-2 top-2 z-10 h-11 w-11 text-white hover:bg-white/20 md:right-4 md:top-4"
            onClick={close}
          >
            <X className="h-6 w-6" />
          </Button>

          <img
            src={getImageUrl(selected, index) || "/placeholder.svg"}
            alt={`Storyboard ${selected.title} ${index + 1}`}
            className="max-h-[80%] max-w-[96%] object-contain md:max-w-[80%]"
          />

          <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80 md:hidden">
            {selected.title} · {index + 1} / {selected.imageCount}
          </p>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Previous image"
            className="absolute left-2 top-1/2 h-11 w-11 -translate-y-1/2 bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/70 md:left-8 md:h-16 md:w-16"
            onClick={prev}
          >
            <ChevronLeft className="h-8 w-8 md:h-12 md:w-12" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Next image"
            className="absolute right-2 top-1/2 h-11 w-11 -translate-y-1/2 bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/70 md:right-8 md:h-16 md:w-16"
            onClick={next}
          >
            <ChevronRight className="h-8 w-8 md:h-12 md:w-12" />
          </Button>
        </div>
      )}
    </div>
  );
}

export function StoryboardSection() {
  return (
    <Suspense fallback={null}>
      <StoryboardContent />
    </Suspense>
  );
}
