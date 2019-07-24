import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components/macro';

const Info = ({ theme, setCurrentRoute }) => {
  useEffect(() => setCurrentRoute('info'), [setCurrentRoute]);

  return (
    <ContentWrapper theme={theme}>
      <h1>Info:</h1>
      <p>This is info page</p>
    </ContentWrapper>
  );
};

Info.propTypes = {};

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

export default withTheme(Info);
