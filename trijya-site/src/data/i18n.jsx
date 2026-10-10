/**
 * i18n.js — Lightweight EN / मराठी dictionary.
 * No library needed. Import the hook and wrap text nodes.
 *
 * Usage:
 *   import { useLanguage, LanguageProvider } from '../data/i18n';
 *   const { t, lang, toggle } = useLanguage();
 *   <p>{t('hero.headline')}</p>
 */

import React, { createContext, useContext, useState, useCallback } from 'react';

const dict = {
  en: {
    'hero.headline': 'Extend your Trijya — grow from your centre outward',
    'hero.subtext':
      'Compassionate, confidential, evidence-based mental health care in Pune. Online & in-person, in English & Marathi.',
    'hero.cta.book': 'Book a Session',
    'hero.cta.services': 'Explore Services',
    'hero.languages': 'Languages: English & Marathi',
    'hero.mode': 'Online & In-person',
    'nav.philosophy': 'Philosophy',
    'nav.team': 'Team',
    'nav.services': 'Services',
    'nav.howItWorks': 'How It Works',
    'nav.stories': 'Stories',
    'nav.faq': 'FAQ',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'philosophy.title': 'The Trijya Metaphor',
    'philosophy.body':
      'Trijya (त्रिज्या) means "radius" — the line from your centre to your edge. We help you extend that radius emotionally, mentally and physically through guided therapy, practical skills, and supportive counselling.',
    'philosophy.p1': 'Person-centred, evidence-based approaches',
    'philosophy.p2': 'Culturally sensitive care in Marathi & English',
    'philosophy.p3': 'Confidentiality and informed consent at every step',
    'team.title': 'Meet the Team',
    'team.readBio': 'Read Bio',
    'team.book': 'Book with',
    'services.title': 'Our Services',
    'services.subtitle': 'Therapeutic services designed to expand your Trijya safely and sustainably.',
    'services.learnMore': 'Learn more',
    'services.book': 'Book',
    'howItWorks.title': 'How It Works',
    'testimonials.title': 'Client Stories',
    'testimonials.sample': '(Sample testimonial — replace with real, consented feedback)',
    'faq.title': 'Frequently Asked Questions',
    'resources.title': 'Resources & Articles',
    'resources.subtitle': 'Short reads and tools to support daily wellbeing.',
    'resources.read': 'Read',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'For appointment requests and enquiries, use the form or reach out directly.',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.service': 'Preferred Service',
    'contact.serviceDefault': 'Choose a service',
    'contact.mode': 'Preferred Mode',
    'contact.modeOnline': 'Online',
    'contact.modeInPerson': 'In-person',
    'contact.modeEither': 'Either',
    'contact.message': 'Message',
    'contact.consent':
      'I consent to Trijya storing my information for the purpose of responding.',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending…',
    'contact.success': 'Thank you! We will get back to you within 24 hours.',
    'contact.error': 'Something went wrong. Please try again or contact us directly.',
    'contact.details': 'Contact Details',
    'contact.newsletter': 'Newsletter',
    'contact.newsletterDesc': 'Subscribe for short mental health tips and workshop updates.',
    'contact.subscribe': 'Subscribe',
    'footer.crisis': 'If you are in immediate distress, please contact a helpline:',
    'footer.disclaimer':
      'This website is informational and does not substitute for professional emergency care.',
    'footer.privacy': 'Privacy & Consent',
    'footer.terms': 'Terms',
    'lang.toggle': 'मराठी',
  },
  mr: {
    'hero.headline': 'तुमची त्रिज्या वाढवा — केंद्रापासून बाहेर वाढा',
    'hero.subtext':
      'पुण्यात सहानुभूतीपूर्ण, गोपनीय, पुराव्यावर आधारित मानसिक आरोग्य सेवा. ऑनलाइन आणि वैयक्तिक, इंग्रजी आणि मराठीत.',
    'hero.cta.book': 'सत्र बुक करा',
    'hero.cta.services': 'सेवा पहा',
    'hero.languages': 'भाषा: इंग्रजी आणि मराठी',
    'hero.mode': 'ऑनलाइन आणि वैयक्तिक',
    'nav.philosophy': 'तत्त्वज्ञान',
    'nav.team': 'टीम',
    'nav.services': 'सेवा',
    'nav.howItWorks': 'कसे कार्य करते',
    'nav.stories': 'कथा',
    'nav.faq': 'वारंवार विचारले जाणारे प्रश्न',
    'nav.resources': 'संसाधने',
    'nav.contact': 'संपर्क',
    'philosophy.title': 'त्रिज्या रूपक',
    'philosophy.body':
      'त्रिज्या म्हणजे "radius" — तुमच्या केंद्रापासून तुमच्या सीमेपर्यंतची रेषा. मार्गदर्शित थेरपी, व्यावहारिक कौशल्ये आणि आधारभूत समुपदेशनाद्वारे आम्ही तुम्हाला ती त्रिज्या भावनिक, मानसिक आणि शारीरिकदृष्ट्या विस्तारण्यात मदत करतो.',
    'philosophy.p1': 'व्यक्ती-केंद्रित, पुराव्यावर आधारित दृष्टिकोन',
    'philosophy.p2': 'मराठी आणि इंग्रजीत सांस्कृतिकदृष्ट्या संवेदनशील काळजी',
    'philosophy.p3': 'प्रत्येक टप्प्यावर गोपनीयता आणि माहितीपूर्ण संमती',
    'team.title': 'टीमला भेटा',
    'team.readBio': 'बायो वाचा',
    'team.book': 'यांच्याकडे बुक करा',
    'services.title': 'आमच्या सेवा',
    'services.subtitle': 'तुमची त्रिज्या सुरक्षितपणे आणि शाश्वतपणे विस्तारण्यासाठी डिझाइन केलेल्या उपचारात्मक सेवा.',
    'services.learnMore': 'अधिक जाणून घ्या',
    'services.book': 'बुक करा',
    'howItWorks.title': 'कसे कार्य करते',
    'testimonials.title': 'ग्राहकांच्या कथा',
    'testimonials.sample': '(नमुना प्रशंसापत्र — वास्तविक, संमती दिलेल्या अभिप्रायाने बदला)',
    'faq.title': 'वारंवार विचारले जाणारे प्रश्न',
    'resources.title': 'संसाधने आणि लेख',
    'resources.subtitle': 'दैनंदिन कल्याणासाठी लहान वाचन आणि साधने.',
    'resources.read': 'वाचा',
    'contact.title': 'संपर्क साधा',
    'contact.subtitle': 'अपॉइंटमेंट विनंत्या आणि चौकशींसाठी, फॉर्म वापरा किंवा थेट संपर्क साधा.',
    'contact.name': 'पूर्ण नाव',
    'contact.email': 'ईमेल',
    'contact.phone': 'फोन',
    'contact.service': 'पसंतीची सेवा',
    'contact.serviceDefault': 'सेवा निवडा',
    'contact.mode': 'पसंतीचा मोड',
    'contact.modeOnline': 'ऑनलाइन',
    'contact.modeInPerson': 'वैयक्तिक',
    'contact.modeEither': 'कोणतेही',
    'contact.message': 'संदेश',
    'contact.consent':
      'प्रतिसाद देण्याच्या उद्देशाने माझी माहिती संग्रहित करण्यास मी संमती देतो.',
    'contact.send': 'संदेश पाठवा',
    'contact.sending': 'पाठवत आहे…',
    'contact.success': 'धन्यवाद! आम्ही 24 तासांच्या आत तुम्हाला प्रतिसाद देऊ.',
    'contact.error': 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा किंवा थेट संपर्क साधा.',
    'contact.details': 'संपर्क तपशील',
    'contact.newsletter': 'वृत्तपत्र',
    'contact.newsletterDesc': 'लहान मानसिक आरोग्य टिप्स आणि कार्यशाळा अद्यतनांसाठी सदस्यता घ्या.',
    'contact.subscribe': 'सदस्यता घ्या',
    'footer.crisis': 'तुम्ही तात्काळ संकटात असल्यास, कृपया हेल्पलाइनशी संपर्क साधा:',
    'footer.disclaimer':
      'ही वेबसाइट माहितीपूर्ण आहे आणि व्यावसायिक आणीबाणी काळजीचा पर्याय नाही.',
    'footer.privacy': 'गोपनीयता आणि संमती',
    'footer.terms': 'अटी',
    'lang.toggle': 'English',
  },
};

const LangContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'mr' : 'en')), []);
  const t = useCallback((key) => dict[lang]?.[key] || dict.en[key] || key, [lang]);
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
