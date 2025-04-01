import { Container } from './styles';
import { ToastMessage } from '..';
import { useEffect, useState } from 'react';
import { IToast } from './types';

export default function ToastContainer() {
  const [messages, setMessages] = useState<IToast[]>([]);

  useEffect(() => {
    function handleAddToast(event: CustomEvent<IToast>) {
      const { type, text } = event.detail;

      setMessages((state) => [...state, { id: Math.random(), type, text }]);
    }

    document.addEventListener<any>('addtoast', handleAddToast);

    return () => document.removeEventListener<any>('addtoast', handleAddToast);
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage key={message.id} text={message.text} type={message.type} />
      ))}
    </Container>
  );
}
