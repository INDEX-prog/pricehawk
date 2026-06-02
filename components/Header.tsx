"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header(): React.ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (section: string): void => {
    setIsMobileMenuOpen(false);
    if (typeof window !== "undefined" && (window as Window & { trackEvent?: (name: string, params: Record<string, string>) => void }).trackEvent) {
      (window as Window & { trackEvent: (name: string, params: Record<string, string>) => void }).trackEvent("navigation_click", { section });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900">PriceHawk</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              onClick={() => handleNavClick("features")}
              className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => handleNavClick("how-it-works")}
              className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              onClick={() => handleNavClick("pricing")}
              className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              onClick={() => handleNavClick("faq")}
              className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#pricing"
              className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="#pricing"
              onClick={() => {
                if (typeof window !== "undefined" && (window as Window & { trackCTAClick?: (name: string, location: string) => void }).trackCTAClick) {
                  (window as Window & { trackCTAClick: (name: string, location: string) => void }).trackCTAClick("start_free_trial", "header");
                }
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/25"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#features"
                onClick={() => handleNavClick("features")}
                className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => handleNavClick("how-it-works")}
                className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                onClick={() => handleNavClick("pricing")}
                className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                onClick={() => handleNavClick("faq")}
                className="text-slate-600 hover:text-primary-600 transition-colors font-medium"
              >
                FAQ
              </Link>
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href="#pricing"
                  className="text-center text-slate-600 hover:text-primary-600 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as Window & { trackCTAClick?: (name: string, location: string) => void }).trackCTAClick) {
                      (window as Window & { trackCTAClick: (name: string, location: string) => void }).trackCTAClick("start_free_trial", "mobile_header");
                    }
                  }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all text-center"
                >
                  Start Free Trial
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
