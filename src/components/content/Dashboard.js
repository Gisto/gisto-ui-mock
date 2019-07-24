import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components/macro';

const Dashboard = ({ theme, setCurrentRoute }) => {
  useEffect(() => setCurrentRoute('dashboard'), [setCurrentRoute]);

  return (
    <ContentWrapper theme={theme}>
      <h1>Dashboard:</h1>
      <p>This is Dashboard page</p>
    </ContentWrapper>
  );
};

Dashboard.propTypes = {};

const ContentWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.background};
  z-index: 2;
  color: ${({ theme }) => theme.textActive};
  padding: 0 30px;

  h1 {
    font-weight: 100;
    margin: 0.37em 0;
  }
`;

export default withTheme(Dashboard);
