const SEND_TO = process.env.GOOGLE_ANALYTICS_SENDTO;

const handleAdsConversion = (url, elementConversion, value, currency) => {
  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: SEND_TO,
      value: value,
      currency: currency,
      event_callback: callback,
    });
  } else {
    callback();
  }
};

export { handleAdsConversion };
