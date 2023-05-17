import React from 'react';
import Image from 'next/image';

const HeroSection = ({ textContent }) => (
  <section className="relative flex w-full flex-col overflow-hidden pt-20">
    <div className="relative flex flex-col items-center justify-center py-20">
      {/* Main title */}
      <div className="flex flex-col items-center justify-center space-y-16 px-6">
        <div className="flex flex-col space-y-6 text-center">
          <h1 className="flex w-full max-w-4xl flex-col text-center text-4xl font-semibold text-gray-100 lg:text-6xl">
            {textContent.title.line1} <br />
            {textContent.title.line2} <span className="text-primary">{textContent.blueText}</span>
          </h1>
          <p className="text-xl font-normal text-gray-80">{textContent.description}</p>
        </div>

        <div className="grid max-w-6xl grid-flow-row grid-cols-6 gap-6">
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-4 lg:h-80">
            <img
              loading="eager"
              className="h-full w-full object-cover object-center"
              src="/images/about/photos/Internxt-headquarters.webp"
              draggable="false"
              alt="Internxt headquarters"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-2 lg:h-80">
            <img
              loading="eager"
              className="h-full w-full object-cover object-center"
              src="/images/about/photos/Internxt-office.png"
              draggable="false"
              alt="Internxt office"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-3 lg:h-80">
            <img
              loading="eager"
              className="h-full w-full object-cover object-center"
              src="/images/about/photos/Internxt-team.webp"
              draggable="false"
              alt="Internxt team"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-3 lg:h-80">
            <img
              loading="eager"
              className="h-full w-full object-cover object-center"
              src="/images/about/photos/team-at-Internxt.webp"
              draggable="false"
              alt="Team at Internxt"
            />
          </div>
        </div>

        {/* Recognitions */}
        <h4 className="text-center text-4xl font-semibold text-gray-100">{textContent.recognitionsTitle}</h4>
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="flex w-full flex-row flex-wrap items-start justify-between">
            <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
              <div className="flex flex-shrink-0 flex-col items-center space-y-3">
                <Image
                  src="/images/about/logos/forbes.webp"
                  width={125}
                  height={32}
                  loading={'lazy'}
                  alt="Forbes Logo"
                  draggable={false}
                />
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
                  draggable={false}
                />
              </div>
            </div>
            <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
              <div className="flex flex-shrink-0 flex-col items-center space-y-3">
                <Image
                  src="/images/about/logos/tnw.webp"
                  alt="TNW Logo"
                  draggable={false}
                  width={112}
                  height={32}
                  loading={'lazy'}
                />
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
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
