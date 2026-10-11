export type Media =
  | { kind: "image"; src: string; alt: string; width: number; height: number; credit?: string }
  | { kind: "video"; src: string; poster: string; label: string; width: number; height: number }
  // An inline logo drawn in the page's text color (see components/entry.tsx).
  | { kind: "graphic"; graphic: "ollama"; label: string };

export type TextPart = string | { text: string; href: string };

export type Entry = {
  title: string;
  org: string;
  tags?: string[];
  media?: Media;
  // Each inner array is one paragraph; link parts render as inline links.
  body: TextPart[][];
  repo?: string;
};

// Anchor id for an entry, used by the work index and in-page links.
export function entryId(entry: Entry) {
  return entry.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// The clip that runs in the home page hero.
export const heroMedia = {
  src: "/vision.mp4",
  poster: "/vision-poster.webp",
  label: "Simulated quadruped walking over rough terrain using ray casts as its vision input",
  caption: "Teacher policy walking rough terrain with ray-cast vision, simulated in Mjlab. Part of my research work.",
  width: 960,
  height: 548,
};

export const experience: Entry[] = [
  {
    title: "Robotics Research Intern",
    org: "Aeropropulsion, Mechatronics & Energy Center, Optimal Robotics Lab",
    tags: ["MuJoCo Warp / mjlab", "ROS 2", "C++", "Python"],
    body: [
      [
        "I use reinforcement learning to build a perception pipeline for our legged robots.",
      ],
      [
        "The clip at the top of this page is a trained policy walking with ray casts as its vision source. If you know the teacher–student paradigm, this is a teacher policy.",
      ],
      ["Current work lives in the go2_mjlab repo."],
    ],
    repo: "https://github.com/matthewgomezm/go2_mjlab",
  },
  {
    title: "Web Developer",
    org: "MGStack",
    tags: ["Next.js", "React", "Tailwind CSS"],
    media: {
      kind: "image",
      src: "/webdesign.webp",
      alt: "Illustration of a browser window with code and design symbols",
      width: 616,
      height: 440,
    },
    body: [
      [
        "I turn a hobby for code into websites for clients and friends, pairing an engineering mindset with an eye for current web design.",
      ],
      [
        "Recent work: ",
        { text: "Persse Media", href: "https://persse-media.vercel.app/" },
        " and ",
        { text: "Janet Zhang Media", href: "https://janetzhangmedia.com" },
        ".",
      ],
    ],
  },
];

export const projects: Entry[] = [
  {
    title: "Electric uncrewed boat for ASNE PEP",
    org: "Senior design capstone, Florida State University",
    media: {
      kind: "image",
      src: "/pep.webp",
      alt: "A student steadies an orange uncrewed electric race boat beside a Navy support boat on the water",
      width: 1200,
      height: 798,
      credit: "A PEP 2024 entry from another school. Photo: Office of Naval Research, via DVIDS.",
    },
    body: [
      [
        "My capstone team is building an electric uncrewed surface vessel for the American Society of Naval Engineers' ",
        {
          text: "Promoting Electric Propulsion (PEP)",
          href: "https://www.navalengineers.org/Education/Promoting-Electric-Propulsion-PEP",
        },
        " competition, funded by the Office of Naval Research.",
      ],
      [
        "We're entered in the Uncrewed Open division: the boat has to carry a 60 pound payload through a two-mile course on 55.5 volts or less, with no pre-built kits. Teams also write a white paper and present the design.",
      ],
      ["We're in the early design stages now. I'll post our own photos as the boat comes together."],
    ],
  },
  {
    title: "TI-RSLK MAX line-following robot",
    org: "Advanced Microprocessor System Design",
    tags: ["Embedded C/C++", "PID control"],
    media: {
      kind: "image",
      src: "/rslk.webp",
      alt: "TI-RSLK MAX robot chassis with line sensors and motors",
      width: 1000,
      height: 800,
    },
    body: [
      [
        "An autonomous robot that follows a line through complex tracks. I worked on real-time sensor processing, PID motor speed control, and collision fail-safes amongst other embedded system concepts.",
      ],
    ],
    repo: "https://github.com/matthewgomezm/TI-RSLK-Max",
  },
  {
    title: "README generator with local LLMs",
    org: "Personal project",
    tags: ["Python", "Ollama", "Shell"],
    media: { kind: "graphic", graphic: "ollama", label: "Ollama logo" },
    body: [
      ["I'm bad at writing documentation, so I wrote a program to do it for me."],
      [
        "It uses Ollama to read a codebase and generate a README.md on your own machine, so no code leaves it.",
      ],
    ],
    repo: "https://github.com/matthewgomezm/ReadMeGen",
  },
];

// Things done in person: conferences, competitions, demos. Newest first.
export type FieldEntry = {
  title: string;
  href?: string;
  // Shown as written, e.g. "Sep 2026".
  date: string;
  place: string;
  body: TextPart[];
  // `src` is the largest file; `smaller` lists extra widths so the browser can
  // pick a lighter file where the photo renders small.
  photo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    smaller?: { src: string; width: number }[];
  };
};

export const field: FieldEntry[] = [
  {
    title: "IROS 2026",
    href: "https://2026.ieee-iros.org/",
    date: "Sep 2026",
    place: "Pittsburgh, PA",
    body: [
      "Went with the Optimal Robotics Lab to the IEEE/RSJ International Conference on Intelligent Robots and Systems, one of the largest robotics research conferences. Saw lots of awesome projects from around the world.",
    ],
    photo: {
      src: "/iros.webp",
      alt: "Members of the Optimal Robotics Lab standing behind the IROS 2026 Pittsburgh sign",
      width: 900,
      height: 1200,
      smaller: [{ src: "/iros-600.webp", width: 600 }],
    },
  },
];
