import { IContactDomain } from '@/@types/Contact';

interface IContactListProps {
  contacts: IContactDomain[];
  onToggleOrderBy(): void;
  onDeleteContact(contact: IContactDomain): void;
}

export type { IContactListProps };
