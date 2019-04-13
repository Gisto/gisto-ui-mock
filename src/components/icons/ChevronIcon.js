import React from 'react';
import styled from 'styled-components/macro';

export const ChevronIcon = ({ size = 12, color = '#fff', rotate = 0 }) => (
  <Icon
    width={size}
    height={size}
    rotate={rotate}
    viewBox="0 0 20 20"
    data-svg="chevron-down"
  >
    <polyline
      fill="none"
      stroke={color}
      strokeWidth="1.03"
      points="16 7 10 13 4 7"
    />
  </Icon>
);

const Icon = styled.svg`
  transform: rotate(${({ rotate }) => rotate}deg);
  vertical-align: middle;
`;

export default ChevronIcon;
