/* eslint-disable max-len */
import React from 'react';
import { Transition } from '@headlessui/react';
import { Parallax } from 'react-parallax';
import * as anim from '../../public/js/anim';
import DownloadComponent from '../shared/DownloadComponent';
import RevealX from '../components/RevealX';
import Image from 'next/image';

const FeaturesSection = ({ textContent, lang, device, download }) => (
  <section className="flex w-full flex-col">
    <div className="flex flex-col items-center pb-32">
      {/* Title */}
      <Parallax
        className="flex w-full flex-col items-center justify-center text-center"
        renderLayer={(percentage) => (
          <h2 className="relative mb-10 text-3xl font-semibold text-cool-gray-90 lg:mb-20 lg:text-5xl">
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
                      backgroundImage: 'url(/images/photos/internxt-photos.webp)',
                    }}
                  />
                </div>

                <div className="mt-24 flex flex-col px-10 lg:px-0">
                  <h3 className="mb-6 text-3xl font-semibold text-gray-100 lg:text-4xl">
                    {textContent.section2.title.line1} <br className="hidden sm:flex" />
                    {textContent.section2.title.line2} <br className="hidden sm:flex" />
                    {textContent.section2.title.line3} <br className="hidden sm:flex" />
                    {textContent.section2.title.line4}
                  </h3>

                  <p className="text-lg text-gray-80">
                    {textContent.section2.subtitle.line1} <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line2} <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line3} <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line4} <br className="hidden sm:flex" />
                    {textContent.section2.subtitle.line5}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden w-full max-w-[750px] flex-col items-start object-right pt-10 lg:flex 3xl:absolute 3xl:right-0">
              <RevealX
                className="right-0 hidden -translate-x-1/2 flex-col rounded-xl shadow-subtle-hard lg:flex"
                direction="left"
              >
                <Image
                  className="h-full w-full bg-no-repeat "
                  src="/images/photos/synced-gallery.webp"
                  width={750}
                  height={900}
                  quality={100}
                  unoptimized={true}
                  objectPosition={'left'}
                  objectFit="cover"
                  draggable={false}
                  alt="Document folders"
                />
              </RevealX>
            </div>
          </>
        )}
      />

      {/* Feature #2 - Share your photos with your friends and family */}
      <Parallax
        className="grid w-full grid-cols-1 justify-center gap-20 pt-5 lg:grid-cols-2 lg:pt-20 lg:pb-20"
        renderLayer={(percentage) => (
          <>
            <RevealX className="hidden w-full max-w-[713px] flex-col lg:right-0 lg:flex" direction="right">
              <Image
                className="w-full -translate-x-12"
                src="/images/photos/photo-sharing.webp"
                width={713}
                height={894}
                quality={100}
                unoptimized={true}
                draggable={false}
                alt="Secure file storage"
              />
            </RevealX>

            <div className="flex flex-col items-center lg:items-start ">
              <div className="flex flex-col px-10 lg:mb-24 lg:px-0">
                <h3 className="mb-6 pt-20 text-3xl font-semibold text-gray-100 lg:text-4xl">
                  {textContent.section3.title.line1} <br className="hidden sm:flex" />
                  {textContent.section3.title.line2} <br className="hidden sm:flex" />
                  {textContent.section3.title.line3} <br className="hidden sm:flex" />
                  {textContent.section3.title.line4}
                </h3>

                <p className="text-lg text-gray-80">
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
                    backgroundImage: 'url(/images/photos/share-link.webp)',
                  }}
                />
              </div>
            </div>
          </>
        )}
      />

      {/* Download links */}

      <div className="flex w-full flex-col items-center px-10 lg:px-0">
        <h3 className="mb-12 text-center text-5xl font-semibold text-gray-100">
          {textContent.section4.title.line1} {/* <br className="hidden sm:flex" /> */}
          {textContent.section4.title.line2}
        </h3>

        <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />
      </div>
    </div>
  </section>
);

export default FeaturesSection;
