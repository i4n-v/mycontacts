import styled, { css } from 'styled-components';

const Select = styled.select`
  ${({ theme }) => css`
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
    appearance: none;

    &:focus {
      border-color: ${theme.colors.primary.main};
    }

    &:disabled {
      background: #E5E5E5;
      border-color: ${theme.colors.secondary.light};
      opacity: 0.6;
    }
  `};
`;

export default Select;
