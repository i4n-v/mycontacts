import { Container } from './styles';
import { IToastMessageProps } from './types';
import xCircle from '@/assets/icons/x-circle.svg';
import checkCircle from '@/assets/icons/check-circle.svg';
import { memo, useEffect } from 'react';

function ToastMessage({ animatedRef, message, isLeaving, onRemoveMessage }: IToastMessageProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration ?? 7000);

    return () => clearTimeout(timeout);
  }, [message, onRemoveMessage]);

  function handleRemoveMessage() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      ref={animatedRef}
      tabIndex={0}
      role="button"
      type={message.type}
      isLeaving={isLeaving}
      onClick={handleRemoveMessage}
    >
      {message.type === 'danger' && <img src={xCircle} alt="X" />}
      {message.type === 'success' && <img src={checkCircle} alt="Check" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

export default memo(ToastMessage);
