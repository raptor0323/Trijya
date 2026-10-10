import React from 'react';
import { FiPhone, FiMessageCircle, FiCalendar } from 'react-icons/fi';
import { contact } from '../data/site';

export default function MobileActionBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-3 left-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-2 flex items-center justify-between gap-2"
    >
      <a
        href={contact.phoneHref}
        className="flex-1 py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-trijya-ink flex items-center justify-center gap-1.5 text-xs font-semibold transition-colors"
        aria-label="Call clinic directly"
      >
        <FiPhone size={15} className="text-trijya-grey" />
        <span>Call</span>
      </a>

      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 flex items-center justify-center gap-1.5 text-xs font-semibold transition-colors"
        aria-label="Message on WhatsApp"
      >
        <FiMessageCircle size={15} className="text-[#25D366]" />
        <span>WhatsApp</span>
      </a>

      <a
        href="#contact"
        className="flex-1 py-2.5 px-3 rounded-xl bg-trijya-yellow hover:bg-trijya-yellow-dark text-trijya-ink flex items-center justify-center gap-1.5 text-xs font-semibold shadow-sm transition-colors"
        aria-label="Book a therapy session"
      >
        <FiCalendar size={15} />
        <span>Book</span>
      </a>
    </aside>
  );
}
