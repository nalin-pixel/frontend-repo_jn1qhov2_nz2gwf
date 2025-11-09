import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function FallingApple() {
  const controls = useAnimation();
  const [caught, setCaught] = useState(false);
  const ryukRef = useRef(null);
  const appleRef = useRef(null);

  // Trigger continuous falling loop
  useEffect(() => {
    let cancelled = false;
    async function loop() {
      while (!cancelled) {
        setCaught(false);
        await controls.start({
          y: ['-20%', '80%'],
          rotate: [0, 360],
          transition: { duration: 3.2, ease: 'easeIn', repeat: 0 }
        });
        // Small pause before resetting to the top
        await controls.start({ y: '-20%', transition: { duration: 0 } });
      }
    }
    loop();
    return () => { cancelled = true; };
  }, [controls]);

  // Detect catch when apple overlaps Ryuk mouth area
  useEffect(() => {
    const interval = setInterval(() => {
      if (!appleRef.current || !ryukRef.current) return;
      const a = appleRef.current.getBoundingClientRect();
      const r = ryukRef.current.getBoundingClientRect();
      const overlap = !(a.right < r.left || a.left > r.right || a.bottom < r.top || a.top > r.bottom);
      if (overlap && !caught) {
        setCaught(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [caught]);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh]">
      {/* Apple */}
      <motion.div
        ref={appleRef}
        animate={controls}
        className="absolute left-1/2 -translate-x-1/2 top-0"
      >
        <motion.div
          animate={caught ? { scale: [1, 0.95, 0.5, 0], rotate: [0, -10, -25, -30] } : {}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-red-500 to-red-700 shadow-[0_0_40px_rgba(220,38,38,0.45)] border border-red-900/40 relative"
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-amber-800 rounded-full" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-emerald-600 rounded-b-xl rotate-6" />
          <div className="absolute inset-0 rounded-full bg-white/10" />
        </motion.div>
      </motion.div>

      {/* Ryuk catcher */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <RyukSilhouette />
        {/* Mouth hitbox */}
        <div ref={ryukRef} className="w-20 h-10 -mt-10" />
      </div>
    </div>
  );
}

function RyukSilhouette() {
  return (
    <div className="relative w-64 md:w-80">
      {/* Head */}
      <div className="mx-auto w-36 h-36 md:w-44 md:h-44 bg-zinc-900 rounded-full shadow-[0_0_80px_rgba(59,130,246,0.25)] relative">
        {/* Eyes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2 w-4 h-4 bg-amber-200 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
        <div className="absolute top-1/2 left-1/2 translate-x-[70%] -translate-y-1/2 w-4 h-4 bg-amber-200 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
        {/* Spikes */}
        <div className="absolute -top-4 -left-2 w-8 h-8 rotate-12 bg-zinc-900 clip-path-triangle" />
        <div className="absolute -top-5 left-10 w-8 h-8 -rotate-6 bg-zinc-900 clip-path-triangle" />
        <div className="absolute -top-4 right-6 w-8 h-8 rotate-6 bg-zinc-900 clip-path-triangle" />
      </div>
      {/* Shoulders / wings */}
      <div className="mx-auto mt-[-14px] w-[18rem] h-16 bg-zinc-900/90 rounded-[40%] blur-[0.5px]" />
    </div>
  );
}
