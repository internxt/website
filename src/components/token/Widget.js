import React, { useEffect } from 'react';

const Widget = () => {
  function addScript() {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://crypto.com/price/static/widget/index.js';
    head.appendChild(script);
  }

  useEffect(() => {
    addScript();
  });

  return (
    <>
      <div className="flex flex-col w-full" id="crypto-widget-CoinList" data-transparent="true" data-design="modern" data-coins="internxt" />
    </>
  );
};

export default Widget;
