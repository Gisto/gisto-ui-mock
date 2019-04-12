import React from 'react';
import styled from 'styled-components/macro';

const List = () => (
  <ListWrapper>
    <Search>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="search"
      >
        <circle
          fill="none"
          stroke="#fff"
          strokeWidth="1.1"
          cx="9"
          cy="9"
          r="7"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="1.1"
          d="M14,14 L18,18 L14,14 Z"
        />
      </svg>
      <input type="search" placeholder="Search 125 snippets" />
    </Search>
    <Sort>
      <div>
        Order field: <SortBy>description &or;</SortBy>
      </div>
      <div>
        direction: <SortBy>desc &or;</SortBy>
      </div>
    </Sort>
    <ItemsList>
      {[...Array(100)].map((item, index) => (
        <Item className={index === 3 && 'active'}>
          <Icon>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="unlock"
            >
              <rect
                fill="none"
                stroke="#fff"
                x="3.5"
                y="8.5"
                width="13"
                height="10"
              />
              <path
                fill="none"
                stroke="#fff"
                d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"
              />
            </svg>
          </Icon>
          <Icon>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="none"
                stroke="#fff"
                strokeWidth="1.01"
                points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"
              />
            </svg>
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

    svg {
      path,
      polygon,
      rect {
        stroke: ${({ theme }) => theme.textActive};
      }
    }
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
