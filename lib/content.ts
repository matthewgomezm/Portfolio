// All portfolio content lives here. To add an experience or project, add an
// entry to the matching list — the pages render whatever is in these arrays,
// in order (put the most recent first).

export type Media =
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | { kind: "video"; src: string; poster: string; label: string; width: number; height: number };

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

export const experience: Entry[] = [
  {
    title: "Robotics Research Intern",
    org: "Aeropropulsion, Mechatronics & Energy Center, Optimal Robotics Lab",
    tags: ["MuJoCo Warp / mjlab", "ROS 2", "C++", "Python"],
    media: {
      kind: "video",
      src: "/vision.mp4",
      poster: "/vision-poster.webp",
      label: "Simulated quadruped walking over rough terrain using ray casts as its vision input",
      width: 960,
      height: 548,
    },
    body: [
      [
        "I use reinforcement learning to build a perception pipeline for our legged robots.",
      ],
      [
        "The clip is a trained policy walking with ray casts as its vision source. If you know the teacher–student paradigm, this is a teacher policy.",
      ],
      ["Current work lives on the mjlab-* branches of the vision_rl repo."],
    ],
    repo: "https://github.com/matthewgomezm/vision_rl",
  },
  {
    title: "Web Developer",
    org: "Freelance",
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
    repo: "https://github.com/matthewgomezm/PersseMedia",
  },
];

export const projects: Entry[] = [
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
        "An autonomous robot that follows a line through complex tracks. I worked on real-time sensor processing, PID motor speed control, and collision fail-safes.",
      ],
    ],
    repo: "https://github.com/matthewgomezm/TI-RSLK-Max",
  },
  {
    title: "README generator with local LLMs",
    org: "Personal project",
    tags: ["Python", "Ollama", "Shell"],
    body: [
      ["I'm bad at writing documentation, so I wrote a program to do it for me."],
      [
        "It uses Ollama to read a codebase and generate a README.md on your own machine, so no code leaves it.",
      ],
    ],
    repo: "https://github.com/matthewgomezm/ReadMeGen",
  },
];
