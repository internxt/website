import React from 'react';
import RevealY from '../components/RevealY';
import { Password, CaretRight, LockKey, ShieldCheck, Key } from 'phosphor-react';
import { useRouter } from 'next/router';

const WhatWeDoSection = ({
  textContent,
  lang,
  withoutCta,
  backgroundColor,
}: {
  textContent: any;
  lang: string;
  withoutCta?: boolean;
  backgroundColor?: string;
}) => {
  const router = useRouter();

  const Cards = [
    {
      icon: Password,
      title: textContent.section5.card1.title,
      description: textContent.section5.card1.subtitle,
    },
    {
      icon: Key,
      title: textContent.section5.card2.title,
      description: textContent.section5.card2.subtitle,
    },
    {
      icon: ShieldCheck,
      title: textContent.section5.card3.title,
      description: textContent.section5.card3.subtitle,
    },
    {
      icon: LockKey,
      title: textContent.section5.card4.title,
      description: textContent.section5.card4.subtitle,
    },
  ];

  return (
    <section className={`overflow-hidden ${backgroundColor ? backgroundColor : ''}`}>
      <div className="flex flex-col items-center justify-center space-y-20 py-16 px-5">
        <RevealY className="flex max-w-3xl flex-col items-center justify-center space-y-6 text-center text-black">
          <h3 className="text-center text-3xl font-semibold text-gray-100 lg:text-5xl">
            {textContent.section5.title.line1}
            <br />
            {textContent.section5.title.line2}
          </h3>

          <p className="mb-6 text-xl text-gray-80">
            {textContent.section5.subtitle.line1} <br className="hidden sm:flex" />
            {textContent.section5.subtitle.line2} <br className="hidden sm:flex" />
            {textContent.section5.subtitle.line3}
          </p>

          {!withoutCta && (
            <div
              className="flex cursor-pointer flex-row items-center justify-center space-x-1 text-lg font-semibold text-primary hover:underline"
              onClick={() => {
                window.open(`${window.location.origin}/${router.locale}/privacy`, '_blank');
              }}
            >
              <span>{textContent.section5.cta}</span>
              <CaretRight size={16} weight="bold" />
            </div>
          )}
        </RevealY>
        <RevealY className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {Cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl ${
                backgroundColor ? 'bg-white' : 'bg-gray-1'
              } p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className="mb-6 text-4xl text-primary" size={32} />
              <div className="flex w-full max-w-[400px] flex-col">
                <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-base text-cool-gray-80 sm:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </RevealY>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
