/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import { UilAngleRightB } from '@iconscout/react-unicons';

const ManifestoSection = ({ textContent, lang }) => (
  <section className="relative flex w-full flex-col">
    {/* Why privacy is so important */}
    <div className="z-10 flex flex-col items-center py-20 lg:py-40">
      <div className="px-6 text-left sm:text-center">
        <h2 className="mb-10 text-3xl font-medium lg:text-4xl">
          {textContent.section1.title.line1} <br className="hidden sm:flex" />
          {textContent.section1.title.line2}
        </h2>

        <h3 className="mb-10 w-full max-w-2xl text-lg font-normal text-cool-gray-80 sm:text-base">
          {textContent.section1.subtitle.line1} {textContent.section1.subtitle.line2}{' '}
          {textContent.section1.subtitle.line3} {textContent.section1.subtitle.line4}{' '}
          {textContent.section1.subtitle.line5}
        </h3>

        <div className="flex flex-col items-center">
          <p className="mb-4 text-sm font-medium text-cool-gray-40 sm:text-xs">{textContent.section1.signature}</p>
          <img
            loading="lazy"
            className="w-24 select-none"
            src="/images/privacy/signature.webp"
            draggable="false"
            alt="Fran's signature"
          />
        </div>
      </div>
    </div>

    {/* How we ensure user privacy */}
    <div className="z-10 flex flex-col items-center py-20 lg:pb-40 lg:pt-0">
      <div className="flex flex-col items-center px-6 text-left sm:text-center">
        <h2 className="mb-10 text-3xl font-medium lg:text-4xl">
          {textContent.section2.title.line1} <br className="hidden sm:flex" />
          {textContent.section2.title.line2}
        </h2>

        <h3 className="mb-20 w-full max-w-md text-lg font-normal text-cool-gray-80 sm:text-base">
          {textContent.section2.subtitle.line1} {textContent.section2.subtitle.line2}
        </h3>

        <div className="flex flex-col space-y-16 text-left sm:grid sm:grid-flow-row sm:grid-cols-1 sm:gap-10 sm:space-y-0 md:grid-cols-2 md:grid-rows-2 md:gap-20">
          <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:h-80 md:w-80">
            <h4 className="mb-6 text-2xl font-medium">{textContent.section2.square1.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section2.square1.description}</h5>
          </div>

          <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:h-80 md:w-80">
            <h4 className="mb-6 text-2xl font-medium">{textContent.section2.square2.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section2.square2.description}</h5>
          </div>

          <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:h-80 md:w-80">
            <h4 className="mb-6 text-2xl font-medium">{textContent.section2.square3.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section2.square3.description}</h5>
          </div>

          <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:h-80 md:w-80">
            <h4 className="mb-6 text-2xl font-medium">{textContent.section2.square4.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section2.square4.description}</h5>
          </div>
        </div>
      </div>
    </div>

    {/* Apps designed to protect your privacy */}
    <div className="z-10 flex flex-col items-center bg-cool-gray-100 py-20 text-white lg:py-40">
      <div className="px-6 text-left sm:text-center">
        <h2 className="mb-10 text-4xl font-medium">
          {textContent.section3.title.line1} <br className="hidden sm:flex" />
          {textContent.section3.title.line2}
        </h2>

        <h3 className="mb-40 text-lg font-normal text-cool-gray-20 sm:text-base">
          {textContent.section3.subtitle.line1} <br className="hidden sm:flex" />
          {textContent.section3.subtitle.line2}
        </h3>

        <div className="flex flex-col space-y-20 text-left lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
          <div className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-90 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0">
            <div className="m-10 mb-0 w-auto lg:m-20 lg:mb-20 lg:h-80 lg:w-80">
              <h4 className="mb-10 text-3xl font-medium lg:text-4xl">{textContent.section3.square1.title}</h4>
              <h5 className="mb-4 text-lg text-cool-gray-20 sm:text-base">
                {textContent.section3.square1.description}
              </h5>
              <Link href="/drive" locale={lang}>
                <a className="flex flex-row items-center space-x-1 text-lg text-blue-50 sm:text-base">
                  <span>{textContent.section3.square1.cta}</span>
                  <UilAngleRightB className="h-4 w-4" />
                </a>
              </Link>
            </div>

            <div className="relative mx-auto mt-16 lg:m-20 lg:mx-20 lg:h-80 lg:w-80">
              <div
                className="bg-center-top absolute hidden bg-contain bg-no-repeat shadow-subtle-hard lg:flex"
                style={{
                  backgroundImage: 'url(/images/privacy/mobile-drive-ipad.webp)',
                  width: 400,
                  height: 400,
                }}
              />
              {/* <div
                className="bg-center-top mx-auto flex bg-contain bg-no-repeat shadow-subtle-hard lg:hidden"
                style={{
                  backgroundImage: 'url(/images/privacy/mobile-drive-list-mockup.webp)',
                  width: 240,
                  height: 300,
                }}
              /> */}
            </div>
          </div>

          <div className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-90 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0">
            <div className="m-10 mb-0 w-auto lg:m-20 lg:mb-20 lg:h-80 lg:w-80">
              <h4 className="mb-10 text-3xl font-medium lg:text-4xl">{textContent.section3.square2.title}</h4>
              <h5 className="mb-4 text-lg text-cool-gray-20 sm:text-base">
                {textContent.section3.square2.description}
              </h5>
              <Link href="/photos" locale={lang}>
                <a className="flex flex-row items-center space-x-1 text-lg text-blue-50 sm:text-base">
                  <span>{textContent.section3.square2.cta}</span>
                  <UilAngleRightB className="h-4 w-4" />
                </a>
              </Link>
            </div>

            <div className="relative mx-auto mt-16 lg:m-20 lg:mx-20 lg:h-80 lg:w-80">
              <div
                className="bg-center-top absolute hidden bg-contain bg-no-repeat shadow-subtle-hard lg:flex"
                style={{
                  backgroundImage: 'url(/images/privacy/mobile-photos-preview-mockup.webp)',
                  width: 320,
                  height: 400,
                }}
              />
              {/* <div
                className="bg-center-top mx-auto flex bg-contain bg-no-repeat shadow-subtle-hard lg:hidden"
                style={{
                  backgroundImage: 'url(/images/privacy/mobile-photos-preview-mockup.webp)',
                  width: 240,
                  height: 300,
                }}
              /> */}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-90 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0">
            <div className="m-10 mb-0 w-auto lg:m-20 lg:mb-20 lg:h-80 lg:w-80">
              <h4 className="mb-10 text-3xl font-medium lg:text-4xl">{textContent.section3.square3.title}</h4>
              <h5 className="mb-4 text-lg text-cool-gray-20 sm:text-base">
                {textContent.section3.square3.description}
              </h5>
              <Link href="/photos" locale={lang}>
                <a className="flex flex-row items-center space-x-1 text-lg text-blue-50 sm:text-base">
                  <span>{textContent.section3.square3.cta}</span>
                  <UilAngleRightB className="h-4 w-4" />
                </a>
              </Link>
            </div>

            <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
              <div className="hidden lg:flex lg:max-w-[480px]">
                <img src="/images/privacy/send-image.png" />
              </div>
              {/* <div className="relative mx-auto mt-16 h-auto w-[300px] bg-contain bg-no-repeat shadow-subtle-hard lg:hidden">
                <img src="/images/privacy/send-image.png" className="rounded-t-2xl" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ManifestoSection;
