import { NextApiResponse } from 'next';
import { forEach } from 'ramda';

import { APIError, CustomErrors } from '@/models/errors';

export const errorHandler = (
  res: NextApiResponse,
  errors: CustomErrors | CustomErrors[],
) => {
  const apiError = new APIError();

  if (errors instanceof Array) {
    forEach((e) => apiError.addError(e), errors);
  } else {
    apiError.addError(errors);
  }

  return res.status(apiError.status).json(apiError);
};
