import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components/macro';
import { MoreIcon } from 'components/icons/MoreIcon';
import { StarIcon } from 'components/icons/StarIcon';
import { UnlockIcon } from 'components/icons/UnlockIcon';

const Content = ({ theme, setCurrentRoute }) => {
  useEffect(() => setCurrentRoute('home'), [setCurrentRoute]);
  return (
    <ContentWrapper theme={theme}>
      <Header>
        <Title>
          This is the title of my first gist
          <div>#tag, #tag2, #javascript</div>
        </Title>
        <StarIcon size={20} />
        &nbsp; &nbsp; &nbsp;
        <UnlockIcon size={20} />
        &nbsp; &nbsp; &nbsp;
        <MoreIcon size={20} />
      </Header>
      <File>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js5</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
        <FileHeader>file.js</FileHeader>
        <FileContent>{'console.log();'}</FileContent>
      </File>
    </ContentWrapper>
  );
};

Content.propTypes = {};

const ContentWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.background};
  z-index: 1;
  color: ${({ theme }) => theme.textActive};
`;

const Header = styled.div`
  background: ${({ theme }) => theme.b200};
  height: 71px;
  padding: 0 20px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.b300};
  color: ${({ theme }) => theme.textLight};
  border-left: 1px solid ${({ theme }) => theme.b300};
  box-shadow: 0 0 10px #000;
`;

const Title = styled.div`
  flex: 1;

  div {
    font-size: smaller;
    opacity: 0.6;
  }
`;

const File = styled.div`
  padding: 20px;
  flex-direction: column;
  height: calc(100vh - 70px - 40px);
  overflow: auto;
  z-index: 2;
`;

const FileHeader = styled.div``;

const FileContent = styled.div`
  margin: 20px 0;
`;

export default withTheme(Content);
