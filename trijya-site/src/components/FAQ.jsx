import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { faq } from '../data/site';
import { useLanguage } from '../data/i18n';

function FAQItem({ item, index, isOpen, onToggle }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={itemRef}
      className="border-b border-gray-100 last:border-0"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
        id={`faq-q-${index}`}
        aria-controls={`faq-a-${index}`}
      >
        <span className="text-base font-medium text-trijya-ink pr-4 group-hover:text-trijya-yellow-dark transition-colors">
          {item.q}
        </span>
        <FiChevronDown
          className={`flex-shrink-0 text-trijya-grey transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={18}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-a-${index}`}
            role="region"
            aria-labelledby={`faq-q-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-trijya-grey leading-relaxed pr-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">{t('faq.title')}</h2>
        </div>

        <div className="max-w-2xl mx-auto trijya-card">
          {faq.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
