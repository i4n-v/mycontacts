import styled, { css, keyframes } from 'styled-components';
import { IOverlayProps } from './types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Overlay = styled.div<IOverlayProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(246, 245, 252, 0.7);
  backdrop-filter: blur(5px);
  animation: ${({ isLeaving }) => css`${isLeaving ? fadeOut : fadeIn} 0.3s forwards`};
`;

export { Overlay };
