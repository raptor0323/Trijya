import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiShield, FiHeart, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../data/i18n';
import RadiusRings from './RadiusRings';

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

export default function Hero() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  const fadeUp = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: 'easeOut' },
      };

  return (
    <section
      id="home"
      className="scroll-mt-20 min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-b from-white via-trijya-cream/30 to-white"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-trijya-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 w-full">
        {/* Left Column: Mission & CTAs */}
        <motion.div className="lg:w-1/2 text-center lg:text-left" {...fadeUp}>
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-gray-200/80 mb-6 text-xs font-semibold text-trijya-ink">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting New Clients • Pune & Online</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-trijya-ink leading-[1.15] tracking-tight">
            {t('hero.headline').split('Trijya').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <React.Fragment key={i}>
                  {part}
                  <span className="text-trijya-yellow-dark relative inline-block">
                    Trijya
                    <span className="absolute bottom-1.5 left-0 w-full h-2 bg-trijya-yellow/30 -z-10 rounded-sm" />
                  </span>
                </React.Fragment>
              ) : (
                part
              )
            )}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-trijya-grey max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t('hero.subtext')}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="btn-primary text-base py-3.5 px-7">
              {t('hero.cta.book')} <FiArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary text-base py-3.5 px-7">
              {t('hero.cta.services')}
            </a>
          </div>

          {/* Quick Credibility Features */}
          <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-trijya-grey">
            <div className="flex items-center gap-1.5">
              <FiShield className="text-trijya-yellow-dark" size={15} />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FiHeart className="text-rose-500" size={15} />
              <span>Evidence-Based</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FiMapPin className="text-trijya-ink" size={15} />
              <span>Marathi & English</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hand-painted Illustration & SVG Scene */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center w-full"
          {...(reducedMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.92 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.2 },
              })}
        >
          <div className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px] aspect-square relative flex items-center justify-center">
            {/* Ambient Background Aura */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-trijya-yellow/20 via-amber-100/30 to-transparent blur-2xl pointer-events-none" />

            <RadiusRings reducedMotion={reducedMotion} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
