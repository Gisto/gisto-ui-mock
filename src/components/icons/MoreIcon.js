import React from 'react';

export const MoreIcon = ({ size = 12, color = '#fff' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="3" r="2" fill={color} />
    <circle cx="10" cy="10" r="2" fill={color} />
    <circle cx="10" cy="17" r="2" fill={color} />
  </svg>
);
