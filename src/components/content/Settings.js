import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components/macro';

const Settings = ({
  theme,
  onThemeChange,
  setCurrentThemeColor,
  setCurrentRoute,
}) => {
  useEffect(() => setCurrentRoute('settings'), [setCurrentRoute]);
  return (
    <ContentWrapper theme={theme}>
      <h1>Settings:</h1>
      Theme: <button onClick={() => onThemeChange('dark')}>Dark</button>
      <button onClick={() => onThemeChange('lite')}>Lite</button>
      <input
        type="color"
        onChange={event => setCurrentThemeColor(event.target.value)}
      />
      <br />
      {[
        '#C62828',
        '#AD1457',
        '#6A1B9A',
        '#4527A0',
        '#283593',
        '#1565C0',
        '#0277BD',
        '#00838F',
        '#37474F',
        '#00695C',
        '#2E7D32',
        '#558B2F',
        '#D84315',
        '#4E342E',
        '#22211F',
        '#424242',
      ].map(color => (
        <Color
          style={{ background: color, display: 'inline-block' }}
          onClick={() => setCurrentThemeColor(color)}
        />
      ))}
      <br />
      <Color style={{ background: theme.b100 }}>base</Color>
      <Color style={{ background: theme.b200 }}>alt</Color>
      <Color style={{ background: theme.b300 }}>active</Color>
      <Color style={{ background: theme.b400 }}>light</Color>
      <Color style={{ background: theme.b500 }}>extraLight</Color>
      <Color style={{ background: theme.textLight }}>textLight</Color>
      <Color style={{ background: theme.textDark }}>textDark</Color>
      <Color style={{ background: theme.background }}>background</Color>
    </ContentWrapper>
  );
};

Settings.propTypes = {};

const ContentWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.background};
  z-index: 1;
  color: ${({ theme }) => theme.textActive};
  padding: 0 30px;

  h1 {
    font-weight: 100;
    margin: 0.37em 0;
  }
`;

const Color = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  margin: 10px;
  text-indent: 40px;
`;

export default withTheme(Settings);
