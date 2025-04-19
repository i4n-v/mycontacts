import { ICategoryDomain, ICategoryPersistence } from '@/@types/Category';

class ContactMapper {
  toPersistence(persistenceCategory: ICategoryPersistence): ICategoryDomain {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }

  toDomain(persistenceCategory: ICategoryPersistence): ICategoryDomain {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new ContactMapper();
