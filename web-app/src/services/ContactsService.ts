import { IContact, IInsertContact, IReturnContact } from '@/@types/Contact';
import { HttpClient } from '@/configs';

interface IListContactsParams {
  orderBy?: string;
  name?: string;
}

class ContactsService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(import.meta.env.VITE_API_URL);
  }

  async listContacts(params?: IListContactsParams) {
    const response = await this.httpClient.get<IContact[]>('/contacts', { params });
    return response;
  }

  async createContact(contact: IInsertContact) {
    const response = await this.httpClient.post<IReturnContact>('/contacts', { body: contact });
    return response;
  }
}

export default new ContactsService();
