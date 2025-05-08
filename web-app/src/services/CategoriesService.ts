import { ICategoryPersistence } from '@/@types/Category';
import { appHttpClient } from '@/configs';
import { HttpClient } from '@/lib';
import { CategoryMapper } from './mappers';

class CategoriesService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = appHttpClient;
  }

  async listCategories(signal?: AbortSignal) {
    const response = await this.httpClient.get<ICategoryPersistence[]>('/categories', { signal });

    return response.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
