import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from '../data/site';
import { useLanguage } from '../data/i18n';

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="stories" ref={sectionRef} className="scroll-mt-20 bg-section-alt py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">{t('testimonials.title')}</h2>
        </div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="trijya-card relative overflow-hidden">
            {/* Large quote mark */}
            <span className="absolute top-4 left-6 text-6xl text-trijya-yellow/30 font-serif leading-none select-none" aria-hidden="true">"</span>

            <div className="relative z-10 pt-8 px-4 pb-4 min-h-[180px] flex flex-col justify-center items-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="text-lg text-trijya-ink leading-relaxed italic">
                    {testimonials[current].quote}
                  </blockquote>
                  <p className="mt-4 text-sm text-trijya-grey font-medium">
                    {testimonials[current].attribution}
                  </p>
                  {testimonials[current].isSample && (
                    <p className="mt-2 text-xs text-trijya-grey-light">
                      {t('testimonials.sample')}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav buttons */}
            <div className="flex items-center justify-center gap-4 pb-4">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? 'bg-trijya-yellow' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
