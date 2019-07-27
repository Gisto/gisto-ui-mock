import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components/macro';
import { map } from 'lodash/fp';

import { MoreIcon } from 'components/icons/MoreIcon';
import { StarIcon } from 'components/icons/StarIcon';
import { UnlockIcon } from 'components/icons/UnlockIcon';

const Content = ({ theme, setCurrentRoute, match }) => {
  const [gist, setGist] = useState({});
  useEffect(() => setCurrentRoute('gist'), [setCurrentRoute]);
  useEffect(() => {
    fetchGist(match.params.id);
  }, [match.params.id]);

  const fetchGist = async id => {
    const response = await fetch(`https://api.github.com/gists/${id}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'MY-UA-STRING',
      }),
    });
    const data = await response.json();

    setGist(data);
  };

  return (
    <ContentWrapper theme={theme}>
      <Header>
        <Title>
          {(gist && gist.description) || 'unknown'}
          <div>#tag, #tag2, #javascript</div>
        </Title>
        <StarIcon size={20} />
        &nbsp; &nbsp; &nbsp;
        <UnlockIcon size={20} />
        &nbsp; &nbsp; &nbsp;
        <MoreIcon size={20} />
      </Header>
      <Files>
        {map(
          file => (
            <File>
              <FileHeader>{file.filename}</FileHeader>
              <FileContent>
                <div>{file.content}</div>
              </FileContent>
            </File>
          ),
          gist.files
        )}
      </Files>
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

const Files = styled.div`
  flex-direction: column;
  height: calc(calc(100vh - 70px - -38px));
  overflow: auto;
  z-index: 2;
`;

const File = styled.div`
  padding: 20px;
  flex-direction: column;
  overflow: auto;
  z-index: 2;

  :last-of-type {
    margin-bottom: 40px;
  }
`;

const FileHeader = styled.div`
  margin: 0;
  background: ${({ theme }) => theme.b250};
  color: ${({ theme }) => theme.textLight};
  overflow: auto;
  padding: 20px;
`;

const FileContent = styled.div`
  margin: 0;
  background: ${({ theme }) => theme.b200};
  color: ${({ theme }) => theme.textLight};
  overflow: auto;
  padding: 20px;

  > div {
    white-space: pre-wrap;
    font-family: 'fira code', monospace;
    font-size: 13px;
    line-height: 18px;
    max-height: calc(100vh - 210px);
  }
`;

export default withTheme(Content);
