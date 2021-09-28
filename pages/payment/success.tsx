import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../../components/layout/Layout';
import { getProductProperties } from '../api/stripe/stripeProducts';

export default function Success(props) {
  useEffect(() => {
    setTimeout(() => {
    }, 5000);

    if (props.email && props.token) {
      const urlParams = new URLSearchParams(window.location.search);
      const properties = getProductProperties(urlParams.get('product'));
      window.analytics.track('Order Completed', properties, () => {
        setTimeout(() => {
          window.location = props.redirectUrl;
        }, 5000);
      });
    } else {
      window.location = props.redirectUrl;
    }
  }, []);
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
        <a href={props.redirectUrl}>Drive Web</a>
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

    redirectUrl = `${process.env.DRIVE_WEB}/appsumo?email=${body.email}&token=${body.token}`;
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
