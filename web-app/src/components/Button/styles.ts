import styled, { css } from 'styled-components';
import { IButtonProps } from './types';

const StyledButton = styled.button<IButtonProps>`
  ${({ theme, danger }) => {
    const pallete = danger ? theme.colors.danger : theme.colors.primary;

    return css`
    padding: 0 16px;
    height: 52px;
    color: ${theme.colors.secondary.lighter};
    font-size: 16px;
    font-weight: 700;
    background: ${pallete.main};
    border: none;
    border-radius: 4px;
    box-shadow: ${theme.shadows.main};
    transition: background 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${pallete.light};
    }

    &:active {
      background: ${pallete.dark};
    }

    &:disabled {
      background: ${theme.colors.secondary.light};
      cursor: default;
    }
  `;
  }};
`;

export { StyledButton };
