import { HttpStatusCode } from './Http';

export type CustomErrors = SpotifyError;

export class SpotifyError extends Error {
  public source = 'Spotify API Error';
  public status: HttpStatusCode;

  constructor(message: string, status: HttpStatusCode) {
    super(message);
    this.status = status;
  }
}

export class APIError extends Error {
  public errors: Error[] = [];
  public status: HttpStatusCode;

  constructor() {
    super();
  }

  public addError(error: CustomErrors) {
    if (!this.status) {
      this.status = error.status;
    }

    this.errors.push(error);
    this.message += `${error.message} \n`;
  }
}
