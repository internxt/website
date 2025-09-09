import Image from 'next/legacy/image';
import RevealX from '@/components/components/RevealX';
import { getImage } from '@/lib/getImage';
import { CaretRight } from '@phosphor-icons/react';

const WhatWeDoSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden" style={{ background: 'linear-gradient(360deg, #F4F8FF 63.1%, #FFFFFF 100%)' }}>
      <div className="flex flex-col items-center justify-center gap-8 py-10 lg:gap-16 lg:py-20">
        <p className="w-[345px] text-start text-30 font-bold text-gray-100 lg:w-full lg:text-center lg:text-5xl">
          {textContent.title}
        </p>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:px-10 xl:px-32 3xl:px-80">
          <RevealX direction="right" className="hidden lg:flex">
            <Image
              src={getImage('/images/about/photos/Fran-Villalba-Segarra.webp')}
              width={554}
              height={743}
              alt="Fran Villalba Segarra"
              loading="eager"
            />
          </RevealX>
          <RevealX direction="right" className="flex lg:hidden">
            <div
              className="h-[195px] w-[345px] bg-cover lg:hidden"
              style={{
                backgroundImage: `url(${getImage('/images/about/photos/Fran-Villalba-Segarra.webp')})`,
                backgroundPosition: '50% 0%',
              }}
            />
          </RevealX>
          <div className="flex w-[345px] flex-col items-center justify-center space-y-5 text-center lg:w-[554px] lg:text-left">
            <p className="text-start text-sm font-normal leading-tight text-gray-55 lg:text-xl lg:font-medium">
              {textContent.section1.title}
            </p>
            <div className="flex flex-col space-y-5">
              {textContent.section1.description.map((text: string) => {
                return (
                  <p key={text} className="text-start text-sm font-normal leading-tight text-gray-55 lg:text-base">
                    {text}
                  </p>
                );
              })}
            </div>
            <div className="flex h-min w-full flex-col justify-center gap-4 rounded-16 bg-white p-6 lg:gap-6 lg:p-8">
              <div className="hidden flex-row gap-5 lg:flex">
                <Image
                  src={getImage('/images/about/logos/BitCoin.webp')}
                  width={190}
                  height={175}
                  alt="BitCoin Logo"
                  loading="eager"
                  className="hidden lg:flex"
                />
                <p className="text-xl font-medium leading-tight text-gray-95">{textContent.bitSection.title}</p>
              </div>
              <div className="flex flex-col gap-4 lg:hidden">
                <div className="h-2 w-2">
                  <Image
                    src={getImage('/images/about/logos/BitCoin.webp')}
                    height={48}
                    width={48}
                    alt="BitCoin Logo"
                    className="hidden lg:flex"
                  />
                </div>
                <p className="text-start text-sm font-medium leading-tight text-gray-95">
                  {textContent.bitSection.title}
                </p>
              </div>
              <p className="text-start text-xs font-normal leading-tight text-gray-55 lg:text-base">
                {textContent.bitSection.description}
              </p>
              <span
                onClick={() =>
                  window.open(
                    ' https://news.bitcoin.com/privacy-revolution-the-internxt-journey-with-founder-and-ceo-fran-villalba-segarra/',
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
                className="flex w-max cursor-pointer flex-row items-center gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline"
              >
                {textContent.bitSection.cta}
                <CaretRight className="pt-[2px] text-primary" size={24} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
