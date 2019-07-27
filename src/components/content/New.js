import React from 'react';
import styled, { withTheme } from 'styled-components/macro';

const New = ({ theme, setCurrentRoute }) => {
  setCurrentRoute('new');

  return (
    <ContentWrapper theme={theme}>
      <h1>Add new:</h1>
      <p>This is add new page</p>
    </ContentWrapper>
  );
};

New.propTypes = {};

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

export default withTheme(New);
