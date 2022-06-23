/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Testimonial from './Testimonial';

const SocialProofSection = ({ textContent }) => (
  <section>
    <div className="content">
      <div className="flex flex-col items-center justify-center w-full text-center flex-shrink-0 px-10 md:px-0 py-12 md:py-24">
        <h3 className="mb-8 text-4xl font-semibold">
          {textContent.title}
        </h3>

        <div className="flex flex-row justify-around flex-wrap sm:px-10 mb-8">
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-auto xl:px-6 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/ovhcloud.svg" draggable="false" alt="ovh cloud logo" />
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-auto xl:px-6 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/telefonica.svg" draggable="false" alt="telefonica logo" />
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-auto xl:px-6 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/theventurecity.svg" draggable="false" alt="the venture city logo" />
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-auto xl:px-6 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/esade.webp" className="h-7 mx-auto" draggable="false" alt="esade logo" />
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-auto xl:px-6 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/notion_vc.webp" className="h-4 mx-auto" draggable="false" alt="notion vc logo" />
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-auto xl:px-6 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/angelscapital.svg" draggable="false" alt="angels capital logo" />
          </div>
        </div>

        <h3 className="my-8 text-3xl font-semibold">
          {textContent.title2}
        </h3>

        <div className="relative flex flex-col items-center px-6 w-screen">
          <div className="w-full max-w-7xl grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
            {/* 3 Columns */}
            <ul className="hidden lg:flex flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => i % 3 === 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>
            <ul className="hidden lg:flex flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => (i - 1) % 3 === 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>
            <ul className="hidden lg:flex flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => (i - 2) % 3 === 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>

            {/* 2 Columns */}
            <ul className="hidden sm:flex lg:hidden flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => i % 2 === 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>
            <ul className="hidden sm:flex lg:hidden flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.filter((_, i) => i % 2 !== 0).map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>

            {/* 1 Columns */}
            <ul className="flex sm:hidden flex-col space-y-6 lg:space-y-8">
              {textContent.testimonials.map((item) => (
                <Testimonial
                  key={item}
                  url={item.url}
                  photo={item.photo}
                  name={item.name}
                  title={item.title}
                  quote={item.quote}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SocialProofSection;
