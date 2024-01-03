import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import RevealY from '../components/RevealY';

const WhyChooseInternxtSection = ({ textContent }) => {
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
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-20 px-5 py-20">
        <div className="flex max-w-[774px] flex-col space-y-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="text-2xl font-semibold text-gray-80">{textContent.subtitle}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <RevealY className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {Cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl bg-gray-1 p-8 sm:p-10 md:max-w-[488px]`}
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

export default WhyChooseInternxtSection;
