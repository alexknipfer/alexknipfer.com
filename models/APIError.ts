import { HttpStatusCode } from './Http';

export interface APIError extends Error {
  toJSON: () => {
    statusCode: HttpStatusCode;
    errors: Array<Record<string, any>>;
  };
}
