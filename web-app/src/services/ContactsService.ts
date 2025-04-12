import { IContact, IInsertContact, IReturnContact } from '@/@types/Contact';
import { appHttpClient } from '@/configs';
import { HttpClient } from '@/lib';

interface IListContactsParams {
  orderBy?: string;
  name?: string;
}

class ContactsService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = appHttpClient;
  }

  getContactById(id: string) {
    return this.httpClient.get<IContact>(`/contacts/${id}`);
  }

  listContacts(params?: IListContactsParams) {
    return this.httpClient.get<IContact[]>('/contacts', { params });
  }

  createContact(contact: IInsertContact) {
    return this.httpClient.post<IReturnContact>('/contacts', { body: contact });
  }

  updateContact(id: string, contact: IInsertContact) {
    return this.httpClient.put<IReturnContact>(`/contacts/${id}`, { body: contact });
  }

  deleteContact(id: string) {
    return this.httpClient.delete<IReturnContact>(`/contacts/${id}`);
  }
}

export default new ContactsService();
