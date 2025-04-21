import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  & > input {
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    border: none;
    outline: none;
    border-radius: 25px;
    box-shadow: ${({ theme }) => theme.shadows.main};
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary.light};
    }
  }
`;

export { Container };
