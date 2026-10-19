import React, { useEffect } from 'react';
import { Sponsor } from '../types';
import { SponsorLogo } from './SponsorLogo';
import { X, MapPin, Briefcase, ExternalLink, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface SponsorModalProps {
  sponsor: Sponsor | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const SponsorModal: React.FC<SponsorModalProps> = ({ sponsor, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!sponsor) return null;

  return (
    <div
      id="sponsor-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl bg-white text-zinc-900 border-[3px] border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col max-h-[90vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 flex items-center justify-between border-b-[3px] border-black bg-gradient-to-r from-amber-100/90 via-emerald-100/80 to-rose-100/80">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-black bg-[#ff9900] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Sponsor
            </span>
            <span className="text-xs font-mono font-bold text-zinc-700">
              YEC 2026/2027
            </span>
          </div>

          <button
            id="sponsor-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white hover:rotate-90 transition-all duration-200 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Close sponsor details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Header Row with Brand Logo & Title */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-4 border-b-2 border-zinc-200">
            <div className="shrink-0">
              <SponsorLogo logoKey={sponsor.logo} size="lg" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-black tracking-tight leading-tight">
                {sponsor.name}
              </h3>
            </div>
          </div>

          {/* Key Facts Pills (Location & Industry) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg border-2 border-black bg-zinc-50 shadow-[3px_3px_0px_0px_#ff9900] flex items-start gap-3">
              <div className="p-2 rounded bg-black text-white shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-4 h-4 text-[#ff9900]" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-zinc-500 block">
                  Location / Facilities
                </span>
                <span className="font-bold text-sm text-zinc-900 leading-snug">
                  {sponsor.location}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg border-2 border-black bg-zinc-50 shadow-[3px_3px_0px_0px_#39ae8a] flex items-start gap-3">
              <div className="p-2 rounded bg-black text-white shrink-0 mt-0.5 shadow-sm">
                <Briefcase className="w-4 h-4 text-[#39ae8a]" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-zinc-500 block">
                  Industry & Domain
                </span>
                <span className="font-bold text-sm text-zinc-900 leading-snug">
                  {sponsor.industry}
                </span>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-500 mb-2">
              <Award className="w-4 h-4 text-black" />
              <span>About the Organization</span>
            </h4>
            <div className="p-4 rounded-lg bg-zinc-50 border-2 border-black text-sm text-zinc-700 font-medium">
               {sponsor.description}
            </div>
          </div>

          {/* Official External Links / Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {!sponsor.websiteUrl.startsWith('#') ? (
              <a
                id="sponsor-website-link"
                href={sponsor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-shine yec-btn-spring inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff9900] hover:text-black transition-all cursor-pointer"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}

            <a
              id="sponsor-package-link"
              href="#packages-section"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                const target = document.getElementById('packages-section');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="card-shine yec-btn-spring inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-900 border-2 border-black text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#39ae8a] hover:text-white transition-all cursor-pointer"
            >
              <span>Partner With Us</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Modal Action Footer with Prev/Next buttons */}
        <div className="px-6 py-4 border-t-[3px] border-black bg-zinc-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                id="sponsor-modal-prev-btn"
                onClick={onPrev}
                className="yec-btn-spring p-2 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                title="Previous Sponsor (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            {onNext && (
              <button
                id="sponsor-modal-next-btn"
                onClick={onNext}
                className="yec-btn-spring p-2 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                title="Next Sponsor (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="yec-btn-spring px-6 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ff9900] hover:text-black transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
