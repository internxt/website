import axios from 'axios';
import _ from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const response = await axios.get(`${process.env.CURRENCY_VALUE}/latest/currencies/eur.json`);

    const values = _.cloneDeep(response.data); // Avoid mutating the original object

    if (!values) {
      return res.status(404).send({ message: 'Not found' });
    }

    res.status(200).json(values.eur);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
