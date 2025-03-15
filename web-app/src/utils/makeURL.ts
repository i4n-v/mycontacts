import { IQueryParams } from '@/@types/HttpClient';

export default function makeURL(baseUrl: string, url: string, params?: IQueryParams) {
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
