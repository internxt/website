import Link from 'next/link';
import { CaretRight } from '@phosphor-icons/react';
import React from 'react';
import RevealY from '../components/RevealY';
import RevealX from '../components/RevealX';
import { UilAngleRightB } from '@iconscout/react-unicons';

const ProductsSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="z-10 flex flex-col items-center bg-gray-1 py-20 text-black">
        <div className="space-y-16 px-6 text-left sm:text-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</h2>

            <h3 className="max-w-3xl text-xl font-normal text-gray-80">{textContent.description}</h3>
          </div>

          <div className="flex flex-col space-y-20 text-left lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
            {/* Internxt Drive */}
            <RevealX
              direction="right"
              className="flex overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
            >
              <div className="flex h-full flex-col items-center justify-center space-y-6 p-7 text-center lg:items-start lg:pl-20 lg:text-start">
                <h4 className="max-w-xs text-4xl font-semibold text-white lg:text-4xl">{textContent.drive.title}</h4>
                <p className="max-w-xs text-xl font-bold text-white">{textContent.drive.subtitle}</p>
                <h5 className="max-w-[340px] text-xl text-white">{textContent.drive.description}</h5>
                <div className="flex justify-start">
                  <Link
                    href="/drive"
                    locale={lang}
                    className="flex flex-row items-center space-x-1 text-lg text-blue-50 hover:underline">

                    <span>{textContent.drive.cta}</span>
                    <UilAngleRightB className="h-4 w-4" />

                  </Link>
                </div>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <img src="/images/privacy/Internxt-Drive.webp" alt="Internxt Drive" draggable={false} />
                </div>
              </div>
            </RevealX>
            {/* Internxt Photos */}
            <RevealX
              direction="left"
              className="flex overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
            >
              <div className="flex h-full flex-col items-center justify-center space-y-6 p-7 text-center lg:items-start lg:pl-20 lg:text-start">
                <h4 className="max-w-xs text-4xl font-semibold text-white lg:text-4xl">{textContent.photos.title}</h4>
                <p className="max-w-xs text-xl font-bold text-white">{textContent.photos.subtitle}</p>
                <h5 className="max-w-[340px] text-xl text-white">{textContent.photos.description}</h5>
                <div className="flex justify-start">
                  <Link
                    href="/drive"
                    locale={lang}
                    className="flex flex-row items-center space-x-1 text-lg text-blue-50 hover:underline">

                    <span>{textContent.photos.cta}</span>
                    <UilAngleRightB className="h-4 w-4" />

                  </Link>
                </div>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <img src="/images/privacy/photos-image.png" alt="Internxt Photos" />
                </div>
              </div>
            </RevealX>

            {/* Internxt Send */}
            <RevealX
              direction="right"
              className="flex overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
            >
              <div className="flex h-full flex-col items-center justify-center space-y-6 p-7 text-center lg:items-start lg:pl-20 lg:text-start">
                <h4 className="max-w-xs text-4xl font-semibold text-white lg:text-4xl">{textContent.send.title}</h4>
                <p className="max-w-xs text-xl font-bold text-white">{textContent.drive.subtitle}</p>
                <h5 className="max-w-[340px] text-xl text-white">{textContent.send.description}</h5>
                <div className="flex justify-start">
                  <Link
                    href="/drive"
                    locale={lang}
                    className="flex flex-row items-center space-x-1 text-lg text-blue-50 hover:underline">

                    <span>{textContent.send.cta}</span>
                    <UilAngleRightB className="h-4 w-4" />

                  </Link>
                </div>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <img src="/images/privacy/Share-by-email.webp" alt="Internxt Send" />
                </div>
              </div>
            </RevealX>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
