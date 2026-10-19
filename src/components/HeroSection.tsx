import React from 'react';
import { HERO_ASSETS } from '../data/yecData';
import { triggerYecConfetti } from '../utils/confetti';
import { Trophy, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const handleLogoClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    triggerYecConfetti({
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight
    });
  };

  return (
    <section
      id="page-top"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-zinc-900 border-b-4 border-black"
    >
      {/* Background: User Provided Image from Kommodo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-bg.webp"
          alt="York Engineering Competition Hero Background"
          className="w-full h-full object-cover object-center scale-100 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Luminous glaze so the artwork is vividly visible while keeping text and logo crisp */}
        <div className="absolute inset-0 bg-white/55 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#f6f7f9]" />
      </div>

      {/* Playful Colorful Geometric Background Blobs with Smooth Drift */}
      <div className="absolute top-10 left-8 w-80 h-80 rounded-full bg-[#ff9900]/25 blur-3xl pointer-events-none -z-0 animate-blob-drift" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#39ae8a]/25 blur-3xl pointer-events-none -z-0 animate-blob-drift" style={{ animationDelay: '3s' }} />
      <div className="absolute -bottom-10 left-1/3 w-96 h-96 rounded-full bg-[#e31837]/20 blur-3xl pointer-events-none -z-0 animate-blob-drift" style={{ animationDelay: '6s' }} />

      {/* Floating playful decorative stickers with shine and hover transitions */}
      <motion.div
        className="hidden lg:block absolute top-36 left-12 animate-float-bob"
        whileHover={{ scale: 1.15, rotate: 0 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="card-shine px-3.5 py-1.5 rounded-full bg-[#ff9900] border-2 border-black text-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 -rotate-6 hover:shadow-[5px_5px_0px_0px_#39ae8a] transition-all duration-200 cursor-pointer">
          <Rocket className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          <span>Launch Your Ideas!</span>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute top-40 right-14 animate-float-bob"
        style={{ animationDelay: '1.5s' }}
        whileHover={{ scale: 1.15, rotate: 0 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="card-shine px-3.5 py-1.5 rounded-full bg-[#39ae8a] border-2 border-black text-white font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 rotate-6 hover:shadow-[5px_5px_0px_0px_#e31837] transition-all duration-200 cursor-pointer">
          <Trophy className="w-3.5 h-3.5 text-yellow-300 transition-transform duration-300 group-hover:scale-110" />
          <span>OEC 2027 Qualifier!</span>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* YEC Official Logo with vibrant celebration glow & bouncy spring physics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.08, rotate: [-1, 1.5, -1, 0] }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6 group cursor-pointer relative"
          onClick={handleLogoClick}
          title="Click the YEC Logo for a celebration!"
        >
          {/* Subtle colorful aura ring behind logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff9900]/40 via-[#39ae8a]/40 to-[#e31837]/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <img
            id="hero-yec-logo"
            src={HERO_ASSETS.logo}
            alt="York Engineering Competition Logo"
            className="w-44 sm:w-56 md:w-68 h-auto object-contain mx-auto filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_12px_24px_rgba(255,153,0,0.35)] transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Big Bold Headline in YEC Brand Colors with bouncy letter hops */}
        <motion.h1
          id="hero-main-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-black leading-tight sm:leading-none select-none"
        >
          <span className="text-[#ff9900] letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>Y</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '2deg' }}>o</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-2deg' }}>r</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '3deg' }}>k</span>{' '}
          <span className="text-[#39ae8a] letter-spring cursor-default" style={{ ['--rot' as string]: '5deg' }}>E</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-2deg' }}>n</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '2deg' }}>g</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-3deg' }}>i</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '2deg' }}>n</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-2deg' }}>e</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '3deg' }}>e</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-2deg' }}>r</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '2deg' }}>i</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-2deg' }}>n</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '3deg' }}>g</span>{' '}
          <span className="text-[#e31837] letter-spring cursor-default" style={{ ['--rot' as string]: '-5deg' }}>C</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '2deg' }}>o</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-3deg' }}>m</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '2deg' }}>p</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-2deg' }}>e</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '3deg' }}>t</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-2deg' }}>i</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '2deg' }}>t</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-3deg' }}>i</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '2deg' }}>o</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-2deg' }}>n</span>
        </motion.h1>
      </div>
    </section>
  );
};
