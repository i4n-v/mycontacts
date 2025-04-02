import { IMakeRequestOptions, IQueryParams } from '@/@types/HttpClient';
import { APIError } from '@/errors';

class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  makeURL(baseUrl: string, url: string, params?: IQueryParams) {
    const urlObject = new URL(url, baseUrl);
    const invalidValues = [undefined, null, ''];

    if (params) {
      const paramsEntries = Object.entries(params);

      paramsEntries.forEach(([key, value]) => {
        if (invalidValues.includes(value)) return;

        if (Array.isArray(value)) {
          return value.forEach((item) => {
            urlObject.searchParams.append(`${key}[]`, item);
          });
        }

        urlObject.searchParams.append(key, value);
      });
    }

    return urlObject;
  }

  async makeRequest<T>(path: string, options: IMakeRequestOptions = {}): Promise<T> {
    const url = this.makeURL(this.baseUrl, path, options.params);
    const headers = new Headers();
    let body: any;

    if (options.body) {
      headers.append('Content-Type', 'application/json');
      body = JSON.stringify(options.body);
    }

    if (options.headers) {
      const headersEntries = Object.entries(options.headers);

      headersEntries.forEach(([name, value]) => {
        headers.append(name, value);
      });
    }

    const response = await fetch(url, {
      ...options,
      headers,
      body,
    });

    const contentType = response.headers.get('Content-Type');
    let responseBody: any = null;

    if (contentType?.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }

  get<T = any>(path: string, options?: Omit<IMakeRequestOptions, 'method' | 'body'>) {
    return this.makeRequest<T>(path, {
      method: 'GET',
      ...options,
    });
  }

  post<T = any>(path: string, options?: Omit<IMakeRequestOptions, 'method'>) {
    return this.makeRequest<T>(path, {
      method: 'POST',
      ...options,
    });
  }

  put<T = any>(path: string, options?: Omit<IMakeRequestOptions, 'method'>) {
    return this.makeRequest<T>(path, {
      method: 'PUT',
      ...options,
    });
  }

  patch<T = any>(path: string, options?: Omit<IMakeRequestOptions, 'method'>) {
    return this.makeRequest<T>(path, {
      method: 'PATCH',
      ...options,
    });
  }

  delete<T = any>(path: string, options?: Omit<IMakeRequestOptions, 'method' | 'body'>) {
    return this.makeRequest<T>(path, {
      method: 'DELETE',
      ...options,
    });
  }
}

export default HttpClient;
