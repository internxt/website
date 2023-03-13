import Link from 'next/link';
import { CaretRight } from 'phosphor-react';
import React from 'react';
import RevealY from '../components/RevealY';
import RevealX from '../components/RevealX';

const SecondWhatWeDoSection = ({ textContent, lang }) => {
  return (
    <section>
      <div className="z-10 flex flex-col items-center bg-gray-1 py-20 text-black">
        <RevealY className="space-y-16 px-6 text-left sm:text-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-4xl font-semibold">{textContent.title}</h2>

            <h3 className="max-w-3xl text-xl font-normal text-gray-80">{textContent.description}</h3>
          </div>

          <div className="flex flex-col space-y-20 text-left text-white lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
            <RevealX
              direction="right"
              className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
            >
              <div className="m-10 mb-0 w-auto space-y-6 lg:m-20 lg:mb-20 lg:h-80 lg:w-80">
                <h4 className="mb-10 text-3xl font-medium lg:text-4xl">{textContent.square1.title}</h4>
                <p className="text-xl font-bold">{textContent.square1.subtitle}</p>
                <h5 className="mb-4 text-lg sm:text-base">{textContent.square1.description}</h5>
                <Link href="/drive" locale={lang}>
                  <a className="flex flex-row items-center space-x-1 text-lg text-blue-50 sm:text-base">
                    <span>{textContent.square1.cta}</span>
                    <CaretRight size={16} />
                  </a>
                </Link>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <img src="/images/privacy/drive-image.png" alt="Drive image" />
                </div>
              </div>
            </RevealX>

            <RevealX
              direction="left"
              className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
            >
              <div className="m-10 mb-0 w-auto space-y-6 lg:m-20 lg:mb-20 lg:h-80 lg:w-80">
                <h4 className="mb-10 text-3xl font-medium lg:text-4xl">{textContent.square2.title}</h4>
                <p className="text-xl font-bold">{textContent.square2.subtitle}</p>
                <h5 className="mb-4 text-lg sm:text-base">{textContent.square2.description}</h5>
                <Link href="/photos" locale={lang}>
                  <a className="flex flex-row items-center space-x-1 text-lg text-blue-50 sm:text-base">
                    <span>{textContent.square2.cta}</span>
                    <CaretRight size={16} />
                  </a>
                </Link>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <img src="/images/privacy/photos-image.png" alt="Photos image" />
                </div>
              </div>
            </RevealX>
            <RevealX
              direction="right"
              className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
            >
              <div className="m-10 mb-0 w-auto space-y-6 lg:m-20 lg:mb-20 lg:h-80 lg:w-80">
                <h4 className="mb-10 text-3xl font-medium lg:text-4xl">{textContent.square3.title}</h4>
                <p className="text-xl font-bold">{textContent.square3.subtitle}</p>
                <h5 className="mb-4 text-lg sm:text-base">{textContent.square3.description}</h5>
                <Link href="/photos" locale={lang}>
                  <a className="flex flex-row items-center space-x-1 text-lg text-blue-50 sm:text-base">
                    <span>{textContent.square3.cta}</span>
                    <CaretRight size={16} />
                  </a>
                </Link>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <img src="/images/privacy/send-image.png" alt="Send image" />
                </div>
              </div>
            </RevealX>
          </div>
        </RevealY>
      </div>
    </section>
  );
};

export default SecondWhatWeDoSection;
