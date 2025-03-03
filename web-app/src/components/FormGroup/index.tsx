import { Container } from './styles';
import { IFormGroupProps } from './types';

export default function FormGroup({ children, error }: IFormGroupProps) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}
