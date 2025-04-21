import styled from 'styled-components';

const Container = styled.div`
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

export { Container };
