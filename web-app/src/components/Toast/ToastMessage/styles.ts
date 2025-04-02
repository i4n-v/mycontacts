import styled, { css } from 'styled-components';
import { IContainerProps } from './types';

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
  ${({ type }) => containerVariants[type]}
`;

export { Container };
