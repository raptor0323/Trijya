import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../data/i18n';

export default function Philosophy() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const pills = [
    t('philosophy.p1'),
    t('philosophy.p2'),
    t('philosophy.p3'),
  ];

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="scroll-mt-20 bg-section-alt py-20 md:py-28"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-heading">{t('philosophy.title')}</h2>
            <p className="mt-6 text-trijya-grey text-lg leading-relaxed">
              {t('philosophy.body')}
            </p>
            <ul className="mt-6 space-y-3">
              {pills.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-trijya-yellow flex-shrink-0" aria-hidden="true" />
                  <span className="text-trijya-ink">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Animated concentric rings graphic */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <svg viewBox="0 0 320 320" className="w-full h-full" aria-hidden="true">
                <defs>
                  <radialGradient id="phDisc" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FACC15" />
                    <stop offset="100%" stopColor="#EAB308" stopOpacity="0.7" />
                  </radialGradient>
                </defs>

                {/* Rings with animated stroke-dasharray */}
                {[150, 130, 110, 90, 70, 50].map((r, i) => (
                  <circle
                    key={i}
                    cx="160"
                    cy="160"
                    r={r}
                    stroke="#111827"
                    strokeWidth={0.5 + i * 0.1}
                    fill="none"
                    opacity={0.12 + i * 0.05}
                    className="origin-center"
                    style={{
                      animation: isInView
                        ? `spin ${20 + i * 5}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`
                        : 'none',
                    }}
                  />
                ))}

                {/* Centre */}
                <circle cx="160" cy="160" r="28" fill="url(#phDisc)" />

                {/* Radius line */}
                <line x1="160" y1="160" x2="245" y2="160" stroke="#FACC15" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 4" />
                <circle cx="245" cy="160" r="3" fill="#FACC15" opacity="0.6" />

                {/* त्रि label */}
                <text x="160" y="165" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="600" fontFamily="'Noto Sans Devanagari', serif">
                  त्रिज्या
                </text>
              </svg>

              {/* CSS keyframes for the ring spin */}
              <style>{`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to   { transform: rotate(360deg); }
                }
                @media (prefers-reduced-motion: reduce) {
                  circle { animation: none !important; }
                }
              `}</style>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
