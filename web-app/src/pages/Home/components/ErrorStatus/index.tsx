import { Button } from '@/components';
import { Container } from './styles';
import sad from '@/assets/icons/sad.svg';
import { IErrorStatusProps } from './types';

export default function ErrorStatus({ onTryAgain }: IErrorStatusProps) {
  return (
    <Container>
      <img src={sad} alt="Sad" />
      <strong>Ocorreu um erro ao obter os seus contatos!</strong>
      <Button type="button" onClick={onTryAgain}>
        Tentar Novamente
      </Button>
    </Container>
  );
}
