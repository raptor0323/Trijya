/**
 * site.js — Single source of truth for all Trijya content.
 *
 * ⚠  PLACEHOLDERS: Every value prefixed with "PLACEHOLDER" or wrapped in
 *    angle-brackets <like-this> must be replaced with real content before launch.
 *
 * Import in components:
 *   import { brand, contact, team, services, … } from '@/data/site';
 *   (or relative path: '../data/site')
 */

// ─── Brand ──────────────────────────────────────────────────
export const brand = {
  name: 'Trijya',
  tagline: 'Mental Health & Wellbeing',
  taglineMarathi: 'मानसिक आरोग्य आणि कल्याण',
  mission:
    'Extend your Trijya — grow from your centre outward.',
  description:
    'At Trijya we support emotional, mental and behavioural growth through counselling, therapy and wellness programs. Our experienced psychologists provide compassionate, confidential, evidence-based care suited to your journey.',
  logo: '/trijya_logo_vector.svg',
  favicon: '/trijya_logo_vector.svg',
};

// ─── Contact ────────────────────────────────────────────────
export const contact = {
  phone: '+91 XXXXX XXXXX',         // PLACEHOLDER — replace with real number
  phoneHref: 'tel:+91XXXXXXXXXX',   // PLACEHOLDER
  whatsapp: '+91 XXXXX XXXXX',      // PLACEHOLDER
  whatsappHref: 'https://wa.me/91XXXXXXXXXX?text=Hi%20Trijya%2C%20I%20would%20like%20to%20book%20a%20session.',
  email: 'hello@trijya.in',         // PLACEHOLDER
  emailHref: 'mailto:hello@trijya.in',
  address: 'PLACEHOLDER — Pune | Nashik | Bramhapuri, Maharashtra, India',
  mapsLink: 'https://maps.google.com/?q=PLACEHOLDER',  // PLACEHOLDER — paste Google Maps share link
  hours: 'Mon–Sat, 10 AM – 7 PM IST',
  mode: 'Online & In-person',
};

// ─── Team ───────────────────────────────────────────────────
export const team = [
  {
    id: 'member-1',
    name: 'Rutuja',   // PLACEHOLDER
    role: 'Clinical Psychologist',
    qualifications: 'Master\'s in Clinical Psychology',  // PLACEHOLDER
    languages: ['English', 'Marathi', 'Hindi', 'Sign Language'],
    experience: '2+ years',             // PLACEHOLDER
    bio: 'It\'s never too late to start!',
    specialties: ['Anxiety & Depression', 'Trauma (EMDR)', 'Personality Assessment'],
    photo: null,                         // PLACEHOLDER — set to '/photos/member-1.webp' when ready
    bookingLink: null,                   // PLACEHOLDER — e.g. Calendly link or WhatsApp deep-link
  },
  {
    id: 'member-2',
    name: 'Samidha',           // PLACEHOLDER
    role: 'Clinical Psychologist',
    qualifications: 'Master\'s in Clinical Psychology',  // PLACEHOLDER
    languages: ['English', 'Marathi','Hindi'],
    experience: '  2+ years',             // PLACEHOLDER
    bio: 'Here to hold space as you gow into the best version of yourself! ',
    specialties: ['Relationship Issues', 'Self-esteem', 'Career Counselling', 'Adolescent Therapy'],
    photo: null,
    bookingLink: null,
  },
  {
    id: 'member-3',
    name: 'Mansi',           // PLACEHOLDER
    role: 'Clinical Psychologist',
    qualifications: 'Master\'s in Clinical Psychology',  // PLACEHOLDER
    languages: ['Marathi', 'English','Hindi','Telugu'],
    experience: '  2+ years',             // PLACEHOLDER
    bio: 'Every story is unique and I\'m here to listen yours!',
    specialties: ['Personality Assessment','Trauma','CBT','ACT','Mindfulness', 'Group Therapy', 'Stress Management', 'Wellness Workshops'],
    photo: null,
    bookingLink: null,
  },
];

// ─── Services ───────────────────────────────────────────────
export const services = [
  {
    id: 'individual-counselling',
    title: 'Individual Counselling',
    shortDesc: 'Evidence-based, person-centred support to build resilience and self-understanding.',
    details: 'One-on-one sessions focused on your specific concerns. We use integrative approaches tailored to your needs, including supportive counselling, psychodynamic exploration, and solution-focused techniques.',
    duration: '50 minutes per session',
    mode: 'Online & In-person',
    icon: 'user',
  },
  {
    id: 'therapy-cbt-act',
    title: 'Therapy (CBT / ACT)',
    shortDesc: 'Structured therapy to relieve symptoms, change patterns and recover balance.',
    details: 'Cognitive Behavioural Therapy (CBT) and Acceptance & Commitment Therapy (ACT) are structured, goal-oriented approaches. Expect homework, skill-building, and measurable progress over 8–16 sessions.',
    duration: '50 minutes per session, typically 8–16 sessions',
    mode: 'Online & In-person',
    icon: 'brain',
  },
  {
    id: 'wellness-programs',
    title: 'Wellness Programs',
    shortDesc: 'Group sessions, mindfulness, and wellness workshops to strengthen your Trijya.',
    details: 'Small-group programs covering mindfulness, emotional regulation, and self-care. Designed to build community and shared growth in a safe, supportive environment.',
    duration: '4–8 week programmes',
    mode: 'Online & In-person',
    icon: 'heart',
  },
  {
    id: 'corporate-school-workshops',
    title: 'Corporate & School Workshops',
    shortDesc: 'Mental health awareness and stress management tailored for organisations.',
    details: 'Interactive workshops for companies and schools on topics like burnout prevention, emotional intelligence, peer support, and exam stress. Customised content for your organisation.',
    duration: '1–3 hours per session',
    mode: 'On-site or Online',
    icon: 'building',
  },
];

// ─── How It Works ───────────────────────────────────────────
export const howItWorks = [
  {
    step: 1,
    title: 'Reach Out',
    desc: 'Send us a message, call, or book online. We respond within 24 hours.',
  },
  {
    step: 2,
    title: 'Free Intro Call',
    desc: 'A 15-minute phone call to understand your needs and match you with the right professional.',
  },
  {
    step: 3,
    title: 'First Session',
    desc: 'Your therapist will listen, assess, and collaboratively plan your path forward.',
  },
  {
    step: 4,
    title: 'Grow Your Trijya',
    desc: 'Regular sessions, practical tools, and ongoing support to expand your wellbeing.',
  },
];

// ─── Testimonials ───────────────────────────────────────────
// ⚠  SAMPLE testimonials only — these are fictional.
//    Replace with real, consent-obtained testimonials.
//    Keep them anonymous to protect client confidentiality.
export const testimonials = [
  {
    id: 't1',
    quote: 'Trijya gave me the tools to manage my anxiety. I feel more in control of my life than I have in years.',
    attribution: '— Client, Age 28',
    isSample: true,
  },
  {
    id: 't2',
    quote: 'The counselling sessions helped me navigate a difficult career transition. I am grateful for the support.',
    attribution: '— Client, Age 34',
    isSample: true,
  },
  {
    id: 't3',
    quote: 'The group wellness program was a transformative experience. I found community and clarity.',
    attribution: '— Workshop Participant',
    isSample: true,
  },
];

// ─── FAQ ────────────────────────────────────────────────────
export const faq = [
  {
    q: 'Is therapy confidential?',
    a: 'Absolutely. Everything discussed in sessions is confidential, protected by professional ethics and Indian law. The only exceptions are when there is an imminent risk of harm to yourself or others — in which case we will discuss next steps with you.',
  },
  {
    q: 'How much do sessions cost?',
    a: 'PLACEHOLDER — Fees vary by service type. Please reach out for our current fee schedule. We believe in transparent pricing and can discuss payment options during the intro call.',
  },
  {
    q: 'Can I have sessions online?',
    a: 'Yes. We offer secure video sessions that are just as effective as in-person meetings. You can choose whichever mode feels most comfortable.',
  },
  {
    q: 'Which languages are sessions available in?',
    a: 'We offer sessions in English, Marathi, and Hindi. Let us know your preference when you book.',
  },
  {
    q: 'What should I expect in my first session?',
    a: 'The first session is about getting to know you — your concerns, your history, and your goals. Your therapist will explain the process, answer your questions, and together you will outline a plan. There is no pressure, and you set the pace.',
  },
  {
    q: 'How do I know if I need therapy?',
    a: 'If you are struggling with emotions, relationships, work, or daily functioning — or simply want to understand yourself better — therapy can help. You do not need a diagnosis to seek support.',
  },
];

// ─── Resources / Articles ───────────────────────────────────
export const resources = [
  {
    id: 'r1',
    title: 'Managing Anxiety',
    summary: 'Simple breathing exercises and short CBT techniques you can use today.',
    category: 'Self-help',
    link: null, // PLACEHOLDER — link to full article when ready
  },
  {
    id: 'r2',
    title: 'Sleep & Routine',
    summary: 'Practical steps to rebuild your sleep hygiene and daily routine.',
    category: 'Wellness',
    link: null,
  },
  {
    id: 'r3',
    title: 'Mindfulness Practice',
    summary: 'A short guided mindfulness practice you can do at home in 10 minutes.',
    category: 'Mindfulness',
    link: null,
  },
];

// ─── Social Links ───────────────────────────────────────────
export const socialLinks = [
  { platform: 'Instagram', url: 'https://instagram.com/PLACEHOLDER', icon: 'instagram' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/PLACEHOLDER', icon: 'linkedin' },
  // Add more as needed: Twitter/X, Facebook, YouTube
];

// ─── Helplines ──────────────────────────────────────────────
// ⚠  VERIFY these numbers before launch — helpline numbers can change.
export const helplines = [
  {
    name: 'Tele-MANAS',
    number: '14416',
    description: 'Government of India mental health helpline (24×7)',
  },
  {
    name: 'KIRAN Mental Health',
    number: '1800-599-0019',
    description: 'Toll-free 24×7 helpline by Ministry of Social Justice',
  },
  {
    name: 'Vandrevala Foundation',
    number: '1860-2662-345',
    description: '24×7 multilingual mental health support',
  },
  {
    name: 'iCall (TISS)',
    number: '9152987821',
    description: 'Mon–Sat, 8 AM – 10 PM',
  },
];
