import { Container } from './styles';
import { ToastMessage } from '..';
import { useCallback, useEffect, useState } from 'react';
import { IToast } from '../types';
import { toastEventManager } from '@/configs';

export default function ToastContainer() {
  const [messages, setMessages] = useState<IToast[]>([]);

  useEffect(() => {
    function handleAddMessage(payload: Omit<IToast, 'id'>) {
      setMessages((messages) => [...messages, { id: Math.random(), ...payload }]);
    }

    toastEventManager.on('addtoast', handleAddMessage);

    return () => toastEventManager.off('addtoast', handleAddMessage);
  }, []);

  const handleRemoveMessage = useCallback((id: number) => {
    setMessages((messages) => {
      const filteredMessages = messages.filter((message) => message.id !== id);
      return filteredMessages;
    });
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage key={message.id} message={message} onRemoveMessage={handleRemoveMessage} />
      ))}
    </Container>
  );
}
