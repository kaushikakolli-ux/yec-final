import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ABOUT_PHOTOS } from '../data/yecData';
import { ChevronLeft, ChevronRight, Pause, Play, Box, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PhotoShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef<number>(0);
  const dragStartAngle = useRef<number>(0);
  const hasDragged = useRef<boolean>(false);

  const totalPhotos = ABOUT_PHOTOS.length;
  const angleStep = 360 / totalPhotos; // 60 deg

  // Snap to index
  const goToIndex = useCallback((index: number) => {
    const normalizedIndex = (index % totalPhotos + totalPhotos) % totalPhotos;
    setActiveIndex(normalizedIndex);
    // Find closest rotation angle matching this index
    setRotationAngle(-normalizedIndex * angleStep);
  }, [totalPhotos, angleStep]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      const nextIndex = (prev + 1) % totalPhotos;
      setRotationAngle((curr) => curr - angleStep);
      return nextIndex;
    });
  }, [totalPhotos, angleStep]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      const prevIndex = (prev - 1 + totalPhotos) % totalPhotos;
      setRotationAngle((curr) => curr + angleStep);
      return prevIndex;
    });
  }, [totalPhotos, angleStep]);

  // Auto-spin interval
  useEffect(() => {
    if (isPaused || isDragging || viewMode === 'grid') return;
    const timer = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, viewMode, handleNext]);

  // Drag handlers for 3D Carousel
  const handlePointerDown = (e: React.PointerEvent) => {
    if (viewMode !== '3d') return;
    setIsDragging(true);
    hasDragged.current = false;
    dragStartX.current = e.clientX;
    dragStartAngle.current = rotationAngle;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || viewMode !== '3d') return;
    const deltaX = e.clientX - dragStartX.current;
    if (Math.abs(deltaX) > 5) {
      hasDragged.current = true;
    }
    // Convert px to degrees (0.4 factor for pleasant drag sensitivity)
    setRotationAngle(dragStartAngle.current + deltaX * 0.45);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging || viewMode !== '3d') return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore pointer release if target lost
    }

    // Snap to nearest 60-degree slice
    const rawIndex = Math.round(-rotationAngle / angleStep);
    const normalizedIndex = ((rawIndex % totalPhotos) + totalPhotos) % totalPhotos;
    setActiveIndex(normalizedIndex);
    setRotationAngle(-rawIndex * angleStep);
  };

  return (
    <div
      id="yec-photo-showcase"
      className="w-full flex flex-col justify-between h-full min-h-[440px] sm:min-h-[490px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Bar: Mode Switcher & Counter */}
      <div className="flex items-center justify-between gap-3 mb-4 px-1">
        {/* Creative Mode Switcher Tabs */}
        <div className="inline-flex items-center p-1 rounded-xl bg-black/10 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <button
            type="button"
            onClick={() => setViewMode('3d')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              viewMode === '3d'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#ff9900]'
                : 'text-zinc-700 hover:text-black hover:bg-white/60'
            }`}
            title="3D Spatial Ring View"
          >
            <Box className="w-3.5 h-3.5 text-[#ff9900]" />
            <span>3D Stage</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#39ae8a]'
                : 'text-zinc-700 hover:text-black hover:bg-white/60'
            }`}
            title="Mosaic Gallery View"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#39ae8a]" />
            <span>Gallery</span>
          </button>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-white border-2 border-black font-mono text-xs font-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            0{activeIndex + 1} <span className="text-zinc-400">/</span> 0{totalPhotos}
          </span>
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="p-1.5 rounded-full bg-white border-2 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff9900] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
            aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-black" /> : <Pause className="w-3.5 h-3.5 text-black" />}
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <div className="relative flex-1 flex items-center justify-center min-h-[360px] sm:min-h-[400px] overflow-hidden rounded-2xl border-[4px] border-black bg-gradient-to-b from-[#141a29] via-[#0d111a] to-[#141a29] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {/* Background Ambient Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#ff9900]/20 blur-3xl pointer-events-none -z-0" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#39ae8a]/15 blur-3xl pointer-events-none -z-0" />

        <AnimatePresence mode="wait">
          {viewMode === '3d' ? (
            /* ================= VIEW 1: TRUE 3D SPATIAL REVOLVING CYLINDER ================= */
            <motion.div
              key="view-3d-stage"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
              style={{ perspective: '1100px' }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {/* Elliptical floor shadow reflection */}
              <div className="absolute bottom-6 w-64 h-10 rounded-full bg-gradient-to-r from-[#ff9900]/30 via-[#39ae8a]/30 to-[#e31837]/30 blur-lg pointer-events-none" />

              {/* 3D Rotating Hub */}
              <div
                id="yec-3d-cylinder-hub"
                className="relative w-[210px] sm:w-[240px] h-[270px] sm:h-[310px]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${rotationAngle}deg)`,
                  transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {ABOUT_PHOTOS.map((photo, i) => {
                  const cardAngle = i * angleStep;
                  const brandColor =
                    i % 3 === 0 ? '#ff9900' : i % 3 === 1 ? '#39ae8a' : '#e31837';
                  const isCurrent = i === activeIndex;

                  // Distance from center of cylinder (radius)
                  const radius = 210;

                  return (
                    <div
                      key={photo.id}
                      onClick={() => {
                        if (!hasDragged.current) {
                          goToIndex(i);
                        }
                      }}
                      className={`card-shine absolute inset-0 rounded-2xl border-[3.5px] border-black bg-white overflow-hidden cursor-pointer transition-shadow duration-300 ${
                        isCurrent
                          ? 'shadow-[0_12px_28px_rgba(255,153,0,0.45)] ring-4 ring-[#ff9900]'
                          : 'opacity-85 hover:opacity-100 hover:brightness-105'
                      }`}
                      style={{
                        transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                      title={`Photo ${i + 1} - Click to focus`}
                    >
                      <img
                        src={photo.url}
                        alt={`YEC moment ${i + 1}`}
                        className="w-full h-full object-cover pointer-events-none select-none"
                        referrerPolicy="no-referrer"
                      />

                      {/* Top Brand Sticker Tag */}
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-sm border border-white/20 text-white font-mono text-[10px] font-black tracking-wider flex items-center gap-1.5 shadow-md pointer-events-none">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: brandColor }}
                        />
                        <span>YEC 0{i + 1}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Drag Prompt Hint Pill */}
              <div className="absolute bottom-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white text-[11px] font-mono tracking-wider pointer-events-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900] animate-ping" />
                <span>Drag to spin 3D stage or click any card</span>
              </div>
            </motion.div>
          ) : (
            /* ================= VIEW 2: KINETIC BENTO SPOTLIGHT MOSAIC ================= */
            <motion.div
              key="view-bento-grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-12 gap-3"
            >
              {/* Left/Main Hero Spotlight (7 cols on desktop) */}
              <div className="sm:col-span-7 relative rounded-xl border-[3px] border-black bg-white overflow-hidden shadow-[4px_4px_0px_0px_#ff9900] group">
                <img
                  src={ABOUT_PHOTOS[activeIndex].url}
                  alt={`Featured YEC photo ${activeIndex + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 text-white font-mono text-xs font-black tracking-wider">
                  Spotlight · Photo 0{activeIndex + 1}
                </div>
              </div>

              {/* Right Tiles Stack (5 cols on desktop) */}
              <div className="sm:col-span-5 grid grid-cols-3 sm:grid-cols-2 gap-2 overflow-y-auto">
                {ABOUT_PHOTOS.map((photo, i) => {
                  const isSelected = i === activeIndex;
                  const borderCol =
                    i % 3 === 0 ? '#ff9900' : i % 3 === 1 ? '#39ae8a' : '#e31837';

                  return (
                    <button
                      key={`grid-${photo.id}`}
                      type="button"
                      onClick={() => goToIndex(i)}
                      className={`relative rounded-lg border-2 border-black overflow-hidden aspect-square cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'ring-3 ring-[#ff9900] scale-105 shadow-[3px_3px_0px_0px_#ff9900] z-10'
                          : 'opacity-70 hover:opacity-100 hover:scale-102 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                    >
                      <img
                        src={photo.url}
                        alt={`YEC thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span
                        className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-black text-white font-mono"
                        style={{ backgroundColor: borderCol }}
                      >
                        0{i + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Controls Bar: Left / Right Arrows & Thumbnail Jump Dots */}
      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        {/* Navigation Step Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            id="yec-carousel-prev-btn"
            onClick={handlePrev}
            className="yec-btn-spring p-2 rounded-xl bg-white hover:bg-[#ff9900] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            aria-label="Previous photo"
            title="Previous photo"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            id="yec-carousel-next-btn"
            onClick={handleNext}
            className="yec-btn-spring p-2 rounded-xl bg-white hover:bg-[#ff9900] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            aria-label="Next photo"
            title="Next photo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Quick Jump Dots with Active Brand Ring */}
        <div className="flex items-center gap-1.5">
          {ABOUT_PHOTOS.map((photo, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={`jump-dot-${photo.id}`}
                type="button"
                id={`yec-carousel-indicator-${idx}`}
                onClick={() => goToIndex(idx)}
                aria-label={`Jump to photo ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 border border-black cursor-pointer ${
                  isActive
                    ? 'w-7 bg-[#ff9900] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                    : 'w-2.5 bg-zinc-300 hover:bg-zinc-500'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
