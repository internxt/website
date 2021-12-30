import React from 'react';
import Image from 'next/image';

const HeroSection = ({ textContent }) => (
  <section className="relative flex flex-col w-full pt-20 md:pt-20 overflow-hidden">
    <div className="relative flex flex-col items-center py-20 lg:py-40">

      {/* Main title */}
      <div className="relative text-center px-6 space-y-20 md:space-y-28">

        <h1 className="relative text-5xl md:text-6xl lg:text-7xl text-left sm:text-center text-cool-gray-90 z-10">
          {textContent.title.line1}
          {' '}
          <br className="hidden lg:flex" />
          <span className="text-blue-60">{textContent.title.line2.substring1}</span>
          {' '}
          {textContent.title.line2.substring2}
          {' '}
          <br className="hidden lg:flex" />
          {textContent.title.line3.substring1}
          {' '}
          <span className="text-blue-60">{textContent.title.line3.substring2}</span>
        </h1>

        <div className="relative flex flex-col items-start sm:items-center space-y-10 text-left sm:text-center z-10">
          <div className="flex flex-row items-start justify-left sm:justify-center w-full sm:w-auto space-x-20 md:space-x-24">

            <div className="flex flex-col items-start sm:items-center justify-center">
              <span className="relative text-6xl sm:text-7xl md:text-8xl font-extralight text-blue-60 tracking-tighter">
                {textContent.figures.activeUsers.figure}
                <span className="absolute -top-2.5 -right-6 md:-right-8 transform translate-x-0.5 text-5xl md:text-6xl text-blue-30">+</span>
              </span>
              <span className="text-lg sm:text-base font-medium">{textContent.figures.activeUsers.caption}</span>
            </div>

            <div className="flex flex-col items-start sm:items-center justify-center">
              <span className="relative text-6xl sm:text-7xl md:text-8xl font-extralight text-blue-60 tracking-tighter">
                {textContent.figures.awards.figure}
                <span className="absolute -top-2.5 -right-6 md:-right-8 transform translate-x-0.5 text-5xl md:text-6xl text-blue-30">+</span>
              </span>
              <span className="text-lg sm:text-base font-medium">{textContent.figures.awards.caption}</span>
            </div>

          </div>

          <h3 className="text-xl font-normal text-cool-gray-80 mb-10 lg:mb-20">
            {textContent.description.line1}
            {' '}
            <br className="hidden md:flex" />
            {textContent.description.line2}
          </h3>
        </div>

        {/* Recognitions */}
        <div className="flex flex-col items-center justify-center space-y-10">
          <h4 className="text-base font-medium">{textContent.recognitions.title}</h4>

          <div className="flex flex-row items-start justify-between w-full flex-wrap">
            <div className="flex flex-col flex-auto flex-shrink-0 sm:px-12 pb-12 sm:p-0">
              <div className="flex flex-col items-center space-y-3 flex-shrink-0">
                <Image src="/images/about/logos/forbes.webp" width={125} height={32} />
                <p className="text-base whitespace-nowrap">{textContent.recognitions.brands.forbes.caption1}</p>
              </div>
            </div>
            <div className="flex flex-col flex-auto flex-shrink-0 sm:px-12 pb-12 sm:p-0">
              <div className="flex flex-col items-center space-y-3 flex-shrink-0">
                <Image src="/images/about/logos/southsummit.webp" width={70} height={32} />
                <p className="text-base whitespace-nowrap">{textContent.recognitions.brands.southsummit.caption1}</p>
              </div>
            </div>
            <div className="flex flex-col flex-auto flex-shrink-0 sm:px-12 pb-12 sm:p-0">
              <div className="flex flex-col items-center space-y-3 flex-shrink-0">
                <Image src="/images/about/logos/tnw.webp" width={112} height={32} />
                <p className="text-base whitespace-nowrap">{textContent.recognitions.brands.tnw.caption1}</p>
              </div>
            </div>
            <div className="flex flex-col flex-auto flex-shrink-0 sm:px-12 pb-12 sm:p-0">
              <div className="flex flex-col items-center space-y-3 flex-shrink-0">
                <Image src="/images/about/logos/startupvalencia.webp" width={90} height={32} />
                <p className="text-base whitespace-nowrap">{textContent.recognitions.brands.startupvalencia.caption1}</p>
              </div>
            </div>
          </div>
        </div>

        <img loading="lazy" className="absolute -top-10 left-1/2 transform -translate-x-1/2 scale-500 filter blur-xl saturate-150 pointer-events-none select-none" src="/images/about/assets/stain-big.webp" draggable="false" alt="stain" />

      </div>

    </div>

  </section>
);

export default HeroSection;
