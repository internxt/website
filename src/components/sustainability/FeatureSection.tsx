import { ArrowsClockwise, CloudArrowUp, Drop, Gift, Lightning } from '@phosphor-icons/react';
import RevealX from '../components/RevealX';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { SustainabilityText } from '@/assets/types/sustainabilty';

export interface FeatureSection {
  textContent: SustainabilityText['FeatureSectionV2'];
}
const FeatureSection = ({ textContent }) => {
  const cards = [
    {
      icon: Lightning,
      title: textContent.cards.power.title,
      description: textContent.cards.power.description,
      unit: textContent.cards.power.unit,
      value: textContent.cards.power.value,
      image: '/images/sustainability/internxt_power_sustainability.webp',
    },
    {
      icon: Drop,
      title: textContent.cards.water.title,
      description: textContent.cards.water.description,
      unit: textContent.cards.water.unit,
      value: textContent.cards.water.value,
      image: '/images/sustainability/internxt_water_sustainability.webp',
    },
    {
      icon: CloudArrowUp,
      title: textContent.cards.carbon.title,
      description: textContent.cards.carbon.description,
      unit: textContent.cards.carbon.unit,
      value: textContent.cards.carbon.value,
      image: '/images/sustainability/internxt_carbon_sustainability.webp',
    },
    {
      icon: ArrowsClockwise,
      title: textContent.cards.renewables.title,
      description: textContent.cards.renewables.description,
      unit: textContent.cards.renewables.unit,
      value: textContent.cards.renewables.value,
      image: '/images/sustainability/internxt_renewables_sustainability.webp',
    },
  ];

  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-16 py-20">
        <div className="flex max-w-[850px] flex-col items-center justify-center space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div>
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center space-y-8 py-10 text-center  md:py-10 ${
                  isEven ? 'md:flex-row md:justify-between md:space-x-20' : 'md:flex-row-reverse md:justify-between'
                } md:text-start`}
              >
                <RevealX
                  direction={isEven ? 'right' : 'left'}
                  className="flex w-full max-w-[90%] flex-col rounded-3xl pt-5 sm:max-w-[75%] md:w-auto md:pt-0"
                >
                  <Image
                    src={getImage(card.image)}
                    width={496}
                    height={520}
                    quality={100}
                    loading="lazy"
                    layout="intrinsic"
                    className="rounded-3xl"
                    alt={`${card.title} image`}
                  />
                </RevealX>

                <div
                  className={`flex w-full max-w-[100%] flex-col items-center justify-center space-y-4 md:max-w-[400px] md:items-start md:space-y-6 ${
                    isEven ? 'md:pl-10' : 'md:pr-10'
                  }`}
                >
                  <Icon size={48} className="text-primary md:size-[64px]" />
                  <p className="text-3xl font-semibold sm:text-4xl sm:leading-tight md:text-5xl">{card.title}</p>
                  <span className="flex items-start space-x-2 text-4xl font-semibold text-primary md:text-5xl">
                    <p>{card.value}</p>
                    <p className="text-xl font-semibold text-gray-100 md:text-2xl">{card.unit}</p>
                  </span>

                  <p className="font-regular text-base sm:text-lg md:text-xl">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
