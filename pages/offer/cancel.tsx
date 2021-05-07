import React from 'react';
import Layout from '../../components/layout/Layout';

export default function Cancelled() {
  return (
    <Layout segmentName="landing-subscription200GB-cancel">
      <script dangerouslySetInnerHTML={{ __html: 'analytics.track(\'landing-subscription200GB-cancel\', function() { window.location.href=\'https://internxt.com/offer\'; });' }} />
    </Layout>
  );
}
