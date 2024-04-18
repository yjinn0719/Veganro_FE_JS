import styled, { keyframes } from 'styled-components';

const MoveUpDown = keyframes`
    0% {
        -webkit-transform:translateY(0)
    }

    50% {
        -webkit-transform: translateY(-10%);
        transform:translateY(-10%)
    }

    100% {
        -webkit-transform: translateY(0);
        transform:translateY(0)
    }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 240, 240, 0.4);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(1px);
  z-index: 9999;
`;

export const LogoContainer = styled.div`
  width: 180px;
  height: 180px;
  background-image: url(src/assets/images/logo.png);
  bakcground-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  animation: ${MoveUpDown} 1s ease-in-out infinite;
`;
