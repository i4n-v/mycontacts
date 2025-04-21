import styled from 'styled-components';
import { IContainerProps } from './types';

const Container = styled.header<IContainerProps>`
  margin-top: 32px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid #E5E5E5;

  & > strong {
    color: ${({ theme }) => theme.colors.secondary.main};
    font-size: 24px;
  }

  & > a {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary.lighter};
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export { Container };
