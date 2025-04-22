import { IContactDomain } from '@/@types/Contact';
import { useCallback, useEffect, useState } from 'react';
import { IOrderBy } from './types';
import { ContactsService } from '@/services';
import { useDebounceCallback } from '@/hooks';
import { toast } from '@/utils';

export default function useHome() {
  const [contacts, setContacts] = useState<IContactDomain[]>([]);
  const [orderBy, setOrderBy] = useState<IOrderBy>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasContacts, setHasContacts] = useState(false);
  const [isDeleteModalVisable, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState<IContactDomain | null>(null);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts({
        name: searchTerm,
        orderBy,
      });

      setHasContacts((hasContacts) => (hasContacts ? hasContacts : !!contactsList.length));
      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy, searchTerm]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

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

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  function handleDeleteContact(contact: IContactDomain) {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }

  async function handleConfirmDeleteContact() {
    try {
      if (!contactBeingDeleted) return;

      setIsLoadingDelete(true);

      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((contacts) => {
        return contacts.filter((contact) => contact.id !== contactBeingDeleted.id);
      });

      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o contato!',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisable,
    hasContacts,
    hasError,
    orderBy,
    searchTerm,
    contacts,
    contactBeingDeleted,
    handleTryAgain,
    handleToggleOrderBy,
    handleChangeSearchTerm,
    handleDeleteContact,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
  };
}
