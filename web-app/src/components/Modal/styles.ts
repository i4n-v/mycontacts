import styled, { css, keyframes } from 'styled-components';
import { IContainerProps, IOverlayProps } from './types';

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

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const scaleOut = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0);
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
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  animation: ${({ isLeaving }) => css`${isLeaving ? fadeOut : fadeIn} 0.3s forwards`};
  `;

const Container = styled.div<IContainerProps>`
  background: ${({ theme }) => theme.colors.secondary.lighter};
  border-radius: 4px;
  padding: 24px;
  width: 100%;
  max-width: 450px;
  animation: ${({ isLeaving }) => css`${isLeaving ? scaleOut : scaleIn} 0.3s forwards`};

  & > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.secondary.dark)};
  }

  .modal-body {
    margin-top: 32px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  margin-top: 32px;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondary.light};

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export { Overlay, Container, Footer };
