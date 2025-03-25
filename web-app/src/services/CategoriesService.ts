import { ICategory } from '@/@types/Category';
import { HttpClient } from '@/configs';

class CategoriesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(import.meta.env.VITE_API_URL);
  }

  async listCategories() {
    const response = await this.httpClient.get<ICategory[]>('/categories');
    return response;
  }
}

export default new CategoriesService();
