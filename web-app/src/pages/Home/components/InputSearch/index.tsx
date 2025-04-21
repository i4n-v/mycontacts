import { Container } from './styles';
import { IInputSearchProps } from './types';

export default function InputSearch(props: IInputSearchProps) {
  return (
    <Container>
      <input type="text" placeholder="Pesquisar contato..." {...props} />
    </Container>
  );
}
