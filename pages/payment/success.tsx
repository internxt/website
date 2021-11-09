import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../../components/layout/Layout';
import { getProductProperties } from '../api/stripe/stripeProducts';

export default function Success({
  email,
  token,
  redirectUrl
}) {
  useEffect(() => {
    setTimeout(() => {
    }, 5000);

    if (email && token) {
      const urlParams = new URLSearchParams(window.location.search);
      const properties = getProductProperties(urlParams.get('product'));
      const impact = sessionStorage.getItem('irclickid') ? 'impact' : null;
      const other = 'organic';
      const affiliate = [impact, other].find((o) => typeof o !== 'undefined' && o !== null);
      properties.affiliate = affiliate;
      window.analytics.track('Order Completed', properties, () => {
        setTimeout(() => {
          window.location = redirectUrl;
        }, 5000);
      });
    } else {
      window.location = redirectUrl;
    }
  });
  return (
    <Layout
      segmentName="Order Completed"
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
  let body = { email: null, token: null };
  if (request) {
    body = await request.json().catch(() => ({}));

    redirectUrl = `${process.env.DRIVE_WEB}/appsumo?register=activate&email=${body.email}&token=${body.token}`;
  }

  // console.warn('[%s] %s', body.email, redirectUrl);

  return {
    props: {
      token: body.token,
      email: body.email,
      redirectUrl
    }
  };
};
