import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function RadiusRings({ reducedMotion }) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.15]);
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.svg
        style={reducedMotion ? {} : { scale }}
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="hand-drawn" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Watercolor Blobs */}
        <g filter="url(#hand-drawn)">
          <path d="M 150 150 C 250 50, 400 150, 350 300 C 300 450, 100 400, 150 150 Z" fill="#FACC15" opacity="0.25" />
          <path d="M 250 100 C 350 50, 450 200, 350 400 C 200 450, 100 250, 250 100 Z" fill="#FEF3C7" opacity="0.6" />
          <path d="M 100 250 C 150 150, 300 200, 250 350 C 150 400, 50 350, 100 250 Z" fill="#FACC15" opacity="0.15" />
        </g>

        {/* Concentric Rings */}
        <g filter="url(#hand-drawn)" fill="none" strokeWidth="2.5">
          <circle cx="250" cy="250" r="90" stroke="#111827" strokeOpacity="0.06" />
          <circle cx="250" cy="250" r="150" stroke="#111827" strokeOpacity="0.1" />
          <circle cx="250" cy="250" r="210" stroke="#FACC15" strokeOpacity="0.7" strokeDasharray="12 8" />
          <circle cx="250" cy="250" r="270" stroke="#111827" strokeOpacity="0.05" />
        </g>
      </motion.svg>
      
      {/* Illustration */}
      <img 
        src="/illustrations/hero-people.webp" 
        alt="Two people in conversation" 
        className="relative z-10 w-full h-auto object-contain mix-blend-multiply drop-shadow-sm"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}
