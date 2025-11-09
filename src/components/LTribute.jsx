import { motion } from 'framer-motion';

export default function LTribute() {
  const items = [
    {
      title: 'Lawliet (L)',
      text:
        'An eccentric prodigy who dismantles the impossible with logic, sweets, and sleepless observation. This space nods to his stark minimalism and piercing focus.'
    },
    {
      title: 'His Methods',
      text:
        'Barefoot reasoning. Oblique angles. Quiet rooms filled with data. A mind that moves like a shadow — slow, precise, inevitable.'
    },
    {
      title: 'The Rivalry',
      text:
        'A duel of names and gods, where apples tempt fate and every choice writes a line on the unseen page.'
    }
  ];

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-14">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-white"
      >
        In the shadow of the letter L
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-sm hover:bg-zinc-900/70 transition"
          >
            <h3 className="text-lg font-medium text-white/90">{it.title}</h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
