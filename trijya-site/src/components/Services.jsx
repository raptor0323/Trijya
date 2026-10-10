import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiUser, FiCpu, FiHeart, FiHome, FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { services } from '../data/site';
import { useLanguage } from '../data/i18n';

const ICONS = {
  user: FiUser,
  brain: FiCpu,
  heart: FiHeart,
  building: FiHome,
};

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  const { t } = useLanguage();
  const Icon = ICONS[service.icon] || FiUser;

  return (
    <motion.article
      ref={cardRef}
      className="trijya-card flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl bg-trijya-yellow/15 flex items-center justify-center mb-4">
        <Icon size={22} className="text-trijya-yellow-dark" />
      </div>

      <h3 className="text-lg font-display font-bold text-trijya-ink">{service.title}</h3>
      <p className="text-sm text-trijya-grey mt-2 flex-1">{service.shortDesc}</p>

      {/* Expandable details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
              <p className="text-sm text-trijya-grey leading-relaxed">{service.details}</p>
              <div className="flex flex-wrap gap-3 text-xs text-trijya-grey-light">
                <span>⏱ {service.duration}</span>
                <span>📍 {service.mode}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="flex items-center justify-between mt-4 pt-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-trijya-ink flex items-center gap-1 hover:text-trijya-yellow-dark transition-colors"
          aria-expanded={expanded}
        >
          {t('services.learnMore')}
          <FiChevronDown
            className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            size={14}
          />
        </button>
        <a
          href={`#contact?service=${encodeURIComponent(service.title)}`}
          className="text-sm font-medium px-4 py-1.5 rounded-xl bg-trijya-yellow text-trijya-ink hover:bg-trijya-yellow-dark transition-colors flex items-center gap-1"
        >
          {t('services.book')} <FiArrowRight size={14} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 bg-section-alt py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">{t('services.title')}</h2>
          <p className="mt-4 text-trijya-grey text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
