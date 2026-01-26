export const siteConfig = {
  name: "Decentralized Intelligence Agency",
  shortName: "DIA",
  description:
    "Advancing collective intelligence through decentralized collaboration and scientific rigor.",
  url: "https://dia.org",
  author: "Decentralized Intelligence Agency",
  links: {
    twitter: "https://twitter.com/DIA_org",
    github: "https://github.com/DIA-org",
    discord: "https://discord.gg/DIA",
    linkedin: "https://linkedin.com/company/DIA",
  },
  navItems: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Research",
      href: "/research",
    },
    {
      title: "Get Involved",
      href: "/get-involved",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  footerLinks: {
    organization: [
      { title: "About Us", href: "/about" },
      { title: "Our Team", href: "/about#team" },
      { title: "Financials", href: "/about#financials" },
      { title: "Careers", href: "/get-involved#careers" },
    ],
    research: [
      { title: "Current Projects", href: "/research#current" },
      { title: "Publications", href: "/research#publications" },
      { title: "Open Source", href: "/research#opensource" },
      { title: "Datasets", href: "/research#datasets" },
    ],
    community: [
      { title: "Donate", href: "/get-involved#donate" },
      { title: "Volunteer", href: "/get-involved#volunteer" },
      { title: "Partner", href: "/get-involved#partnerships" },
      { title: "Newsletter", href: "/get-involved#newsletter" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Donation Policy", href: "/donation-policy" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
