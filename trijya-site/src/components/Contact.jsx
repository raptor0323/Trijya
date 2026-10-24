import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheck, FiSend, FiMessageCircle, FiAlertCircle } from 'react-icons/fi';
import { contact, helplines, services } from '../data/site';
import { useLanguage } from '../data/i18n';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    mode: 'Online',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.consent) return;

    setStatus('sending');

    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error('Submission failed');
      } else {
        // Simulated response when endpoint is placeholder
        await new Promise((r) => setTimeout(r, 900));
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        mode: 'Online',
        message: '',
        consent: false,
      });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28 bg-section-alt">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="chip mb-3">Begin Your Journey</span>
          <h2 className="section-heading mt-2">{t('contact.title')}</h2>
          <p className="mt-4 text-trijya-grey text-base sm:text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* Booking / Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-trijya-ink mb-6">
              Request an Appointment
            </h3>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <FiCheck size={24} />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">{t('contact.success')}</h4>
                <p className="text-sm text-emerald-700">
                  We look forward to connecting with you. If you need urgent assistance, please check our crisis helplines.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-3 px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-xl hover:bg-emerald-200 transition-colors"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-trijya-ink mb-1.5">
                      {t('contact.name')} *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-trijya-ink mb-1.5">
                      {t('contact.email')} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-trijya-ink mb-1.5">
                      {t('contact.phone')}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-trijya-ink mb-1.5">
                      {t('contact.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input bg-white cursor-pointer"
                    >
                      <option value="">{t('contact.serviceDefault')}</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-trijya-ink mb-1.5">
                    {t('contact.mode')}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Online', 'In-person', 'Either'].map((mode) => (
                      <button
                        type="button"
                        key={mode}
                        onClick={() => setFormData((prev) => ({ ...prev, mode }))}
                        className={`py-2 text-xs font-medium rounded-xl border transition-all ${
                          formData.mode === mode
                            ? 'bg-trijya-ink text-white border-trijya-ink shadow-sm'
                            : 'bg-white text-trijya-grey border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {mode === 'Online'
                          ? t('contact.modeOnline')
                          : mode === 'In-person'
                          ? t('contact.modeInPerson')
                          : t('contact.modeEither')}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-trijya-ink mb-1.5">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly tell us what you'd like support with..."
                    className="form-input resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    id="consent"
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-trijya-yellow focus:ring-trijya-yellow"
                  />
                  <label htmlFor="consent" className="text-xs text-trijya-grey leading-relaxed">
                    {t('contact.consent')}
                  </label>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 text-xs text-red-700 bg-red-50 rounded-xl border border-red-200">
                    <FiAlertCircle size={16} />
                    <span>{t('contact.error')}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending' || !formData.consent}
                    className="w-full btn-primary justify-center text-sm py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      t('contact.sending')
                    ) : (
                      <>
                        <FiSend size={16} />
                        <span>{t('contact.send')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Direct Details & Helplines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-gray-100">
              <h4 className="text-xl font-display font-bold text-trijya-ink mb-5">
                {t('contact.details')}
              </h4>

              <div className="space-y-4 text-sm">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-3 text-trijya-grey hover:text-trijya-ink transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-trijya-cream flex items-center justify-center text-trijya-yellow-dark group-hover:scale-105 transition-transform">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-trijya-grey-light font-medium">Direct Line</span>
                    <span className="font-semibold text-trijya-ink">{contact.phone}</span>
                  </div>
                </a>

                <a
                  href={contact.emailHref}
                  className="flex items-center gap-3 text-trijya-grey hover:text-trijya-ink transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-trijya-cream flex items-center justify-center text-trijya-yellow-dark group-hover:scale-105 transition-transform">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-trijya-grey-light font-medium">Email</span>
                    <span className="font-semibold text-trijya-ink">{contact.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-trijya-grey">
                  <div className="w-10 h-10 rounded-2xl bg-trijya-cream flex items-center justify-center text-trijya-yellow-dark">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-trijya-grey-light font-medium">Location</span>
                    <span className="font-semibold text-trijya-ink">{contact.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-trijya-grey">
                  <div className="w-10 h-10 rounded-2xl bg-trijya-cream flex items-center justify-center text-trijya-yellow-dark">
                    <FiClock size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-trijya-grey-light font-medium">Hours</span>
                    <span className="font-semibold text-trijya-ink">{contact.hours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba5a] shadow-sm transition-all"
                >
                  <FiMessageCircle size={18} />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Crisis Helplines Alert */}
            <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 font-display font-bold text-sm mb-2">
                <FiAlertCircle className="text-amber-600" size={18} />
                <span>24×7 Free Support Helplines</span>
              </div>
              <p className="text-xs text-amber-800 mb-4 leading-relaxed">
                If you or someone you know is in severe emotional distress or crisis, please call these free national helplines:
              </p>
              <div className="space-y-2 text-xs">
                {helplines.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/80 p-2.5 rounded-xl border border-amber-200/50">
                    <div>
                      <span className="font-semibold text-trijya-ink block">{h.name}</span>
                      <span className="text-[11px] text-trijya-grey">{h.description}</span>
                    </div>
                    <a
                      href={`tel:${h.number.replace(/\D/g, '')}`}
                      className="font-bold text-trijya-ink bg-trijya-yellow px-3 py-1 rounded-lg hover:bg-trijya-yellow-dark transition-colors"
                    >
                      {h.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
