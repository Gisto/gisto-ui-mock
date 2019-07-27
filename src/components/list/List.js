import React, { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components/macro';
import { isEmpty, size } from 'lodash/fp';
import { NavLink } from 'react-router-dom';

import ChevronIcon from 'components/icons/ChevronIcon';
import LookingGlassIcon from 'components/icons/LookingGlassIcon';
import UnlockIcon from 'components/icons/UnlockIcon';
import StarIcon from 'components/icons/StarIcon';

import { getTags, removeTags } from 'utils/tags';

export const List = ({ show }) => {
  const [list, setList] = useState(null);
  const [placeholder, setPlaceholder] = useState(`Search snippets`);
  useEffect(() => {
    fetchGist();
  });

  const fetchGist = async () => {
    const response = await fetch(
      `https://api.github.com/users/sanusart/gists?per_page=100`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'MY-UA-STRING',
        }),
      }
    );
    const data = await response.json();

    setList(data);
    setPlaceholder(`Search ${size(list)} snippets`);
  };

  return (
    <ListWrapper show={show}>
      <Search>
        <LookingGlassIcon size={20} />
        <input
          type="search"
          placeholder={placeholder}
          onFocus={() => setPlaceholder('free text, #tag or language')}
          onBlur={() => setPlaceholder(`Search ${size(list)} snippets`)}
        />
      </Search>
      <Sort>
        <div>
          Order field:{' '}
          <SortBy>
            description <ChevronIcon size={10} />
          </SortBy>
        </div>
        <div>
          direction:{' '}
          <SortBy>
            desc <ChevronIcon size={10} />
          </SortBy>
        </div>
      </Sort>
      {isEmpty(list) ? (
        <Loading>Loading...</Loading>
      ) : (
        <ItemsList>
          {(list || []).map((item, index) => (
            <Item
              key={`item-${item.id}`}
              to={`/gist/${item.id}`}
              activeClassName="active"
            >
              <Text>
                <Tags>
                  <StyledUnlockIcon size={15} />
                  &nbsp;&nbsp;
                  <StyledStarIcon size={15} />
                  {getTags(item.description || 'undefined').length > 0 &&
                    getTags(item.description || 'undefined').map(
                      (tag, index) => index <= 2 && <span key={tag}>{tag}</span>
                    )}
                  {getTags(item.description || 'undefined').length > 0 &&
                    getTags(item.description || 'undefined').length > 3 &&
                    index > 2 && (
                      <span>
                        {'+'}
                        {getTags(item.description || 'undefined').length - 3}
                      </span>
                    )}
                </Tags>
                <Description>
                  <React.Fragment>
                    {removeTags(item.description) || 'undefined'}
                    <Date>23/11/1980 10:30pm</Date>
                  </React.Fragment>
                </Description>
              </Text>
            </Item>
          ))}
        </ItemsList>
      )}
    </ListWrapper>
  );
};

List.propTypes = {};

const ListWrapper = styled.div`
  height: 100vh;
  ${({ show }) => (show ? 'width: 300px;opacity: 1;' : 'width: 0;opacity: 0;')};
  transition: all 0.1s ease-in-out;
  background: ${({ theme }) => theme.b250};
  color: #fff;
  box-shadow: 0 70px 10px #000 inset;
  z-index: 2;
`;

const Search = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  background: ${({ theme }) => theme.b200};
  border-bottom: 1px solid ${({ theme }) => theme.b300};
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;

  & input {
    background: transparent;
    border: none;
    font-size: 16px;
    flex: 1;
    margin: 0 0 0 20px;
    color: ${({ theme }) => theme.textLight};
    font-weight: 300;
    padding: 3px 10px;
    border-radius: 3px;

    ::placeholder {
      color: ${({ theme }) => theme.b300};
    }

    :focus {
      background: ${({ theme }) => theme.b300};
      outline: none;

      ::placeholder {
        color: ${({ theme }) => theme.b100};
      }
    }
  }
`;

const Sort = styled.div`
  padding: 0 20px;
  background: ${({ theme }) => theme.b200};
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.b300};
  font-size: smaller;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SortBy = styled.span`
  background: ${({ theme }) => theme.b300};
  color: ${({ theme }) => theme.textLight};
  padding: 2px 5px;
  margin-left: 5px;
  border-radius: 3px;
  height: 15px;
  line-height: 15px;
`;

const ItemsList = styled.div`
  height: calc(100vh - 70px);
  overflow: auto;
`;

const Loading = styled.div`
  height: calc(100vh - 70px);
  overflow: auto;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Date = styled.span`
  visibility: hidden;
  opacity: 0.3;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 5px;
`;

const StyledUnlockIcon = styled(UnlockIcon)`
  opacity: 0.5;
`;

const StyledStarIcon = styled(StarIcon)`
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const Item = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.b300};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  color: ${({ theme }) => theme.textLight};

  &:hover {
    background: ${({ theme }) => theme.b100};

    ${Date} {
      visibility: visible;
      display: inline;
    }
  }

  &.active {
    background: ${({ theme }) => theme.background};
    z-index: 2;
    position: relative;
    color: ${({ theme }) => theme.textActive};

      svg {
        path, polygon, rect {
          stroke: ${({ theme }) => theme.textActive};
        }
      }
    }
  }

  ${StyledUnlockIcon} {
    path {
      stroke {
        ${({ theme }) => theme.textLight};
      }
    }    
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  line-height: 26px;
`;

const Tags = styled.div`
  font-size: smaller;
  margin-bottom: 10px;
  display: flex;

  span {
    opacity: 0.3;
    border: 1px solid;
    font-size: smaller;
    padding: 3px 3px 1px 3px;
    border-radius: 3px;
    text-transform: uppercase;
    margin: 0 0 0 5px;
    &:first-of-type {
      margin: 0 0 0 10px;
    }

    :hover {
      opacity: 0.5;
    }
  }
`;

export default withTheme(List);
