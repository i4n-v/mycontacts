import { ICategoryPersistence } from '@/@types/Category';
import { appHttpClient } from '@/configs';
import { HttpClient } from '@/lib';
import { CategoryMapper } from './mappers';

class CategoriesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = appHttpClient;
  }

  async listCategories() {
    const response = await this.httpClient.get<ICategoryPersistence[]>('/categories');

    return response.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
