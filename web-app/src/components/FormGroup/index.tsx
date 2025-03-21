import Spinner from '../Spinner';
import { Container } from './styles';
import { IFormGroupProps } from './types';

export default function FormGroup({ children, error, isLoading }: IFormGroupProps) {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isLoading && <Spinner size={16} className="loader" />}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}
