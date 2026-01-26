import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dia-slate-200 bg-dia-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-dia-blue-900 to-dia-blue-700 text-white font-bold text-lg">
                  D
                </div>
                <span className="font-display font-bold text-lg text-dia-slate-900">
                  DIA
                </span>
              </Link>
              <p className="mt-4 text-sm text-dia-slate-600">
                Advancing collective intelligence through decentralized collaboration and scientific rigor.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dia-slate-600 hover:text-dia-blue-900"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dia-slate-600 hover:text-dia-blue-900"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dia-slate-600 hover:text-dia-blue-900"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:info@${siteConfig.url.replace('https://', '')}`}
                  className="text-dia-slate-600 hover:text-dia-blue-900"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Organization */}
            <div>
              <h3 className="text-sm font-semibold text-dia-slate-900">Organization</h3>
              <ul className="mt-4 space-y-3">
                {siteConfig.footerLinks.organization.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-dia-slate-600 hover:text-dia-blue-900"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research */}
            <div>
              <h3 className="text-sm font-semibold text-dia-slate-900">Research</h3>
              <ul className="mt-4 space-y-3">
                {siteConfig.footerLinks.research.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-dia-slate-600 hover:text-dia-blue-900"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-sm font-semibold text-dia-slate-900">Community</h3>
              <ul className="mt-4 space-y-3">
                {siteConfig.footerLinks.community.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-dia-slate-600 hover:text-dia-blue-900"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-dia-slate-900">Legal</h3>
              <ul className="mt-4 space-y-3">
                {siteConfig.footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-dia-slate-600 hover:text-dia-blue-900"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-dia-slate-200 pt-8">
            <p className="text-center text-sm text-dia-slate-600">
              &copy; {currentYear} {siteConfig.name}. All rights reserved. A 501(c)(3) non-profit organization.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
