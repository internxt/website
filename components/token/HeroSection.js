import React from 'react'
import styles from './HeroSection.module.scss';
import { isMobile } from "react-device-detect";
import Marquee from "react-fast-marquee";

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
              {textContent.subtitle.line1}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line2}
            </p>
            <a href="#exchanges" className={`mb-14 text-lg font-semibold text-blue-60`}>
              {textContent.cta}
            </a>
          </div>

          <h2 id="exchanges" className={`px-6 pt-32 mb-12 md:mb-20 text-2xl md:text-4xl font-semibold text-center`}>
            {textContent.exchanges}
          </h2>

          <div className="featured grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-y-10 gap-x-6 sm:gap-8 justify-items-center place-items-center px-10 lg:px-32 mx-auto mb-20">
            <img className="h-6 sm:h-8" src="../../images/token/bittrex.webp" draggable="false" alt="bittrex logo"/>
            <img className="h-6 sm:h-8" src="../../images/token/uniswap.webp" draggable="false" alt="uniswap logo"/>
            <img className="h-6 sm:h-8" src="../../images/token/mercatox.webp" draggable="false" alt="mercatox logo"/>
            <img className="h-6 sm:h-8" src="../../images/token/latoken.webp" draggable="false" alt="latoken logo"/>
            <img className="h-6 sm:h-8" src="../../images/token/exrates.webp" draggable="false" alt="exrates logo"/>
            <img className="h-6 sm:h-8" src="../../images/token/yobit.webp" draggable="false" alt="yobit logo"/>
            <img className="h-6 sm:h-8" src="../../images/token/coinbase.webp" draggable="false" alt="coinbase logo"/>
            <img className="h-6 sm:h-8" src="../../images/token/coinmarketcap.webp" draggable="false" alt="coinmarketcap logo"/>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;