import { CSSProperties } from 'styled-components';

type IOrderBy = 'asc' | 'desc';

interface IHeaderProps {
  justifyContent: CSSProperties['justifyContent'];
}

interface IListContainerProps {
  orderBy: IOrderBy;
}

export type { IOrderBy, IHeaderProps, IListContainerProps };
