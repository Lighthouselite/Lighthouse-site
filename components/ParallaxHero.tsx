"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

type CTA = {
  label: string;
  href: string;
};

interface ParallaxHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
}

export default function ParallaxHero({
  badge,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary
}: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yForeground = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="section-shell pt-24 pb-16 md:pb-24">
        <motion.div
          style={{ y: yBackground }}
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(86,192,224,0.7),transparent_60%),radial-gradient(circle_at_80%_0,rgba(253,203,47,0.4),transparent_50%)] opacity-80"
        />

        <motion.div
          style={{ y: yMid }}
          className="pointer-events-none absolute right-[-6rem] top-20 -z-10 hidden h-80 w-80 rounded-[3rem] border border-lighthouse-lightBlue/40 bg-gradient-to-b from-white/10 via-lighthouse-blue/30 to-slate-950/90 shadow-glow-blue md:block"
        >
          <div className="absolute inset-x-8 bottom-6 h-1/2 rounded-[2rem] border border-lighthouse-lightBlue/40 bg-gradient-to-t from-lighthouse-blue/60 via-slate-950/60 to-transparent shadow-inner" />
          <div className="absolute left-1/2 top-6 h-40 w-1 -translate-x-1/2 bg-gradient-to-b from-lighthouse-yellow via-white to-transparent" />
        </motion.div>

        <motion.div
          style={{ y: yForeground }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-2xl"
        >
          {badge && <p className="badge-soft">{badge}</p>}
          <h1 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-slate-200 md:text-base">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {ctaPrimary && (
              <Link href={ctaPrimary.href} className="btn-primary">
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="btn-secondary">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
