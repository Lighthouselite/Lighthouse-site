"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/lib/navLinks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed right-0 top-0 z-50 h-screen w-[78%] max-w-xs glass-card border-l border-slate-700/50 bg-slate-900/70 backdrop-blur-xl shadow-xl shadow-black/50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-700/40">
              <span className="font-heading text-lg text-white">Menu</span>
              <button
                onClick={onClose}
                className="text-slate-300 hover:text-white text-xl"
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>

            <motion.ul
              className="mt-4 flex flex-col gap-1 px-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06 }
                }
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-xl px-4 py-3 text-base text-slate-200 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-6 px-4 pb-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="btn-primary w-full text-center block"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
