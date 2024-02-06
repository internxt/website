import React from 'react';
import Image from 'next/legacy/image';
import { notificationService } from '@/components/Snackbar';

const HeroSection = ({ textContent }) => {
  const description = {
    part1: textContent.description.split('SPECIAL15')[0],
    special15: textContent.description.substring(
      textContent.description.indexOf('SPECIAL15'),
      textContent.description.indexOf('SPECIAL15') + 9,
    ),
    part2: textContent.description.split('SPECIAL15')[1],
  };

  return (
    <section className="overflow-hidden pt-12">
      <div className="mx-4 py-24 lg:mx-10 xl:mx-32">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between space-y-10 lg:flex-row lg:space-y-0">
          <div className="flex flex-col space-y-10">
            <div className="flex max-w-[468px] flex-col items-center justify-center space-y-10 lg:items-start">
              <div className="flex flex-row rounded-lg bg-gray-5 px-5 py-2">
                <p className="text-xl font-medium text-gray-80">{textContent.header}</p>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col text-center lg:text-start">
                  <p className="text-6xl font-semibold">
                    {textContent.title.normalText}
                    <span className="text-6xl font-semibold text-primary">{textContent.title.blueText}</span>
                  </p>
                </div>
                <p className="text-center text-xl text-gray-80 lg:text-left">
                  {description.part1}{' '}
                  <span
                    className="cursor-pointer font-medium text-primary underline"
                    onClick={() => {
                      //Copy to clipboard
                      navigator.clipboard.writeText(description.special15);
                      notificationService.openSuccessToast('Copied to clipboard');
                    }}
                  >
                    {description.special15}
                  </span>{' '}
                  {description.part2}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-5 space-x-8 lg:flex-row lg:justify-start lg:space-y-0">
              <button
                className="flex w-max items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark"
                onClick={() => {
                  window.scrollTo({ top: document.getElementById('payment')?.offsetTop, behavior: 'smooth' });
                }}
              >
                {textContent.cta}
              </button>
            </div>
          </div>
          <div className="hidden flex-col rounded-3xl lg:flex">
            <Image
              alt="Woman with laptop"
              src="/images/partners-discount/Internxt_partners_discount.webp"
              className=" rounded-3xl"
              width={588}
              height={560}
              layout="intrinsic"
              loading="eager"
              quality={100}
            />
          </div>
          <div className="flex flex-col rounded-3xl shadow-2xl lg:hidden">
            <Image
              alt="Woman with laptop"
              src="/images/partners-discount/Internxt_partners_discount_mobile.webp"
              className=" rounded-3xl"
              width={588}
              height={660}
              layout="intrinsic"
              loading="eager"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
