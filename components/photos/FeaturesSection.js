/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { Parallax } from 'react-parallax';
import { UilAngleRightB } from '@iconscout/react-unicons';
import * as anim from '../../public/js/anim';
import DownloadComponent from '../drive/DownloadComponent';

const FeaturesSection = ({ textContent, lang, device, download }) => (
  <section className="flex w-full flex-col">
    <div className="flex flex-col items-center pb-32">
      {/* Title */}
      <Parallax
        className="flex w-full flex-col items-center justify-center text-center"
        renderLayer={(percentage) => (
          <h2 className="relative mb-10 text-3xl font-medium text-cool-gray-90 lg:mb-20 lg:text-5xl">
            <Transition
              show={anim.trigger(percentage)}
              enter="transition-all duration-500"
              enterFrom="opacity-0 translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-500 delay-250"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-6"
            >
              {textContent.section1.title.line1}
            </Transition>
            <Transition
              show={anim.trigger(percentage)}
              enter="transition-all duration-500 delay-250"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-500"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-2"
            >
              {textContent.section1.title.line2}
            </Transition>
          </h2>
        )}
      />

      {/* Feature #1 - Upload from your smartphone, access wherever you want */}
      <Parallax
        className="grid w-full grid-cols-1 justify-center gap-20 pt-20 lg:grid-cols-2 lg:pb-20"
        renderLayer={(percentage) => (
          <>
            <div className="flex flex-col items-center lg:items-end lg:pr-10">
              {/* Keep items aligned to the left */}
              <div className="flex flex-col items-center lg:items-start">
                <div
                  className="relative"
                  style={{
                    transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                    width: 250,
                    height: 505,
                  }}
                >
                  <div className="absolute flex h-full w-full rounded-4xl shadow-subtle" />
                  <div
                    className="absolute h-full w-full bg-cover bg-left-top bg-no-repeat"
                    style={{
                      backgroundImage: 'url(/images/photos/mobile-photos-gallery-mockup.webp)',
                    }}
                  />
                </div>

                <div className="mt-24 flex flex-col px-10 lg:px-0">
                  <h3 className="mb-6 text-3xl font-medium text-cool-gray-90 lg:text-4xl">
                    {textContent.section2.title.line1} <br className="hidden sm:flex" />
                    {textContent.section2.title.line2} <br className="hidden sm:flex" />
                    {textContent.section2.title.line3} <br className="hidden sm:flex" />
                    {textContent.section2.title.line4}
                  </h3>

                  <p className="text-lg text-cool-gray-80 sm:text-base">
                    {textContent.section2.subtitle.line1} <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line2} <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line3} <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line4} <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line5}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative hidden flex-col items-start lg:flex"
              style={{
                transform: `translate(0px, -${anim.parallaxMinMax(percentage, -40, 24)}px)`,
                width: 646,
                height: 844,
              }}
            >
              <div className="absolute flex h-full w-full rounded-4xl shadow-subtle" />
              <div
                className="absolute h-full w-full bg-cover bg-left-top bg-no-repeat"
                style={{
                  backgroundImage: 'url(/images/photos/photos-gallery-years-mockup.webp)',
                }}
              />
            </div>
          </>
        )}
      />

      {/* Feature #2 - Share your photos with your friends and family */}
      <Parallax
        className="grid w-full grid-cols-1 justify-center gap-20 pt-20 lg:grid-cols-2 lg:pb-20"
        renderLayer={(percentage) => (
          <>
            <div
              className="relative hidden w-full flex-col items-end lg:flex"
              style={{
                transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                height: 844,
              }}
            >
              <div
                className="absolute right-0 flex rounded-4xl shadow-subtle"
                style={{
                  width: 646,
                  height: 844,
                }}
              />
              <div
                className="absolute bg-cover bg-right-top bg-no-repeat"
                style={{
                  backgroundImage: 'url(/images/photos/photos-preview-mockup.webp)',
                  width: 646,
                  height: 844,
                }}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start lg:pl-10">
              <div className="mb-24 flex flex-col px-10 lg:px-0">
                <h3 className="mb-6 pt-20 text-3xl font-medium text-cool-gray-90 lg:text-4xl">
                  {textContent.section3.title.line1} <br className="hidden sm:flex" />
                  {textContent.section3.title.line2} <br className="hidden sm:flex" />
                  {textContent.section3.title.line3} <br className="hidden sm:flex" />
                  {textContent.section3.title.line4}
                </h3>

                <p className="text-lg text-cool-gray-80 sm:text-base">
                  {textContent.section3.subtitle.line1} <br className="hidden sm:flex" />
                  {textContent.section3.subtitle.line2} <br className="hidden sm:flex" />
                  {textContent.section3.subtitle.line3} <br className="hidden sm:flex" />
                  {textContent.section3.subtitle.line4}
                </p>
              </div>

              <div
                className="relative order-first lg:order-last"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, 40, 0)}px)`,
                  width: 250,
                  height: 505,
                }}
              >
                <div className="absolute flex h-full w-full rounded-4xl shadow-subtle" />
                <div
                  className="absolute h-full w-full bg-cover bg-left-top bg-no-repeat"
                  style={{
                    backgroundImage: 'url(/images/photos/mobile-photos-share-mockup.webp)',
                  }}
                />
              </div>
            </div>
          </>
        )}
      />

      {/* Download links */}

      <div className="flex w-full flex-col items-center px-10 pb-10 lg:py-20 lg:px-0">
        <h3 className="mb-12 text-center text-3xl font-medium text-cool-gray-90">
          {textContent.section4.title.line1} {/* <br className="hidden sm:flex" /> */}
          {textContent.section4.title.line2}
        </h3>

        <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />
      </div>

      <div className="flex w-full flex-col items-center px-6 text-center lg:px-0 lg:pb-16">
        <h3 className="mb-10 text-center text-3xl font-medium text-cool-gray-90 lg:text-5xl">
          {textContent.section5.title.line1}
          <br />
          {textContent.section5.title.line2}
        </h3>

        <p className="mb-6 text-lg text-cool-gray-80 sm:text-base">
          {textContent.section5.subtitle.line1} <br className="hidden sm:flex" />
          {textContent.section5.subtitle.line2} <br className="hidden sm:flex" />
          {textContent.section5.subtitle.line3}
        </p>

        <Link href="/privacy" locale={lang}>
          <a className="mb-32 flex flex-row items-center space-x-1 text-lg text-primary sm:text-base">
            <span>{textContent.section5.cta}</span>
            <UilAngleRightB className="h-4 w-4" />
          </a>
        </Link>

        <div className="grid-row-4 grid grid-cols-1 gap-16 text-center lg:grid-cols-2 lg:grid-rows-2 lg:gap-20 xl:gap-32">
          <div className="flex w-full flex-col items-center px-2 lg:w-96 lg:px-0">
            <h4 className="mb-4 text-2xl font-medium">{textContent.section5.card1.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section5.card1.subtitle}</h5>
          </div>

          <div className="flex w-full flex-col items-center px-2 lg:w-96 lg:px-0">
            <h4 className="mb-4 text-2xl font-medium">{textContent.section5.card2.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section5.card2.subtitle}</h5>
          </div>

          <div className="flex w-full flex-col items-center px-2 lg:w-96 lg:px-0">
            <h4 className="mb-4 text-2xl font-medium">{textContent.section5.card3.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section5.card3.subtitle}</h5>
          </div>

          <div className="flex w-full flex-col items-center px-2 lg:w-96 lg:px-0">
            <h4 className="mb-4 text-2xl font-medium">{textContent.section5.card4.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section5.card4.subtitle}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
