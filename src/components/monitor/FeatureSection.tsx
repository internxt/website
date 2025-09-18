import React from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';
import Card from '../shared/Card';
import { RedirectButton } from '../shared/RedirectButton';

export interface FeatureSectionProps {
  textContent: HaveIbeenPwnedText['FeatureSection'];
  lang: string;
}
export interface CardTextProps {
  textContent: HaveIbeenPwnedText['FeatureSection']['cards'];
}
const CardText = ({ textContent }: CardTextProps) => {
  return (
    <Card className="flex max-w-full flex-col items-center space-y-6 border-none px-10 text-center md:max-w-[400px] md:items-start md:text-left">
      <h3 className="text-3xl font-semibold leading-tight text-gray-100 md:text-5xl">{textContent.title}</h3>
      <p className="text-lg text-gray-80 md:text-xl">{textContent.description}</p>
      <RedirectButton
        className="w-max-[130px] h-max-[48px] rounded-lg bg-primary px-3 py-3 text-xl font-medium text-white"
        url={textContent.redirect}
      >
        {textContent.cta}
      </RedirectButton>
    </Card>
  );
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ textContent, lang }) => {
  const cards = [
    {
      imageSrc: '/images/monitor/internxt_monitor_1.webp',
      alt: 'Create Strong Passwords',
      content: {
        title: textContent.cards[0].title,
        description: textContent.cards[0].description,
        cta: textContent.cards[0].cta,
        redirect: textContent.cards[0].redirect,
      },
    },
    {
      imageSrc: '/images/monitor/internxt_monitor_2.webp',
      alt: 'Use VPN',
      content: {
        title: textContent.cards[1].title,
        description: textContent.cards[1].description,
        cta: textContent.cards[1].cta,
        redirect: textContent.cards[1].redirect,
      },
    },
    {
      imageSrc: '/images/monitor/internxt_monitor_3.webp',
      alt: 'Check Password',
      content: {
        title: textContent.cards[2].title,
        description: textContent.cards[2].description,
        cta: textContent.cards[2].cta,
        redirect: textContent.cards[2].redirect,
      },
    },
    {
      imageSrc: '/images/monitor/internxt_monitor_4.webp',
      alt: 'Store Files',
      content: {
        title: textContent.cards[3].title,
        description: textContent.cards[3].description,
        cta: textContent.cards[3].cta,
        redirect: textContent.cards[3].redirect,
      },
    },
  ];

  return (
    <section>
      <div className="my-10 mb-20 flex flex-col items-center space-y-12 md:my-20 md:mb-32">
        <div className="mx-auto max-w-full px-4 text-center md:max-w-[774px]">
          <p className="text-3xl font-semibold text-gray-100 md:text-5xl">{textContent.title}</p>
          <p className="mt-6 text-lg font-bold text-gray-100 md:mt-12 md:text-xl">{textContent.description}</p>
          <p className="font-regular mt-6 text-lg text-gray-80 md:mt-12 md:text-xl">{textContent.description2}</p>
        </div>

        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'flex-col-reverse' : ''
            } items-center justify-center gap-6 lg:flex-row lg:gap-[88px]`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="flex flex-col">
                  <Image src={getImage(card.imageSrc)} alt={card.alt} width={496} height={520} draggable={false} />
                </div>
                <CardText textContent={card.content} />
              </>
            ) : (
              <>
                <CardText textContent={card.content} />
                <div className="flex flex-col">
                  <Image src={getImage(card.imageSrc)} alt={card.alt} width={496} height={520} draggable={false} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
