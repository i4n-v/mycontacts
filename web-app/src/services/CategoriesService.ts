import { ICategory } from '@/@types/Category';
import { appHttpClient } from '@/configs';
import { HttpClient } from '@/lib';

class CategoriesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = appHttpClient;
  }

  async listCategories() {
    const response = await this.httpClient.get<ICategory[]>('/categories');
    return response;
  }
}

export default new CategoriesService();
