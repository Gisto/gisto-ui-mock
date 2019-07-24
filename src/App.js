import React, { useState } from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro';
import { darken, lighten, tint } from 'polished';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from 'components/sidebar/Sidebar';
import List from 'components/list/List';
import Content from 'components/content/Content';
import Settings from 'components/content/Settings';
import Info from 'components/content/Info';
import New from 'components/content/New';

const baseColor = darken(0.1, '#22211F');

const theme = (base = baseColor) => (theme = 'lite') => {
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

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('lite');
  const [currentThemeColor, setCurrentThemeColor] = useState('#22211F');
  const [currentRoute, setCurrentRoute] = useState();
  const hasSideBar =
    currentRoute === 'info' ||
    currentRoute === 'settings' ||
    currentRoute === 'new';
  return (
    <Router>
      <ThemeProvider theme={theme(currentThemeColor)(currentTheme)}>
        <Gisto>
          <GlobalStyle theme={currentTheme} color={currentThemeColor} />
          <Sidebar />
          <List show={!hasSideBar} />

          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Content
                  {...props}
                  onThemeChange={setCurrentTheme}
                  setCurrentRoute={setCurrentRoute}
                  setCurrentThemeColor={setCurrentThemeColor}
                />
              )}
            />
            <Route
              path="/settings"
              render={props => (
                <Settings
                  {...props}
                  setCurrentRoute={setCurrentRoute}
                  onThemeChange={setCurrentTheme}
                  setCurrentThemeColor={setCurrentThemeColor}
                />
              )}
            />
            <Route
              path="/info"
              render={props => (
                <Info {...props} setCurrentRoute={setCurrentRoute} />
              )}
            />
            <Route
              path="/new"
              render={props => (
                <New {...props} setCurrentRoute={setCurrentRoute} />
              )}
            />
          </Switch>
        </Gisto>
      </ThemeProvider>
    </Router>
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
    background: ${props => theme(props.color)(props.theme).background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props =>
      theme(props.color)(props.theme === 'lite' ? 'dark' : 'lite').background};
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
