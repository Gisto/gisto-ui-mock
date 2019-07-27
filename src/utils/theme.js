import { darken, lighten, tint } from 'polished';

const baseColor = '#22211F';
const color = darken(0.1, baseColor);

export const theme = (base = color) => (theme = 'lite') => {
  if (theme === 'lite') {
    return {
      b100: base,
      b200: lighten(0.1, base),
      b250: lighten(0.17, base),
      b300: lighten(0.2, base),
      b400: lighten(0.9, base),
      b500: lighten(1, base),
      border: tint(0.1, base),
      textLight: '#fff',
      textActive: '#333',
      textDark: '#555',
      background: lighten(0.9, base),
    };
  }

  return {
    b100: base,
    b200: tint(0.1, base),
    b250: tint(0.17, base),
    b300: tint(0.2, base),
    b400: tint(0.25, base),
    b500: tint(0.3, base),
    border: base,
    textLight: '#fff',
    textActive: '#fff',
    textDark: '#333',
    background: base,
  };
};
