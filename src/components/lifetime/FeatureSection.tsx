import React from 'react';
import RevealY from '../components/RevealY';
import { CaretRight, Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FeatureSection = ({
  textContent,
  withoutCta,
  backgroundColor,
}: {
  textContent: any;
  withoutCta?: boolean;
  backgroundColor?: string;
}) => {
  const router = useRouter();
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
    <section className={`overflow-hidden ${backgroundColor ?? ''}`}>
      <div className="flex flex-col items-center justify-center space-y-20 py-16 px-5">
        <div className="flex max-w-3xl flex-col items-center justify-center space-y-6 text-center text-black">
          <p className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
          {!withoutCta && (
            <Link
              className="flex cursor-pointer flex-row items-center justify-center space-x-1 text-lg font-semibold text-primary hover:underline"
              href="/about"
              locale={router.locale}
              target="_blank"
            >
              <p>{textContent.cta}</p>
              <CaretRight size={16} weight="bold" />
            </Link>
          )}
        </div>
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

export default FeatureSection;
