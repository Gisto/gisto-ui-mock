import React from 'react';

const LogOutIcon = ({ size = 12, color = '#fff' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    data-svg="sign-out"
  >
    <polygon
      fill={color}
      points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"
    />
    <polygon fill={color} points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3" />
  </svg>
);

export default LogOutIcon;
