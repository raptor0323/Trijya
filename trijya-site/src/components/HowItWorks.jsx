import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { howItWorks } from '../data/site';
import { useLanguage } from '../data/i18n';

export default function HowItWorks() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" ref={sectionRef} className="scroll-mt-20 py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">{t('howItWorks.title')}</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" aria-hidden="true" />

          {howItWorks.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.step}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Step number bubble */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-trijya-yellow text-trijya-ink font-display font-bold text-lg flex items-center justify-center z-10 shadow-glow-yellow">
                  {step.step}
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  }`}
                >
                  <div className="trijya-card">
                    <h3 className="text-lg font-display font-bold text-trijya-ink">{step.title}</h3>
                    <p className="text-sm text-trijya-grey mt-2">{step.desc}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
