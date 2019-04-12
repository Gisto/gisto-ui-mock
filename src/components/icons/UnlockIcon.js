import React from 'react';

export const UnlockIcon = ({ size = 12, color = '#fff' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    data-svg="unlock"
  >
    <rect fill="none" stroke={color} x="3.5" y="8.5" width="13" height="10" />
    <path
      fill="none"
      stroke={color}
      d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"
    />
  </svg>
);

export default UnlockIcon;
