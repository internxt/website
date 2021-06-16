import React from 'react';
import Layout from '../../components/layout/Layout';

export default function Cancelled() {
  const origin = process.env.NODE_ENV === 'development'
    ? 'analytics.track(\'infinite-lifetime-cancel\', function() { window.location.href=\'http://localhost:3001/infinite\'; });'
    : 'analytics.track(\'infinite-lifetime-cancel\', function() { window.location.href=\'https://internxt.com/infinite\'; });';
  return (
    <Layout segmentName="infinite-lifetime-cancel">
      <script dangerouslySetInnerHTML={{ __html: origin }} />
    </Layout>
  );
}
