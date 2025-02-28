import styled from 'styled-components';

const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 100%;
    max-width: 200px;
  }
`;

const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 48px;

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

export { Container, InputSearchContainer };
