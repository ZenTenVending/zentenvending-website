"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/smart-vending", label: "Smart Vending" },
  { href: "/pantry-service", label: "Pantry Service" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="ZenTen Vending"
              width={180}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:2144949985"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              214-494-9985
            </a>
            <Link
              href="/pantry-login"
              className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors duration-200"
            >
              Pantry Login
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors duration-200 cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-white/80 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <a
                href="tel:2144949985"
                className="block text-base font-medium text-white"
              >
                214-494-9985
              </a>
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors duration-200"
                >
                  Get Started
                </Link>
                <Link
                  href="/pantry-login"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors duration-200"
                >
                  Pantry Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
