import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBookOpen, FiArrowUpRight, FiClock } from 'react-icons/fi';
import { resources } from '../data/site';
import { useLanguage } from '../data/i18n';

export default function Resources() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section id="resources" ref={sectionRef} className="scroll-mt-20 py-20 md:py-28 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip mb-3">Self-Help & Insights</span>
          <h2 className="section-heading mt-2">{t('resources.title')}</h2>
          <p className="mt-4 text-trijya-grey text-base sm:text-lg">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {resources.map((item, idx) => (
            <motion.article
              key={item.id}
              className="trijya-card flex flex-col justify-between group hover:border-trijya-yellow/40 relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-trijya-yellow/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-trijya-cream text-trijya-ink border border-trijya-yellow/30">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-trijya-grey-light">
                    <FiClock size={12} />
                    <span>3 min read</span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-trijya-ink group-hover:text-trijya-yellow-dark transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-trijya-grey leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-trijya-grey">Guided Resource</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-trijya-ink group-hover:text-trijya-yellow-dark transition-colors"
                >
                  <span>{t('resources.read')}</span>
                  <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
