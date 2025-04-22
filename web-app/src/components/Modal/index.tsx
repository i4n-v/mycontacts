import { Button, ReactPortal } from '@/components';
import { Container, Footer, Overlay } from './styles';
import { IModalProps } from './types';
import { useAnimatedUnmount } from '@/hooks';

export default function Modal({
  visible,
  isLoading,
  title,
  children,
  danger,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm,
}: IModalProps) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount<HTMLDivElement>(visible);

  if (!shouldRender) return null;

  return (
    <ReactPortal containerId="modal-root">
      <Overlay ref={animatedElementRef} isLeaving={!visible}>
        <Container danger={danger} isLeaving={!visible}>
          <h1>{title}</h1>
          <div className="modal-body">{children}</div>
          <Footer>
            <button type="button" className="cancel-button" disabled={isLoading} onClick={onCancel}>
              {cancelLabel}
            </button>
            <Button isLoading={isLoading} danger={danger} type="button" onClick={onConfirm}>
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
      ,
    </ReactPortal>
  );
}
