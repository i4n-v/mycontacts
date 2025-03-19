export default class APIError extends Error {
  response: Response;

  constructor(response: Response, body: any) {
    let errorMessage = `${response.status} - ${response.statusText}`;

    if (body) {
      errorMessage = body.error;
    }

    super(errorMessage);
    this.name = 'APIError';
    this.response = response;
  }
}
