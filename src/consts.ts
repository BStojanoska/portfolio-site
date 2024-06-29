import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Blagica:3000",
  EMAIL: "bozhinovskablagica@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_VOLUNTEER_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My little corner of the web",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const VOLUNTEER: Metadata = {
  TITLE: "Something extra",
  DESCRIPTION: "A collection of my volunteer work.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/BStojanoska",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/blagica-bozhinovska/",
  },
];
