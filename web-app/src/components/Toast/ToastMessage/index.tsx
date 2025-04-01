import { Container } from './styles';
import { IToastMessageProps } from './types';
import xCircle from '@/assets/icons/x-circle.svg';
import checkCircle from '@/assets/icons/check-circle.svg';

export default function ToastMessage({ text, type = 'default' }: IToastMessageProps) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircle} alt="X" />}
      {type === 'success' && <img src={checkCircle} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}
