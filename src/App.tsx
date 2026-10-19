import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutAndSchedule } from './components/AboutAndSchedule';
import { TeamCarousel } from './components/TeamCarousel';
import { SponsorsSection } from './components/SponsorsSection';
import { PackagesSection } from './components/PackagesSection';
import { Footer } from './components/Footer';
import { CompetitionDetailModal } from './components/CompetitionDetailModal';
import { PackageModal } from './components/PackageModal';
import { Competition, PackageItem } from './types';

export default function App() {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

  return (
    <div id="yec-app-root" className="min-h-screen bg-[#f7f8fa] text-zinc-900 flex flex-col selection:bg-[#ff9900] selection:text-black">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Bright & Fun Hero with YEC Brand Colors */}
        <HeroSection />

        {/* Section 2: What is YEC & 2-Week Competition Schedule with Jumping Mascot */}
        <AboutAndSchedule onSelectCompetition={(comp) => setSelectedCompetition(comp)} />

        {/* Section 3: Meet the Team Carousel */}
        <TeamCarousel />

        {/* Section 4: Our 2026/2027 Sponsors (Clean Logo & Name cards + interactive modal) */}
        <SponsorsSection />

        {/* Section 5: Packages Section */}
        <PackagesSection onSelectPackage={(pkg) => setSelectedPackage(pkg)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Overlays & Modals */}
      <CompetitionDetailModal
        competition={selectedCompetition}
        onClose={() => setSelectedCompetition(null)}
      />

      <PackageModal
        packageItem={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </div>
  );
}
