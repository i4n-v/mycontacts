import { Container } from './styles';
import { ToastMessage } from '..';
import { useEffect } from 'react';
import { IToast } from '../types';
import { toastEventManager } from '@/configs';
import { useAnimatedList } from '@/hooks';

export default function ToastContainer() {
  const { setItems, handleRemoveItem, renderList } = useAnimatedList<IToast, 'id', HTMLDivElement>(
    'id',
  );

  useEffect(() => {
    function handleAddMessage(payload: Omit<IToast, 'id'>) {
      setItems((messages) => [...messages, { id: Math.random(), ...payload }]);
    }

    toastEventManager.on('addtoast', handleAddMessage);

    return () => toastEventManager.off('addtoast', handleAddMessage);
  }, [setItems]);

  return (
    <Container>
      {renderList(({ item, isLeaving, animatedRef }) => (
        <ToastMessage
          key={item.id}
          message={item}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
          onRemoveMessage={handleRemoveItem}
        />
      ))}
    </Container>
  );
}
