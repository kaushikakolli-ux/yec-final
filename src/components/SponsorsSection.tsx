import React from 'react';
import { SPONSORS_2026_2027 } from '../data/sponsorsData';
import { SponsorLogo } from './SponsorLogo';
import { Handshake, ArrowUpRight, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { triggerYecConfetti, playAudioBeep } from '../utils/confetti';

// Organic tilt angles for pinboard
const DEFAULT_TILT_ANGLES = [-2.5, 2.0, -3.0, 2.5, -1.8, 2.8];

export const SponsorsSection: React.FC = () => {
  const sponsors = SPONSORS_2026_2027;

  // Brand colors cycle
  const getBrandColor = (index: number) => {
    const cycle = index % 3;
    if (cycle === 0) return '#ff9900';
    if (cycle === 1) return '#39ae8a';
    return '#e31837';
  };

  const handleCardClick = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    playAudioBeep(480 + index * 60, 'triangle', 0.12);
    triggerYecConfetti({
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight
    });
  };

  return (
    <section
      id="sponsors-section"
      className="relative py-12 sm:py-16 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#eef1f5] text-zinc-900 border-t-4 border-b-4 border-black select-none"
    >
      {/* Decorative background ambient glows to eliminate dead white space */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-[#ff9900]/20 rounded-full blur-3xl pointer-events-none -z-0 animate-pulse-glow" />
      <div
        className="absolute bottom-0 left-0 w-[32rem] h-[32rem] bg-[#39ae8a]/20 rounded-full blur-3xl pointer-events-none -z-0 animate-pulse-glow"
        style={{ animationDelay: '2.5s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-[#e31837]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Subtle blueprint grid filling the background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle, #000000 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Header - Perfectly Centered, Well-Proportioned & Clean */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform">
            <Handshake className="w-3.5 h-3.5 text-[#ff9900]" />
            <span>2026/2027 Sponsorship Lineup</span>
            <Sparkles className="w-3.5 h-3.5 text-[#39ae8a]" />
          </div>

          <h2
            id="sponsors-section-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black leading-tight font-black text-center select-none"
          >
            <span className="letter-spring cursor-default">O</span>
            <span className="letter-spring cursor-default">u</span>
            <span className="letter-spring cursor-default">r</span>{' '}
            <span className="text-[#ff9900] letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>2</span>
            <span className="text-[#ff9900] letter-spring cursor-default" style={{ ['--rot' as string]: '3deg' }}>0</span>
            <span className="text-[#ff9900] letter-spring cursor-default" style={{ ['--rot' as string]: '-3deg' }}>2</span>
            <span className="text-[#ff9900] letter-spring cursor-default" style={{ ['--rot' as string]: '4deg' }}>6</span>
            <span className="letter-spring cursor-default">/</span>
            <span className="text-[#39ae8a] letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>2</span>
            <span className="text-[#39ae8a] letter-spring cursor-default" style={{ ['--rot' as string]: '3deg' }}>0</span>
            <span className="text-[#39ae8a] letter-spring cursor-default" style={{ ['--rot' as string]: '-3deg' }}>2</span>
            <span className="text-[#39ae8a] letter-spring cursor-default" style={{ ['--rot' as string]: '4deg' }}>7</span>{' '}
            <span className="text-[#e31837] letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>S</span>
            <span className="letter-spring cursor-default">p</span>
            <span className="letter-spring cursor-default">o</span>
            <span className="letter-spring cursor-default">n</span>
            <span className="letter-spring cursor-default">s</span>
            <span className="letter-spring cursor-default">o</span>
            <span className="letter-spring cursor-default">r</span>
            <span className="letter-spring cursor-default">s</span>
          </h2>

          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-zinc-700 max-w-2xl font-bold text-center leading-relaxed">
            Explore our valued corporate, industry, and community partners powering YEC 2026/2027.
          </p>

          {/* Centered Partner CTA Button */}
          <div className="mt-5 flex items-center justify-center">
            <a
              href="#packages-section"
              className="card-shine yec-btn-spring inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff9900] border-2 border-black text-black text-xs sm:text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffaa22] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#39ae8a] active:translate-y-0.5 cursor-pointer"
            >
              <span>Partner with Us</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Polaroid Pinboard Showcase - Pure Logo & Name Focus */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 p-5 sm:p-8 md:p-10 rounded-2xl border-[4px] border-black bg-[#f6f1e8] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
        >
          {/* Engineering drafting blueprint grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle, #000000 1.2px, transparent 1.2px), radial-gradient(circle, #000000 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px'
            }}
          />

          {sponsors.map((sponsor, index) => {
            const baseAngle = DEFAULT_TILT_ANGLES[index % DEFAULT_TILT_ANGLES.length] || 0;
            const brandColor = getBrandColor(index);

            return (
              <motion.div
                key={sponsor.id}
                id={`sponsor-polaroid-${index}`}
                initial={{ opacity: 0, y: 25, rotate: baseAngle }}
                whileInView={{ opacity: 1, y: 0, rotate: baseAngle }}
                viewport={{ once: true }}
                whileHover={{
                  rotate: 0,
                  scale: 1.05,
                  y: -10,
                  zIndex: 35,
                  transition: { type: 'spring', stiffness: 400, damping: 18 }
                }}
                whileTap={{
                  scale: 0.96,
                  rotate: -1,
                  transition: { duration: 0.1 }
                }}
                onClick={(e) => handleCardClick(e, index)}
                tabIndex={0}
                role="button"
                aria-label={`Sponsor: ${sponsor.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(e as unknown as React.MouseEvent, index);
                  }
                }}
                className="group relative bg-white border-[3px] border-black rounded-xl p-4 sm:p-5 pb-5 sm:pb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_var(--hover-color)] transition-all duration-300 cursor-pointer select-none flex flex-col justify-between"
                style={{
                  ['--hover-color' as string]: brandColor
                }}
              >
                {/* Washi Tape Strip at top */}
                <div
                  className="washi-tape"
                  style={{
                    backgroundColor: brandColor
                  }}
                />

                {/* Metallic Push Pin Accent with playful jiggle on hover */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black/10 flex items-center justify-center pointer-events-none z-30 animate-pin-jiggle">
                  <div className="w-2.5 h-2.5 rounded-full bg-black/85 shadow-sm" />
                </div>

                {/* Expanded Logo Showcase Frame - logo takes up the whole focus area */}
                <div className="card-shine relative w-full h-44 sm:h-52 md:h-56 rounded-lg overflow-hidden bg-white border-2 border-black/30 p-4 sm:p-6 flex items-center justify-center shadow-inner group-hover:border-black transition-colors duration-300">
                  <SponsorLogo
                    logoKey={sponsor.logo}
                    size="full"
                    className="max-h-full max-w-full group-hover:scale-108 transition-transform duration-300 drop-shadow-sm"
                  />

                  {/* Playful sparkle badge in corner on hover */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-black animate-spin" style={{ animationDuration: '6s' }} />
                  </div>
                </div>

                {/* Polaroid Chin: Only Sponsor Name (No extra wording, no box of info) */}
                <div className="mt-3 pt-1 flex items-center justify-center text-center">
                  <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-black leading-tight group-hover:text-[#ff9900] transition-colors truncate w-full">
                    {sponsor.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
