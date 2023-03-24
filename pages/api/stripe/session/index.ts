/* eslint-disable consistent-return */
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    return /* postSession(req, res)*/;
  }

  return res.status(500).end(`Cannot ${encodeURI(req.method)} on ${encodeURI(req.url)}`);
};
