import { IContactDomain, IContactPersistence } from '@/@types/Contact';

class ContactMapper {
  toPersistence(
    domainContact: Omit<IContactDomain, 'id'>,
  ): Omit<IContactPersistence, 'id' | 'category_name'> {
    return {
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId,
    };
  }

  toDomain(persistenceContact: IContactPersistence): IContactDomain {
    return {
      id: persistenceContact.id,
      name: persistenceContact.name,
      email: persistenceContact.email,
      phone: persistenceContact.phone,
      categoryId: persistenceContact.category_id,
      categoryName: persistenceContact.category_name,
    };
  }
}

export default new ContactMapper();
