import magnifierQuestion from '@/assets/icons/magnifier-question.svg';
import { ISearchNotFoundProps } from './types';
import { Container } from './styles';

export default function SearchNotFound({ searchTerm }: ISearchNotFoundProps) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Magnifier question" />
      <p>
        Nenhum resultado foi encontrado para <strong>"{searchTerm}".</strong>
      </p>
    </Container>
  );
}
