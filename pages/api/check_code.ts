import axios from 'axios';

// API endpoint to allow the client to download the app from any component without getServerSideProps
export default async function handler(req, res) {
  const { code, provider } = req.query;
  if (req.method === 'GET') {
    try {
      const isCouponValid = await axios.get(
        `${process.env.NEXT_PUBLIC_PAYMENTS_API}/payments/is-unique-code-available`,
        {
          params: {
            code: code,
            provider: provider,
          },
        },
      );
      res.status(isCouponValid.status).send(isCouponValid.data.message);
    } catch (error) {
      const err = error.response;
      res.status(err.status).json({ message: err.data.message });
    }
  } else {
    res.status(405).end(); //Method Not Allowed
  }
}
