import styled, { css } from 'styled-components';

const Container = styled.header`
  ${({ theme }) => css`
    margin-bottom: 24px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;

      span {
        color: ${theme.colors.primary.main};
        font-weight: 700;
      }

      img {
        transform: rotate(-90deg);
      }
    }

    h1 {
      font-size: 24px;
    }
  `}
`;

export { Container };
