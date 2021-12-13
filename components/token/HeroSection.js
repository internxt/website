/* eslint-disable react/self-closing-comp */
import React from 'react';

const HeroSection = ({
  textContent
}) => (

  <section id="buy" className="relative flex flex-col w-full pt-10 bg-white overflow-hidden">

    <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-8 lg:px-0 pt-8 pb-10 lg:pt-32 space-y-20 lg:space-y-0 lg:space-x-20 xl:space-x-40">

      {/* Main title */}
      <div className="flex flex-col text-left z-10 mt-20 lg:mt-0">

        <p className="mb-4 text-base font-semibold text-cool-gray-60">
          {textContent.eyebrow}
        </p>

        <h1 className="text-5xl sm:text-6xl font-semibold text-cool-gray-100 mb-4 sm:mb-6">
          <p>{textContent.title.line1}</p>
          <p>{textContent.title.line2}</p>
          <p>{textContent.title.line3}</p>
          <p>{textContent.title.line4}</p>
        </h1>

        <div className="flex flex-col text-sm font-normal w-full text-cool-gray-60 mb-6 sm:mb-12">
          {textContent.subtitle.line1}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.subtitle.line2}
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full">

          <a
            href="mailto:hello@intertnxt.com?subjectClaim%20my%20INXT%20benefits"
            className="flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 transition-all duration-75"
          >
            {textContent.cta}
          </a>

        </div>

      </div>

      {/* Token icon and info */}
      <div className="flex flex-col justify-center items-center z-10">
        <div className="relative w-64 h-64 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{
              backgroundImage: 'url(/images/token/img/token.png)',
              backgroundSize: 'cover',
              width: 256,
              height: 256
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundImage: 'url(/images/token/img/blur-bg.png)',
              backgroundSize: 'cover',
              width: 1462,
              height: 1152
            }}
          />
        </div>

        {/* Widget */}
        <div className="flex flex-col items-center w-full z-10">
          <script src="https://crypto.com/price/static/widget/index.js" />
          <div className="flex flex-col w-full" id="crypto-widget-CoinList" data-transparent="true" data-theme="dark" data-design="modern" data-coins="internxt" />
        </div>
      </div>

    </div>

    {/* Brands */}
    <div className="flex flex-row flex-wrap items-center justify-around w-full max-w-7xl mx-auto pt-20 px-6 md:px-14 bg-white text-sm uppercase text-cool-gray-90 font-medium">

      <div className="flex flex-col items-center space-y-8 flex-shrink-0 px-10 xl:px-16 pb-20">
        <p>{textContent.metrics}</p>

        <div className="flex flex-row space-x-8">
          <a href="https://crypto.com/price/internxt" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/crypto.webp" draggable="false" alt="crypto.com logo" /></a>
        </div>

        <div className="flex flex-row space-x-8">
          <a href="https://coinmarketcap.com/currencies/internxt/" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/coinmarketcap.webp" draggable="false" alt="coinmarketcap logo" /></a>
          <a href="https://wallet.coinbase.com/" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/coinbasewallet.webp" draggable="false" alt="coinbase logo" /></a>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8 flex-shrink-0 px-10 xl:px-16 pb-20">
        <p id="buy">{textContent.trade}</p>

        <div className="flex flex-row space-x-8">
          <a href="https://global.bittrex.com/Market/Index?MarketName=BTC-INXT" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/bittrex.webp" draggable="false" alt="bittrex logo" /></a>
          <a href="https://exrates.me/trading/INXTBTC" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/exrates.webp" draggable="false" alt="exrates logo" /></a>
        </div>

        <div className="flex flex-row space-x-8">
          <a href="https://latoken.com/exchange/INXT_BTC" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/latoken.webp" draggable="false" alt="latoken logo" /></a>
          <a href="https://mercatox.com/exchange/INXT/BTC" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/mercatox.webp" draggable="false" alt="mercatox logo" /></a>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8 flex-shrink-0 px-10 xl:px-16 pb-20">
        <p>{textContent.store}</p>

        <div className="flex flex-row space-x-8">
          <a href="https://www.binance.com/es" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/binance.webp" draggable="false" alt="binance logo" /></a>
          <a href="https://wallet.coinbase.com/" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/coinbasewallet.webp" draggable="false" alt="coinbase logo" /></a>
        </div>

        <div className="flex flex-row space-x-8">
          <a href="https://trezor.io/coins/#INXT" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/trezor.webp" draggable="false" alt="trezor logo" /></a>
          <a href="https://www.ledger.com/" target="_blank" rel="noreferrer"><img loading="lazy" className="h-6" src="../../images/token/ledger.webp" draggable="false" alt="ledger logo" /></a>
        </div>
      </div>

    </div>

  </section>

);

export default HeroSection;
