import { IContact } from '@/@types/Contact';
import {
  Card,
  Container,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';
import arrow from '@/assets/icons/arrow.svg';
import edit from '@/assets/icons/edit.svg';
import trash from '@/assets/icons/trash.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { formatPhone } from '@/utils';
import { IOrderBy } from './types';
import { useDebounceCallback } from '@/hooks';
import { Button, Loader } from '@/components';
import { ContactsService } from '@/services';
import sad from '@/assets/icons/sad.svg';

export default function Home() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [orderBy, setOrderBy] = useState<IOrderBy>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function loadContacts() {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts({
        name: searchTerm,
        orderBy,
      });

      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadContacts();
  }, [orderBy, searchTerm]);

  function handleToggleOrderBy() {
    setOrderBy((orderBy) => (orderBy === 'asc' ? 'desc' : 'asc'));
  }

  const handleChangeSearchTerm = useDebounceCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
  );

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." onChange={handleChangeSearchTerm} />
      </InputSearchContainer>
      <Header hasError={hasError}>
        {!hasError && (
          <strong>
            {contacts.length} {contacts.length === 1 ? 'Contato' : 'Contatos'}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>
      <ListContainer orderBy={orderBy}>
        {hasError && (
          <ErrorContainer>
            <img src={sad} alt="Sad" />
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar Novamente
            </Button>
          </ErrorContainer>
        )}
        {!hasError && (
          <>
            {!!contacts.length && (
              <header>
                <button type="button" onClick={handleToggleOrderBy}>
                  <span>Nome</span>
                  <img src={arrow} alt="Arrow" />
                </button>
              </header>
            )}
            {contacts.map((contact) => (
              <Card key={contact.id}>
                <div className="info">
                  <div className="contact-name">
                    <strong>{contact.name}</strong>
                    {contact.category_name && <small>{contact.category_name}</small>}
                  </div>
                  {contact.email && <span>{contact.email}</span>}
                  {contact.phone && <span>{formatPhone(contact.phone)}</span>}
                </div>
                <div className="actions">
                  <Link to={`/edit/${contact.id}`}>
                    <img src={edit} alt="Edit" />
                  </Link>
                  <button type="button">
                    <img src={trash} alt="Delete" />
                  </button>
                </div>
              </Card>
            ))}
          </>
        )}
      </ListContainer>
    </Container>
  );
}
