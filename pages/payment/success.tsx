/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import _ from 'lodash';
import { getCheckoutSession, getUser } from '../../lib/utils';
import Layout from '../../components/layout/Layout';
import { getCheckoutSessionData } from '../../lib/analytics';


export default function Success({
  token,
  email,
  redirectUrl,
  sid,
  user,
  session
}) {
  useEffect(() => {
    setTimeout(() => {
      try {
        if (user.registerCompleted && session.payment_status === 'paid') {
          /* const conversionData = getCheckoutSessionData(session);
          window.analytics.identify(user.uuid, conversionData.traits);
          window.analytics.track('Payment Conversion', conversionData.properties);
          if (!_.isEmpty(conversionData.coupon)) {
            window.analytics.track('Coupon Redeemed', conversionData.coupon);
          } */
        }
      } catch (err) {
        /* window.analytics.track('Conversion Tracking Error'); */
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
  const DRIVE_WEB = 'https://drive.internxt.com';
  const host = (ctx.req.headers.host.match(/^localhost/) ? 'http://' : 'https://') + ctx.req.headers.host; let session = {}; let user = {};

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

    redirectUrl = `${DRIVE_WEB}/appsumo?register=activate&email=${body.email}&token=${body.token}&cs_id=${ctx.query.sid}`;
  }

  try {
    [session, user] = await Promise.all([getCheckoutSession(ctx.query.sid), getUser(body.email)]);
  } catch (err) {
    // NO OP
  }

  return {
    props: {
      token: body.token,
      email: body.email,
      redirectUrl,
      sid: ctx.query.sid,
      session,
      user
    }
  };
};
