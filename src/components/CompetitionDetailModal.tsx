import React from 'react';
import { Competition } from '../types';
import { X, Users, Calendar, BookOpen, ArrowUpRight, MapPin, Clock, AlertOctagon, AlertTriangle } from 'lucide-react';
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
            backgroundColor: competition.isCancelled
              ? '#fee2e2'
              : competition.week === 1
              ? '#fed7aa'
              : '#a7e4d2'
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-black ${
                competition.isCancelled
                  ? 'bg-[#e31837] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : competition.week === 1
                  ? 'bg-[#ff9900] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-[#39ae8a] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {competition.isCancelled ? 'CANCELLED' : competition.weekLabel}
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
          {/* Prominent Cancellation Notice Banner if Cancelled */}
          {competition.isCancelled && (
            <div className="p-4 rounded-xl border-[3px] border-red-600 bg-red-50 text-red-950 flex items-start gap-3.5 shadow-[4px_4px_0px_0px_rgba(227,24,55,1)]">
              <div className="p-2 rounded-lg bg-[#e31837] text-white shrink-0 shadow-sm mt-0.5">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-lg font-black uppercase tracking-wide text-[#e31837]">
                  Competition Cancelled
                </h4>
                <p className="text-sm font-semibold text-red-900 mt-1 leading-relaxed">
                  Communications has been cancelled. Check out Debate or Innovative Design.
                </p>
              </div>
            </div>
          )}

          {/* Banner Image & Title */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg bg-zinc-50 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="relative w-32 sm:w-44 h-28 sm:h-36 flex items-center justify-center shrink-0">
              <img
                src={competition.image}
                alt={competition.name}
                className={`max-h-full max-w-full object-contain ${
                  competition.isCancelled ? 'grayscale opacity-35 contrast-125' : ''
                }`}
                referrerPolicy="no-referrer"
              />
              {competition.isCancelled && (
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <img
                    src="/competitions/cancelled-stamp.svg"
                    alt="Cancelled Due to Low Turnout"
                    className="w-[85%] max-w-[190px] drop-shadow-md transform -rotate-6 pointer-events-none select-none"
                  />
                </div>
              )}
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-black">
                  {competition.name}
                </h3>
                {competition.isCancelled && (
                  <span className="px-2 py-0.5 rounded bg-[#e31837] text-white text-xs font-black uppercase tracking-wider border border-black shadow-xs">
                    Cancelled
                  </span>
                )}
              </div>
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

            {competition.room && (
              <div
                className={`sm:col-span-2 p-4 rounded-lg border-2 border-black flex items-start gap-3 ${
                  competition.isCancelled
                    ? 'bg-red-50 shadow-[3px_3px_0px_0px_#e31837]'
                    : 'bg-gradient-to-r from-red-50 to-amber-50 shadow-[3px_3px_0px_0px_#e31837]'
                }`}
              >
                <MapPin className="w-5 h-5 text-[#e31837] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase font-bold text-[#e31837] block tracking-wider">
                    Assigned Competition Room
                  </span>
                  <span className="font-black text-base text-zinc-950 font-mono">
                    {competition.isCancelled ? (
                      <>
                        <span className="line-through text-zinc-500">{competition.room}</span>
                        <span className="ml-2 px-2 py-0.5 rounded bg-[#e31837] text-white text-[10px] font-black uppercase">
                          Cancelled
                        </span>
                      </>
                    ) : (
                      competition.room
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Handbook Callout Card */}
          {handbook && !competition.isCancelled && (
            <div className="p-4 rounded-xl border-2 border-black bg-amber-50/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#ff9900] shrink-0" />
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-black block">
                    {handbook.title}
                  </span>
                  <span className="text-xs text-zinc-600 font-medium">
                    {handbook.isAvailable
                      ? 'Download official deliverables, rules, schedule, and scoring rubric.'
                      : 'Official challenge guidelines and problem statements will be released shortly.'}
                  </span>
                </div>
              </div>

              {handbook.isAvailable ? (
                <a
                  href={handbook.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-black text-white hover:bg-[#ff9900] hover:text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <span>View Handbook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="px-3.5 py-2 rounded-lg bg-zinc-100 border-2 border-black/30 text-zinc-800 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shrink-0 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Will be released shortly</span>
                </div>
              )}
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
