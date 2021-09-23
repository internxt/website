import React from 'react';
import Layout from '../../components/layout/Layout';

export default function Cancelled() {
  return (
    <Layout segmentName="Payment Canceled">
      <script dangerouslySetInnerHTML={{ __html: 'analytics.track(\'Payment Canceled\', function() { window.location.href=\'https://internxt.com/pricing\'; });' }} />
    </Layout>
  );
}
