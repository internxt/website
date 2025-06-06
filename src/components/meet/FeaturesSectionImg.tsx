import {
  Briefcase,
  Crosshair,
  Fingerprint,
  HandFist,
  MonitorPlay,
  Password,
  Stethoscope,
  UserSwitch,
} from '@phosphor-icons/react';
import RevealY from '../components/RevealY';
import { getImage } from '@/lib/getImage';

export const FeaturesSectionImg = ({ textContent }) => {
  const icons = [Password, Crosshair, MonitorPlay, Fingerprint];

  const cards = [
    {
      icon: UserSwitch,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
      image: getImage('/images/meet/personal.webp'),
    },
    {
      icon: Briefcase,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
      image: getImage('/images/meet/business.webp'),
    },
    {
      icon: Stethoscope,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
      image: getImage('/images/meet/medical.webp'),
    },
    {
      icon: HandFist,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
      image: getImage('/images/meet/activists.webp'),
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex flex-col items-center space-y-12">
        <p className="text-center text-4xl font-semibold text-gray-100 md:text-left lg:text-5xl">{textContent.title}</p>
        <div className="flex max-w-[800px] flex-col space-y-6 text-center">
          <p className="text-xl font-medium text-gray-80">{textContent.subtitle}</p>
        </div>
        <RevealY className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col overflow-hidden rounded-2xl bg-white md:max-w-[488px]">
              {/* Full-width image without any padding or margin */}
              {card.image && (
                <div className="w-full overflow-hidden rounded-t-2xl">
                  <div className="aspect-video w-full">
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                  </div>
                </div>
              )}

              {/* Content below the image, with padding */}
              <div className="p-5 sm:p-10">
                <card.icon className="mb-6 text-4xl text-primary" size={32} />
                <div className="flex w-full max-w-[400px] flex-col">
                  <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                  <p className="text-base text-cool-gray-80 sm:text-lg">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </RevealY>
      </div>
    </section>
  );
};
