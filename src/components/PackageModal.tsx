import React from 'react';
import { PackageItem } from '../types';
import { X, Download, ExternalLink, Check, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/yecData';

interface PackageModalProps {
  packageItem: PackageItem | null;
  onClose: () => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({ packageItem, onClose }) => {
  if (!packageItem) return null;

  const headerColor =
    packageItem.id === 'sponsorship'
      ? '#ff9900'
      : packageItem.id === 'club'
      ? '#39ae8a'
      : '#e31837';

  const headerTextColor = packageItem.id === 'sponsorship' ? 'text-black' : 'text-white';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        id="package-detail-modal"
        className="relative w-full max-w-2xl bg-white text-zinc-900 rounded-xl border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[90vh] flex flex-col font-body animate-scale-up"
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b-[3px] border-black ${headerTextColor}`}
          style={{ backgroundColor: headerColor }}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2.5 py-0.5 rounded-full border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              YEC 2026-2027 Documentation
            </span>
            <h3 className="font-display text-4xl uppercase tracking-wider mt-1 font-black">
              {packageItem.title}
            </h3>
          </div>

          <button
            id="close-package-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-black bg-white text-black flex items-center justify-center hover:bg-black hover:text-white hover:rotate-90 transition-all duration-200 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Target Audience</span>
            <p className="font-bold text-zinc-900 text-base">{packageItem.targetAudience}</p>
          </div>

          <p className="font-body text-zinc-700 text-sm leading-relaxed">
            {packageItem.description}
          </p>

          {/* Highlights */}
          <div className="p-5 rounded-lg border-2 border-black bg-zinc-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-bold text-xs uppercase tracking-wider text-black mb-3">
              Package Inclusions & Opportunities:
            </h4>
            <ul className="space-y-2.5">
              {packageItem.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-800">
                  <div
                    className="w-5 h-5 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                    style={{ backgroundColor: headerColor }}
                  >
                    <Check className={`w-3 h-3 ${packageItem.id === 'sponsorship' ? 'text-black' : 'text-white'}`} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact callout */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-500/10 border-2 border-[#39ae8a]/40 text-sm shadow-sm">
            <div className="flex items-center gap-2 text-zinc-900 font-medium">
              <Mail className="w-4 h-4 text-[#39ae8a]" />
              <span>Questions regarding packages?</span>
            </div>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-xs font-bold uppercase tracking-wider text-[#39ae8a] hover:underline"
            >
              Contact YEC Team
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t-[3px] border-black bg-zinc-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="yec-btn-spring px-5 py-2.5 rounded-full border-2 border-black text-sm font-bold hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Close
          </button>
          <a
            id="download-package-pdf-btn"
            href={packageItem.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-shine yec-btn-spring px-6 py-2.5 rounded-full bg-black text-white text-sm font-bold flex items-center gap-2 hover:bg-[#ff9900] hover:text-black transition-colors shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#ff9900]" />
            <span>Open Official PDF</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
};
