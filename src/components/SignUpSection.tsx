import React from 'react';
import { SIGNUP_LINK, OEC_REGULATIONS_LINK } from '../data/yecData';
import { ArrowUpRight, Ticket, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { playAudioBeep } from '../utils/confetti';

export const SignUpSection: React.FC = () => {
  return (
    <section
      id="signup-section"
      className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#fdfaf5] text-zinc-900 border-b-2 border-black select-none overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center relative z-10">
        <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-4">
          Sign Up for YEC 2026
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <motion.a
            id="signup-section-direct-link"
            href={SIGNUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playAudioBeep(560, 'triangle', 0.1)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="card-shine yec-btn-spring px-7 py-3 sm:px-9 sm:py-3.5 rounded-full bg-black text-white hover:bg-[#ff9900] hover:text-black font-display font-black text-sm sm:text-base uppercase tracking-wider border-2 border-black transition-all flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_#ff9900] cursor-pointer inline-flex group"
          >
            <Ticket className="w-4 h-4 text-[#ff9900] group-hover:text-black" />
            <span>Sign Up</span>
            <ArrowUpRight className="w-4 h-4 text-[#ff9900] group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.a
            id="oec-regulations-button"
            href={OEC_REGULATIONS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playAudioBeep(520, 'sine', 0.1)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="card-shine yec-btn-spring px-7 py-3 sm:px-9 sm:py-3.5 rounded-full bg-white text-black hover:bg-[#39ae8a] hover:text-white font-display font-black text-sm sm:text-base uppercase tracking-wider border-2 border-black transition-all flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_#39ae8a] cursor-pointer inline-flex group"
          >
            <BookOpen className="w-4 h-4 text-[#39ae8a] group-hover:text-white" />
            <span>OEC Regulations</span>
            <ArrowUpRight className="w-4 h-4 text-[#39ae8a] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
