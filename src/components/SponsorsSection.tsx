import React, { useState } from 'react';
import { SPONSORS_2026_2027 } from '../data/sponsorsData';
import { Sponsor } from '../types';
import { SponsorLogo } from './SponsorLogo';
import { SponsorModal } from './SponsorModal';
import { Handshake, ArrowUpRight, Sparkles, Star, Calendar, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { playAudioBeep } from '../utils/confetti';

// Organic tilt angles for pinboard
const DEFAULT_TILT_ANGLES = [-2.5, 2.0, -3.0, 2.5, -1.8, 2.8, -2.0, 2.2];

export const SponsorsSection: React.FC = () => {
  const sponsors = SPONSORS_2026_2027;
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  // Brand colors cycle
  const getBrandColor = (index: number) => {
    const cycle = index % 3;
    if (cycle === 0) return '#ff9900';
    if (cycle === 1) return '#39ae8a';
    return '#e31837';
  };

  const currentIndex = selectedSponsor ? sponsors.findIndex(s => s.id === selectedSponsor.id) : -1;
  const handleNext = () => {
    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % sponsors.length;
      setSelectedSponsor(sponsors[nextIndex]);
    }
  };
  const handlePrev = () => {
    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + sponsors.length) % sponsors.length;
      setSelectedSponsor(sponsors[prevIndex]);
    }
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
            Explore our valued industry partners and student engineering organizations powering YEC 2026/2027. Click any card to read their story!
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

        {/* Polaroid Pinboard Showcase - Pure Logo & Name Focus + Rich Modals */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7 p-5 sm:p-7 md:p-8 rounded-2xl border-[4px] border-black bg-[#f6f1e8] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
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
            const isExternal = Boolean(sponsor.websiteUrl && sponsor.websiteUrl.startsWith('http'));

            return (
              <motion.div
                key={sponsor.id}
                id={`sponsor-polaroid-${index}`}
                initial={{ opacity: 0, y: 25, rotate: baseAngle }}
                whileInView={{ opacity: 1, y: 0, rotate: baseAngle }}
                viewport={{ once: true }}
                whileHover={{
                  rotate: 0,
                  scale: 1.04,
                  y: -8,
                  zIndex: 35,
                  transition: { type: 'spring', stiffness: 400, damping: 18 }
                }}
                whileTap={{
                  scale: 0.97,
                  rotate: -1,
                  transition: { duration: 0.1 }
                }}
                onClick={() => {
                  playAudioBeep(480 + index * 50, 'triangle', 0.12);
                  setSelectedSponsor(sponsor);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedSponsor(sponsor);
                  }
                }}
                aria-label={`View sponsor details for ${sponsor.name}`}
                className="group relative bg-white border-[3px] border-black rounded-xl p-4 sm:p-4.5 pb-4.5 sm:pb-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_var(--hover-color)] transition-all duration-300 cursor-pointer select-none flex flex-col justify-between"
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

                {/* Year Established Badge in Corner if available */}
                {sponsor.yearEstablished && (
                  <div className="absolute top-3.5 right-3.5 z-20">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-black px-2 py-0.5 rounded-md bg-black text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      <Calendar className="w-2.5 h-2.5 text-[#ff9900]" />
                      <span>Est. {sponsor.yearEstablished}</span>
                    </span>
                  </div>
                )}

                {/* Expanded Logo Showcase Frame - logo takes up the whole focus area */}
                <div className="card-shine relative w-full h-40 sm:h-44 md:h-48 rounded-lg overflow-hidden bg-white border-2 border-black/30 p-4 sm:p-5 flex items-center justify-center shadow-inner group-hover:border-black transition-colors duration-300 mt-2">
                  <SponsorLogo
                    logoKey={sponsor.logo}
                    size="full"
                    className="max-h-full max-w-full group-hover:scale-106 transition-transform duration-300 drop-shadow-sm"
                  />

                  {/* Playful sparkle badge in corner on hover */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-black animate-spin" style={{ animationDuration: '6s' }} />
                  </div>
                </div>

                {/* Polaroid Chin: Sponsor Name, Details Prompt & Website Jump */}
                <div className="mt-3 pt-1 flex flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-1.5">
                    <h3 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-black leading-tight group-hover:text-[#ff9900] transition-colors line-clamp-2">
                      {sponsor.name}
                    </h3>
                  </div>

                  <p className="text-[11px] font-medium text-zinc-600 line-clamp-2 leading-tight">
                    {sponsor.industry}
                  </p>

                  <div className="mt-1 pt-1.5 border-t border-zinc-200 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-black group-hover:text-[#ff9900] transition-colors text-[11px] uppercase tracking-wider">
                      <Info className="w-3 h-3 text-[#ff9900]" />
                      <span>About Club</span>
                    </span>

                    {isExternal && (
                      <a
                        href={sponsor.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-0.5 text-[10px] font-bold text-zinc-600 hover:text-black hover:underline"
                        title="Visit official website"
                      >
                        <span>Website</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Detail Modal for Sponsors & Engineering Clubs */}
      <SponsorModal
        sponsor={selectedSponsor}
        onClose={() => setSelectedSponsor(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
