export const siteConfig = {
  name: "Decentralized Intelligence Agency",
  shortName: "DIA",
  description:
    "A 501(c)(3) scientific nonprofit dedicated to increasing collective intelligence through open-source research, development, and education.",
  url: "https://decentralizedintelligence.agency",
  author: "Decentralized Intelligence Agency",
  links: {
    github: "https://github.com/Decentralized-Intelligence-Agency",
  },
  navItems: [
    { title: "About", href: "#about" },
    { title: "Mission", href: "#mission" },
    { title: "Projects", href: "#projects" },
    { title: "Research", href: "#research" },
    { title: "Get Involved", href: "#get-involved" },
  ],
  footerLinks: {
    projects: [
      { title: "Logos Liber", href: "https://logosliber.org", external: true },
      { title: "Generous", href: "https://generous.works", external: true },
      { title: "Galaxy Brain", href: "https://galaxybrain.info", external: true },
      { title: "Agents of Empire", href: "#projects" },
      { title: "Monumental Systems", href: "#projects" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Use", href: "/terms" },
      { title: "Donation Policy", href: "/donation-policy" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
