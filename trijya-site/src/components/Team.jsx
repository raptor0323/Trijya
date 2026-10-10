import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { team, contact } from '../data/site';
import { useLanguage } from '../data/i18n';

// ─── Initials Avatar ────────────────────────────────────────
function InitialsAvatar({ name }) {
  const initials = name
    .replace(/^(Dr\.|PLACEHOLDER)\s*/i, '')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-24 h-24 rounded-full bg-trijya-yellow flex items-center justify-center text-trijya-ink text-2xl font-display font-bold select-none"
      aria-hidden="true"
    >
      {initials || '?'}
    </div>
  );
}

// ─── Bio Modal ──────────────────────────────────────────────
function BioModal({ member, onClose }) {
  // Trap focus & close on Escape
  const modalRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    // Focus the modal
    modalRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const bookingHref =
    member.bookingLink ||
    `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
      `Hi Trijya, I would like to book a session with ${member.name}.`
    )}`;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} — bio`}
    >
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close bio"
        >
          <FiX size={20} />
        </button>

        <div className="flex items-center gap-4 mb-6">
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="w-20 h-20 rounded-full object-cover" />
          ) : (
            <InitialsAvatar name={member.name} />
          )}
          <div>
            <h3 className="text-xl font-display font-bold text-trijya-ink">{member.name}</h3>
            <p className="text-trijya-grey text-sm">{member.role}</p>
            <p className="text-trijya-grey-light text-xs mt-0.5">{member.qualifications}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-trijya-ink mb-1">About</h4>
            <p className="text-trijya-grey text-sm leading-relaxed">{member.bio}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-trijya-ink mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-trijya-grey">
            <span><strong>Languages:</strong> {member.languages.join(', ')}</span>
            <span><strong>Experience:</strong> {member.experience}</span>
          </div>
        </div>

        <a
          href={bookingHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center mt-6"
        >
          Book with {member.name.split(' ')[0]}
        </a>
      </motion.div>
    </motion.div>
  );
}

// ─── Team Card ──────────────────────────────────────────────
function TeamCard({ member, index }) {
  const [showBio, setShowBio] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  const { t } = useLanguage();

  const bookingHref =
    member.bookingLink ||
    `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
      `Hi Trijya, I would like to book a session with ${member.name}.`
    )}`;

  return (
    <>
      <motion.article
        ref={cardRef}
        className="trijya-card text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      >
        {/* Photo or initials */}
        <div className="mb-4">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-trijya-yellow/20"
            />
          ) : (
            <InitialsAvatar name={member.name} />
          )}
        </div>

        <h3 className="text-lg font-display font-bold text-trijya-ink">{member.name}</h3>
        <p className="text-sm text-trijya-yellow-dark font-medium mt-1">{member.role}</p>
        <p className="text-xs text-trijya-grey mt-1">{member.qualifications}</p>

        {/* Languages */}
        <p className="text-xs text-trijya-grey-light mt-2">
          {member.languages.join(' · ')} · {member.experience}
        </p>

        {/* Specialty chips */}
        <div className="flex flex-wrap gap-1.5 justify-center mt-3">
          {member.specialties.slice(0, 3).map((s) => (
            <span key={s} className="chip text-[10px]">{s}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-5 w-full">
          <button
            onClick={() => setShowBio(true)}
            className="flex-1 py-2 rounded-xl text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            {t('team.readBio')}
          </button>
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 rounded-xl text-sm font-medium bg-trijya-yellow text-trijya-ink hover:bg-trijya-yellow-dark transition-colors text-center"
          >
            {t('team.book')}
          </a>
        </div>
      </motion.article>

      <AnimatePresence>
        {showBio && <BioModal member={member} onClose={() => setShowBio(false)} />}
      </AnimatePresence>
    </>
  );
}

// ─── Team Section ───────────────────────────────────────────
export default function Team() {
  const { t } = useLanguage();

  return (
    <section id="team" className="scroll-mt-20 py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">{t('team.title')}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
