interface IContactCommon {
  id: string;
  name: string;
  email?: string;
  phone?: string;
}

interface IContactPersistence extends IContactCommon {
  category_id?: string;
  category_name?: string;
}

interface IContactDomain extends IContactCommon {
  categoryId?: string;
  categoryName?: string;
}

export type { IContactPersistence, IContactDomain };
