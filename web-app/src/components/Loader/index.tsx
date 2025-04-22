import { Overlay } from './styles';
import { ILoaderProps } from './types';
import Spinner from '../Spinner';
import ReactPortal from '../ReactPortal';
import { useAnimatedUnmount } from '@/hooks';

export default function Loader({ isLoading }: ILoaderProps) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount<HTMLDivElement>(isLoading);

  if (!shouldRender) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay ref={animatedElementRef} isLeaving={!isLoading}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}
