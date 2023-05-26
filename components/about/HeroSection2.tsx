import React from 'react';
import Image from 'next/image';

const HeroSection2 = ({ textContent, lang }) => (
  <section className="relative flex w-full flex-col overflow-hidden pt-20 md:pt-20">
    <div className="relative flex flex-col items-center py-20 lg:py-40">
      {/* Main title */}
      <div className="relative space-y-20 px-6 text-center md:space-y-28">
        <h1 className="relative z-10 text-left text-5xl text-cool-gray-90 sm:text-center md:text-6xl lg:text-7xl">
          {textContent.title.line1} <br className="hidden lg:flex" />
          <span className={`${lang === 'fr' ? '' : 'text-primary'}`}>
            {lang === 'fr' ? textContent.title.line2.substring2 : textContent.title.line2.substring1}
          </span>{' '}
          <span className={`${lang === 'fr' ? 'text-primary' : ''}`}>
            {lang === 'fr' ? textContent.title.line2.substring1 : textContent.title.line2.substring2}{' '}
          </span>
          <br className="hidden lg:flex" />
          {textContent.title.line3.substring1}{' '}
          <span className="text-primary">{textContent.title.line3.substring2}</span>
        </h1>

        <div className="relative z-10 flex flex-col items-start space-y-10 text-left sm:items-center sm:text-center">
          <div className="justify-left flex w-full flex-row items-start space-x-20 sm:w-auto sm:justify-center md:space-x-24">
            <div className="flex flex-col items-start justify-center sm:items-center">
              <span className="relative -ml-2 text-6xl font-extralight tracking-tighter text-primary sm:-ml-4 sm:text-7xl md:text-8xl">
                {textContent.figures.activeUsers.figure}
                <span className="absolute -top-2.5 -right-6 translate-x-0.5 text-5xl text-blue-30 md:-right-8 md:text-6xl">
                  +
                </span>
              </span>
              <span className="text-lg font-medium sm:text-base">{textContent.figures.activeUsers.caption}</span>
            </div>

            <div className="flex flex-col items-start justify-center sm:items-center">
              <span className="relative text-6xl font-extralight tracking-tighter text-primary sm:text-7xl md:text-8xl">
                {textContent.figures.awards.figure}
                <span className="absolute -top-2.5 -right-6 translate-x-0.5 text-5xl text-blue-30 md:-right-8 md:text-6xl">
                  +
                </span>
              </span>
              <span className="text-lg font-medium sm:text-base">{textContent.figures.awards.caption}</span>
            </div>
          </div>

          <h3 className="mb-10 text-xl font-normal text-cool-gray-80 lg:mb-20">
            {textContent.description.line1} <br className="hidden md:flex" />
            {textContent.description.line2}
          </h3>
        </div>

        {/* Recognitions */}
        <div className="flex flex-col items-center justify-center space-y-10">
          <h4 className="text-base font-medium">{textContent.recognitions.title}</h4>

          <div className="flex w-full flex-row flex-wrap items-start justify-between">
            <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
              <div className="flex flex-shrink-0 flex-col items-center space-y-3">
                <Image
                  src="/images/about/logos/forbes.webp"
                  width={125}
                  height={32}
                  loading={'lazy'}
                  alt="Forbes Logo"
                />
                <p className="whitespace-nowrap text-base">{textContent.recognitions.brands.forbes.caption1}</p>
              </div>
            </div>
            <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
              <div className="flex flex-shrink-0 flex-col items-center space-y-3">
                <Image
                  src="/images/about/logos/southsummit.webp"
                  width={70}
                  height={32}
                  loading={'lazy'}
                  alt="South Summit Logo"
                />
                <p className="whitespace-nowrap text-base">{textContent.recognitions.brands.southsummit.caption1}</p>
              </div>
            </div>
            <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
              <div className="flex flex-shrink-0 flex-col items-center space-y-3">
                <Image src="/images/about/logos/tnw.webp" alt="TNW Logo" width={112} height={32} loading={'lazy'} />
                <p className="whitespace-nowrap text-base">{textContent.recognitions.brands.tnw.caption1}</p>
              </div>
            </div>
            <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
              <div className="flex flex-shrink-0 flex-col items-center space-y-3">
                <Image
                  src="/images/about/logos/startupvalencia.webp"
                  alt="Startup Valencia Logo"
                  width={90}
                  height={32}
                  loading={'lazy'}
                />
                <p className="whitespace-nowrap text-base">
                  {textContent.recognitions.brands.startupvalencia.caption1}
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          loading="lazy"
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 scale-500 select-none blur-xl saturate-150 filter"
          src="/images/about/assets/stain-big.webp"
          draggable="false"
          alt="stain-big logo"
        />
      </div>
    </div>
  </section>
);

export default HeroSection2;
