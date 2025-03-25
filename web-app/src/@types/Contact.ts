interface IContact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  category_id?: string;
  category_name?: string;
}

type IInsertContact = Omit<IContact, 'id' | 'category_name'>;

type IReturnContact = Omit<IContact, 'category_name'>;

export type { IContact, IInsertContact, IReturnContact };
