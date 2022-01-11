import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Stripe from 'stripe';
import _ from 'lodash';
import getUserId from '../../lib/utils';
import Layout from '../../components/layout/Layout';

function getCheckoutSession(sid) {
  const KEY = process.env.NODE_ENV === 'production' ? process.env.STRIPE_PRIVATE_KEY : process.env.STRIPE_PRIVATE_KEY_TEST;
  const stripe = new Stripe(KEY, { apiVersion: '2020-08-27' });
  return stripe.checkout.sessions.retrieve(sid);
}

export default function Success({
  token,
  email,
  redirectUrl,
  analytics
}) {
  useEffect(() => {
    setTimeout(() => {
      if (!_.isEmpty(analytics)) {
        window.analytics.identify(
          analytics.userId
        );
        window.analytics.track(
          'Payment Conversion',
          analytics.properties
        );
      }
      window.location = redirectUrl;
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
  let analytics = {};
  let body = { email: null, token: null };
  if (request) {
    body = await request.json().catch(() => ({}));
    redirectUrl = `${process.env.DRIVE_WEB}/appsumo?register=activate&email=${body.email}&token=${body.token}`;

    try {
      const checkoutSession = await getCheckoutSession(ctx.query.sid);
      if (checkoutSession.payment_status === 'paid') {
        const userId = await getUserId(body.email);
        analytics = {
          email: body.email,
          userId,
          properties: {
            price_id: checkoutSession.metadata.price_id,
            email: checkoutSession.customer_details.email,
            currency: checkoutSession.metadata.currency.toUpperCase(),
            value: checkoutSession.amount_total * 0.01,
            type: checkoutSession.metadata.type
          }
        };
      }
    } catch (error) {
      analytics = {};
    }
  }

  // console.warn('[%s] %s', body.email, redirectUrl);

  return {
    props: {
      token: body.token,
      email: body.email,
      redirectUrl,
      analytics,
    }
  };
};
