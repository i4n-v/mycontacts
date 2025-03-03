import styled, { css } from 'styled-components';

const Select = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 52px;
    color: ${theme.colors.secondary.lighter};
    font-size: 16px;
    font-weight: 700;
    background: ${theme.colors.primary.main};
    border: none;
    border-radius: 4px;
    box-shadow: ${theme.shadows.main};
    transition: background 0.2s ease-in;

    &:hover {
      background: ${theme.colors.primary.light};
    }

    &:active {
      background: ${theme.colors.primary.dark};
    }

    &:disabled {
      background: ${theme.colors.secondary.light};
      cursor: default;
    }
  `};
`;

export default Select;
