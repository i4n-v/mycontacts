interface IContact {
  id: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  category_id?: string | null;
}

export type { IContact };
