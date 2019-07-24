import React from 'react';
import styled from 'styled-components/macro';

import PlusIcon from 'components/icons/PlusIcon';
import InfoIcon from 'components/icons/InfoIcon';
import CogIcon from 'components/icons/CogIcon';
import LogOutIcon from 'components/icons/LogOutIcon';
import { HashRouter as Router, Link } from 'react-router-dom';

const Sidebar = () => (
  <Bar>
    <Router>
      <Link to="/">
        <Logo>{`{ G }`}</Logo>
      </Link>

      <Link to="/new">
        <Button>
          <PlusIcon size={20} />
        </Button>
      </Link>

      <Link to="/info">
        <Button>
          <InfoIcon size={20} />
        </Button>
      </Link>

      <Link to="/settings">
        <Button>
          <CogIcon size={20} />
        </Button>
      </Link>

      <Button>
        <Image src="https://avatars2.githubusercontent.com/u/267718?s=50&v=4" />
      </Button>

      <LogOutButton>
        <LogOutIcon size={20} />
      </LogOutButton>
    </Router>
  </Bar>
);

Sidebar.propTypes = {};

const Bar = styled.div`
  width: 60px;
  background: ${({ theme }) => theme.b100};
  color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
`;

const Button = styled.div`
  width: 60px;
  height: 60px;
  color: #fff;
  cursor: pointer;
  background: ${({ theme }) => theme.b100};
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.b200};
  }
`;

const Logo = styled(Button)`
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.b100};

  &:hover {
    background: inherit;
    text-shadow: 0 0 5px #fff;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  width: 38px;
  border: 1px solid ${({ theme }) => theme.b250};
`;

const LogOutButton = styled(Button)``;

export default Sidebar;
