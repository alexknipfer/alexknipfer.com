import { NextApiResponse } from 'next';

import { BadRequestError } from '@/models/errors';
import { APIError } from '@/models/APIError';

function isAPIError(error: unknown | APIError): error is APIError {
  return (error as APIError).toJSON !== undefined;
}

export function errorHandler(res: NextApiResponse, error: unknown) {
  const json = isAPIError(error)
    ? error.toJSON()
    : new BadRequestError('An unknown error has occured').toJSON();

  console.error('API ERROR RESPONSE: ', json);

  return res.status(json.statusCode).json({
    status: json.statusCode,
    errors: json.errors,
  });
}
