import React from 'react';

const FuturisticBotIcon = ({ size = 36, color = '#00fff7', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <radialGradient id="botGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00fff7" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0a0a23" stopOpacity="0.1" />
      </radialGradient>
      <linearGradient id="botFace" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00fff7" />
        <stop offset="1" stopColor="#00bfff" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#botGlow)" stroke="#00fff7" strokeWidth="2" />
    <ellipse cx="32" cy="38" rx="16" ry="12" fill="#10101a" stroke="url(#botFace)" strokeWidth="2.5" />
    <ellipse cx="32" cy="28" rx="10" ry="8" fill="#18182a" stroke="url(#botFace)" strokeWidth="2" />
    <rect x="26" y="16" width="12" height="6" rx="3" fill="#10101a" stroke="url(#botFace)" strokeWidth="1.5" />
    <circle cx="26" cy="28" r="2.5" fill="#00fff7" />
    <circle cx="38" cy="28" r="2.5" fill="#00fff7" />
    <rect x="28" y="40" width="8" height="3" rx="1.5" fill="#00fff7" opacity="0.7" />
    <path d="M20 38 Q16 32 20 26" stroke="#00fff7" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M44 38 Q48 32 44 26" stroke="#00fff7" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    <circle cx="32" cy="10" r="3" fill="#00fff7" stroke="#fff" strokeWidth="1" opacity="0.7" />
  </svg>
);

export default FuturisticBotIcon; 