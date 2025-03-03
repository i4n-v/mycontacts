import { Container } from './styles';
import { IFormGroupProps } from './types';

export default function FormGroup({ children }: IFormGroupProps) {
  return <Container>{children}</Container>;
}
