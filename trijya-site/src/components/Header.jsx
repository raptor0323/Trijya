import React, { useState, useEffect, useCallback } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { brand } from '../data/site';
import { useLanguage } from '../data/i18n';

const NAV_ITEMS = [
  { key: 'nav.philosophy', href: '#philosophy' },
  { key: 'nav.team',       href: '#team' },
  { key: 'nav.services',   href: '#services' },
  { key: 'nav.howItWorks',  href: '#how-it-works' },
  { key: 'nav.faq',        href: '#faq' },
  { key: 'nav.contact',    href: '#contact' },
];

export default function Header() {
  const { t, lang, toggle } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection Observer for active-link highlighting
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.querySelector(n.href)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="section-container py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="Trijya Home">
          <img
            src={brand.logo}
            alt="Trijya logo — concentric circles with yellow disc"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <span className="text-lg font-display font-bold text-trijya-ink">{brand.name}</span>
            <p className="text-[11px] leading-tight text-trijya-grey -mt-0.5">{brand.tagline}</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                activeSection === item.href
                  ? 'text-trijya-ink bg-trijya-yellow/20'
                  : 'text-trijya-grey hover:text-trijya-ink hover:bg-gray-50'
              }`}
            >
              {t(item.key)}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="ml-2 px-3 py-2 rounded-xl text-sm font-medium text-trijya-grey hover:text-trijya-ink hover:bg-gray-50 transition-colors"
            aria-label={`Switch language to ${lang === 'en' ? 'Marathi' : 'English'}`}
          >
            {t('lang.toggle')}
          </button>

          <a href="#contact" className="btn-primary ml-3 text-sm py-2">
            {t('hero.cta.book')}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-xl hover:bg-gray-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-30 bg-white/95 backdrop-blur-lg">
          <nav className="section-container py-6 flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.href
                    ? 'text-trijya-ink bg-trijya-yellow/20'
                    : 'text-trijya-grey hover:text-trijya-ink hover:bg-gray-50'
                }`}
              >
                {t(item.key)}
              </a>
            ))}

            <button
              onClick={() => { toggle(); closeMobile(); }}
              className="px-4 py-3 rounded-xl text-base font-medium text-trijya-grey hover:text-trijya-ink text-left"
            >
              {t('lang.toggle')}
            </button>

            <a
              href="#contact"
              onClick={closeMobile}
              className="btn-primary justify-center mt-4"
            >
              {t('hero.cta.book')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
