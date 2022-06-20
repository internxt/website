/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowUpRight } from 'phosphor-react';

const InvestorsSection = ({ textContent }) => (
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

        <div className="relative w-screen">
          <div className="absolute top-0 left-0 md:w-40 h-full z-10 bg-gradient-to-r from-white via-white to-transparentw pointer-events-none" />
          <div className="absolute top-0 right-0 md:w-40 h-full z-10 bg-gradient-to-l from-white via-white to-transparentw pointer-events-none" />
          {/* Mobile swiper */}
          <Swiper
            className="w-full flex sm:hidden"
            slidesPerView="auto"
            centeredSlides
            autoHeight
            loop
            grabCursor
            scrollbar={{
              draggable: true,
            }}
          >
            {textContent.testimonials.map(
              (testimonial) => (
                <SwiperSlide
                  className="flex flex-row max-w-lg px-4 md:px-5 text-left"
                  key={`desktop_${testimonial.quote}`}
                >
                  <a
                    className="flex flex-col w-full p-8 md:p-10 bg-gray-1 rounded-2xl text-gray-80"
                    href={testimonial.url ?? undefined}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-lg mb-5">{testimonial.quote}</p>
                    <p className="text-base font-semibold text-gray-100">
                      <span>—</span>
                      <span className="ml-2">{testimonial.user}</span>
                    </p>
                    {testimonial.source && (
                      <p className="flex flex-row items-center text-sm text-gray-50">
                        <span className="mr-1">{`${textContent.testimonialFrom} ${testimonial.source}`}</span>
                        <ArrowUpRight size={16} />
                      </p>
                    )}
                  </a>
                </SwiperSlide>
              )
            )}
          </Swiper>

          {/* Desktop swiper */}
          <Swiper
            className="w-full hidden sm:flex"
            slidesPerView="auto"
            centeredSlides
            loop
            grabCursor
            scrollbar={{
              draggable: true,
            }}
          >
            {textContent.testimonials.map(
              (testimonial) => (
                <SwiperSlide
                  className="flex flex-row max-w-lg px-4 md:px-5 text-left"
                  key={`desktop_${testimonial.quote}`}
                >
                  <a
                    className="flex flex-col w-full p-8 md:p-10 bg-gray-1 rounded-2xl text-gray-80"
                    href={testimonial.url ?? undefined}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-lg mb-5">{testimonial.quote}</p>
                    <p className="text-base font-semibold text-gray-100">
                      <span>—</span>
                      <span className="ml-2">{testimonial.user}</span>
                    </p>
                    {testimonial.source && (
                      <p className="flex flex-row items-center text-sm text-gray-50">
                        <span className="mr-1">{`${textContent.testimonialFrom} ${testimonial.source}`}</span>
                        <ArrowUpRight size={16} />
                      </p>
                    )}
                  </a>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  </section>
);

export default InvestorsSection;
