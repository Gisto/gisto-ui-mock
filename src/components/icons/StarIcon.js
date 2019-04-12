import React from 'react';

export const StarIcon = ({ size = 12, color = '#fff' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      fill="none"
      stroke={color}
      strokeWidth="1.01"
      points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"
    />
  </svg>
);

export default StarIcon;
