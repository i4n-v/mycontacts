import styled, { css } from 'styled-components';

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

export { Card };
