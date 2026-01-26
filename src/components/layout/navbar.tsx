"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-dia-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-dia-blue-900 to-dia-blue-700 text-white font-bold text-lg">
                D
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-lg text-dia-slate-900">
                  Decentralized Intelligence Agency
                </div>
                <div className="text-xs text-dia-slate-600">501(c)(3) Non-Profit</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-2 text-sm font-medium text-dia-slate-700 transition-colors hover:bg-dia-slate-100 hover:text-dia-blue-900"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/get-involved#newsletter">Newsletter</Link>
            </Button>
            <Button variant="cta" size="sm" asChild>
              <Link href="/get-involved#donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-dia-slate-700 hover:bg-dia-slate-100 hover:text-dia-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dia-blue-500"
              aria-expanded={isOpen}
              aria-label="Main menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 border-t border-dia-slate-200 px-4 pb-3 pt-2">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-dia-slate-700 hover:bg-dia-slate-100 hover:text-dia-blue-900"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="mt-4 space-y-2 border-t border-dia-slate-200 pt-4">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href="/get-involved#newsletter" onClick={() => setIsOpen(false)}>
                Newsletter
              </Link>
            </Button>
            <Button variant="cta" size="sm" className="w-full" asChild>
              <Link href="/get-involved#donate" onClick={() => setIsOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
