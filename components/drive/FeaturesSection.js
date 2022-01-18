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
  lang,
  download
}) => (
  <section className="flex flex-col w-full">

    <div className="flex flex-col items-center pb-32">

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

      {/* Feature #1 - All your files available in all your devices */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full justify-center pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="hidden lg:flex flex-col items-end">
              <div
                className="bg-no-repeat bg-cover bg-right-top"
                style={{
                  transform: `translate(0px, -${anim.parallaxMinMax(percentage, -40, 24)}px)`,
                  backgroundImage: 'url(/images/drive/desktop-internxtFolder-filelogger-mockup.webp)',
                  width: 1427,
                  height: 844
                }}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start lg:pl-10">
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
                    backgroundImage: 'url(/images/drive/mobile-work-list-mockup.webp)'
                  }}
                />
              </div>

              <div className="flex flex-col mt-16 lg:mt-28 px-10 lg:px-0">
                <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6">
                  {textContent.section2.title.line1}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section2.title.line2}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section2.title.line3}
                </h3>

                <p className="text-lg sm:text-base text-cool-gray-80">
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
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section2.subtitle.line6}
                </p>
              </div>
            </div>

          </>
        )}
      />

      {/* Feature #2 - Keep your files organized and accessible from anywhere */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 w-full justify-center pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-center lg:items-end lg:pr-20">
              {/* Keep items aligned to the left */}
              <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                <div className="flex flex-col mb-20 lg:mb-28 px-10 lg:px-0">
                  <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6 pt-16 lg:pt-20">
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

                  <p className="text-lg sm:text-base text-cool-gray-80">
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
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line5}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line6}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line7}
                    {' '}
                    <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line8}
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
                      backgroundImage: 'url(/images/drive/mobile-drive-grid-mockup.webp)'
                    }}
                  />
                </div>

              </div>
            </div>

            <div
              className="relative hidden lg:flex flex-col items-start"
              style={{
                transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                width: 1253,
                height: 847
              }}
            >
              <div className="absolute flex rounded-4xl w-full h-full shadow-subtle" />
              <div
                className="absolute w-full h-full bg-no-repeat bg-cover bg-left-top"
                style={{
                  backgroundImage: 'url(/images/drive/web-drive-list.webp)',
                }}
              />
            </div>

          </>
        )}
      />

      {/* Feature #3 - Share your files with ease, security is on us */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 w-full justify-center pt-16 lg:pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="hidden lg:flex flex-col items-end">
              <div
                className="rounded-lg shadow-subtle bg-no-repeat bg-cover bg-right-top"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                  backgroundImage: 'url(/images/drive/web-work-share.webp)',
                  width: 935,
                  height: 580
                }}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start lg:pl-10 w-full lg:w-auto">

              <div
                className="relative flex lg:hidden rounded-4xl shadow-subtle bg-no-repeat bg-cover bg-left-top"
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
                    backgroundImage: 'url(/images/drive/mobile-work-list-share-mockup.webp)'
                  }}
                />
              </div>

              <div className="flex flex-col mb-20 lg:mb-24 px-10 lg:px-0">
                <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6 pt-16 lg:pt-20">
                  {textContent.section4.title.line1}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.title.line2}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.title.line3}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.title.line4}
                </h3>

                <p className="text-lg sm:text-base text-cool-gray-80">
                  {textContent.section4.subtitle.line1}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line2}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line3}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line4}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line5}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line6}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line7}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line8}
                </p>
              </div>
            </div>

          </>
        )}
      />

      {/* Feature #4 - Backup what matters to you. */}
      <Parallax
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full justify-center pt-16 lg:pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>

            <div className="flex flex-col items-center lg:items-end lg:pr-20">

              <div
                className="flex lg:hidden flex-col mx-10"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, 0, -40)}px)`,
                  maxWidth: 554
                }}
              >
                <img loading="lazy" className="shadow-subtle w-full" src="/images/drive/desktop-backups.webp" draggable="false" alt="Internxt Desktop backups new feature" />
              </div>

              <div className="flex flex-col mb-24 px-10 lg:px-0">
                <h4 className="text-xs font-semibold text-orange-50 mb-2 pt-10">
                  {textContent.section5.eyebrow}
                </h4>

                <h3 className="text-3xl lg:text-4xl font-semibold text-cool-gray-90 mb-6">
                  {textContent.section5.title.line1}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section5.title.line2}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section5.title.line3}
                </h3>

                <p className="text-lg sm:text-base text-cool-gray-80">
                  {textContent.section5.subtitle.line1}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line2}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line3}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line4}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line5}
                  {' '}
                  <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line6}
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-start">
              <div
                className="bg-cool-gray-10 rounded-xl shadow-subtle bg-no-repeat bg-cover bg-left-top"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, 0, -40)}px)`,
                  backgroundImage: 'url(/images/drive/desktop-backups.webp)',
                  width: 554,
                  height: 469
                }}
              />
            </div>

          </>
        )}
      />

      <div className="flex flex-col items-center w-full pb-10 lg:pb-20 px-10 lg:px-0">
        <h3 className="text-3xl font-semibold text-center text-cool-gray-90 mb-12">
          {textContent.section6.title.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section6.title.line2}
        </h3>

        {/* Download links */}
        <DownloadComponent
          textContent={textContent.DownloadLinks}
          lang={lang}
          download={download}
        />
      </div>

      <div className="flex flex-col items-center text-center w-full py-16 lg:py-20 pb-0 px-6 lg:px-0">
        <h3 className="text-3xl lg:text-5xl font-semibold text-center text-cool-gray-90 mb-10">
          {textContent.section7.title.line1}
          <br />
          {textContent.section7.title.line2}
        </h3>

        <p className="text-lg sm:text-base text-cool-gray-80 mb-6">
          {textContent.section7.subtitle.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section7.subtitle.line2}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section7.subtitle.line3}
        </p>

        <Link href="/privacy" locale={lang}>
          <a className="flex flex-row items-center space-x-1 text-lg sm:text-base text-blue-60 mb-32">
            <span>{textContent.section7.cta}</span>
            <UilAngleRightB className="w-4 h-4" />
          </a>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-row-4 lg:grid-rows-2 gap-16 lg:gap-20 xl:gap-32 text-center">

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              {textContent.section7.card1.title}
            </h4>
            <h5 className="text-lg sm:text-base text-cool-gray-80">
              {textContent.section7.card1.subtitle}
            </h5>
          </div>

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              {textContent.section7.card2.title}
            </h4>
            <h5 className="text-lg sm:text-base text-cool-gray-80">
              {textContent.section7.card2.subtitle}
            </h5>
          </div>

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              {textContent.section7.card3.title}
            </h4>
            <h5 className="text-lg sm:text-base text-cool-gray-80">
              {textContent.section7.card3.subtitle}
            </h5>
          </div>

          <div className="flex flex-col items-center w-full px-2 lg:px-0 lg:w-96">
            <h4 className="text-2xl font-semibold mb-4">
              {textContent.section7.card4.title}
            </h4>
            <h5 className="text-lg sm:text-base text-cool-gray-80">
              {textContent.section7.card4.subtitle}
            </h5>
          </div>

        </div>
      </div>

    </div>

  </section>
);

export default FeaturesSection;
