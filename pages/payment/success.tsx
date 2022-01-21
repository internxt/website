/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { getCheckoutSession, getUser } from '../../lib/utils';
import Layout from '../../components/layout/Layout';
import { trackPayment } from '../../lib/analytics';

export default function Success({
  token,
  email,
  redirectUrl,
  session,
  user
}) {
  useEffect(() => {
    setTimeout(() => {
      trackPayment({
        session,
        user
      });
    }, 3000);
  });
  return (
    <Layout
      segmentName="Checkout Success"
      disableMailerlite
      disableDrift
      title="Internxt Checkout Succcess"
      description="Redirect"
    >
      <div>
        Redirecting to
        {' '}
        <a href={redirectUrl}>Drive Web</a>
        ...
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = (ctx.req.headers.host.match(/^localhost/) ? 'http://' : 'https://') + ctx.req.headers.host;
  let session = {};
  let user = {};

  if (!ctx.query.sid) {
    return {
      props: {
        token: '',
        email: '',
        redirectUrl: '/'
      }
    };
  }

  const request = await fetch(`${host}/api/stripe/session/${ctx.query.sid}`).then((res) => {
    if (res.status !== 200) {
      return null;
    }
    return res;
  }).catch(() => null);

  let redirectUrl = 'https://www.internxt.com';
  let body = { email: null, token: null };
  if (request) {
    body = await request.json().catch(() => ({}));
    redirectUrl = `${process.env.DRIVE_WEB}/appsumo?register=activate&email=${body.email}&token=${body.token}&cs_id=${ctx.query.sid}`;
    session = await getCheckoutSession(ctx.query.sid);
    user = await getUser(body.email);
  }

  return {
    props: {
      token: body.token,
      email: body.email,
      redirectUrl,
      session,
      user
    }
  };
};
