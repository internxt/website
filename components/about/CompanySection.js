import React from 'react';
import { UilAngleRightB } from '@iconscout/react-unicons';

const CompanySection = ({ textContent }) => (
  <section className="overflow-hidden">
    <div className="content flex flex-col items-center">

      {/* Images */}
      <div className="relative w-full max-w-6xl px-4 md:px-6">
        <div className="relative grid grid-cols-6 grid-flow-row gap-2 z-10">
          <div className="col-span-6 md:col-span-4 h-60 sm:h-72 lg:h-80 bg-red-10 rounded-md overflow-hidden select-none">
            <img loading="lazy" className="object-cover object-center w-full h-full" src="/images/about/photos/photo-1.webp" draggable="false" alt="lanzadera building" />
          </div>
          <div className="col-span-6 md:col-span-2 h-60 sm:h-72 lg:h-80 bg-red-10 rounded-md overflow-hidden select-none">
            <img loading="lazy" className="object-cover object-center w-full h-full" src="/images/about/photos/photo-2.webp" draggable="false" alt="lanzadera entrance" />
          </div>
          <div className="col-span-6 md:col-span-3 h-60 sm:h-72 lg:h-80 bg-red-10 rounded-md overflow-hidden select-none">
            <img loading="lazy" className="object-cover object-center w-full h-full" src="/images/about/photos/photo-3.webp" draggable="false" alt="team members" />
          </div>
          <div className="col-span-6 md:col-span-3 h-60 sm:h-72 lg:h-80 bg-red-10 rounded-md overflow-hidden select-none">
            <img loading="lazy" className="object-cover object-center w-full h-full" src="/images/about/photos/photo-4.webp" draggable="false" alt="work area" />
          </div>
        </div>

        <img loading="lazy" className="absolute top-2/3 right-0 transform translate-y-1/2 scale-400 filter blur-xl saturate-150 pointer-events-none select-none" src="/images/about/assets/stain-small-1.webp" draggable="false" alt="stain" />
      </div>

      {/* Our values */}
      <div className="relative flex flex-col text-left sm:items-center justify-center px-6 pt-20 pb-10 space-y-10 sm:space-y-20 z-10">
        <h4 className="text-4xl font-semibold">{textContent.values.title}</h4>

        <div className="flex flex-col space-y-10 lg:space-y-20">
          <div className="flex w-full flex-col lg:flex-row flex-wrap space-y-10 lg:space-y-0 lg:space-x-16">
            <div className="flex flex-col space-y-3 w-full md:max-w-xl lg:max-w-sm sm:px-20 md:px-0">
              <p className="text-2xl font-semibold">{textContent.values.items.achieve.title}</p>
              <p className="text-lg">{textContent.values.items.achieve.description}</p>
            </div>

            <div className="flex flex-col space-y-3 w-full md:max-w-xl lg:max-w-sm sm:px-20 md:px-0">
              <p className="text-2xl font-semibold">{textContent.values.items.privacy.title}</p>
              <p className="text-lg">{textContent.values.items.privacy.description}</p>
            </div>
          </div>

          <div className="flex w-full flex-col lg:flex-row flex-wrap space-y-10 lg:space-y-0 lg:space-x-16">
            <div className="flex flex-col space-y-3 w-full md:max-w-xl lg:max-w-sm sm:px-20 md:px-0">
              <p className="text-2xl font-semibold">{textContent.values.items.family.title}</p>
              <p className="text-lg">{textContent.values.items.family.description}</p>
            </div>

            <div className="flex flex-col space-y-3 w-full md:max-w-xl lg:max-w-sm sm:px-20 md:px-0">
              <p className="text-2xl font-semibold">{textContent.values.items.growth.title}</p>
              <p className="text-lg">{textContent.values.items.growth.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Careers at Internxt */}
      <div className="relative flex flex-col items-center justify-center px-6 py-20 space-y-4 text-center">
        <h4 className="z-10 text-4xl font-semibold">{textContent.careers.title}</h4>
        <a
          className="z-10 flex flex-row items-center space-x-1 text-lg sm:text-base font-medium text-blue-60"
          href="https://www.linkedin.com/company/internxt/jobs/"
          target="_blank"
          rel="noreferrer"
        >
          <span>{textContent.careers.link}</span>
          <UilAngleRightB className="w-4 h-4" />
        </a>
        <img loading="lazy" className="absolute top-1/2 left-0 transform translate-y-1/2 scale-400 filter blur-3xl saturate-150 pointer-events-none select-none" src="/images/about/assets/stain-small-2.webp" draggable="false" alt="stain" />
      </div>

    </div>
  </section>
);

export default CompanySection;
