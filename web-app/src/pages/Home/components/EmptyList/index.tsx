import { Container } from './styles';
import emptyBox from '@/assets/icons/empty-box.svg';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Empty box" />
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <strong>"Novo Contato"</strong> à cima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
}
