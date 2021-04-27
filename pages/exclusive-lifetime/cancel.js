import React from 'react';
import Layout from '../../components/layout/Layout';

export default function Cancelled() {
  return (
    <Layout segmentName="landing-exclusive-lifetime-cancel">
      <script dangerouslySetInnerHTML={{ __html: 'analytics.track(\'landing-exclusive-lifetime-cancel\', function() { window.location.href=\'https://internxt.com/exclusive-lifetime\'; });' }} />
    </Layout>
  );
}
