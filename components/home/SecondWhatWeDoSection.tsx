import Link from 'next/link';
import { CaretRight } from 'phosphor-react';
import React from 'react';
import RevealY from '../components/RevealY';
import RevealX from '../components/RevealX';
import Image from 'next/image';

const SecondWhatWeDoSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="z-10 flex flex-col items-center bg-gray-1 py-20 text-black">
        <RevealY className="space-y-16 px-6 text-left sm:text-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</h2>

            <h3 className="max-w-3xl text-xl font-normal text-gray-80">{textContent.description}</h3>
          </div>

          <div className="flex flex-col space-y-20 text-left text-white lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
            <RevealX
              direction="right"
              className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
            >
              <div className="m-10 mb-0 w-auto space-y-6 lg:m-20 lg:mb-20 lg:h-80 lg:w-80">
                <h4 className="mb-10 text-3xl font-semibold lg:text-4xl">{textContent.square1.title}</h4>
                <p className="text-xl font-bold">{textContent.square1.subtitle}</p>
                <h5 className="mb-4 text-xl sm:text-base">{textContent.square1.description}</h5>

                <div
                  className="flex cursor-pointer flex-row items-center space-x-1 text-lg text-primary hover:underline sm:text-base"
                  onClick={() => {
                    window.open(`https://internxt.com/${lang === 'en' ? '' : lang}/drive`, '_blank');
                  }}
                >
                  <span>{textContent.square1.cta}</span>
                  <CaretRight size={16} />
                </div>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch lg:mt-0">
                <div className="hidden rounded-r-2xl lg:flex lg:max-w-[480px]">
                  <Image
                    src="/images/home/Internxt-Drive.webp"
                    height={480}
                    width={480}
                    quality={100}
                    draggable={false}
                    alt="Internxt Drive secure service"
                  />
                </div>
              </div>
            </RevealX>

            <RevealX
              direction="left"
              className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
            >
              <div className="m-10 mb-0 w-auto space-y-6 lg:m-20 lg:mb-20 lg:h-80 lg:w-80">
                <h4 className="mb-10 text-3xl font-semibold lg:text-4xl">{textContent.square2.title}</h4>
                <p className="text-xl font-bold">{textContent.square2.subtitle}</p>
                <h5 className="mb-4 text-xl sm:text-base">{textContent.square2.description}</h5>
                <div
                  className="flex cursor-pointer flex-row items-center space-x-1 text-lg text-primary hover:underline sm:text-base"
                  onClick={() => {
                    window.open(`https://internxt.com/${lang === 'en' ? '' : lang}/photos`, '_blank');
                  }}
                >
                  <span>{textContent.square2.cta}</span>
                  <CaretRight size={16} />
                </div>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <Image
                    src="/images/home/Internxt-Photos.webp"
                    width={480}
                    height={480}
                    quality={100}
                    draggable={false}
                    alt="Internxt Photos secure service"
                  />
                </div>
              </div>
            </RevealX>
            <RevealX
              direction="right"
              className="flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
            >
              <div className="m-10 mb-0 w-auto space-y-6 lg:m-20 lg:mb-20 lg:h-80 lg:w-80">
                <h4 className="mb-10 text-3xl font-semibold lg:text-4xl">{textContent.square3.title}</h4>
                <p className="text-xl font-bold">{textContent.square3.subtitle}</p>
                <h5 className="mb-4 text-xl sm:text-base">{textContent.square3.description}</h5>

                <div
                  onClick={() => {
                    window.open('https://send.internxt.com/', '_blank');
                  }}
                  className="flex cursor-pointer flex-row items-center space-x-1 text-lg text-primary hover:underline sm:text-base"
                >
                  <span>{textContent.square3.cta}</span>
                  <CaretRight size={16} />
                </div>
              </div>

              <div className="lg:pl-15 relative mt-16 flex self-stretch lg:mt-0">
                <div className="hidden lg:flex lg:max-w-[480px]">
                  <Image
                    src="/images/privacy/Internxt-Send.png"
                    width={480}
                    height={480}
                    quality={100}
                    draggable={false}
                    alt="Internxt Send transfer service"
                  />
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
