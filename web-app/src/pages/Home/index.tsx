import {
  Card,
  Container,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListContainer,
  SearchNotFoundContainer,
} from './styles';
import arrow from '@/assets/icons/arrow.svg';
import edit from '@/assets/icons/edit.svg';
import trash from '@/assets/icons/trash.svg';
import { Link } from 'react-router';
import { formatPhone } from '@/utils';
import { Button, Loader, Modal } from '@/components';
import sad from '@/assets/icons/sad.svg';
import emptyBox from '@/assets/icons/empty-box.svg';
import magnifierQuestion from '@/assets/icons/magnifier-question.svg';
import useHome from './useHome';

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
      {hasContacts && (
        <InputSearchContainer>
          <input type="text" placeholder="Pesquisar contato..." onChange={handleChangeSearchTerm} />
        </InputSearchContainer>
      )}
      <Header justifyContent={hasError ? 'flex-end' : hasContacts ? 'space-between' : 'center'}>
        {!hasError && hasContacts && (
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
        {!isLoading && !hasContacts && (
          <EmptyListContainer>
            <img src={emptyBox} alt="Empty box" />
            <p>
              Você ainda não tem nenhum contato cadastrado! Clique no botão
              <strong>"Novo Contato"</strong> à cima para cadastrar o seu primeiro!
            </p>
          </EmptyListContainer>
        )}
        {!isLoading && hasContacts && !contacts.length && (
          <SearchNotFoundContainer>
            <img src={magnifierQuestion} alt="Magnifier question" />
            <p>
              Nenhum resultado foi encontrado para <strong>"{searchTerm}".</strong>
            </p>
          </SearchNotFoundContainer>
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
                    {contact.categoryName && <small>{contact.categoryName}</small>}
                  </div>
                  {contact.email && <span>{contact.email}</span>}
                  {contact.phone && <span>{formatPhone(contact.phone)}</span>}
                </div>
                <div className="actions">
                  <Link to={`/edit/${contact.id}`}>
                    <img src={edit} alt="Edit" />
                  </Link>
                  <button type="button" onClick={() => handleDeleteContact(contact)}>
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
