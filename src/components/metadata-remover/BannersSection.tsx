import React from 'react';
import Image from 'next/legacy/image';
import { CaretRight } from '@phosphor-icons/react';

const BannersSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-16 px-5 py-20">
        <div className="flex text-center">
          <p className="text-2xl font-semibold text-gray-100 md:text-4xl">{textContent.title}</p>
        </div>
        <div className="flex flex-col space-y-9 md:flex-row md:space-x-9 md:space-y-0">
          <div className="flex w-screen max-w-xs flex-col items-center justify-center space-y-6 rounded-2xl bg-gray-1 p-10 text-center">
            <Image
              src="/images/temp-email/password-checker.svg"
              quality={100}
              width={125}
              height={70}
              layout={'intrinsic'}
              loading={'lazy'}
              alt="Password checker image"
            />
            <p className="max-w-[240px] text-2xl font-medium">{textContent.passwordCheckerBanner.title}</p>
            <button
              onClick={() =>
                window.open(`https://internxt.com/${lang}/password-checker`, '_blank', 'noopener noreferrer')
              }
              className="flex cursor-pointer flex-row items-center justify-center text-primary hover:underline"
            >
              <p className="text-sm font-semibold">{textContent.passwordCheckerBanner.cta}</p>
              <CaretRight size={14} weight={'bold'} />
            </button>
          </div>
          <div className="flex w-screen max-w-xs flex-col items-center justify-center space-y-6 rounded-2xl bg-gray-1 p-10 text-center">
            <Image
              src="/images/temp-email/byte-converter.svg"
              quality={100}
              width={95}
              height={70}
              layout={'intrinsic'}
              loading={'lazy'}
              alt="Byte converter image"
            />
            <p className="max-w-[200px] text-2xl font-medium">{textContent.byteConverterBanner.title}</p>
            <button
              onClick={() =>
                window.open(`https://internxt.com/${lang}/byte-converter`, '_blank', 'noopener noreferrer')
              }
              className="flex cursor-pointer flex-row items-center justify-center text-primary hover:underline"
            >
              <p className="text-sm font-semibold">{textContent.byteConverterBanner.cta}</p>
              <CaretRight size={14} weight={'bold'} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannersSection;
