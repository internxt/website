import React, { useEffect } from 'react';
import { GetServerSideProps } from "next";
import Layout from "../../components/layout/Layout";

export default function Success(props) {
  useEffect(() => {
    if (props.email && props.token) {
      window.analytics.track('landing-exclusive-lifetime-converted', {
        price: 499
      }, () => {
        setTimeout(() => {
          window.location = props.redirectUrl;
        }, 5000);
      });
    }
  }, []);

  return (
    <Layout
      segmentName="landing-lifetime-success"
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
  const host = (ctx.req.headers['host'].match(/^localhost/) ? 'http://' : 'https://') + ctx.req.headers['host'];

  if (!ctx.query.sid) {
    return {
      props: {
        token: '',
        email: '',
        redirectUrl: '/'
      }
    };
  }

  const request = await fetch(`${host}/api/stripe/session/${ctx.query.sid}`);
  const body = await request.json();

  const redirectUrl = `${process.env.DRIVE_API_URL}/appsumo/${body.email}?token=${body.token}`;

  console.warn('[%s] %s', body.email, redirectUrl);

  return {
    props: {
      token: body.token,
      email: body.email,
      redirectUrl
    }
  };
};
