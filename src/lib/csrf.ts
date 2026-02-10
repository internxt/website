import { nextCsrf } from 'next-csrf';

const { csrf: originalCsrf, setup: originalSetup } = nextCsrf({
  // eslint-disable-next-line no-undef
  secret: process.env.CSRF_SECRET,
  ignoredMethods: ['OPTIONS'],
});

const setup = originalSetup as unknown as (handler: any) => any;
const csrf = originalCsrf as unknown as (handler: any) => any;

export { csrf, setup };
