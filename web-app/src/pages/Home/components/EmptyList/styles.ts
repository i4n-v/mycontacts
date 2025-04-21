import styled from 'styled-components';

const Container = styled.div`
margin-top: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;

p {
  color: ${({ theme }) => theme.colors.secondary.light};
  text-align: center;

  strong {
    color: ${({ theme }) => theme.colors.primary.main};
  }
}
`;

export { Container };
