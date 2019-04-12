import React from 'react';
import styled from 'styled-components/macro';

import ChevronIcon from 'components/icons/ChevronIcon';
import LookingGlassIcon from 'components/icons/LookingGlassIcon';
import UnlockIcon from 'components/icons/UnlockIcon';
import StarIcon from 'components/icons/StarIcon';

export const List = () => (
  <ListWrapper>
    <Search>
      <LookingGlassIcon size={20} />
      <input type="search" placeholder="Search 125 snippets" />
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
    <ItemsList>
      {[...Array(100)].map((item, index) => (
        <Item className={index === 3 && 'active'}>
          <Icon>
            <UnlockIcon size={20} />
          </Icon>
          <Icon>
            <StarIcon size={20} />
          </Icon>
          <Text>
            <Description>
              Item #{index + 1} and it is pretty log one too. Two lines long
            </Description>
            <Tags>#javascript, #html, #scss</Tags>
          </Text>
        </Item>
      ))}
    </ItemsList>
  </ListWrapper>
);

List.propTypes = {};

const ListWrapper = styled.div`
  height: 100vh;
  width: 300px;
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
    color: ${({ theme }) => theme.b500};
    font-weight: 300;
    padding: 3px 10px;
    border-radius: 3px;

    :focus {
      background: ${({ theme }) => theme.b300};
      outline: none;
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

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  &:hover {
    background: ${({ theme }) => theme.b100};
  }

  &.active {
    background: ${({ theme }) => theme.background};
    z-index: 2;
    position: relative;
    color: ${({ theme }) => theme.textActive};
  }
`;

const Icon = styled.div`
  margin-right: 20px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div``;

const Tags = styled.div`
  font-size: smaller;
  opacity: 0.5;
`;

export default List;
