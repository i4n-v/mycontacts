import { createRef, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from 'react';

interface IRenderItemParams<T, R> {
  item: T;
  index: number;
  isLeaving: boolean;
  animatedRef: RefObject<R | null>;
}

type IRenderItem<T, R> = (params: IRenderItemParams<T, R>) => ReactNode;

type IRemoveListenner = () => void;

export default function useAnimatedList<
  T extends Record<string, any>,
  k extends keyof T,
  R extends HTMLElement,
>(identifierKey: k, initialValue: T[] = []) {
  const [items, setItems] = useState<T[]>(initialValue);
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] = useState<T[k][]>([]);
  const animatedRefs = useRef(new Map<string, RefObject<R | null>>());
  const animationEndListeners = useRef(new Map<string, IRemoveListenner>());

  const handleRemoveItem = useCallback((id: T[k]) => {
    setPendingRemovalItemsIds((itemsIds) => [...itemsIds, id]);
  }, []);

  const handleAnimationEnd = useCallback(
    (id: T[k]) => {
      const removeListenner = animationEndListeners.current.get(id);

      if (removeListenner) {
        removeListenner();
      }

      animationEndListeners.current.delete(id);
      animatedRefs.current.delete(id);

      setItems((items) => {
        const filteredItems = items.filter((item) => item[identifierKey] !== id);
        return filteredItems;
      });

      setPendingRemovalItemsIds((itemsIds) => {
        const filteredIds = itemsIds.filter((itemId) => itemId !== id);
        return filteredIds;
      });
    },
    [identifierKey],
  );

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const alreadyHasListener = animationEndListeners.current.has(itemId);
      const animatedElement = animatedRef?.current;

      if (animatedElement && !alreadyHasListener) {
        function onAnimationEnd() {
          handleAnimationEnd(itemId);
        }

        function removeListenner() {
          animatedElement!.removeEventListener('animationend', onAnimationEnd);
        }

        animationEndListeners.current.set(itemId, removeListenner);
        animatedElement.addEventListener('animationend', onAnimationEnd);
      }
    });
  }, [pendingRemovalItemsIds, handleAnimationEnd]);

  useEffect(() => {
    const removeListenner = animationEndListeners.current;

    return () => {
      removeListenner.forEach((removeEventListener) => removeEventListener());
    };
  }, []);

  const getAnimatedRef = useCallback((identifier: T[k]) => {
    let animatedRef = animatedRefs.current.get(identifier);

    if (!animatedRef) {
      animatedRef = createRef<R>();
      animatedRefs.current.set(identifier, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback(
    (renderItem: IRenderItem<T, R>) => {
      return items.map((item, index) => {
        const identifier = item[identifierKey];
        const isLeaving = pendingRemovalItemsIds.includes(identifier);
        const animatedRef = getAnimatedRef(identifier);

        return renderItem({
          item,
          index,
          isLeaving,
          animatedRef,
        });
      });
    },
    [items, pendingRemovalItemsIds, identifierKey, getAnimatedRef],
  );

  return {
    items,
    setItems,
    handleRemoveItem,
    renderList,
  };
}
