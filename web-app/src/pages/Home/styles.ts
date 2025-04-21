import styled from 'styled-components';
import { IListContainerProps } from './types';

const Container = styled.div`
  margin-top: 32px;
`;

const ListContainer = styled.div<IListContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;

  & > header > button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: -8px;

    span {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transition: transform 0.2s ease-in;
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
  }
`;

export { Container, ListContainer };
