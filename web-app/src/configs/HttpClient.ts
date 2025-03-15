import { IQueryParams } from '@/@types/HttpClient';
import { makeURL } from '@/utils';

class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T = any>(url: string, params?: IQueryParams): Promise<T> {
    const response = await fetch(makeURL(this.baseUrl, url, params));
    const json = await response.json();
    return json;
  }
}

export default HttpClient;
