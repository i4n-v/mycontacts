import { Overlay } from './styles';
import ReactDOM from 'react-dom';
import { ILoaderProps } from './types';
import Spinner from '../Spinner';

export default function Loader({ isLoading }: ILoaderProps) {
  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    document.getElementById('fullscreen-root')!,
  );
}
