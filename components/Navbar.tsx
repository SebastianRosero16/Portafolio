"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";

const navKeys = [
  { key: "nav.home", href: "#inicio" },
  { key: "nav.about", href: "#sobre-mi" },
  { key: "nav.education", href: "#educacion" },
  { key: "nav.experience", href: "#experiencia" },
  { key: "nav.projects", href: "#proyectos" },
  { key: "nav.sports", href: "#deportes" },
  { key: "nav.references", href: "#referencias" },
  { key: "nav.goals", href: "#objetivos" },
  { key: "nav.contact", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, language, toggleTheme, toggleLanguage, t } = useApp();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10" style={{ backgroundColor: "#0a1628" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 min-w-0">
          {/* Logo */}
          <a href="#inicio" className="text-cyan-400 font-bold text-xl">SM</a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {navKeys.map((link) => (
              <a key={link.href} href={link.href} className="text-white hover:text-cyan-400 text-sm font-medium transition-colors">
                {t(link.key)}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="text-white hover:text-cyan-400 transition-colors p-1"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-cyan-400 text-xs font-bold border border-white/30 rounded px-2 py-1 transition-colors"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile: controls + hamburger */}
          <div className="md:hidden flex items-center gap-2 shrink-0">
            <button onClick={toggleTheme} className="text-white p-1 shrink-0" aria-label="Toggle theme">
              {theme === "light" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button onClick={toggleLanguage} className="text-white text-xs font-bold border border-white/30 rounded px-2 py-1 shrink-0">
              {language === "es" ? "EN" : "ES"}
            </button>
            <button className="text-white focus:outline-none shrink-0" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-3" style={{ backgroundColor: "#0a1628" }}>
          {navKeys.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-white hover:text-cyan-400 text-sm font-medium transition-colors">
              {t(link.key)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
