import React from 'react';

export const ChevronIcon = ({ size = 12, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" data-svg="chevron-down">
    <polyline
      fill="none"
      stroke={color}
      strokeWidth="1.03"
      points="16 7 10 13 4 7"
    />
  </svg>
);

export default ChevronIcon;
