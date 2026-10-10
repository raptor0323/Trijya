import React from 'react';
import { brand, helplines } from '../data/site';
import { useLanguage } from '../data/i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-trijya-ink text-white pt-16 pb-24 md:pb-16 border-t border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group" aria-label="Trijya Home">
              <div className="w-10 h-10 rounded-full bg-trijya-yellow flex items-center justify-center p-1">
                <img
                  src={brand.logo}
                  alt="Trijya logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-display font-bold text-white tracking-wide">
                  {brand.name}
                </span>
                <p className="text-xs text-gray-400 font-serif">त्रिज्या • {brand.tagline}</p>
              </div>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Supporting emotional, mental and behavioural growth in Pune, Maharashtra. Growing outward from your centre.
            </p>
            <div className="pt-2 text-xs text-gray-400">
              <p>📍 Pune, Maharashtra, India</p>
              <p className="mt-1">🌐 Online & In-person Sessions</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-trijya-yellow">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  {t('nav.philosophy')}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  {t('nav.team')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {t('nav.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t('nav.faq')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Crisis Helplines */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-trijya-yellow">
              24×7 Emergency Helplines
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t('footer.crisis')}
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {helplines.map((h, i) => (
                <div key={i} className="p-3 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="text-gray-300 font-medium">{h.name}</div>
                  <a
                    href={`tel:${h.number.replace(/\D/g, '')}`}
                    className="text-trijya-yellow font-bold text-sm block mt-0.5 hover:underline"
                  >
                    {h.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left max-w-xl">
            {t('footer.disclaimer')}
          </p>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Trijya. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
