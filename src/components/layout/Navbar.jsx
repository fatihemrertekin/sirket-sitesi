"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "@/content/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-primary-900 shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="container-custom flex items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          {/* Basit bir ev iconu - SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-500">
            <path d="M12 3L2 12H5V21H19V12H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          MİMAR<span className="text-accent-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide text-primary-200 hover:text-accent-500 transition-colors uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 py-3 bg-accent-500 text-white text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-primary-900 transition-colors"
            >
              TEKLİF ALIN
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-accent-500 transition-colors"
          aria-label="Menüyü aç/kapat"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-900 border-t border-primary-800 p-6 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-lg text-primary-200 hover:text-accent-500 transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-primary-800">
              <Link
                href="/iletisim"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-accent-500 text-white text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-primary-900 transition-colors"
              >
                TEKLİF ALIN
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
