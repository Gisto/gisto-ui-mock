import React, { useState } from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro';
import { darken, lighten, tint } from 'polished';

import Sidebar from 'components/sidebar/Sidebar';
import List from 'components/list/List';
import Content from 'components/content/Content';

// const baseColor = '#22211F';
const baseColor = darken(0.1, '#25445b');

const theme = (base = baseColor) => ({
  lite: {
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
  },
  dark: {
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
  },
});

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('lite');
  const [currentThemeColor, setCurrentThemeColor] = useState('#22211F');

  return (
    <ThemeProvider theme={theme(currentThemeColor)[currentTheme]}>
      <Gisto>
        <GlobalStyle theme={currentTheme} color={currentThemeColor} />
        <Sidebar />
        <List />
        <Content
          onThemeChange={setCurrentTheme}
          setCurrentThemeColor={setCurrentThemeColor}
        />
      </Gisto>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 100;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background: #fff;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => theme(props.color)[props.theme].b100};
  }
  
  a:hover,
  span:hover {
    transition: all .3s ease-in-out;
  }
`;

const Gisto = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default App;
