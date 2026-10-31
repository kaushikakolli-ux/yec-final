import React from 'react';
import { Competition } from '../types';
import { X, Users, Calendar, BookOpen, ArrowUpRight } from 'lucide-react';
import { HANDBOOKS_DATA } from '../data/handbooksData';

interface CompetitionDetailModalProps {
  competition: Competition | null;
  onClose: () => void;
}

export const CompetitionDetailModal: React.FC<CompetitionDetailModalProps> = ({ competition, onClose }) => {
  if (!competition) return null;

  const handbook = HANDBOOKS_DATA.find((h) => h.challengeId === competition.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        id="competition-detail-modal"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white text-zinc-900 rounded-xl border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[90vh] flex flex-col animate-scale-up"
      >
        {/* Modal Header Bar */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b-[3px] border-black"
          style={{
            backgroundColor: competition.week === 1 ? '#fed7aa' : '#a7e4d2'
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-black ${
                competition.week === 1
                  ? 'bg-[#ff9900] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-[#39ae8a] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {competition.weekLabel}
            </span>
            <span className="text-xs font-black uppercase text-zinc-800 tracking-wider">Dates: {competition.dates}</span>
          </div>

          <button
            id="close-competition-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white hover:rotate-90 transition-all duration-200 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Banner Image & Title */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg bg-zinc-50 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <img
              src={competition.image}
              alt={competition.name}
              className="w-32 sm:w-44 h-auto object-contain shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-black mb-1">
                {competition.name}
              </h3>
              <p className="font-body text-black text-sm leading-relaxed">
                {competition.description}
              </p>
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border-2 border-black bg-white flex items-start gap-3 shadow-[3px_3px_0px_0px_#ff9900]">
              <Users className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase font-bold text-zinc-500 block tracking-wider">
                  Team Composition
                </span>
                <span className="font-bold text-sm text-zinc-900">
                  {competition.teamSize || 'To be announced'}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-lg border-2 border-black bg-white flex items-start gap-3 shadow-[3px_3px_0px_0px_#39ae8a]">
              <Calendar className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase font-bold text-zinc-500 block tracking-wider">
                  Eligibility
                </span>
                <span className="font-bold text-sm text-zinc-900">
                  {competition.eligibleYears || 'Undergraduate Students'}
                </span>
              </div>
            </div>
          </div>

          {/* Handbook Callout Card */}
          {handbook && (
            <div className="p-4 rounded-xl border-2 border-black bg-amber-50/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#ff9900] shrink-0" />
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-black block">
                    {handbook.title}
                  </span>
                  <span className="text-xs text-zinc-600 font-medium">
                    Download official deliverables, schedule, and scoring rubric.
                  </span>
                </div>
              </div>

              <a
                href={handbook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-black text-white hover:bg-[#ff9900] hover:text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <span>View Handbook</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 border-t-[3px] border-black bg-zinc-100 flex items-center justify-between">
          <a
            href="#handbooks-section"
            onClick={() => onClose()}
            className="text-xs font-bold text-zinc-700 hover:text-black hover:underline"
          >
            Browse all Challenge Handbooks →
          </a>

          <button
            onClick={onClose}
            className="yec-btn-spring px-6 py-2.5 rounded-full bg-black text-white text-sm font-bold hover:bg-[#ff9900] hover:text-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
