import Button from '../shared/Button';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';

export const WhatWeDoSectionForSpecialOffer = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col items-center gap-16">
        <div className="flex max-w-[940px] flex-col gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div
          className={`flex max-w-5xl flex-col items-center overflow-hidden rounded-2xl bg-white lg:w-screen lg:flex-row lg:justify-between lg:gap-0`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8 p-7 text-center lg:items-start lg:pl-14 lg:text-start">
            <div className="flex max-w-[500px] flex-col gap-6 text-lg text-black lg:text-xl">
              {textContent.card.features.map((feature) => (
                <div className="flex flex-row gap-2">
                  <CheckCircle className="mt-0.5 h-6 w-6 text-primary lg:mt-0 lg:h-8 lg:w-8" size={32} />
                  <p className="text-left font-semibold text-gray-80">{feature}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-start">
              <Button
                text={textContent.card.cta}
                onClick={() => {
                  window.location.hash = '#priceTable';
                }}
              />
            </div>
          </div>
          <div className="flex">
            <Image
              src={getImage('/images/freeuser/Internxt_storage.webp')}
              loading="lazy"
              width={480}
              height={480}
              alt="Internxt Drive"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
