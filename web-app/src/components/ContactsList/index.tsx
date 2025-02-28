import { Card, Container, Header, ListContainer } from './styles';
import arrow from '@/assets/icons/arrow.svg';
import edit from '@/assets/icons/edit.svg';
import trash from '@/assets/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
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
              <a href="/">
                <img src={edit} alt="Edit" />
              </a>
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
