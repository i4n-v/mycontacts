import { IContact } from '@/@types/Contact';
import { Card, Container, Header, InputSearchContainer, ListContainer } from './styles';
import arrow from '@/assets/icons/arrow.svg';
import edit from '@/assets/icons/edit.svg';
import trash from '@/assets/icons/trash.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { formatPhone } from '@/utils';
import { IOrderBy } from './types';

export default function Home() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [orderBy, setOrderBy] = useState<IOrderBy>('asc');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/contacts?orderBy=${orderBy}`).then(async (response) => {
      const json = await response.json();
      setContacts(json);
    });
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((orderBy) => (orderBy === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>
          {contacts.length} {contacts.length === 1 ? 'Contato' : 'Contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>
      <ListContainer orderBy={orderBy}>
        <header>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
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
      </ListContainer>
    </Container>
  );
}
