"use client";

import { useState } from "react";
import { clipFiles, type Clip } from "@/lib/clip";
import { cn } from "@/lib/utils";
import { AutoplayVideo } from "@/components/autoplay-video";

// One clip with its caption, or several that share one 16:9 frame with a
// switch above it (e.g. simulation and hardware). A clip
// downloads only once it is shown.
export function ClipPlayer({ clips, sizes, className }: { clips: Clip[]; sizes: string; className?: string }) {
  const [shown, setShown] = useState(0);
  const clip = clips[shown];

  return (
    <figure className={className}>
      {clips.length > 1 && (
        <div role="group" aria-label="Choose a clip" className="mb-3 inline-flex gap-1 rounded-sm bg-secondary p-1">
          {clips.map((option, i) => (
            <button
              key={option.name}
              type="button"
              aria-pressed={i === shown}
              onClick={() => setShown(i)}
              className={cn(
                "min-h-11 rounded-[2px] px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                i === shown ? "bg-heading text-background" : "text-foreground hover:text-heading"
              )}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}

      {/* Keyed so a switch mounts a fresh player with that clip's files. */}
      <AutoplayVideo
        key={clip.name}
        {...clipFiles(clip)}
        sizes={sizes}
        label={clip.label}
        width={clip.width}
        height={clip.height}
        fill={clips.length > 1}
        className={cn(
          "rounded-sm bg-muted",
          clips.length > 1 && "aspect-video motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300"
        )}
      />
      <figcaption aria-live="polite" className="mt-2 text-sm text-muted-foreground">
        {clip.caption}
      </figcaption>
    </figure>
  );
}
