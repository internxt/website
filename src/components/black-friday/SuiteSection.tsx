import React from 'react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Link from 'next/link';
const SuiteSection = ({ textContent, lang }) => {
  const images = {
    drive: '/images/privacy/Internxt-Drive.webp',
    business: '/images/black-friday/internxt_for_families.webp',
    family: '/images/black-friday/internxt_for_business.webp',
  };
  return (
     <section className="relative flex w-full flex-col bg-highlight">
      <div className="z-10 flex flex-col items-center py-16">
        <div className="px-6 text-left sm:text-center">
          <div className="flex flex-col items-center justify-center px-5 pb-16 text-center">
            <h2 className="max-w-[756px] text-4xl font-semibold text-white md:text-5xl -mt-2"> {/* Ajustar el margen superior aquí */}
              {textContent.SuiteSection.title}
            </h2>
            <p className="max-w-[756px] pt-5 text-xl text-white">
              {textContent.SuiteSection.subtitle}
            </p>
          </div>

          <div className="flex flex-col space-y-20 text-left text-white lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
            {[textContent.SuiteSection.drive, textContent.SuiteSection.photos, textContent.SuiteSection.send].map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-between overflow-hidden rounded-2xl bg-cool-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0 lg:h-[480px]"
              >
                <div className="w-auto px-10 pt-10 lg:h-full lg:w-[480px] lg:p-20 flex flex-col justify-between">
                  <div className="flex flex-col space-y-4">
                    <h4 className="text-3xl font-medium lg:text-4xl pb-4">{section.title}</h4>
                    <div className="max-h-[144px]">
                      <p className="text-1xl font-regular" >{section.subtitle}</p>
                    </div>
                  </div>
                  <div className="mt-12">
                    <Link
                      className="flex w-max items-center rounded-lg bg-primary px-5 py-3 font-medium text-white"
                      href={index === 2 ? '/family' : '/pricing'}
                    >
                      {section.cta}
                    </Link>
                  </div>
                </div>

                <div className="lg:pl-15 relative mt-16 flex self-stretch lg:mt-0">
                  <div className="hidden lg:flex lg:max-w-[480px]">
                    <Image
                      src={getImage(images[section.image])}
                      alt={section.alt}
                      width={480}
                      height={480}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};
export default SuiteSection;
