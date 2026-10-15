"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon } from "@/components/icons";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false
  );
}

// Data Saver (Chrome/Android) asks sites to skip heavy downloads.
function prefersSavingData() {
  return (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
}

// The browser plays the first source whose `type` it can decode and whose
// `media` matches, so list smaller and newer-codec files first.
export type VideoSource = { src: string; type: string; media?: string };

type Props = {
  sources: VideoSource[];
  poster: string;
  // Extra poster widths ("url 960w, ..."). The poster is an <img> under the
  // video, so the browser can pick a size and fetch it early.
  posterSrcSet?: string;
  sizes?: string;
  label: string;
  width: number;
  height: number;
  // Applied to the wrapper, which clips the poster and video to its corners
  // and positions the play/pause button.
  className?: string;
  // Fill a wrapper whose className fixes the aspect ratio, cropping the video
  // to it. Lets clips of slightly different shapes share one frame.
  fill?: boolean;
};

// Loads nothing but the poster until the video scrolls into view, then plays
// muted and pauses again when off-screen. Visitors who prefer reduced motion or
// have Data Saver on see the poster until they press play. The button lets
// anyone stop the loop (WCAG 2.2.2), and a pause sticks while they scroll.
export function AutoplayVideo({
  sources,
  poster,
  posterSrcSet,
  sizes,
  label,
  width,
  height,
  className,
  fill = false,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const pausedByVisitor = useRef(false);
  const [playing, setPlaying] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reducedMotion || prefersSavingData()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) video.pause();
        else if (!pausedByVisitor.current) video.play().catch(() => {});
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [reducedMotion]);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      pausedByVisitor.current = false;
      video.play().catch(() => {});
    } else {
      pausedByVisitor.current = true;
      video.pause();
    }
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, widths are pre-built */}
      <img
        src={poster}
        srcSet={posterSrcSet}
        sizes={sizes}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <video
        ref={ref}
        width={width}
        height={height}
        aria-label={label}
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className={cn("relative block w-full", fill ? "h-full object-cover" : "h-auto")}
      >
        {sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} media={source.media} />
        ))}
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute right-2 bottom-2 grid size-11 place-items-center rounded-sm bg-black/55 text-white transition-[background-color,transform] duration-150 hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-[#ceb888] focus-visible:outline-none active:scale-95 sm:right-3 sm:bottom-3"
      >
        {playing ? <PauseIcon className="size-4" /> : <PlayIcon className="size-4" />}
      </button>
    </div>
  );
}
