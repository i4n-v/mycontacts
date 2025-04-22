import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmount<T extends HTMLElement>(visible: boolean) {
  const [shouldRender, setShouldRender] = useState(visible);
  const animatedElementRef = useRef<T | null>(null);

  useEffect(() => {
    const animatedElementRefElement = animatedElementRef.current;

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    if (visible) {
      setShouldRender(true);
    } else if (animatedElementRefElement) {
      animatedElementRefElement.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (animatedElementRefElement) {
        animatedElementRefElement.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [visible]);

  return { shouldRender, animatedElementRef };
}
