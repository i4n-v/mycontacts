import styled, { css } from 'styled-components';

const Container = styled.div`
  margin-top: 32px;
`;

const Header = styled.header`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

const ListContainer = styled.div`
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

export { Container, Header, ListContainer, Card };
