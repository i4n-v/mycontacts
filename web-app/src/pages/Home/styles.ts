import styled, { css } from 'styled-components';
import { IHeaderProps, IListContainerProps } from './types';

const Container = styled.div`
  margin-top: 32px;
`;

const Header = styled.header<IHeaderProps>`
  margin-top: 32px;
  display: flex;
  justify-content: ${({ hasError }) => (hasError ? 'flex-end' : 'space-between')};
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

const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.secondary.lighter};
    box-shadow: ${theme.shadows.main};
    padding: 16px;
    border-radius: 4px;

    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .contact-name {
        display: flex;
        align-items: center;
        gap: 8px;

        small {
          background-color: ${theme.colors.primary.lighter};
          color: ${theme.colors.primary.main};
          font-weight: bold;
          text-transform: uppercase;
          padding: 4px;
          border-radius: 4px;
        }
      }

      span {
        color: ${theme.colors.secondary.light};
        font-size: 14px;
      }
    }

    .actions {
      display: flex;
      align-items: flex-start;
      gap: 8px;

      button {
        background-color: transparent;
        border: none;
      }
    }
  `};
`;

const InputSearchContainer = styled.div`
  width: 100%;

  & > input {
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    border: none;
    outline: none;
    border-radius: 25px;
    box-shadow: ${({ theme }) => theme.shadows.main};
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary.light};
    }
  }
`;

const ErrorContainer = styled.div`
  margin-top: 16px;
  display: grid;
  align-items: center;
  justify-items: start;
  column-gap: 24px;
  row-gap: 8px;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;

  img {
    grid-column: 1;
    grid-row: 1/-1;
  }

  strong {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.danger.main};
  }
`;

export { Container, Header, ListContainer, Card, InputSearchContainer, ErrorContainer };
