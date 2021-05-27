import React from 'react';
import Layout from '../../components/layout/Layout';

export default function Cancelled() {
  return (
    <Layout
      title="Internxt"
      description="Cancel Suscription" 
      segmentName="landing-subscription200GB-canceled">
      <script dangerouslySetInnerHTML={{ __html: 'function() { window.location.href=\'https://internxt.com/offer\'; };' }} />
    </Layout>
  );
}
