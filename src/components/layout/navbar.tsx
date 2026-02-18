"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-card-border bg-void/95 backdrop-blur supports-[backdrop-filter]:bg-void/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-foreground">
              DIA
            </span>
            <span className="hidden sm:inline text-xs text-muted-foreground">
              501(c)(3)
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-amber-light"
              >
                {item.title}
              </a>
            ))}
            <a
              href="#get-involved"
              className={cn(
                "ml-3 inline-flex h-9 items-center rounded-full px-4",
                "text-sm font-semibold text-void",
                "transition-all duration-200",
                "hover:shadow-[0_0_16px_rgba(245,158,11,0.3)]"
              )}
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
              }}
            >
              Donate
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-muted-foreground hover:text-amber-light focus:outline-none focus:ring-2 focus:ring-amber"
            aria-expanded={isOpen}
            aria-label="Main menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="border-t border-card-border px-4 pb-4 pt-2 space-y-1">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-amber-light"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <a
            href="#get-involved"
            className="block mt-3 text-center rounded-full py-2 text-sm font-semibold text-void"
            style={{
              background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
            }}
            onClick={() => setIsOpen(false)}
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
}
