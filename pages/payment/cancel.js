import React from 'react';
import Layout from '../../components/layout/Layout';

export default function Cancelled() {
  return (
    <Layout segmentName="Order Canceled">
      <script dangerouslySetInnerHTML={{ __html: 'analytics.track(\'Order Canceled\', function() { window.location.href=\'https://internxt.com/pricing\'; });' }} />
    </Layout>
  );
}
