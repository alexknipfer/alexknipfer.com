import { APIError } from './APIError';
import { HttpStatusCode } from './Http';

export class BadRequestError extends Error implements APIError {
  constructor(message: string) {
    super(message);

    this.name = 'BadRequestError';
  }

  toJSON() {
    return {
      statusCode: HttpStatusCode.BAD_REQUEST,
      errors: [
        {
          title: 'Bad Request.',
          detail: this.message,
        },
      ],
    };
  }
}
