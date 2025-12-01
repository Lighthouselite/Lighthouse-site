"use client";

import { motion } from "framer-motion";

const particles = [
  { top: "10%", left: "15%", size: "6px", delay: 0 },
  { top: "22%", left: "70%", size: "8px", delay: 4 },
  { top: "40%", left: "30%", size: "5px", delay: 2 },
  { top: "58%", left: "80%", size: "7px", delay: 6 },
  { top: "72%", left: "20%", size: "6px", delay: 1.5 },
  { top: "85%", left: "60%", size: "5px", delay: 3.5 }
];

export default function ParticlesBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {particles.map((p, idx) => (
        <motion.span
          key={idx}
          className="absolute rounded-full bg-lighthouse-lightBlue/60 blur-[1px]"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size
          }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      <motion.div
        className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-lighthouse-blue/30 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-40 right-[-6rem] h-96 w-96 rounded-full bg-lighthouse-lightBlue/25 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
