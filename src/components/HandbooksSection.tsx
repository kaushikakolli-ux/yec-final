import React, { useState } from 'react';
import { HANDBOOKS_DATA, HandbookItem } from '../data/handbooksData';
import { WAIVER_LINK } from '../data/yecData';
import {
  BookOpen,
  ArrowUpRight,
  Search,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { playAudioBeep } from '../utils/confetti';

interface HandbooksSectionProps {
  onSelectHandbook?: (handbook: HandbookItem) => void;
}

export const HandbooksSection: React.FC<HandbooksSectionProps> = () => {
  const [selectedWeekFilter, setSelectedWeekFilter] = useState<'all' | 1 | 2>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHandbooks = HANDBOOKS_DATA.filter((item) => {
    const matchesWeek = selectedWeekFilter === 'all' || item.week === selectedWeekFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.challengeName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesWeek && matchesSearch;
  });

  return (
    <section
      id="handbooks-section"
      className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#fdfaf5] text-zinc-900 border-t-2 border-b-2 border-black select-none overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <BookOpen className="w-3 h-3 text-[#ff9900]" />
              <span>Challenge Documentation</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              <span>Handbooks</span>
              <span className="text-xs font-bold text-zinc-600 bg-zinc-200 px-2 py-0.5 rounded-full">
                {HANDBOOKS_DATA.length}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium">
              Direct links to official competition handbooks and rulebooks.
            </p>
          </div>

          {/* Compact Filter Strip & Search */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <div className="inline-flex rounded-lg p-0.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <button
                type="button"
                onClick={() => {
                  playAudioBeep(450, 'sine', 0.08);
                  setSelectedWeekFilter('all');
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-black uppercase transition-colors cursor-pointer ${
                  selectedWeekFilter === 'all'
                    ? 'bg-black text-white'
                    : 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => {
                  playAudioBeep(520, 'sine', 0.08);
                  setSelectedWeekFilter(1);
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-black uppercase transition-colors cursor-pointer ${
                  selectedWeekFilter === 1
                    ? 'bg-[#ff9900] text-black'
                    : 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                }`}
              >
                Week 1
              </button>
              <button
                type="button"
                onClick={() => {
                  playAudioBeep(580, 'sine', 0.08);
                  setSelectedWeekFilter(2);
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-black uppercase transition-colors cursor-pointer ${
                  selectedWeekFilter === 2
                    ? 'bg-[#39ae8a] text-white'
                    : 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                }`}
              >
                Week 2
              </button>
            </div>

            <div className="relative w-36 sm:w-44">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-2.5 py-1 bg-white rounded-lg border-2 border-black text-xs font-bold text-zinc-900 placeholder:text-zinc-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-1 focus:ring-[#ff9900]"
              />
            </div>
          </div>
        </div>

        {/* Clean, Direct Handbook Links Grid (All uniformly styled) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredHandbooks.map((item, index) => {
            return (
              <motion.a
                key={item.id}
                id={`handbook-link-${item.challengeId}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playAudioBeep(520, 'triangle', 0.08)}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="group bg-white border-2 border-black rounded-xl p-3.5 shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:border-black transition-all flex items-center justify-between gap-3 text-left relative cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                title={`Open ${item.title}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-black flex items-center justify-center shrink-0 group-hover:bg-[#ff9900] group-hover:text-black transition-colors">
                    <BookOpen className="w-4 h-4 text-black" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded border border-black ${
                          item.week === 1 ? 'bg-[#ff9900] text-black' : 'bg-[#39ae8a] text-white'
                        }`}
                      >
                        Week {item.week}
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-black text-black uppercase tracking-tight group-hover:text-[#ff9900] transition-colors truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-100 group-hover:bg-black group-hover:text-white border border-black transition-colors">
                  <span className="text-[11px] font-bold uppercase tracking-wider hidden sm:inline">
                    Open
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:text-[#ff9900] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Waiver Action Bar & Questions Helper */}
        <div className="mt-6 pt-5 border-t-2 border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-[#39ae8a]/20 border border-[#39ae8a] flex items-center justify-center shrink-0">
              <FileCheck className="w-4 h-4 text-[#39ae8a]" />
            </div>
            <div>
              <p className="text-xs font-bold text-black">
                Mandatory Competitor Requirement
              </p>
              <p className="text-[11px] text-zinc-600 font-medium">
                All registered participants must review and complete the event waiver.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto justify-end">
            <a
              id="yec-participant-waiver-btn"
              href={WAIVER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playAudioBeep(560, 'sine', 0.1)}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-black text-white hover:bg-[#ff9900] hover:text-black font-bold text-xs uppercase tracking-wider border-2 border-black transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer shrink-0"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff9900]" />
              <span>Participant Waiver</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Minimal Email link */}
        <div className="mt-3 text-center text-xs text-zinc-500 font-medium">
          Have rulebook questions? Email{' '}
          <a
            href="mailto:yec@lasengsoc.com"
            className="text-black font-bold underline hover:text-[#ff9900] transition-colors"
          >
            yec@lasengsoc.com
          </a>
        </div>
      </div>
    </section>
  );
};
