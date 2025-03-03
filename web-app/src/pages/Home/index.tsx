import { Card, Container, Header, InputSearchContainer, ListContainer } from './styles';
import arrow from '@/assets/icons/arrow.svg';
import edit from '@/assets/icons/edit.svg';
import trash from '@/assets/icons/trash.svg';
import { Modal } from '@/components';
import { Link } from 'react-router';

export default function Home() {
  return (
    <Container>
      <Modal
        danger
        title="Teste"
        description="teste"
        cancelLabel="Cancelar"
        confirmLabel="Deletar"
      />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index}>
            <div className="info">
              <div className="contact-name">
                <strong>Mateus Silva</strong>
                <small>Instagram</small>
              </div>
              <span>mateus@devacademy.com.br</span>
              <span>(41) 99999-9999</span>
            </div>
            <div className="actions">
              <Link to={`/edit/${index}`}>
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
