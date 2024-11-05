import React from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Button from '../shared/Button';
import { redirect } from 'next/dist/server/api-utils';

import { useRouter } from 'next/router';

const CardText = ({ textContent }) => {
  const router = useRouter();

  return (
    <div className="flex max-w-[388px] flex-col space-y-6">
      <h3 className="text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</h3>
      <p className="text-xl text-gray-80">{textContent.description}</p>
      <Button
        text={textContent.cta}
        className="bg-blue-500 w-full rounded-lg py-4 text-xl font-semibold text-gray-100"
        onClick={() => router.push(textContent.redirect)}
      />
    </div>
  );
};

const FeatureSection = ({ textContent }) => {
  const cards = {
    createPasswords: {
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
      cta: textContent.cards[0].cta,
      redirect: textContent.cards[0].redirect,
    },
    useVPN: {
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
      cta: textContent.cards[1].cta,
      redirect: textContent.cards[1].redirect,
    },
    checkPassword: {
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
      cta: textContent.cards[2].cta,
      redirect: textContent.cards[2].redirect,
    },
    storeFiles: {
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
      cta: textContent.cards[3].cta,
      redirect: textContent.cards[3].redirect,
    },
  };

  return (
    <section>
      <div className="my-10 mb-32 flex flex-col items-center space-y-12 md:my-20">
        <div className="mx-auto max-w-[774px] text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="mt-12 text-xl font-bold text-gray-100">{textContent.description}</p>
          <p className="font-regular mt-12 text-xl text-gray-80">{textContent.description2}</p>
        </div>
        {/* Cards */}
        {/* Create Stron Passwords */}
        <div className="flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-[88px]">
          <div className="flex flex-col">
            <Image
              src={getImage('/images/monitor/internxt_monitor_1.webp')}
              alt="Create Strong Passwords"
              width={496}
              height={520}
              draggable={false}
            />
          </div>
          <CardText textContent={cards.createPasswords} />
        </div>
        {/* Use a VPN */}
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[88px]">
          <CardText textContent={cards.useVPN} />
          <div className="flex flex-col">
            <Image
              src={getImage('/images/monitor/internxt_monitor_2.webp')}
              alt="Use VPN"
              width={496}
              height={520}
              draggable={false}
            />
          </div>
        </div>
        {/* Check password strength */}
        <div className="flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-[88px]">
          <div className="flex flex-col">
            <Image
              src={getImage('/images/monitor/internxt_monitor_3.webp')}
              alt="Check Password"
              width={496}
              height={520}
              draggable={false}
            />
          </div>
          <CardText textContent={cards.checkPassword} />
        </div>
        {/* Store files privately */}
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[88px]">
          <CardText textContent={cards.storeFiles} />
          <div className="flex flex-col">
            <Image
              src={getImage('/images/monitor/internxt_monitor_4.webp')}
              alt="Store Files"
              width={496}
              height={520}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
