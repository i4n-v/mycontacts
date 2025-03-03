import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
      small {
        display: block;
        color: ${theme.colors.danger.main};
        font-size: 12px;
        margin-top: 8px;
      }
  `};
`;

export { Container };
