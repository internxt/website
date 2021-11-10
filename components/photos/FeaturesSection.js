/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { Parallax } from 'react-parallax';
import { UilAngleRightB } from '@iconscout/react-unicons';
import DownloadComponent from './DownloadComponent';
import * as anim from '../../public/js/anim';

const FeaturesSection = ({
  textContent,
  device,
  lang,
  download
}) => (
  <section className="flex flex-col w-full">

    <div className="flex flex-col items-center pt-16 lg:pt-20 pb-32">

      {/* Title */}
      <Parallax
        className="flex flex-col w-full justify-center items-center text-center"
        renderLayer={(percentage) => (
          <h2 className="relative text-3xl lg:text-5xl font-semibold text-cool-gray-90 mb-10 lg:mb-20">
            <Transition
              show={anim.trigger(percentage)}
              enter="transition-all duration-500"
              enterFrom="opacity-0 transform translate-y-6"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition-all duration-500 delay-250"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="opacity-0 transform translate-y-6"
            >
              {textContent.section1.title.line1}
            </Transition>
            <Transition
              show={anim.trigger(percentage)}
              enter="transition-all duration-500 delay-250"
              enterFrom="opacity-0 transform translate-y-2"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition-all duration-500"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="opacity-0 transform translate-y-2"
            >
              {textContent.section1.title.line2}
            </Transition>
          </h2>
        )}
      />

      {/* Feature #1 - Upload from your smartphone, access wherever you want */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full justify-center pt-20 lg:pb-20"
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
                    height: 505
                  }}
                >
                  <div className="absolute flex rounded-4xl w-full h-full shadow-subtle" />
                  <div
                    className="absolute w-full h-full bg-no-repeat bg-cover bg-left-top"
                    style={{
                      backgroundImage: 'url(/images/photos/mobile-photos-gallery-mockup.webp)'
                    }}
                  />
                </div>

                <div className="flex flex-col mt-24 px-10 lg:px-0">
                  <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6">
                    {textContent.section2.title.line1}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section2.title.line2}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section2.title.line3}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section2.title.line4}
                  </h3>

                  <p className="text-base text-cool-gray-80">
                    {textContent.section2.subtitle.line1}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line2}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line3}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line4}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line5}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative hidden lg:flex flex-col items-start"
              style={{
                transform: `translate(0px, -${anim.parallaxMinMax(percentage, -40, 24)}px)`,
                width: 646,
                height: 844
              }}
            >
              <div className="absolute flex rounded-4xl w-full h-full shadow-subtle" />
              <div
                className="absolute w-full h-full bg-no-repeat bg-cover bg-left-top"
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
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full justify-center pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div
              className="relative hidden lg:flex flex-col w-full items-end"
              style={{
                transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                height: 844
              }}
            >
              <div className="absolute flex rounded-4xl w-full h-full shadow-subtle" />
              <div
                className="absolute w-full h-full bg-no-repeat bg-cover bg-right-top"
                style={{
                  backgroundImage: 'url(/images/photos/photos-preview-mockup.webp)',
                  width: 646,
                  height: 844
                }}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start lg:pl-10">
              <div className="flex flex-col mb-24 px-10 lg:px-0">
                <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6 pt-20">
                  {textContent.section3.title.line1}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section3.title.line2}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section3.title.line3}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section3.title.line4}
                </h3>

                <p className="text-base text-cool-gray-80">
                  {textContent.section3.subtitle.line1}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section3.subtitle.line2}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section3.subtitle.line3}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section3.subtitle.line4}
                </p>
              </div>

              <div
                className="relative order-first lg:order-last"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, 40, 0)}px)`,
                  width: 250,
                  height: 505
                }}
              >
                <div className="absolute flex rounded-4xl w-full h-full shadow-subtle" />
                <div
                  className="absolute w-full h-full bg-no-repeat bg-cover bg-left-top"
                  style={{
                    backgroundImage: 'url(/images/photos/mobile-photos-share-mockup.webp)'
                  }}
                />
              </div>
            </div>

          </>
        )}
      />

      {/* Download links */}
      {/*
      <div className="flex flex-col items-center w-full pb-10 lg:py-20 px-10 lg:px-0">
        <h3 className="text-3xl font-semibold text-center text-cool-gray-90 mb-12">
          {textContent.section4.title.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section4.title.line2}
        </h3>

        <DownloadComponent
          textContent={textContent.DownloadLinks}
          lang={lang}
          device={device}
          download={download}
        />
      </div>
      */}

      <div className="flex flex-col items-center text-center w-full py-16 lg:py-32 lg:pb-16 px-10 lg:px-0">
        <h3 className="text-3xl lg:text-5xl font-semibold text-center text-cool-gray-90 mb-10">
          {textContent.section5.title.line1}
          <br />
          {textContent.section5.title.line2}
        </h3>

        <p className="text-base text-cool-gray-80 mb-6">
          {textContent.section5.subtitle.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section5.subtitle.line2}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section5.subtitle.line3}
        </p>

        <Link href="/privacy" locale={lang}>
          <a className="flex flex-row items-center space-x-1 text-base text-blue-60 mb-32">
            <span>{textContent.section5.cta}</span>
            <UilAngleRightB className="w-4 h-4" />
          </a>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-row-4 lg:grid-rows-2 gap-20 lg:gap-32 xl:gap-48 text-center">

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              {textContent.section5.card1.title}
            </h4>
            <h5 className="text-base text-cool-gray-80">
              {textContent.section5.card1.subtitle}
            </h5>
          </div>

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              {textContent.section5.card2.title}
            </h4>
            <h5 className="text-base text-cool-gray-80">
              {textContent.section5.card2.subtitle}
            </h5>
          </div>

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              {textContent.section5.card3.title}
            </h4>
            <h5 className="text-base text-cool-gray-80">
              {textContent.section5.card3.subtitle}
            </h5>
          </div>

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              {textContent.section5.card4.title}
            </h4>
            <h5 className="text-base text-cool-gray-80">
              {textContent.section5.card4.subtitle}
            </h5>
          </div>

        </div>
      </div>

    </div>

  </section>
);

export default FeaturesSection;
