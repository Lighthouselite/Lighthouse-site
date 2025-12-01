"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navLinks";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-4 py-2 sm:px-6 ${
          scrolled
            ? "bg-slate-950/90 shadow-xl backdrop-blur-xl"
            : "bg-slate-950/50 shadow-lg backdrop-blur-lg"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-lighthouse-blue via-lighthouse-lightBlue to-lighthouse-yellow text-xs font-bold text-slate-950 shadow-glow-blue">
            LI
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-heading text-sm font-semibold text-white">
              Lighthouse Innovation
            </span>
            <span className="text-[11px] text-slate-400">
              LUMEN • EchoToken • Athena Labs
            </span>
          </div>
        </Link>

        <ul className="hidden sm:flex items-center gap-3 text-sm">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1 ${
                    active
                      ? "bg-white/10 text-lighthouse-lightBlue"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden sm:inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/20"
        >
          Contact
        </Link>

        <button
          className="sm:hidden text-slate-300 hover:text-white text-xl"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </motion.nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
