import React from 'react';
import { PACKAGES, HERO_ASSETS } from '../data/yecData';
import { PackageItem } from '../types';
import { FileText, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section
      id="packages-section"
      className="relative min-h-[550px] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 14, 22, 0.78), rgba(10, 14, 22, 0.78)), url("${HERO_ASSETS.packagesBg}")`
      }}
    >
      {/* Background ambient colorful glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#ff9900]/20 blur-3xl pointer-events-none -z-0 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#39ae8a]/20 blur-3xl pointer-events-none -z-0 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Title with smooth scroll entrance & letter springs */}
        <motion.h2
          id="packages-main-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl uppercase tracking-wider text-white mb-6 drop-shadow-md font-black select-none"
        >
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>P</span>
          <span className="text-[#ff9900] letter-spring cursor-default" style={{ ['--rot' as string]: '3deg' }}>A</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-3deg' }}>C</span>
          <span className="text-[#39ae8a] letter-spring cursor-default" style={{ ['--rot' as string]: '4deg' }}>K</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-2deg' }}>A</span>
          <span className="text-[#e31837] letter-spring cursor-default" style={{ ['--rot' as string]: '3deg' }}>G</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>E</span>
          <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '3deg' }}>S</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          id="packages-description-text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Interested in partnering with YEC? Check out these specific packages to get to know us, our goals and the future!
        </motion.p>

        {/* 3 Pill Action Buttons in YEC Brand Colors */}
        <div
          id="packages-buttons-container"
          className="flex flex-wrap items-center justify-center gap-5 w-full"
        >
          {PACKAGES.map((pkg, idx) => {
            const btnColorTheme =
              idx === 0
                ? {
                    accent: '#ff9900',
                    shadow: 'shadow-[5px_5px_0px_0px_#ff9900]',
                    hoverBg: 'hover:bg-[#ff9900]',
                    hoverText: 'hover:text-black',
                    hoverShadow: 'hover:shadow-[7px_7px_0px_0px_#ffffff]',
                    linkHover: 'hover:text-[#ff9900]',
                    iconColor: 'text-[#ff9900]'
                  }
                : idx === 1
                ? {
                    accent: '#39ae8a',
                    shadow: 'shadow-[5px_5px_0px_0px_#39ae8a]',
                    hoverBg: 'hover:bg-[#39ae8a]',
                    hoverText: 'hover:text-white',
                    hoverShadow: 'hover:shadow-[7px_7px_0px_0px_#ffffff]',
                    linkHover: 'hover:text-[#39ae8a]',
                    iconColor: 'text-[#39ae8a]'
                  }
                : {
                    accent: '#e31837',
                    shadow: 'shadow-[5px_5px_0px_0px_#e31837]',
                    hoverBg: 'hover:bg-[#e31837]',
                    hoverText: 'hover:text-white',
                    hoverShadow: 'hover:shadow-[7px_7px_0px_0px_#ffffff]',
                    linkHover: 'hover:text-[#e31837]',
                    iconColor: 'text-[#e31837]'
                  };

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: 0.25 + idx * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex flex-col items-center"
              >
                <button
                  id={`package-btn-${pkg.id}`}
                  onClick={() => onSelectPackage(pkg)}
                  className={`card-shine yec-btn-spring px-8 py-4 rounded-full bg-white text-zinc-950 font-black text-base tracking-wider border-[3px] border-black ${btnColorTheme.shadow} ${btnColorTheme.hoverBg} ${btnColorTheme.hoverText} hover:-translate-y-1.5 ${btnColorTheme.hoverShadow} active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex items-center gap-2.5 cursor-pointer`}
                >
                  <FileText className={`w-5 h-5 ${btnColorTheme.iconColor} group-hover:text-inherit transition-colors`} />
                  <span>{pkg.title}</span>
                </button>
                <a
                  href={pkg.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs text-zinc-300 ${btnColorTheme.linkHover} mt-2.5 flex items-center gap-1 font-bold underline underline-offset-4 cursor-pointer transition-colors`}
                >
                  <span>Direct PDF Link</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
