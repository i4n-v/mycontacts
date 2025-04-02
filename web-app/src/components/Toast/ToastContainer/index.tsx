import { Container } from './styles';
import { ToastMessage } from '..';
import { useEffect, useState } from 'react';
import { IToast } from './types';
import { toastEventManager } from '@/configs';

export default function ToastContainer() {
  const [messages, setMessages] = useState<IToast[]>([]);

  useEffect(() => {
    function handleAddToast(payload: Omit<IToast, 'id'>) {
      setMessages((state) => [...state, { id: Math.random(), ...payload }]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => toastEventManager.off('addtoast', handleAddToast);
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage key={message.id} text={message.text} type={message.type} />
      ))}
    </Container>
  );
}
