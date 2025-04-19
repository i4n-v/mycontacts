import { IContactDomain, IContactPersistence } from '@/@types/Contact';
import { appHttpClient } from '@/configs';
import { HttpClient } from '@/lib';
import { ContactMapper } from './mappers';

interface IListContactsParams {
  orderBy?: string;
  name?: string;
}

class ContactsService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = appHttpClient;
  }

  async getContactById(id: string) {
    const response = await this.httpClient.get<IContactPersistence>(`/contacts/${id}`);

    return ContactMapper.toDomain(response);
  }

  async listContacts(params?: IListContactsParams) {
    const response = await this.httpClient.get<IContactPersistence[]>('/contacts', { params });

    return response.map(ContactMapper.toDomain);
  }

  createContact(contact: Omit<IContactDomain, 'id' | 'categoryName'>) {
    const body = ContactMapper.toPersistence(contact);

    return this.httpClient.post<Omit<IContactPersistence, 'category_name'>>('/contacts', {
      body,
    });
  }

  updateContact(id: string, contact: Omit<IContactDomain, 'id' | 'categoryName'>) {
    const body = ContactMapper.toPersistence(contact);

    return this.httpClient.put<Omit<IContactPersistence, 'category_name'>>(`/contacts/${id}`, {
      body,
    });
  }

  deleteContact(id: string) {
    return this.httpClient.delete<Omit<IContactPersistence, 'category_name'>>(`/contacts/${id}`);
  }
}

export default new ContactsService();
