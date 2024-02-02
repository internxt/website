import { GetServerSidePropsContext } from 'next';

export default function getLang(ctx: GetServerSidePropsContext) {
  return ctx.locale;
}
