import { Overlay } from './styles';
import ReactDOM from 'react-dom';
import { ILoaderProps } from './types';

export default function Loader({ isLoading }: ILoaderProps) {
  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('fullscreen-root')!,
  );
}
