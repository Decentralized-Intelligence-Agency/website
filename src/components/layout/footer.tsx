import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-section-alt py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Mission column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-5 tracking-wide">
              Mission
            </h3>
            <p className="text-sm text-muted italic font-display leading-relaxed">
              Intelligence, liberated.
            </p>
            <p className="text-sm text-muted italic font-display leading-relaxed">
              Knowledge, distributed.
            </p>
            <p className="text-sm text-muted italic font-display leading-relaxed">
              Power, decentralized.
            </p>
          </div>

          {/* Projects column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-5 tracking-wide">
              Projects
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {siteConfig.footerLinks.projects.map((link) => (
                <li key={link.title}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors duration-150 hover:text-amber-light focus-visible:outline-none focus-visible:underline"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-150 hover:text-amber-light focus-visible:outline-none focus-visible:underline"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-5 tracking-wide">
              Legal
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <span className="text-sm text-muted">
                  501(c)(3) Tax-Exempt Organization
                </span>
              </li>
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-150 hover:text-amber-light focus-visible:outline-none focus-visible:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card-border mb-8" role="separator" />

        {/* Copyright */}
        <p className="text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} The Decentralized Intelligence Agency. A 501(c)(3) scientific nonprofit. All open-source projects released under permissive licenses.
        </p>
      </div>
    </footer>
  );
}
