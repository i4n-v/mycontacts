type IOderBy = 'ASC' | 'DESC';

interface IContactParams {
  name?: string;
  orderBy: IOderBy;
}

export { IOderBy, IContactParams };
