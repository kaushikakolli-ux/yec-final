import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { HERO_ASSETS } from '../data/yecData';

interface HeaderProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab = 'yec', onSelectTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b-[3px] border-black py-2'
          : 'bg-white/90 backdrop-blur-sm border-b-2 border-black py-2.5'
      }`}
    >
      {/* Top Brand Color Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff9900] via-[#39ae8a] to-[#e31837]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          id="header-brand-logo"
          href="#page-top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer"
        >
          <img
            src={HERO_ASSETS.lesLogo}
            alt="York Engineering Competition Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-2deg]"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-display font-black text-sm sm:text-base tracking-tight text-black leading-tight group-hover:text-[#ff9900] transition-colors">
              York Engineering Competition
            </span>
            <span className="text-[11px] text-zinc-600 font-bold uppercase tracking-wider">
              Lassonde School of Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs xl:text-sm font-bold text-zinc-800">
          <a
            id="nav-home"
            href="#page-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="relative px-3 py-2 rounded-lg hover:text-black hover:bg-amber-500/10 transition-all duration-200"
          >
            Home
          </a>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              id="nav-about-dropdown-btn"
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-black hover:bg-emerald-500/10 transition-all duration-200 cursor-pointer"
              onClick={() => handleNavClick('about-yec')}
            >
              About
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-[#39ae8a]' : ''}`} />
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 z-50 animate-scale-up">
                <a
                  id="nav-about-team"
                  href="#team-section"
                  onClick={(e) => {
                    e.preventDefault();
                    setAboutDropdownOpen(false);
                    handleNavClick('team-section');
                  }}
                  className="block px-4 py-2 text-sm text-zinc-800 hover:bg-[#ff9900]/20 hover:text-black font-bold transition-colors"
                >
                  Meet the Team
                </a>
                <a
                  id="nav-about-documents"
                  href="https://lasengsoc.com/governing-documents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 text-sm text-zinc-800 hover:bg-[#ff9900]/20 hover:text-black font-bold transition-colors"
                >
                  <span>Governing Documents</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            )}
          </div>

          <a
            id="nav-schedule"
            href="#schedule-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('schedule-section');
            }}
            className="px-3 py-2 rounded-lg hover:text-black hover:bg-rose-500/10 transition-all duration-200"
          >
            Schedule
          </a>

          <a
            id="nav-events"
            href="#tickets-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('tickets-section');
            }}
            className="px-3 py-2 rounded-lg hover:text-black hover:bg-amber-500/10 transition-all duration-200"
          >
            Events & Tickets
          </a>

          <a
            id="nav-team"
            href="#team-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('team-section');
            }}
            className="px-3 py-2 rounded-lg hover:text-black hover:bg-emerald-500/10 transition-all duration-200"
          >
            Team
          </a>

          <a
            id="nav-sponsors"
            href="#sponsors-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('sponsors-section');
            }}
            className="px-3 py-2 rounded-lg hover:text-black hover:bg-rose-500/10 transition-all duration-200"
          >
            Sponsors
          </a>

          <a
            id="nav-packages"
            href="#packages-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('packages-section');
            }}
            className="px-3 py-2 rounded-lg hover:text-black hover:bg-amber-500/10 transition-all duration-200"
          >
            Packages
          </a>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <button
              id="nav-more-dropdown-btn"
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-black hover:bg-zinc-100 transition-all duration-200 cursor-pointer"
            >
              More
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-48 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 z-50 animate-scale-up">
                <a
                  id="nav-more-join-us"
                  href="https://lasengsoc.com/directorships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 text-sm text-zinc-800 hover:bg-[#ff9900]/20 font-bold transition-colors"
                >
                  <span>Join Us!</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
                <a
                  id="nav-more-engshop"
                  href="https://lasengsoc.com/engshop-y7m66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 text-sm text-zinc-800 hover:bg-[#ff9900]/20 font-bold transition-colors"
                >
                  <span>EngShop</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-black hover:bg-zinc-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b-4 border-black px-6 py-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-3 text-base font-bold text-zinc-800">
            <a
              id="mobile-nav-home"
              href="#page-top"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-2 px-3 rounded-lg hover:bg-zinc-100 text-black"
            >
              Home
            </a>
            <a
              id="mobile-nav-about"
              href="#about-yec"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about-yec');
              }}
              className="py-2 px-3 rounded-lg hover:bg-zinc-100 text-black"
            >
              About YEC
            </a>
            <a
              id="mobile-nav-schedule"
              href="#schedule-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('schedule-section');
              }}
              className="py-2 px-3 rounded-lg hover:bg-zinc-100 text-black"
            >
              Competition Schedule
            </a>
            <a
              id="mobile-nav-team"
              href="#team-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('team-section');
              }}
              className="py-2 px-3 rounded-lg hover:bg-zinc-100 text-black"
            >
              Meet the Team
            </a>
            <a
              id="mobile-nav-sponsors"
              href="#sponsors-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('sponsors-section');
              }}
              className="py-2 px-3 rounded-lg hover:bg-zinc-100 text-black"
            >
              2026/2027 Sponsors
            </a>
            <a
              id="mobile-nav-packages"
              href="#packages-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('packages-section');
              }}
              className="py-2 px-3 rounded-lg hover:bg-zinc-100 text-black"
            >
              Sponsorship & Packages
            </a>
            <hr className="border-zinc-200 my-2" />
            <a
              id="mobile-nav-join"
              href="https://lasengsoc.com/directorships"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-zinc-100 text-zinc-700"
            >
              <span>Join Us!</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              id="mobile-nav-shop"
              href="https://lasengsoc.com/engshop-y7m66"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-zinc-100 text-zinc-700"
            >
              <span>EngShop</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
