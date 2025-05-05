import styled, { css, keyframes } from 'styled-components';
import { IContainerProps } from './types';

const messageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const messageOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(100px);
  }
`;

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
};

const Container = styled.div<IContainerProps>`
  padding: 16px 32px;
  color: ${({ theme }) => theme.colors.secondary.lighter};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  animation: ${({ isLeaving }) => css`${isLeaving ? messageOut : messageIn} 0.3s forwards`};
  ${({ type }) => containerVariants[type]}
`;

export { Container };
