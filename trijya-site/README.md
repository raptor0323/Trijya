# Trijya — Mental Health & Wellbeing

A modern, compassionate, and trustworthy website for **Trijya – Mental Health & Wellbeing** (Pune, Maharashtra, India).

Built with **React 19**, **Vite 7**, **Tailwind CSS v3**, **React Three Fiber (v9)**, **Three.js**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Linting
```bash
npm run build   # Builds production bundle to dist/
npm run lint    # Runs ESLint code check
```

---

## 🎨 Features & Architecture

- **Interactive 3D "Expanding Radius" Scene (`src/components/TrijyaScene.jsx`)**:
  - Concentric metallic orbital rings around a glowing golden core disc (`#FACC15`).
  - Animated 3D radius vector line and radiant orbital node visualizing the "Trijya" (radius) concept.
  - Scroll-driven ring expansion: rings and radius expand as the user scrolls down the page.
  - Interactive mouse & touch parallax inertia with ambient golden stardust particles.
  - WebGL ErrorBoundary with graceful SVG fallback (`RingsFallback.jsx`).
- **Single Source of Truth (`src/data/site.js`)**:
  - All content (brand, team members, services, testimonials, FAQs, helplines, contact info) is managed in this one file.
- **Bilingual Support (English & मराठी) (`src/data/i18n.jsx`)**:
  - Instant one-click language toggle between English and Marathi.
- **Comprehensive Clinical Sections**:
  - **Philosophy & Trijya Metaphor**: Animated concentric graphic with Devanagari typography.
  - **Meet the Team**: Psychologist profiles, credentials, specialties chips, and interactive "Read Bio" modal.
  - **Services**: Expandable details, session durations, and direct booking links.
  - **How It Works**: Visual step-by-step 4-stage client journey.
  - **Stories & Testimonials**: Client feedback carousel.
  - **Frequently Asked Questions**: Smooth accessible accordion.
  - **Resources & Articles**: Practical mental health reads.
  - **Appointment Booking & Contact**: Interactive form with service & mode selection (Online / In-person), consent checkbox, direct WhatsApp link, and 24×7 national crisis helplines.
  - **Mobile Action Bar**: Sticky bottom bar on mobile devices for one-tap calling, WhatsApp, and booking.

---

## 📝 Updating Content & Photos

### 1. Contact Information & Team Bios
Open `src/data/site.js` and update any fields marked `PLACEHOLDER`:
- Phone numbers, email, WhatsApp link
- Team names, roles, qualifications, experience, and bios
- Services descriptions and session pricing

### 2. Team Photos
1. Place photo files (WebP or PNG format recommended) in `public/assets/team/` (e.g. `public/assets/team/dr-smith.webp`).
2. In `src/data/site.js`, set `photo: '/assets/team/dr-smith.webp'` for the corresponding team member.
3. If no photo is provided, an elegant initials avatar in the brand color is automatically displayed.

### 3. Contact Form Backend
By default, the contact form simulates a successful submission. To connect to an actual form provider (like Formspree or Web3Forms):
1. Create a `.env` file based on `.env.example`:
   ```bash
   VITE_FORM_ENDPOINT="https://api.web3forms.com/submit"
   ```
2. The form will automatically POST submissions to that endpoint.

---

## 🌐 Free Static Hosting Deployment

The site is built as a pure static SPA with client-side routing, ready for free hosting on:

### Vercel
1. Install Vercel CLI: `npm i -g vercel` or connect via the Vercel Dashboard.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Pre-configured routing is included in `vercel.json`.

### Netlify
1. Connect repo via Netlify Dashboard or deploy with Netlify CLI: `netlify deploy --prod`.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Pre-configured SPA rewrite rule is included in `netlify.toml`.

### Cloudflare Pages
1. Connect your repository in Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `dist`

---

## 🔒 Confidentiality & Crisis Notice
This site includes free 24×7 emergency mental health helplines for India (Tele-MANAS `14416`, KIRAN `1800-599-0019`, Vandrevala Foundation, iCall).
