import React, { useState } from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { useRoute } from 'hooks/useRoute';
import Sidebar from 'components/sidebar/Sidebar';
import List from 'components/list/List';
import Content from 'components/content/Content';
import Settings from 'components/content/Settings';
import Info from 'components/content/Info';
import New from 'components/content/New';
import Dashboard from 'components/content/Dashboard';

import { theme } from 'utils/theme';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('lite');
  const [currentThemeColor, setCurrentThemeColor] = useState('#22211F');
  const [currentRoute, setCurrentRoute] = useRoute('dashboard');
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
                <Dashboard
                  {...props}
                  onThemeChange={setCurrentTheme}
                  setCurrentRoute={setCurrentRoute}
                  setCurrentThemeColor={setCurrentThemeColor}
                />
              )}
            />
            <Route
              path="/gist/:id"
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
