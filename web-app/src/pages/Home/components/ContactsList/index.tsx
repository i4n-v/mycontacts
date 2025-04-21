import { Link } from 'react-router';
import arrow from '@/assets/icons/arrow.svg';
import edit from '@/assets/icons/edit.svg';
import trash from '@/assets/icons/trash.svg';
import { formatPhone } from '@/utils';
import { Card } from './styles';
import { IContactListProps } from './types';

export default function ContactsList({
  contacts,
  onToggleOrderBy,
  onDeleteContact,
}: IContactListProps) {
  return (
    <>
      {!!contacts.length && (
        <header>
          <button type="button" onClick={onToggleOrderBy}>
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
              {contact.categoryName && <small>{contact.categoryName}</small>}
            </div>
            {contact.email && <span>{contact.email}</span>}
            {contact.phone && <span>{formatPhone(contact.phone)}</span>}
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button" onClick={() => onDeleteContact(contact)}>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}
