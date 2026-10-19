import React, { useState, useEffect } from 'react';
import { HERO_ASSETS, COMPETITIONS, ABOUT_PHOTOS } from '../data/yecData';
import { Competition } from '../types';
import { Award, ArrowRight, ChevronLeft, ChevronRight, Shuffle, Camera, Sparkles, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { playCameraShutterSound } from '../utils/confetti';

interface AboutAndScheduleProps {
  onSelectCompetition: (comp: Competition) => void;
}

export const AboutAndSchedule: React.FC<AboutAndScheduleProps> = ({ onSelectCompetition }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const week1Comps = COMPETITIONS.filter((c) => c.week === 1);
  const week2Comps = COMPETITIONS.filter((c) => c.week === 2);

  const activePhoto = ABOUT_PHOTOS[currentPhotoIndex] || ABOUT_PHOTOS[0];

  const triggerSnap = (newIndex: number, withSound = false) => {
    setIsFlashing(true);
    if (withSound) {
      playCameraShutterSound();
    }
    setCurrentPhotoIndex(newIndex);
    setTimeout(() => {
      setIsFlashing(false);
    }, 380);
  };

  const handleNext = () => {
    triggerSnap((currentPhotoIndex + 1) % ABOUT_PHOTOS.length, true);
  };

  const handlePrev = () => {
    triggerSnap((currentPhotoIndex - 1 + ABOUT_PHOTOS.length) % ABOUT_PHOTOS.length, true);
  };

  const handleShuffle = () => {
    const nextIdx = (currentPhotoIndex + 1 + Math.floor(Math.random() * (ABOUT_PHOTOS.length - 1))) % ABOUT_PHOTOS.length;
    triggerSnap(nextIdx, true);
  };

  // Auto-roll pictures every 4 seconds continuously without getting blocked by cursor
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setIsFlashing(true);
      setCurrentPhotoIndex((prev) => (prev + 1) % ABOUT_PHOTOS.length);
      setTimeout(() => {
        setIsFlashing(false);
      }, 360);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isPlaying, currentPhotoIndex]);

  const tapeColors = ['#ff9900', '#39ae8a', '#e31837', '#ff9900', '#39ae8a', '#e31837'];

  return (
    <section id="about-yec" className="relative bg-[#f6f7f9] text-[#121620] py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative top ribbon banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto mb-12"
      >
        <img
          src={HERO_ASSETS.yecBanner}
          alt="YEC Graphic Banner"
          className="w-full h-auto max-h-16 object-cover rounded-md shadow-sm border border-zinc-200"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* WHAT IS Y E C ? Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left Column: Heading & Detailed Description */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Boxed Title with bold border and brand colors */}
            <motion.div
              id="what-is-yec-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="border-[6px] sm:border-[10px] border-black bg-gradient-to-r from-[#ff9900]/15 via-[#39ae8a]/15 to-[#e31837]/15 p-6 sm:p-8 rounded-lg mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-center select-none"
            >
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] uppercase tracking-wider text-black leading-none text-center w-full font-black">
                <span className="letter-spring" style={{ ['--rot' as string]: '-3deg' }}>W</span>
                <span className="letter-spring" style={{ ['--rot' as string]: '2deg' }}>H</span>
                <span className="letter-spring" style={{ ['--rot' as string]: '-2deg' }}>A</span>
                <span className="letter-spring" style={{ ['--rot' as string]: '3deg' }}>T</span>{' '}
                <span className="letter-spring" style={{ ['--rot' as string]: '-2deg' }}>I</span>
                <span className="letter-spring" style={{ ['--rot' as string]: '2deg' }}>S</span>{' '}
                <span className="text-[#ff9900] letter-spring cursor-default" style={{ ['--rot' as string]: '-6deg' }}>Y</span>{' '}
                <span className="text-[#39ae8a] letter-spring cursor-default" style={{ ['--rot' as string]: '6deg' }}>E</span>{' '}
                <span className="text-[#e31837] letter-spring cursor-default" style={{ ['--rot' as string]: '-6deg' }}>C</span>{' '}
                <span className="letter-spring cursor-default" style={{ ['--rot' as string]: '4deg' }}>?</span>
              </h2>
            </motion.div>

            {/* Content paragraph card with mint/sage tint and bold border */}
            <motion.div
              id="what-is-yec-description-box"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="border-[4px] sm:border-[6px] border-black bg-gradient-to-br from-[#a7e4d2]/85 via-[#a7e4d2]/70 to-[#fed7aa]/50 p-6 sm:p-8 rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-1 flex flex-col justify-center"
            >
              <p className="text-base sm:text-lg leading-relaxed text-zinc-950 font-bold">
                First established in 2008, the York Engineering Competition (YEC) is one of the largest and most important events led by the Lassonde Engineering Society. Offered annually to all our 4.7k students, we strive to challenge our participants to push the boundaries of Engineering by showcasing their creativity and critical thinking in one of our seven competitions.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-950 font-bold mt-4">
                Winners of the YEC qualify for the Ontario Engineering Competition (OEC) to represent York Engineering at a provincial level. Students who win OEC can then qualify for the Canadian Engineering Competition (CEC). This competition challenges students to practice and develop practical engineering skills, while gaining valuable feedback and learning from industry professionals and professors.
              </p>

              {/* Pathway Pills with responsive hover transitions */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-black/20">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_#ff9900] hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <Award className="w-3.5 h-3.5 text-[#ff9900]" />
                  YEC 2026
                </span>
                <span className="text-sm font-bold text-black">➔</span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#39ae8a] text-white text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <Award className="w-3.5 h-3.5" />
                  OEC Ontario
                </span>
                <span className="text-sm font-bold text-black">➔</span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e31837] text-white text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                  <Award className="w-3.5 h-3.5" />
                  CEC Canada
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Retro Polaroid Camera with Photo Ejecting Upwards from the Top */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col h-full select-none"
          >
            {/* 1. The Ejected Polaroid Instant Print (Emerges UPWARDS out of the camera) */}
            <div className="relative flex-1 flex flex-col justify-between bg-white border-x-[4px] border-t-[4px] sm:border-x-[5px] sm:border-t-[5px] border-black rounded-t-2xl p-3 sm:p-4 pb-2 shadow-[6px_0px_0px_0px_rgba(0,0,0,1)] overflow-hidden z-10">
              {/* Top Washi Tape Accent */}
              <div
                className="washi-tape"
                style={{ backgroundColor: tapeColors[currentPhotoIndex % tapeColors.length] }}
              />

              {/* Pin Icon */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black/10 flex items-center justify-center pointer-events-none z-30">
                <div className="w-2 h-2 rounded-full bg-black/80 shadow-sm" />
              </div>

              {/* Camera Flash Screen Overlay */}
              {isFlashing && (
                <div className="absolute inset-0 bg-white/90 z-40 pointer-events-none animate-camera-flash" />
              )}

              {/* Photo Area with Eject-from-Top Animation */}
              <div className="relative w-full flex-1 min-h-[360px] sm:min-h-[420px] lg:min-h-[440px] xl:min-h-[480px] rounded-sm overflow-hidden bg-zinc-950 border-2 border-black/40 shadow-inner group">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activePhoto.id}
                    initial={{ y: 160, opacity: 0.2, scale: 0.94 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -70, opacity: 0, scale: 0.96 }}
                    transition={{ type: 'spring', damping: 22, stiffness: 170 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Authentic Polaroid Chemical Development Transition (Dark milky emulsion -> vivid color bloom) */}
                    <motion.div
                      initial={{
                        filter: 'contrast(1.9) brightness(0.08) saturate(0.02) blur(6px)'
                      }}
                      animate={{
                        filter: [
                          'contrast(1.9) brightness(0.08) saturate(0.02) blur(6px)',
                          'contrast(1.6) brightness(0.24) saturate(0.18) blur(3.5px)',
                          'contrast(1.25) brightness(0.68) saturate(0.65) blur(1px)',
                          'contrast(1) brightness(1) saturate(1) blur(0px)'
                        ]
                      }}
                      transition={{
                        duration: 2.3,
                        times: [0, 0.25, 0.62, 1],
                        ease: 'easeInOut'
                      }}
                      className="w-full h-full relative"
                    >
                      <img
                        id={`yec-polaroid-photo-${currentPhotoIndex}`}
                        src={activePhoto.url}
                        alt="YEC Instant Photo"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      {/* Chemical Opacifier Paste Layer (Dissolves as exposure neutralizes) */}
                      <motion.div
                        initial={{ opacity: 0.92 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 2.1, ease: 'easeOut', delay: 0.15 }}
                        className="absolute inset-0 bg-[#0a0e17] pointer-events-none mix-blend-color-burn"
                      />

                      {/* Subtle Warm Film Tint Blooming */}
                      <motion.div
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
                        className="absolute inset-0 bg-amber-500/10 pointer-events-none mix-blend-overlay"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Overlaid minimal counter pill with developing pulse */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-md pointer-events-none z-20">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: tapeColors[currentPhotoIndex % tapeColors.length] }}
                  />
                  <span>0{currentPhotoIndex + 1} / 0{ABOUT_PHOTOS.length}</span>
                </div>

                {/* Click Photo to snap next */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute inset-0 w-full h-full cursor-pointer z-20"
                  aria-label="Click to snap and eject next instant photo"
                  title="Click to snap next photo"
                />
              </div>

              {/* Bottom Chin: Cute handwritten caption */}
              <div className="pt-2 px-1 flex items-center justify-between z-20">
                <span className="font-display text-sm sm:text-base font-bold italic tracking-wide text-zinc-800">
                  yec instant film · memory 0{currentPhotoIndex + 1}
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                  ejected ↑
                </span>
              </div>
            </div>

            {/* 2. The Polaroid Instant Camera Body (Anchored at the bottom with top ejection slot) */}
            <div className={`relative -mt-1 bg-[#faf7f2] border-[4px] sm:border-[5px] border-black rounded-b-2xl px-4 pt-2.5 pb-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 ${
              isFlashing ? 'animate-camera-recoil' : ''
            }`}>
              {/* Top Film Dispenser Slot where the photo shoots out from */}
              <div className="relative w-full h-3 bg-zinc-950 rounded-xs border-x-2 border-t-2 border-black mb-2 flex items-center justify-start overflow-hidden px-0.5">
                <div
                  key={`progress-${currentPhotoIndex}-${isPlaying}`}
                  className="h-1 bg-gradient-to-r from-[#ff9900] via-[#39ae8a] to-[#e31837] rounded-full shadow-[0_0_8px_#ff9900]"
                  style={{
                    width: isPlaying ? '100%' : '0%',
                    transition: isPlaying ? 'width 4000ms linear' : 'none'
                  }}
                />
              </div>

              {/* Camera Deck: Rainbow Stripe & Center Lens */}
              <div className="relative flex items-center justify-between gap-3 py-1">
                {/* 3 YEC Rainbow Stripes running across */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col h-4 z-0 pointer-events-none opacity-90">
                  <div className="flex-1 bg-[#ff9900]" />
                  <div className="flex-1 bg-[#39ae8a]" />
                  <div className="flex-1 bg-[#e31837]" />
                </div>

                {/* Left: Viewfinder & Ready LED */}
                <div className="relative z-10 flex items-center gap-2 bg-[#faf7f2]/90 backdrop-blur-xs p-1 rounded-lg border border-black/20">
                  <div className="w-6 h-6 rounded-md bg-zinc-900 border-2 border-black relative overflow-hidden flex items-center justify-center shadow-inner">
                    <div className="w-3.5 h-3.5 border border-white/40 rounded-xs" />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-white/20 transform rotate-45 pointer-events-none" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
                    <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-700 uppercase">
                      {isPlaying ? 'AUTO 4S' : 'PAUSED'}
                    </span>
                  </div>
                </div>

                {/* Center: Concentric Camera Lens */}
                <div className="relative z-10 w-13 h-13 sm:w-15 sm:h-15 rounded-full border-[3px] border-black bg-zinc-900 shadow-md flex items-center justify-center shrink-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-zinc-400 bg-zinc-800 flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-zinc-950 border border-black flex items-center justify-center relative overflow-hidden">
                      <div className="w-2 h-2 rounded-full bg-cyan-400/30 blur-xs" />
                      <div className="w-1 h-1 rounded-full bg-white shadow-xs" />
                      <div className="absolute top-0.5 left-1 w-3 h-1 rounded-full border-t border-white/60 transform -rotate-45" />
                    </div>
                  </div>
                </div>

                {/* Right: Xenon Flash Window & Big Red Shutter Button */}
                <div className="relative z-10 flex items-center gap-2 bg-[#faf7f2]/90 backdrop-blur-xs p-1 rounded-lg border border-black/20">
                  {/* Xenon Flash Cube */}
                  <div className={`relative w-6 h-6 sm:w-7 sm:h-7 rounded-md border-2 border-black flex items-center justify-center transition-colors ${
                    isFlashing ? 'bg-amber-100 shadow-[0_0_18px_#ff9900]' : 'bg-zinc-200'
                  }`}>
                    <div className="w-3.5 h-3.5 bg-zinc-400/40 rounded-xs grid grid-cols-2 gap-0.5 p-0.5">
                      <div className="bg-white/60 rounded-xs" />
                      <div className="bg-white/60 rounded-xs" />
                      <div className="bg-white/60 rounded-xs" />
                      <div className="bg-white/60 rounded-xs" />
                    </div>
                    {isFlashing && (
                      <div className="absolute inset-0 bg-white rounded-sm animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Big Red Clickable SNAP Shutter Button */}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="yec-btn-spring inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#e31837] hover:bg-[#ff1e38] text-white font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                    title="Press to snap and eject photo from top!"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>SNAP!</span>
                  </button>
                </div>
              </div>

              {/* Bottom Filmstrip Cartridge Dock & Controls */}
              <div className="mt-2 pt-2 border-t-2 border-black/15 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    id="yec-photo-prev-btn"
                    onClick={handlePrev}
                    className="yec-btn-spring p-1.5 sm:p-2 rounded-md bg-white hover:bg-[#ff9900] text-black border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                    aria-label="Previous photo"
                    title="Previous photo"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    id="yec-photo-next-btn"
                    onClick={handleNext}
                    className="yec-btn-spring p-1.5 sm:p-2 rounded-md bg-white hover:bg-[#ff9900] text-black border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                    aria-label="Next photo"
                    title="Next photo"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    id="yec-photo-autoplay-toggle"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`yec-btn-spring p-1.5 sm:p-2 rounded-md border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer flex items-center justify-center ${
                      isPlaying
                        ? 'bg-[#39ae8a] hover:bg-[#2d8f71] text-white'
                        : 'bg-zinc-200 hover:bg-zinc-300 text-black'
                    }`}
                    aria-label={isPlaying ? 'Pause 4s auto-roll' : 'Resume 4s auto-roll'}
                    title={isPlaying ? 'Pause auto-roll' : 'Resume 4s auto-roll'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    id="yec-photo-shuffle-btn"
                    onClick={handleShuffle}
                    className="yec-btn-spring p-1.5 sm:p-2 rounded-md bg-white hover:bg-[#39ae8a] hover:text-white text-black border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                    title="Shuffle photo with confetti!"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 6 Film Cartridges to select */}
                <div className="flex items-center gap-1">
                  {ABOUT_PHOTOS.map((photo, idx) => {
                    const isActive = idx === currentPhotoIndex;
                    const thumbTapeColor = tapeColors[idx % tapeColors.length];
                    return (
                      <button
                        key={photo.id}
                        id={`yec-photo-thumb-${idx}`}
                        type="button"
                        onClick={() => triggerSnap(idx)}
                        aria-label={`Select photo ${idx + 1}`}
                        className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-xs overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'border-black scale-110 shadow-[2px_2px_0px_0px_#ff9900] ring-2 ring-[#ff9900]'
                            : 'border-zinc-300 opacity-60 hover:opacity-100 hover:border-black hover:scale-105'
                        }`}
                      >
                        <img
                          src={photo.url}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        {isActive && (
                          <div
                            className="absolute inset-x-0 top-0 h-1"
                            style={{ backgroundColor: thumbTapeColor }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SCHEDULE SECTION */}
        <div id="schedule-section" className="pt-4 sm:pt-6 mb-12">
          {/* Schedule Title Banner with Robot Mascot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 border-[4px] sm:border-[6px] border-black bg-gradient-to-r from-[#ff9900]/20 via-[#39ae8a]/15 to-[#e31837]/20 px-4 sm:px-8 pt-4 sm:pt-6 pb-0 rounded-lg mb-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] select-none"
          >
            <div className="flex-1 w-full text-center flex flex-col items-center justify-center my-auto pb-4 lg:pb-5">
              <h2
                id="schedule-main-heading"
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[6.5rem] 2xl:text-[7.25rem] uppercase tracking-tight text-black leading-none font-black text-center"
              >
                <span className="text-[#ff9900] letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>Y</span>
                <span className="text-[#39ae8a] letter-spring cursor-default" style={{ ['--rot' as string]: '4deg' }}>E</span>
                <span className="text-[#e31837] letter-spring cursor-default" style={{ ['--rot' as string]: '-4deg' }}>C</span>{' '}
                <span className="letter-spring cursor-default">2</span>
                <span className="letter-spring cursor-default">0</span>
                <span className="letter-spring cursor-default">2</span>
                <span className="letter-spring cursor-default">6</span>{' '}
                <span className="letter-spring cursor-default">S</span>
                <span className="letter-spring cursor-default">C</span>
                <span className="letter-spring cursor-default">H</span>
                <span className="letter-spring cursor-default">E</span>
                <span className="letter-spring cursor-default">D</span>
                <span className="letter-spring cursor-default">U</span>
                <span className="letter-spring cursor-default">L</span>
                <span className="letter-spring cursor-default">E</span>
              </h2>
              <p className="text-zinc-800 text-xs sm:text-sm md:text-base lg:text-lg mt-2 font-bold max-w-2xl leading-snug text-center mx-auto">
                Explore all 7 competition categories across two intense weekends of engineering innovation.
              </p>
            </div>

            {/* Mascot stationed and jumping directly off the bottom border */}
            <div className="relative shrink-0 flex flex-col items-center justify-end self-center lg:self-end mt-1 lg:mt-0 leading-none">
              <img
                id="yec-jumping-robot"
                src={HERO_ASSETS.robotMascot}
                alt="YEC Mascot Robot"
                className="relative z-10 w-22 sm:w-26 md:w-30 lg:w-34 h-auto object-contain shrink-0 animate-robot-jump block align-bottom hover:brightness-110 transition-all cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* WEEK 1 */}
          <div id="week-1-container" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="border-[4px] sm:border-[6px] border-black bg-[#ff9900] text-black px-6 py-4 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-2 mb-8"
            >
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider font-black">
                WEEK 1
              </h3>
              <span className="font-bold text-sm sm:text-base tracking-widest uppercase bg-black text-white px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                NOVEMBER 7-8
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {week1Comps.map((comp, idx) => (
                <motion.div
                  key={comp.id}
                  id={`comp-card-${comp.id}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectCompetition(comp)}
                  className="card-shine group cursor-pointer border-[4px] border-black bg-white rounded-xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[8px_8px_0px_0px_#ff9900] flex flex-col focus:outline-none focus:ring-4 focus:ring-[#ff9900]"
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectCompetition(comp);
                    }
                  }}
                >
                  <div className="h-52 bg-gradient-to-b from-amber-500/5 to-amber-500/10 group-hover:from-amber-500/15 group-hover:to-amber-500/25 transition-all duration-300 overflow-hidden border-b-[3px] border-black relative flex items-center justify-center p-4">
                    <img
                      src={comp.image}
                      alt={comp.name}
                      className="max-h-full max-w-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-2 group-hover:text-[#ff9900] transition-colors leading-tight">
                        {comp.name}
                      </h4>
                      <p className="text-zinc-800 text-sm leading-relaxed line-clamp-4 font-medium">
                        {comp.description}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-black text-black">
                      <span className="text-[#ff9900] group-hover:underline">Click to view details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* WEEK 2 */}
          <div id="week-2-container" className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="border-[4px] sm:border-[6px] border-black bg-[#39ae8a] text-white px-6 py-4 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-2 mb-8"
            >
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider font-black">
                WEEK 2
              </h3>
              <span className="font-bold text-sm sm:text-base tracking-widest uppercase bg-black text-white px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                NOVEMBER 14-15
              </span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {week2Comps.map((comp, idx) => {
                const hoverShadowColor =
                  idx % 3 === 0 ? '#39ae8a' : idx % 3 === 1 ? '#e31837' : '#ff9900';
                const bgTint =
                  idx % 3 === 0
                    ? 'from-emerald-500/5 to-emerald-500/10 group-hover:from-emerald-500/15 group-hover:to-emerald-500/25'
                    : idx % 3 === 1
                    ? 'from-rose-500/5 to-rose-500/10 group-hover:from-rose-500/15 group-hover:to-rose-500/25'
                    : 'from-amber-500/5 to-amber-500/10 group-hover:from-amber-500/15 group-hover:to-amber-500/25';
                const accentTextColor =
                  idx % 3 === 0 ? 'group-hover:text-[#39ae8a]' : idx % 3 === 1 ? 'group-hover:text-[#e31837]' : 'group-hover:text-[#ff9900]';

                return (
                  <motion.div
                    key={comp.id}
                    id={`comp-card-${comp.id}`}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => onSelectCompetition(comp)}
                    style={{
                      ['--hover-shadow' as string]: hoverShadowColor
                    }}
                    className="card-shine group cursor-pointer border-[4px] border-black bg-white rounded-xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col focus:outline-none focus:ring-4 focus:ring-[#39ae8a]"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `8px 8px 0px 0px ${hoverShadowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0px 0px rgba(0,0,0,1)';
                    }}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectCompetition(comp);
                      }
                    }}
                  >
                    <div className={`h-48 bg-gradient-to-b ${bgTint} transition-all duration-300 overflow-hidden border-b-[3px] border-black relative flex items-center justify-center p-3`}>
                      <img
                        src={comp.image}
                        alt={comp.name}
                        className="max-h-full max-w-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className={`font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-black mb-2 ${accentTextColor} transition-colors leading-tight`}>
                          {comp.name}
                        </h4>
                        <p className="text-zinc-800 text-xs leading-relaxed line-clamp-4 font-medium">
                          {comp.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-black text-black">
                        <span className="text-[#39ae8a] group-hover:underline">Click to view details</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Decorative bottom ribbon banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <img
            src={HERO_ASSETS.yecBanner}
            alt="YEC Graphic Banner"
            className="w-full h-auto max-h-16 object-cover rounded-md shadow-sm border border-zinc-200"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};
