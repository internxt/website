/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { Parallax } from 'react-parallax';
import { UilAngleRightB } from '@iconscout/react-unicons';
import DownloadComponent from './DownloadComponent';
import * as anim from '../../public/js/anim';

const FeaturesSection = ({ textContent, lang, download }) => (
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

      {/* Feature #1 - All your files available in all your devices */}
      <Parallax
        className="grid w-full grid-cols-1 justify-center gap-20 pt-20 lg:grid-cols-2 lg:pb-20"
        renderLayer={(percentage) => (
          <>
            <div className="hidden flex-col items-end lg:flex">
              <div
                className="bg-cover bg-right-top bg-no-repeat"
                style={{
                  transform: `translate(0px, -${anim.parallaxMinMax(percentage, -40, 24)}px)`,
                  backgroundImage: 'url(/images/drive/desktop-internxtFolder-filelogger-mockup.webp)',
                  width: 1427,
                  height: 844,
                }}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start lg:pl-10">
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
                    backgroundImage: 'url(/images/drive/mobile-work-list-mockup.webp)',
                  }}
                />
              </div>

              <div className="mt-16 flex flex-col px-10 lg:mt-28 lg:px-0">
                <h3 className="mb-6 text-3xl font-medium text-cool-gray-90 lg:text-4xl">
                  {textContent.section2.title.line1} <br className="hidden sm:flex" />
                  {textContent.section2.title.line2} <br className="hidden sm:flex" />
                  {textContent.section2.title.line3}
                </h3>

                <p className="text-lg text-cool-gray-80 sm:text-base">
                  {textContent.section2.subtitle.line1} <br className="hidden sm:flex" />
                  {textContent.section2.subtitle.line2} <br className="hidden sm:flex" />
                  {textContent.section2.subtitle.line3} <br className="hidden sm:flex" />
                  {textContent.section2.subtitle.line4} <br className="hidden sm:flex" />
                  {textContent.section2.subtitle.line5} <br className="hidden sm:flex" />
                  {textContent.section2.subtitle.line6}
                </p>
              </div>
            </div>
          </>
        )}
      />

      {/* Feature #2 - Keep your files organized and accessible from anywhere */}
      <Parallax
        className="grid w-full grid-cols-1 justify-center pt-20 lg:grid-cols-2 lg:gap-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>
            <div className="flex flex-col items-center lg:items-end lg:pr-20">
              {/* Keep items aligned to the left */}
              <div className="flex w-full flex-col items-center lg:w-auto lg:items-start">
                <div className="mb-20 flex flex-col px-10 lg:mb-28 lg:px-0">
                  <h3 className="mb-6 pt-16 text-3xl font-medium text-cool-gray-90 lg:pt-20 lg:text-4xl">
                    {textContent.section3.title.line1} <br className="hidden sm:flex" />
                    {textContent.section3.title.line2} <br className="hidden sm:flex" />
                    {textContent.section3.title.line3} <br className="hidden sm:flex" />
                    {textContent.section3.title.line4}
                  </h3>

                  <p className="text-lg text-cool-gray-80 sm:text-base">
                    {textContent.section3.subtitle.line1} <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line2} <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line3} <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line4} <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line5} <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line6} <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line7} <br className="hidden sm:flex" />
                    {textContent.section3.subtitle.line8}
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
                      backgroundImage: 'url(/images/drive/mobile-drive-grid-mockup.webp)',
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="relative hidden flex-col items-start lg:flex"
              style={{
                transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                width: 1253,
                height: 847,
              }}
            >
              <div className="absolute flex h-full w-full rounded-4xl shadow-subtle" />
              <div
                className="absolute h-full w-full bg-cover bg-left-top bg-no-repeat"
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
        className="grid w-full grid-cols-1 justify-center pt-16 lg:grid-cols-2 lg:gap-20 lg:pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>
            <div className="hidden flex-col items-end lg:flex">
              <div
                className="rounded-lg bg-cover bg-right-top bg-no-repeat shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, -40, 0)}px)`,
                  backgroundImage: 'url(/images/drive/web-work-share.webp)',
                  width: 935,
                  height: 580,
                }}
              />
            </div>

            <div className="flex w-full flex-col items-center lg:w-auto lg:items-start lg:pl-10">
              <div
                className="relative flex rounded-4xl bg-cover bg-left-top bg-no-repeat shadow-subtle lg:hidden"
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
                    backgroundImage: 'url(/images/drive/mobile-work-list-share-mockup.webp)',
                  }}
                />
              </div>

              <div className="mb-20 flex flex-col px-10 lg:mb-24 lg:px-0">
                <h3 className="mb-6 pt-16 text-3xl font-medium text-cool-gray-90 lg:pt-20 lg:text-4xl">
                  {textContent.section4.title.line1} <br className="hidden sm:flex" />
                  {textContent.section4.title.line2} <br className="hidden sm:flex" />
                  {textContent.section4.title.line3} <br className="hidden sm:flex" />
                  {textContent.section4.title.line4}
                </h3>

                <p className="text-lg text-cool-gray-80 sm:text-base">
                  {textContent.section4.subtitle.line1} <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line2} <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line3} <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line4} <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line5} <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line6} <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line7} <br className="hidden sm:flex" />
                  {textContent.section4.subtitle.line8}
                </p>
              </div>
            </div>
          </>
        )}
      />

      {/* Feature #4 - Backup what matters to you. */}
      <Parallax
        className="grid w-full grid-cols-1 justify-center gap-20 pt-16 lg:grid-cols-2 lg:pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>
            <div className="flex flex-col items-center lg:items-end lg:pr-20">
              <div
                className="mx-10 flex flex-col lg:hidden"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, 0, -40)}px)`,
                  maxWidth: 554,
                }}
              >
                <img
                  loading="lazy"
                  className="w-full shadow-subtle"
                  src="/images/drive/desktop-backups.webp"
                  draggable="false"
                  alt="Internxt Desktop backups new feature"
                />
              </div>

              <div className="mb-24 flex flex-col px-10 lg:px-0">
                <h4 className="mb-2 pt-10 text-xs font-medium text-orange-dark">{textContent.section5.eyebrow}</h4>

                <h3 className="mb-6 text-3xl font-medium text-cool-gray-90 lg:text-4xl">
                  {textContent.section5.title.line1} <br className="hidden sm:flex" />
                  {textContent.section5.title.line2} <br className="hidden sm:flex" />
                  {textContent.section5.title.line3}
                </h3>

                <p className="text-lg text-cool-gray-80 sm:text-base">
                  {textContent.section5.subtitle.line1} <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line2} <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line3} <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line4} <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line5} <br className="hidden sm:flex" />
                  {textContent.section5.subtitle.line6}
                </p>
              </div>
            </div>

            <div className="hidden flex-col items-start lg:flex">
              <div
                className="rounded-xl bg-cool-gray-10 bg-cover bg-left-top bg-no-repeat shadow-subtle"
                style={{
                  transform: `translate(0px, ${anim.parallaxMinMax(percentage, 0, -40)}px)`,
                  backgroundImage: 'url(/images/drive/desktop-backups.webp)',
                  width: 554,
                  height: 469,
                }}
              />
            </div>
          </>
        )}
      />

      <div className="flex w-full flex-col items-center px-10 pb-10 lg:px-0 lg:pb-20">
        <h3 className="mb-12 text-center text-3xl font-medium text-cool-gray-90">
          {textContent.section6.title.line1} <br className="hidden sm:flex" />
          {textContent.section6.title.line2}
        </h3>

        {/* Download links */}
        <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />
      </div>

      <div className="flex w-full flex-col items-center py-16 px-6 pb-0 text-center lg:py-20 lg:px-0">
        <h3 className="mb-10 text-center text-3xl font-medium text-cool-gray-90 lg:text-5xl">
          {textContent.section7.title.line1}
          <br />
          {textContent.section7.title.line2}
        </h3>

        <p className="mb-6 text-lg text-cool-gray-80 sm:text-base">
          {textContent.section7.subtitle.line1} <br className="hidden sm:flex" />
          {textContent.section7.subtitle.line2} <br className="hidden sm:flex" />
          {textContent.section7.subtitle.line3}
        </p>

        <Link href="/privacy" locale={lang}>
          <a className="mb-32 flex flex-row items-center space-x-1 text-lg text-primary hover:underline sm:text-base">
            <span>{textContent.section7.cta}</span>
            <UilAngleRightB className="h-4 w-4" />
          </a>
        </Link>

        <div className="grid-row-4 grid grid-cols-1 gap-16 text-center lg:grid-cols-2 lg:grid-rows-2 lg:gap-20 xl:gap-32">
          <div className="flex w-full flex-col items-center px-2 lg:w-96 lg:px-0">
            <h4 className="mb-4 text-2xl font-medium">{textContent.section7.card1.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section7.card1.subtitle}</h5>
          </div>

          <div className="flex w-full flex-col items-center px-2 lg:w-96 lg:px-0">
            <h4 className="mb-4 text-2xl font-medium">{textContent.section7.card2.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section7.card2.subtitle}</h5>
          </div>

          <div className="flex w-full flex-col items-center px-2 lg:w-96 lg:px-0">
            <h4 className="mb-4 text-2xl font-medium">{textContent.section7.card3.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section7.card3.subtitle}</h5>
          </div>

          <div className="flex w-full flex-col items-center px-2 lg:w-96 lg:px-0">
            <h4 className="mb-4 text-2xl font-medium">{textContent.section7.card4.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section7.card4.subtitle}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
