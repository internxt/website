/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';

export default function Cancelled() {
  useEffect(() => {
    window.location = 'https://internxt.com/pricing';
    /*
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const checkoutSessionId = urlSearchParams.get('sid');
      window.analytics.track(
        'Checkout Canceled',
        {
          cs_id: checkoutSessionId
        }
      );
    } catch (err) {
      window.location = 'http://internxt.com/pricing';
    }
    */
  }, []);

  return (
    <Layout segmentName="Order Canceled" />
  );
}
