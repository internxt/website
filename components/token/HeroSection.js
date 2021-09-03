import React from 'react'
import styles from './HeroSection.module.scss';

const HeroSection = ({textContent, download, lang}) => {
  return (
    <section>
      <div className="content pt-40">

        <div className={`flex flex-col items-center justify-center w-full sm:mb-20`}>
          
          <div className={`flex-shrink-0 px-6 md:px-0 m-6 md:m-10 lg:m-32 flex flex-col w-screen sm:w-auto text-center`}>
            <p className={`mb-2 md:mb-2 text-base text-neutral-50 font-semibold`}>
              {textContent.eyebrow}
            </p>
            <h1 className={`title mb-8 md:mb-10 text-4xl md:text-5xl lg:text-6xl`}>
              {textContent.title.line1}<br className="hidden sm:inline-flex"/> {textContent.title.line2}
            </h1>
            <p className={`mb-8 text-lg lg:text-xl text-neutral-500`}>
              {textContent.subtitle.line1}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line2}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line3}
            </p>
            <a href="#exchanges" className={`mb-14 text-lg font-semibold text-blue-60`}>
              {textContent.cta}
            </a>
          </div>

          <h2 id="exchanges" className={`px-6 pt-32 mb-12 md:mb-20 text-2xl md:text-4xl font-semibold text-center`}>
            {textContent.exchanges}
          </h2>

          <div className="featured grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-y-10 gap-x-6 sm:gap-8 justify-items-center place-items-center px-10 lg:px-32 mx-auto mb-20">
            <a href="https://global.bittrex.com/Market/Index?MarketName=BTC-INXT" target="_blank"><img loading="lazy" className="h-6 sm:h-8" src="../../images/token/bittrex.webp" draggable="false" alt="bittrex logo"/></a>
            <a href="https://info.uniswap.org/pair/0x73994f935b23511686ce1dd59c295e5100031f4b" target="_blank"><img loading="lazy" className="h-6 sm:h-8" src="../../images/token/uniswap.webp" draggable="false" alt="uniswap logo"/></a>
            <a href="https://wallet.coinbase.com/" target="_blank"><img loading="lazy" className="h-6 sm:h-8" src="../../images/token/coinbasewallet.webp" draggable="false" alt="coinbase logo"/></a>
            <a href="https://latoken.com/exchange/INXT_BTC" target="_blank"><img loading="lazy" className="h-6 sm:h-8" src="../../images/token/latoken.webp" draggable="false" alt="latoken logo"/></a>
            <a href="https://exrates.me/trading/INXTBTC" target="_blank"><img loading="lazy" className="h-6 sm:h-8" src="../../images/token/exrates.webp" draggable="false" alt="exrates logo"/></a>
            <a href="https://yobit.net/en/trade/INXT/BTC" target="_blank"><img loading="lazy" className="h-6 sm:h-8" src="../../images/token/yobit.webp" draggable="false" alt="yobit logo"/></a>
            <a href="https://mercatox.com/exchange/INXT/BTC" target="_blank"><img loading="lazy" className="h-6 sm:h-8" src="../../images/token/mercatox.webp" draggable="false" alt="mercatox logo"/></a>
            <a href="https://coinmarketcap.com/currencies/internxt/" target="_blank"><img loading="lazy" className="h-6 sm:h-8" src="../../images/token/coinmarketcap.webp" draggable="false" alt="coinmarketcap logo"/></a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;