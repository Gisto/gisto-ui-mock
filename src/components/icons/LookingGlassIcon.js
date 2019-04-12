import React from 'react';

export const LookingGlassIcon = ({ size = 12, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" data-svg="search">
    <circle fill="none" stroke={color} strokeWidth="1.1" cx="9" cy="9" r="7" />
    <path
      fill="none"
      stroke={color}
      strokeWidth="1.1"
      d="M14,14 L18,18 L14,14 Z"
    />
  </svg>
);

export default LookingGlassIcon;
