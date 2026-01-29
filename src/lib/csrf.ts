import { nextCsrf } from 'next-csrf';
import { GetServerSideProps } from 'next';

const { csrf, setup: _setup } = nextCsrf({
  secret: process.env.CSRF_SECRET,
  ignoredMethods: ['OPTIONS'],
});

const setup = _setup as unknown as (handler: GetServerSideProps) => GetServerSideProps;

export { csrf, setup };
