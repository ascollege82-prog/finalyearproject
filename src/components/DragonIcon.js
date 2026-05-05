import React from 'react';

const DragonIcon = ({ size = 32, color = 'black', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="6" fill="none" />
    <path
      d="M60 20c-7 2-13 7-17 13-4 6-6 13-5 20-4-2-7-6-7-10 0-2 1-4 2-6-5 2-8 7-8 12 0 7 6 13 13 13 2 0 4 0 6-1-2 3-3 6-3 9 0 7 6 13 13 13 6 0 11-4 12-10 1-3 0-6-2-8 2 0 4 0 6-1 7-2 12-8 12-15 0-7-5-13-12-15-2-1-4-1-6-1z"
      fill={color}
    />
    <path
      d="M50 60c-3 2-6 5-7 9 2-1 4-2 7-2 3 0 5 1 7 2-1-4-4-7-7-9z"
      fill={color}
    />
    <path
      d="M65 35c-2 1-4 3-5 5 2-1 4-1 6 0 2 1 3 3 3 5 0 2-1 4-3 5-2 1-4 1-6 0 1 2 3 4 5 5 3 1 6 0 8-2 2-2 3-5 2-8-1-3-4-5-7-5z"
      fill={color}
    />
  </svg>
);

export default DragonIcon; 