import styled from 'styled-components';

const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  gap: 24px;

  p {
    color: ${({ theme }) => theme.colors.secondary.light};
    text-align: center;
    word-break: break-word;
  }
`;

export { Container };
