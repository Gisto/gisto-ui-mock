import React, { Component } from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro';
import { lighten, tint, darken } from 'polished';

import Sidebar from 'components/sidebar/Sidebar';
import List from 'components/list/List';
import Content from 'components/content/Content';

// const base = '#22211F';
const base = darken(0.1, '#5a255b');

const mode = 'lite';
// const mode = 'dark';

const theme = {
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
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme[mode]}>
        <Gisto>
          <GlobalStyle />
          <Sidebar />
          <List />
          <Content />
        </Gisto>
      </ThemeProvider>
    );
  }
}

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
    background: ${theme[mode].b100};
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
