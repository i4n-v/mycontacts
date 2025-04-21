import { Container, ListContainer } from './styles';
import { Loader, Modal } from '@/components';
import useHome from './useHome';
import {
  ContactsList,
  EmptyList,
  ErrorStatus,
  Header,
  InputSearch,
  SearchNotFound,
} from './components';

export default function Home() {
  const {
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
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Modal
        danger
        visible={isDeleteModalVisable}
        isLoading={isLoadingDelete}
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
      {hasContacts && <InputSearch onChange={handleChangeSearchTerm} />}
      <Header hasContacts={hasContacts} hasError={hasError} quantityOfContacts={contacts.length} />
      <ListContainer orderBy={orderBy}>
        {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
        {!isLoading && !hasContacts && <EmptyList />}
        {!isLoading && hasContacts && !contacts.length && (
          <SearchNotFound searchTerm={searchTerm} />
        )}
        {!hasError && (
          <ContactsList
            contacts={contacts}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />
        )}
      </ListContainer>
    </Container>
  );
}
