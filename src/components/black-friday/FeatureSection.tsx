import { ArrowsClockwise, EyeSlash, Gauge, User, Monitor, LockSimple } from '@phosphor-icons/react';
import React from 'react';

const FeatureSection = ({ textContent }) => {
  const cards = [
    {
      icon: EyeSlash,
      title: textContent.FeatureSection.feature1.title,
      subtitle: textContent.FeatureSection.feature1.subtitle1,
    },
    {
      icon: Gauge,
      title: textContent.FeatureSection.feature2.title,
      subtitle: textContent.FeatureSection.feature2.subtitle1,
    },
    {
      icon: LockSimple,
      title: textContent.FeatureSection.feature3.title,
      subtitle: textContent.FeatureSection.feature3.subtitle1,
    },
    {
      icon: ArrowsClockwise,
      title: textContent.FeatureSection.feature4.title,
      subtitle: textContent.FeatureSection.feature4.subtitle1,
    },
    {
      icon: Monitor,
      title: textContent.FeatureSection.feature5.title,
      subtitle: textContent.FeatureSection.feature5.subtitle1,
    },
    {
      icon: User,
      title: textContent.FeatureSection.feature6.title,
      subtitle: textContent.FeatureSection.feature6.subtitle1,
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="content flex flex-1 flex-col items-center bg-white px-10 py-20">
        <div className="center flex flex-col items-center pb-16 text-center lg:max-w-[778px]">
          <p className="text-4xl font-semibold">{textContent.FeatureSection.title}</p>
          <p className="mt-4 text-center text-xl font-normal">{textContent.FeatureSection.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl bg-gray-1 p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className="mb-6 text-4xl text-primary" size={32} />
              <div className="flex w-full max-w-[400px] flex-col">
                <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-base text-cool-gray-80 sm:text-lg">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;
