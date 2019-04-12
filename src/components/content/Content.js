import React, { useRef } from 'react';
import styled, { withTheme } from 'styled-components/macro';

const Content = ({ theme }) => {
  const reference = useRef(false);

  return (
    <ContentWrapper>
      <Header>
        <Title>
          This is the title of my first gist
          <div>#tag, #tag2, #javascript</div>
        </Title>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="3" r="2" />
          <circle cx="10" cy="10" r="2" />
          <circle cx="10" cy="17" r="2" />
        </svg>
      </Header>
      <File>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader ref={reference}>content5</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
        <FileHeader>content</FileHeader>
        <FileContent>content</FileContent>
      </File>
      {/*<Color style={{ background: theme.b100 }}>base</Color>*/}
      {/*<Color style={{ background: theme.b200 }}>alt</Color>*/}
      {/*<Color style={{ background: theme.b300 }}>active</Color>*/}
      {/*<Color style={{ background: theme.b400 }}>light</Color>*/}
      {/*<Color style={{ background: theme.b500 }}>extraLight</Color>*/}
      {/*<Color style={{ background: theme.textLight }}>textLight</Color>*/}
      {/*<Color style={{ background: theme.textDark }}>textDark</Color>*/}
    </ContentWrapper>
  );
};

Content.propTypes = {};

const ContentWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.background};
  z-index: 1;
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

  svg {
    circle {
      fill: ${({ theme }) => theme.textLight};
    }
  }
`;

const Title = styled.div`
  flex: 1;

  div {
    font-size: smaller;
    opacity: 0.6;
  }
`;

const File = styled.div`
  //margin: 20px;
  padding: 20px;
  flex-direction: column;
  height: calc(100vh - 70px - 40px);
  overflow: auto;
  z-index: 2;
`;

const FileHeader = styled.div``;

const FileContent = styled.div`
  margin: 20px 0;
  background: #fff;
`;

const Color = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  margin: 10px;
  text-indent: 40px;
`;

export default withTheme(Content);
