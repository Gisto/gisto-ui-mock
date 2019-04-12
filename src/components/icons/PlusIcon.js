import React from 'react';

export const PlusIcon = ({ size = 12, color = '#fff' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    data-svg="plus"
  >
    <rect fill={color} x="9" y="1" width="1" height="17" />
    <rect fill={color} x="1" y="9" width="17" height="1" />
  </svg>
);

export default PlusIcon;
