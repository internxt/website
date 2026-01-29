import { nextCsrf } from 'next-csrf';
import { GetServerSideProps, NextApiHandler } from 'next';

const { csrf: _csrf, setup: _setup } = nextCsrf({
  secret: process.env.CSRF_SECRET,
  ignoredMethods: ['OPTIONS'],
});

const setup = _setup as unknown as (handler: GetServerSideProps) => GetServerSideProps;
const csrf = _csrf as unknown as (handler: NextApiHandler) => NextApiHandler;

export { csrf, setup };
