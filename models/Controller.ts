import { NextApiHandler } from 'next';

export interface Controller {
  index: NextApiHandler;
  show: NextApiHandler;
  create: NextApiHandler;
  update: NextApiHandler;
}
