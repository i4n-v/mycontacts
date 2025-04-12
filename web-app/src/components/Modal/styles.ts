import styled from 'styled-components';
import { IModalProps } from './types';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
`;

const Container = styled.div<Pick<IModalProps, 'danger'>>`
  background: ${({ theme }) => theme.colors.secondary.lighter};
  border-radius: 4px;
  padding: 24px;
  width: 100%;
  max-width: 450px;

  & > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.secondary.dark)};
  }

  .modal-body {
    margin-top: 32px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  margin-top: 32px;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondary.light};

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export { Overlay, Container, Footer };
