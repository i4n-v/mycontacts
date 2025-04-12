import { Overlay } from './styles';
import { ILoaderProps } from './types';
import Spinner from '../Spinner';
import ReactPortal from '../ReactPortal';

export default function Loader({ isLoading }: ILoaderProps) {
  if (!isLoading) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}
