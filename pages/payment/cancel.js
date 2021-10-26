/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';

export default function Cancelled() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cancelUrl = urlParams.get('cancelUrl');

    window.analytics.track(
      'Order Canceled',
      () => { window.location.assign(urlParams.has('cancelUrl') ? cancelUrl : (`${window.location.host}/pricing`)); }
    );
  }, []);

  return (
    <Layout segmentName="Order Canceled" />
  );
}
