"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { personalProjects, videoProjects } from "@/lib/data";
import type { VideoProject } from "@/lib/types";

export function PersonalProjectsSection() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"video" | "sketches">("sketches");
  const [preview, setPreview] = useState<{
    name: string;
    image: string;
  } | null>(null);
  const [video, setVideo] = useState<VideoProject | null>(null);

  const modalOpen = preview !== null || video !== null;
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreview(null);
        setVideo(null);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const tabClass = (active: boolean) =>
    `min-h-11 flex-1 rounded-lg px-6 py-2 font-medium transition-colors sm:flex-none ${
      active ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
    }`;

  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-center text-3xl font-bold text-primary">
        {t.personalprojects.title}
      </h1>

      <div
        className="mx-auto flex max-w-xs justify-center gap-2 sm:max-w-none sm:gap-8"
        role="tablist"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "video"}
          onClick={() => setTab("video")}
          className={tabClass(tab === "video")}
        >
          Video
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "sketches"}
          onClick={() => setTab("sketches")}
          className={tabClass(tab === "sketches")}
        >
          Sketches
        </button>
      </div>

      {tab === "video" && (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {videoProjects.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setVideo(item)}
              className="text-left"
              aria-label={item.title}
            >
              <Card className="max-md:gap-0 max-md:py-0 group relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="relative overflow-hidden p-0">
                  <div
                    style={{
                      padding: `${item.padding} 0 0 0`,
                      position: "relative",
                    }}
                  >
                    <iframe
                      src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&autoplay=0&loop=0&byline=0&title=0&portrait=0&muted=1`}
                      frameBorder="0"
                      loading="lazy"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                      title={item.title}
                    />
                  </div>
                  <div className="absolute inset-0 hidden items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                    <h2 className="mb-2 text-xl font-bold text-white">
                      {item.title}
                    </h2>
                  </div>
                </CardContent>
                <p className="px-2 py-2 text-center text-sm font-semibold text-foreground md:hidden">
                  {item.title}
                </p>
              </Card>
            </button>
          ))}
        </div>
      )}

      {tab === "sketches" && (
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
          {personalProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setPreview(project)}
              className="group text-left transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  loading="lazy"
                  className="h-44 w-full bg-gray-100 object-contain transition-transform duration-300 group-hover:scale-110 md:h-64"
                />
                <div className="p-3 md:p-4">
                  <h2 className="text-center text-sm font-medium text-gray-800 md:text-base">
                    {project.name}
                  </h2>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
          aria-label={preview.name}
        >
          <div className="max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-white">
            <div className="border-b p-3 md:p-4">
              <h2 className="text-center text-lg font-bold md:text-xl">
                {preview.name}
              </h2>
            </div>
            <div className="p-3 md:p-4">
              <img
                src={preview.image || "/placeholder.svg"}
                alt={preview.name}
                className="h-auto max-h-[70vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {video && (
        <div
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/20 bg-black/95 px-4 py-2 md:p-6">
            <h2 className="text-xl font-bold text-white md:text-2xl">Video</h2>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close"
              className="h-11 w-11 text-white hover:bg-white/20"
              onClick={() => setVideo(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-4 md:space-y-6 md:p-6">
            <div className="w-full max-w-4xl">
              <div
                style={{
                  padding: `${video.padding} 0 0 0`,
                  position: "relative",
                }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title={video.title}
                />
              </div>
            </div>
            <h3 className="text-center text-xl font-bold text-white md:text-2xl">
              {video.title}
            </h3>
          </div>

          <div className="border-t border-white/20 p-4 md:p-6">
            <h3 className="mb-3 text-center text-lg font-semibold text-white md:mb-4">
              Other Videos
            </h3>
            <div className="mx-auto grid max-w-4xl grid-cols-3 gap-2 md:grid-cols-6 md:gap-4">
              {videoProjects
                .filter((v) => v.id !== video.id)
                .map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVideo(v)}
                    aria-label={v.title}
                    className="text-left"
                  >
                    <Card className="group cursor-pointer transition-all duration-300 hover:scale-105">
                      <CardContent className="relative overflow-hidden p-0">
                        <img
                          src={v.thumbnail || "/placeholder.svg"}
                          alt={v.title}
                          className="h-20 w-full bg-gray-100 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="px-2 text-center text-xs font-semibold text-white">
                            {v.title}
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
