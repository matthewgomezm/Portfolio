// GitHub Pages serves the site from /<repo-name>. next.config.ts reads this too,
// so the base path only lives in one place.
export const BASE_PATH = "/Portfolio";

// Files in /public are not rewritten by basePath, so prefix them here.
export function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export const links = {
  github: "https://github.com/matthewgomezm",
  linkedin: "https://www.linkedin.com/in/mgomezmorales",
  formspree: "https://formspree.io/f/mnjgbepe",
};
