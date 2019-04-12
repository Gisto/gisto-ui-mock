import React from 'react';
import styled from 'styled-components/macro';

const Sidebar = () => (
  <Bar>
    <Logo>{`{ G }`}</Logo>
    <Button>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="plus"
      >
        <rect fill="#fff" x="9" y="1" width="1" height="17" />
        <rect fill="#fff" x="1" y="9" width="17" height="1" />
      </svg>
    </Button>

    <Button>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="info"
      >
        <path
          fill="#fff"
          d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"
        />
        <circle
          fill="none"
          stroke="#fff"
          strokeWidth="1.1"
          cx="10"
          cy="10"
          r="9"
        />
      </svg>
    </Button>
    <Button>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="cog"
      >
        <circle fill="none" stroke="#fff" cx="9.997" cy="10" r="3.31" />
        <path
          fill="none"
          stroke="#fff"
          d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"
        />
      </svg>
    </Button>

    <LogOut>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        data-svg="sign-out"
      >
        <polygon
          fill="#fff"
          points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"
        />
        <polygon fill="#fff" points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3" />
      </svg>
    </LogOut>
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

const LogOut = styled(Button)``;

export default Sidebar;
