import { Link } from 'react-router';
import { Container } from './styles';
import arrow from '@/assets/icons/arrow.svg';
import { IPageHeaderProps } from './types';

export default function PageHeader({ title }: IPageHeaderProps) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}
