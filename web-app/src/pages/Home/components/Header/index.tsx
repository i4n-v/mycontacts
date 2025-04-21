import { Link } from 'react-router';
import { Container } from './styles';
import { IHeaderProps } from './types';

export default function Header({ hasError, hasContacts, quantityOfContacts }: IHeaderProps) {
  const alignment = hasError ? 'flex-end' : hasContacts ? 'space-between' : 'center';

  return (
    <Container justifyContent={alignment}>
      {!hasError && hasContacts && (
        <strong>
          {quantityOfContacts} {quantityOfContacts === 1 ? 'Contato' : 'Contatos'}
        </strong>
      )}
      <Link to="/new">Novo Contato</Link>
    </Container>
  );
}
