import React from 'react';
import { X, ShieldCheck, Clock, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { playAudioBeep } from '../utils/confetti';

interface WaiverModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaiverModal: React.FC<WaiverModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        onClick={() => {
          playAudioBeep(400, 'sine', 0.08);
          onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden text-center"
        >
          {/* Header Bar */}
          <div className="p-4 bg-[#ff9900] border-b-4 border-black flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-black" />
              <span className="font-display text-sm font-black uppercase tracking-wider text-black">
                Participant Waiver
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                playAudioBeep(400, 'sine', 0.08);
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
            <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Clock className="w-7 h-7 text-[#ff9900]" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-black text-xs font-black uppercase tracking-wider text-zinc-700 mb-2">
                Status Notice
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                Link to be Updated
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-xs leading-relaxed">
              The official 2026/2027 YEC participant waiver and release form link will be updated here shortly.
            </p>

            <div className="pt-2 w-full flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="mailto:yec@lasengsoc.com?subject=YEC%20Participant%20Waiver%20Inquiry"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase border-2 border-black flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact YEC</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  playAudioBeep(450, 'sine', 0.08);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-black text-white hover:bg-[#ff9900] hover:text-black font-bold text-xs uppercase tracking-wider border-2 border-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
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
