import Link from 'next/link';
import { UilAngleRightB } from '@iconscout/react-unicons';
import RevealX from '../components/RevealX';

const InxtAppsSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="z-10 flex flex-col items-center space-y-16 bg-gray-1 px-5 pt-20 text-gray-100 ">
        <div className="px-6 text-center">
          <h2 className="mb-10 text-5xl font-semibold">
            {textContent.title.line1} <br className="hidden sm:flex" />
            {textContent.title.line2}
          </h2>
          <h3 className="w-full max-w-[774px] text-xl font-normal text-gray-80">{textContent.subtitle}</h3>
        </div>

        <div className="flex flex-col space-y-20 text-left lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
          {/* Internxt Drive */}
          <RevealX
            direction="right"
            className="flex overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
          >
            <div className="flex h-full flex-col items-center justify-center p-7 text-center lg:items-start lg:pl-20 lg:text-start">
              <h4 className="mb-10 max-w-xs text-4xl font-semibold text-white lg:text-4xl">
                {textContent.square1.title}
              </h4>
              <h5 className="mb-4 max-w-[340px] text-xl text-white">{textContent.square1.description}</h5>
              <div className="flex justify-start">
                <Link
                  href="/drive"
                  locale={lang}
                  className="flex flex-row items-center space-x-1 text-lg text-blue-50 hover:underline">

                  <span>{textContent.square1.cta}</span>
                  <UilAngleRightB className="h-4 w-4" />

                </Link>
              </div>
            </div>

            <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
              <div className="hidden lg:flex lg:max-w-[480px]">
                <img src="/images/privacy/Internxt-Drive.webp" alt="Internxt Drive image" draggable={false} />
              </div>
            </div>
          </RevealX>
          {/* Internxt Photos */}
          <RevealX
            direction="left"
            className="flex overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
          >
            <div className="flex h-full flex-col items-center justify-center p-7 text-center lg:items-start lg:pl-20 lg:text-start">
              <h4 className="mb-10 max-w-xs text-4xl font-semibold text-white lg:text-4xl">
                {textContent.square2.title}
              </h4>
              <h5 className="mb-4 max-w-[340px] text-xl text-white">{textContent.square2.description}</h5>
              <div className="flex justify-start">
                <Link
                  href="/drive"
                  locale={lang}
                  className="flex flex-row items-center space-x-1 text-lg text-blue-50 hover:underline">

                  <span>{textContent.square2.cta}</span>
                  <UilAngleRightB className="h-4 w-4" />

                </Link>
              </div>
            </div>

            <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
              <div className="hidden lg:flex lg:max-w-[480px]">
                <img src="/images/privacy/photos-image.png" alt="Internxt Photos image" />
              </div>
            </div>
          </RevealX>
          <RevealX
            direction="right"
            className="flex overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
          >
            <div className="flex h-full flex-col items-center justify-center p-7 text-center lg:items-start lg:pl-20 lg:text-start">
              <h4 className="mb-10 max-w-xs text-4xl font-semibold text-white lg:text-4xl">
                {textContent.square3.title}
              </h4>
              <h5 className="mb-4 max-w-[340px] text-xl text-white">{textContent.square3.description}</h5>
              <div className="flex justify-start">
                <Link
                  href="/drive"
                  locale={lang}
                  className="flex flex-row items-center space-x-1 text-lg text-blue-50 hover:underline">

                  <span>{textContent.square3.cta}</span>
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
    </section>
  );
};

export default InxtAppsSection;
