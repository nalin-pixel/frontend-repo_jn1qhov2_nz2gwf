import HeroHeader from './components/HeroHeader';
import FallingApple from './components/FallingApple';
import LTribute from './components/LTribute';
import FooterCoda from './components/FooterCoda';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white">
      {/* Subtle vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <HeroHeader />

      {/* Sky area with falling apple and Ryuk catcher */}
      <section className="relative">
        {/* Cloudy bands */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-16 left-0 right-0 h-40 bg-gradient-to-b from-zinc-800/30 to-transparent blur-2xl" />
          <div className="absolute top-20 left-0 right-0 h-32 bg-gradient-to-b from-zinc-700/20 to-transparent blur-3xl" />
        </div>
        <div className="relative z-10">
          <FallingApple />
        </div>
      </section>

      <LTribute />
      <FooterCoda />
    </div>
  );
}
