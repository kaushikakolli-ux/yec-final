import React, { useEffect } from 'react';
import { X, Clock, BookOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { playAudioBeep } from '../utils/confetti';
import { HandbookItem } from '../data/handbooksData';

interface HandbookReleaseModalProps {
  handbook: HandbookItem | null;
  onClose: () => void;
}

export const HandbookReleaseModal: React.FC<HandbookReleaseModalProps> = ({ handbook, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (handbook) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handbook, onClose]);

  if (!handbook) return null;

  return (
    <AnimatePresence>
      <div
        id="handbook-release-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fade-in"
        onClick={() => {
          playAudioBeep(420, 'sine', 0.08);
          onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden text-center"
        >
          {/* Header Bar */}
          <div
            className="p-4 border-b-4 border-black flex items-center justify-between"
            style={{
              backgroundColor: handbook.week === 1 ? '#ff9900' : '#39ae8a'
            }}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-black" />
              <span className="font-display text-xs sm:text-sm font-black uppercase tracking-wider text-black">
                {handbook.title}
              </span>
              {handbook.isCancelled && (
                <span className="px-1.5 py-0.5 rounded bg-black text-white text-[10px] font-black uppercase">
                  Cancelled
                </span>
              )}
            </div>
            <button
              type="button"
              id="close-handbook-release-modal-btn"
              onClick={() => {
                playAudioBeep(420, 'sine', 0.08);
                onClose();
              }}
              className="w-7 h-7 rounded-lg bg-white hover:bg-black hover:text-white text-black font-bold border-2 border-black flex items-center justify-center transition-colors shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 flex flex-col items-center justify-center space-y-4">
            {handbook.isCancelled ? (
              <>
                <div className="w-14 h-14 rounded-2xl bg-red-100 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <X className="w-7 h-7 text-[#e31837]" />
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-red-100 border border-black text-[11px] font-black uppercase tracking-wider text-red-700 mb-2">
                    Division Cancelled
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                    Competition Cancelled
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 font-medium max-w-sm leading-relaxed">
                  Communications has been cancelled. Check out Debate or Innovative Design.
                </p>
              </>
            ) : (
              <>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Clock className="w-7 h-7 text-[#ff9900]" />
                </div>

                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-black text-[11px] font-black uppercase tracking-wider text-zinc-700 mb-2">
                    Challenge Release Notice
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                    Will be released shortly
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-sm leading-relaxed">
                  The official <strong>{handbook.challengeName}</strong> handbook will be released shortly.
                </p>
              </>
            )}

            <div className="pt-2 w-full flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="mailto:yec@lasengsoc.com?subject=YEC%20Handbook%20Inquiry"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase border-2 border-black flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact YEC</span>
              </a>

              <button
                type="button"
                id="handbook-release-got-it-btn"
                onClick={() => {
                  playAudioBeep(480, 'sine', 0.08);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2 rounded-xl bg-black text-white hover:bg-[#ff9900] hover:text-black font-bold text-xs uppercase tracking-wider border-2 border-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
