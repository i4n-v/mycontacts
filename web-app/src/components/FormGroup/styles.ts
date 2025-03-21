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

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      top: 18px;
      right: 16px;
    }
  }
`;

export { Container };
