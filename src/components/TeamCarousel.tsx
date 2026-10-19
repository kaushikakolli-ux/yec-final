import React, { useState } from 'react';
import { ALL_TEAM_MEMBERS } from '../data/yecData';
import { User, Sparkles, ChevronRight, Pin, Users } from 'lucide-react';
import { TeamMemberModal } from './TeamMemberModal';
import { motion } from 'motion/react';
import { playAudioBeep } from '../utils/confetti';

export const TeamCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null);

  const teamMembers = ALL_TEAM_MEMBERS;
  const marqueeMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  const handleNextMember = () => {
    if (selectedMemberIndex === null) return;
    setSelectedMemberIndex((prev) => ((prev ?? 0) + 1) % teamMembers.length);
  };

  const handlePrevMember = () => {
    if (selectedMemberIndex === null) return;
    setSelectedMemberIndex((prev) => ((prev ?? 0) - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleMemberSelect = (e: React.MouseEvent, index: number) => {
    playAudioBeep(520, 'sine', 0.1);
    setSelectedMemberIndex(index);
  };

  const currentSelectedMember = selectedMemberIndex !== null ? teamMembers[selectedMemberIndex] : null;

  const getBrandColor = (index: number) => {
    const cycle = index % 3;
    if (cycle === 0) return '#ff9900';
    if (cycle === 1) return '#39ae8a';
    return '#e31837';
  };

  return (
    <section
      id="team-section"
      className="relative py-12 sm:py-16 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#eef1f5] text-zinc-900 border-t-4 border-b-4 border-black select-none"
    >
      {/* Decorative background glow elements to fill dead white space */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#ff9900]/20 rounded-full blur-3xl pointer-events-none -z-0 animate-pulse-glow" />
      <div
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#39ae8a]/20 rounded-full blur-3xl pointer-events-none -z-0 animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-[#e31837]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Engineering dot matrix pattern filling background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle, #000000 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative z-10"
      >
        {/* Section Header - Centered, Well-Proportioned & Clean */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform">
            <Users className="w-3.5 h-3.5 text-[#ff9900]" />
            <span>Organizing Committee & Leads</span>
            <Sparkles className="w-3.5 h-3.5 text-[#39ae8a]" />
          </div>

          <h2
            id="team-section-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black leading-tight font-black text-center"
          >
            <span className="text-[#ff9900] letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>M</span>
            <span className="letter-spring cursor-default">e</span>
            <span className="letter-spring cursor-default">e</span>
            <span className="letter-spring cursor-default">t</span>{' '}
            <span className="letter-spring cursor-default">t</span>
            <span className="letter-spring cursor-default">h</span>
            <span className="letter-spring cursor-default">e</span>{' '}
            <span className="text-[#39ae8a] letter-spring cursor-default" style={{ ['--rot' as string]: '4deg' }}>T</span>
            <span className="letter-spring cursor-default">e</span>
            <span className="letter-spring cursor-default">a</span>
            <span className="text-[#e31837] letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>m</span>
            <span className="letter-spring cursor-default">!</span>
          </h2>

          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-zinc-700 max-w-2xl font-bold text-center leading-relaxed">
            The dedicated Lassonde Engineering Society executives and directors leading YEC 2026/2027.
          </p>
        </div>

        {/* Compact Continuous Horizontal Scrolling Marquee with tinier cards */}
        <div className="relative w-full overflow-hidden my-2">
          {/* Edge gradient masks for smooth transition */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#eef1f5] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#eef1f5] to-transparent z-10" />

          {/* Marquee Track */}
          <div
            className="animate-marquee-continuous flex items-center py-4 select-none"
            style={{
              animationPlayState: isPaused || selectedMemberIndex !== null ? 'paused' : 'running',
              animationDuration: '28s',
              width: 'max-content'
            }}
          >
            {marqueeMembers.map((member, index) => {
              const actualIndex = index % teamMembers.length;
              const brandColor = getBrandColor(actualIndex);
              const topBarBg =
                actualIndex % 3 === 0
                  ? 'bg-amber-100/90 border-b border-black'
                  : actualIndex % 3 === 1
                  ? 'bg-emerald-100/90 border-b border-black'
                  : 'bg-rose-100/90 border-b border-black';
              const hoverShadow =
                actualIndex % 3 === 0
                  ? 'hover:shadow-[6px_6px_0px_0px_#ff9900]'
                  : actualIndex % 3 === 1
                  ? 'hover:shadow-[6px_6px_0px_0px_#39ae8a]'
                  : 'hover:shadow-[6px_6px_0px_0px_#e31837]';
              const nameHoverColor =
                actualIndex % 3 === 0
                  ? 'group-hover:text-[#ff9900]'
                  : actualIndex % 3 === 1
                  ? 'group-hover:text-[#39ae8a]'
                  : 'group-hover:text-[#e31837]';

              return (
                <div
                  key={`team-marquee-${member.name}-${index}`}
                  id={`team-card-${actualIndex}-${index}`}
                  onClick={(e) => handleMemberSelect(e, actualIndex)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View dossier for ${member.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleMemberSelect(e as unknown as React.MouseEvent, actualIndex);
                    }
                  }}
                  className={`card-shine mx-2.5 sm:mx-3 w-40 sm:w-44 flex-shrink-0 bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${hoverShadow} hover:-translate-y-2 hover:scale-105 transition-all duration-200 cursor-pointer overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#ff9900] active:translate-y-0`}
                >
                  {/* Card Top Bar with Category/Role pill */}
                  <div className={`px-2.5 py-1.5 flex items-center justify-between ${topBarBg}`}>
                    <span
                      className="px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider text-black border border-black shadow-[0.5px_0.5px_0px_0px_rgba(0,0,0,1)] truncate max-w-[85px]"
                      style={{
                        backgroundColor:
                          brandColor === '#ff9900' ? '#fed7aa' : brandColor === '#39ae8a' ? '#a7e4d2' : '#fecaca'
                      }}
                    >
                      {member.role.includes('Chair') ? 'Chair' : member.role.includes('VC') ? 'VC' : 'Lead'}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-zinc-600">
                      2026/27
                    </span>
                  </div>

                  {/* Card Body: Compact Photo, Name, and Role */}
                  <div className="p-2.5 flex flex-col items-center text-center">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-zinc-100 border border-black/25 group-hover:border-black/60 transition-all duration-200 shadow-inner">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-100">
                          <User className="w-10 h-10 text-zinc-400" />
                        </div>
                      )}
                    </div>

                    <h3 className={`mt-2 font-display text-sm sm:text-base font-black uppercase text-black leading-tight truncate w-full ${nameHoverColor} transition-colors`}>
                      {member.name}
                    </h3>

                    <p className="mt-0.5 text-[10px] sm:text-[11px] font-bold text-zinc-600 truncate w-full">
                      {member.role}
                    </p>

                    <div className="mt-2 w-full pt-1.5 border-t border-zinc-200 flex items-center justify-between text-[10px] font-bold text-zinc-500 group-hover:text-black transition-colors">
                      <span className="flex items-center gap-1">
                        <Pin className="w-2.5 h-2.5 text-[#ff9900]" />
                        <span>Dossier</span>
                      </span>
                      <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Member Modal */}
      <TeamMemberModal
        member={currentSelectedMember}
        onClose={() => setSelectedMemberIndex(null)}
        onNext={handleNextMember}
        onPrev={handlePrevMember}
      />
    </section>
  );
};
