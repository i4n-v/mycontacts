import { Button } from '@/components';
import { Container, Footer, Overlay } from './styles';
import { IModalProps } from './types';
import ReactDOM from 'react-dom';

export default function Modal({
  title,
  description,
  danger,
  cancelLabel,
  confirmLabel,
}: IModalProps) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Footer>
          <button type="button" className="cancel-button">
            {cancelLabel}
          </button>
          <Button danger={danger} type="button">
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')!,
  );
}
