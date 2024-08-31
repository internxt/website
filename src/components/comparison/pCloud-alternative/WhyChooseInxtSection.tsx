import { EyeSlash, Fingerprint, HardDrives, Key, LockKey, ShieldCheck } from '@phosphor-icons/react';
import Image from 'next/image';

export const WhyChooseInxtSection = ({ textContent }) => {
  const cards = [
    {
      icon: EyeSlash,
      title: textContent.cards[0].title,
      subtitle: textContent.cards[0].description,
    },
    {
      icon: Fingerprint,
      title: textContent.cards[1].title,
      subtitle: textContent.cards[1].description,
    },
    {
      icon: ShieldCheck,
      title: textContent.cards[2].title,
      subtitle: textContent.cards[2].description,
    },
    {
      icon: LockKey,
      title: textContent.cards[3].title,
      subtitle: textContent.cards[3].description,
    },
    {
      icon: Key,
      title: textContent.cards[4].title,
      subtitle: textContent.cards[4].description,
    },
    {
      icon: HardDrives,
      title: textContent.cards[5].title,
      subtitle: textContent.cards[5].description,
    },
  ];

  return (
    <section className="overflow-hidden px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-[726px] text-5xl font-semibold text-gray-100">{textContent.title}</h2>
            <p className="text-xl text-gray-80">{textContent.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl bg-gray-1 p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className="mb-6 text-4xl text-green" size={32} />
              <div className="flex w-full max-w-[400px] flex-col">
                <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-base text-cool-gray-80 sm:text-lg">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <Image
            src="/images/temp-email/cta_general_10_storage_en.webp"
            alt="Switch to privacy"
            width={895}
            height={355}
            layout="intrinsic"
            quality={100}
            className="cursor-pointer"
            onClick={() => {
              window.open('https://drive.internxt.com/new', '_blank', 'noopener noreferrer');
            }}
          />
        </div>
      </div>
    </section>
  );
};
