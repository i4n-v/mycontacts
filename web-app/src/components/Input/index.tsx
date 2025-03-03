import styled, { css } from 'styled-components';
import { IInputProps } from './types';

const Input = styled.input<IInputProps>`
  ${({ theme, error }) => css`
    width: 100%;
    height: 52px;
    padding: 0 16px;
    font-size: 16px;
    outline: none;
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: ${theme.colors.secondary.lighter};
    box-shadow: ${theme.shadows.main};
    transition: border-color 0.2s ease-in;

    &:focus {
      border-color: ${theme.colors.primary.main};
    }

    ${
      error &&
      css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `
    }
  `};
`;

export default Input;
