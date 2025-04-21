import { CSSProperties } from 'styled-components';

interface IContainerProps {
  justifyContent: CSSProperties['justifyContent'];
}

interface IHeaderProps {
  hasContacts: boolean;
  hasError: boolean;
  quantityOfContacts: number;
}

export type { IContainerProps, IHeaderProps };
