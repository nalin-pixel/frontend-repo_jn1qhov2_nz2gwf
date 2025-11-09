import { motion } from 'framer-motion';

export default function HeroHeader() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.03]">
        <span className="font-serif text-[40vw] leading-none tracking-tight">L</span>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-white"
        >
          Death Note • Tribute
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-4 text-base md:text-lg text-zinc-300 max-w-2xl mx-auto"
        >
          A moody micro‑experience inspired by Lawliet (L) — the world’s greatest detective —
          with a falling apple for Ryuk to crave.
        </motion.p>
      </div>
    </section>
  );
}
