import { IQueryParams } from '@/@types/HttpClient';
import APIError from '@/errors/APIError';
import { makeURL } from '@/utils';

class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T = any>(url: string, params?: IQueryParams): Promise<T> {
    const response = await fetch(makeURL(this.baseUrl, url, params));
    const contentType = response.headers.get('Content-Type');
    let body: any = null;

    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
