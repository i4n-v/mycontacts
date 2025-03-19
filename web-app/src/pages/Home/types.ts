type IOrderBy = 'asc' | 'desc';

interface IHeaderProps {
  hasError: boolean;
}

interface IListContainerProps {
  orderBy: IOrderBy;
}

export type { IOrderBy, IHeaderProps, IListContainerProps };
