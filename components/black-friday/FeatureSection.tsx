import React from 'react';
import RevealY from '../components/RevealY';
import { ShieldCheck, LockKey, Eye, Fingerprint } from '@phosphor-icons/react';

const FeatureSection = ({ textContent }) => {
  const Cards = [
    {
      icon: ShieldCheck,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: LockKey,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: Eye,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
    {
      icon: Fingerprint,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
    },
  ];

  return (
    <section className="overflow-hidden bg-[#111111]">
      <div className="content flex flex-1 flex-col items-center px-10 py-20 text-white">
        <div className="center flex flex-col items-center space-y-4 pb-16 text-center lg:max-w-[778px]">
          <p className="text-4xl font-semibold md:text-5xl">{textContent.title}</p>
          <p className="text-center text-xl font-normal text-gray-5">{textContent.subtitle}</p>
        </div>
        <RevealY className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {Cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl bg-gray-100 p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className="mb-6 text-4xl text-primary" size={32} />
              <div className="flex w-full max-w-[400px] flex-col">
                <p className="mb-6 text-2xl font-medium">{card.title}</p>
                <p className="text-base text-gray-5 sm:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </RevealY>
      </div>
    </section>
  );
};

export default FeatureSection;
