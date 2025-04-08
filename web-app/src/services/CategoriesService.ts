import { ICategory } from '@/@types/Category';
import { appHttpClient } from '@/configs';
import { HttpClient } from '@/lib';

class CategoriesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = appHttpClient;
  }

  listCategories() {
    return this.httpClient.get<ICategory[]>('/categories');
  }
}

export default new CategoriesService();
