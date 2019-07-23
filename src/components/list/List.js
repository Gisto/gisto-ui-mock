import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components/macro';

import ChevronIcon from 'components/icons/ChevronIcon';
import LookingGlassIcon from 'components/icons/LookingGlassIcon';
import UnlockIcon from 'components/icons/UnlockIcon';
import StarIcon from 'components/icons/StarIcon';

const removeTags = title => {
  if (!title) {
    return null;
  }

  const tags = title.match(/#(\d*[A-Za-z_0-9]+\d*)/g);
  return tags ? title.trim().split(tags[0])[0] : title;
};

const getTags = title => {
  if (!title) {
    return null;
  }

  const tags = title.match(/#(\d*[A-Za-z_0-9]+\d*)/g);

  return tags || [];
};

export class List extends Component {
  state = {
    placeholder: 'Search 120 snippets',
    list: [],
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/sanusart/gists?per_page=100`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'MY-UA-STRING',
      }),
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          list: res,
        })
      );
  }

  changePlaceholder = focus =>
    this.setState({
      placeholder: focus
        ? 'free text, #tag or language'
        : 'Search 120 snippets',
    });

  render() {
    const { theme } = this.props;

    return (
      <ListWrapper>
        <Search>
          <LookingGlassIcon size={20} />
          <input
            type="search"
            placeholder={this.state.placeholder}
            onFocus={() => this.changePlaceholder(true)}
            onBlur={() => this.changePlaceholder(false)}
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
        <ItemsList>
          {(this.state.list || []).map((item, index) => (
            <Item key={`item-${index}`} className={index === 4 && 'active'}>
              <Text>
                <Tags>
                  <StyledUnlockIcon
                    size={15}
                    color={index === 4 ? theme.textActive : theme.textLight}
                  />
                  &nbsp;&nbsp;
                  <StyledStarIcon
                    size={15}
                    color={index === 4 ? theme.textActive : theme.textLight}
                  />
                  {getTags(item.description || 'undefined').length > 0 &&
                    getTags(item.description || 'undefined').map(
                      (tag, index) => index <= 2 && <span>{tag}</span>
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
  visibility: hidden;
  opacity: 0.3;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 5px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.b300};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

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

const StyledUnlockIcon = styled(UnlockIcon)`
  opacity: 0.5;
`;

const StyledStarIcon = styled(StarIcon)`
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export default withTheme(List);
