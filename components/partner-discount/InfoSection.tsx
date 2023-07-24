import { ShieldCheck, LockKey, Scales, Fingerprint } from '@phosphor-icons/react';
import React from 'react';

const InfoSection = ({ textContent }) => {
  const cards = [
    {
      id: 1,
      icon: ShieldCheck,
      title: textContent.card1.title,
      description: textContent.card1.description,
    },
    {
      id: 2,
      icon: LockKey,
      title: textContent.card2.title,
      description: textContent.card2.description,
    },
    {
      id: 3,
      icon: Scales,
      title: textContent.card3.title,
      description: textContent.card3.description,
    },
    {
      id: 4,
      icon: Fingerprint,
      title: textContent.card4.title,
      description: textContent.card4.description,
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col py-20 px-5">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="max-w-[672px] text-lg font-normal">{textContent.subtitle}</p>
        </div>
        <div className="flex flex-col items-center space-y-8 pt-10">
          <div className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
            {cards.map((card) => {
              return (
                <div className="flex flex-col items-start justify-start space-y-6 rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
                  <card.icon className="text-4xl text-primary" />
                  <h4 className="text-2xl font-medium">{card.title}</h4>
                  <h5 className="text-lg text-cool-gray-80 sm:text-base">{card.description}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
