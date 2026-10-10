import React from 'react';
import { LanguageProvider } from './data/i18n';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Team from './components/Team';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-trijya-ink font-body selection:bg-trijya-yellow selection:text-trijya-ink antialiased">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-trijya-yellow focus:text-trijya-ink focus:rounded-xl focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Top scroll progress indicator */}
        <ScrollProgress />

        {/* Global sticky navigation bar */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content">
          <Hero />
          <Philosophy />
          <Team />
          <Services />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <Resources />
          <Contact />
        </main>

        {/* Footer with legal, disclaimer, helplines */}
        <Footer />

        {/* Mobile floating quick action bar */}
        <MobileActionBar />
      </div>
    </LanguageProvider>
  );
}
