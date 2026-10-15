import type { VideoSource } from "@/components/autoplay-video";
import { asset } from "@/lib/site";

// A looping, muted video clip. Kept apart from lib/content.ts so the clip
// switcher (a client component) doesn't pull every entry's text into the bundle.
export type Clip = {
  // Short name shown on the clip switcher, e.g. "Hardware".
  name: string;
  sources: VideoSource[];
  // The largest poster; `posterSmaller` is an extra width for small screens.
  poster: string;
  posterSmaller?: { src: string; width: number };
  // Spoken description of the footage.
  label: string;
  caption: string;
  width: number;
  height: number;
};

// File props for <AutoplayVideo>, with the GitHub Pages base path applied.
export function clipFiles(clip: Clip) {
  const posters = clip.posterSmaller && [clip.posterSmaller, { src: clip.poster, width: clip.width }];
  return {
    sources: clip.sources.map((source) => ({ ...source, src: asset(source.src) })),
    poster: asset(clip.poster),
    posterSrcSet: posters ? posters.map((file) => `${asset(file.src)} ${file.width}w`).join(", ") : undefined,
  };
}
