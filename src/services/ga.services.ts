const SEND_TO = process.env.NEXT_PUBLIC_GA_ID;

const handleAdsConversion = (url, elementConversion, tag, value, currency) => {
  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  if (window.gtag) {
    window.gtag('event', elementConversion, {
      send_to: `${SEND_TO}/${tag}`,
      value: value,
      currency: currency,
      event_callback: callback,
    });
  } else {
    callback();
  }
};

export { handleAdsConversion };
