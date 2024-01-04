import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// API endpoint to create a Intercom ticket with:
// - ticket_type_id
// - title
// - description
// - name
// - Institutional email
// - plan_type
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const ticketObject = req.body;
  if (req.method === 'POST') {
    try {
      await axios.post(`${process.env.INTERCOM_API_URL}/tickets`, ticketObject, {
        headers: {
          'Content-Type': 'application/json',
          'Intercom-Version': '2.10',
          Authorization: `Bearer ${process.env.INTERCOM_TOKEN}`,
        },
      });

      return res.status(200).json({ status: 'OK', ticket: 'Ticket created' });
    } catch (error) {
      const err = error.response;
      console.log(err.data);
      res.status(err.status).json({ message: err.data.message });
    }
  } else {
    res.status(405).end(); //Method Not Allowed
  }
}
