import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components/macro';

import ChevronIcon from 'components/icons/ChevronIcon';
import LookingGlassIcon from 'components/icons/LookingGlassIcon';
import UnlockIcon from 'components/icons/UnlockIcon';
import StarIcon from 'components/icons/StarIcon';

export class List extends Component {
  state = {
    placeholder: 'Search 120 snippets'
  };

  changePlaceholder = (focus) => this.setState({
    placeholder: focus ? 'free text, #tag or language' : 'Search 120 snippets'
  });

  render() {
    const { theme } = this.props;

    return (
      <ListWrapper>
        <Search>
          <LookingGlassIcon size={20} />
          <input type="search" placeholder={this.state.placeholder} onFocus={() => this.changePlaceholder(true)} onBlur={() => this.changePlaceholder(false)} />
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
            <Item key={`item-${index}`} className={index === 3 && 'active'}>
              <Text>
                <Tags>
                  <UnlockIcon
                    size={15}
                    color={index === 3 ? theme.textActive : theme.textLight}
                  />
                  &nbsp;&nbsp;
                  <StarIcon
                    size={15}
                    color={index === 3 ? theme.textActive : theme.textLight}
                  />
                  &nbsp;&nbsp;<span>javascript</span>&nbsp;&nbsp;
                  <span>html</span>&nbsp;&nbsp;<span>scss</span>&nbsp;&nbsp;
                  <span>+1</span>
                </Tags>
                <Description>
                  {index === 1
                    ? (<React.Fragment>Item #{index + 1} and it is pretty long one too. Two lines long and it is pretty long one too. Two lines long <Date>23/11/1980 10:30pm</Date></React.Fragment>)
                    : (<React.Fragment>Item #{index + 1} and it is pretty long one too. Two lines long <Date>23/11/1980 10:30pm</Date></React.Fragment>)}

                </Description>
              </Text>
            </Item>
          ))}
        </ItemsList>
      </ListWrapper>
    );
  }
}

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

const Date = styled.span`
    display: none;
    opacity: 0.3;
    font-size: smaller;
    text-transform: uppercase;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #575550;

  &:hover {
    background: ${({ theme }) => theme.b100};
    
    ${Date} {
      display: inline;
    }
  }

  &.active {
    background: ${({ theme }) => theme.background};
    z-index: 2;
    position: relative;
    color: ${({ theme }) => theme.textActive};
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
  }
`;

export default withTheme(List);
