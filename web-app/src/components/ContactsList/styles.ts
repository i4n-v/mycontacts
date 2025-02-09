import styled from 'styled-components';

const Container = styled.div`
  margin-top: 32px;
`;

const Header = styled.header`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > strong {
    color: ${({ theme }) => theme.colors.secondary.main};
    font-size: 24px;
  }

  & > a {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary.lighter};
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export { Container, Header };
