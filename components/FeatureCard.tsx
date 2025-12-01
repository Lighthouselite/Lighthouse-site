"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  tag?: string;
  icon?: ReactNode;
}

export default function FeatureCard({
  title,
  description,
  tag,
  icon
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01
      }}
      whileTap={{ scale: 0.99 }}
      className="glass-card flex h-full flex-col rounded-3xl p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-base font-semibold text-white md:text-lg">
          {title}
        </h3>
        {icon && <div className="text-lighthouse-lightBlue">{icon}</div>}
      </div>
      {tag && (
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-lighthouse-lightBlue">
          {tag}
        </p>
      )}
      <p className="mt-3 text-sm text-slate-200">{description}</p>
    </motion.div>
  );
}
