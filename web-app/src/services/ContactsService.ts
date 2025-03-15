import { IContact } from '@/@types/Contact';
import { HttpClient } from '@/configs';

interface IListContactsParams {
  orderBy?: string;
  name?: string;
}

class ContactsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(import.meta.env.VITE_API_URL);
  }

  async listContacts(params?: IListContactsParams) {
    const response = await this.httpClient.get<IContact[]>('/contacts', params);
    return response;
  }
}

export default new ContactsService();
