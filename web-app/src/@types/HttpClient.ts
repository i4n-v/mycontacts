type IQueryParams = Record<string, any>;

interface IMakeRequestOptions {
  method?: 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';
  body?: any;
  params?: IQueryParams;
  headers?: Record<string, string>;
}

export type { IQueryParams, IMakeRequestOptions };
