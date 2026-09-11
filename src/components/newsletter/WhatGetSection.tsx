import { Percent, RocketLaunch, ShieldStar } from '@phosphor-icons/react';

const WhatGetSection = ({ textContent }) => {
  const cards = [
    {
      icon: RocketLaunch,
      title: textContent.feeds.latestNews,
    },
    {
      icon: ShieldStar,
      title: textContent.feeds.cybersecurity,
    },
    {
      icon: Percent,
      title: textContent.feeds.latestDiscounts,
    },
  ];
  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center space-y-20">
        <div className="flex max-w-[774px] flex-col space-y-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-32">
          {cards.map((card, index) => (
            <div key={index} className="flex max-w-[200px] flex-col items-center space-y-3 text-center">
              <card.icon className="text-primary" size={48} />
              <h3 className="text-xl font-medium text-gray-100">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatGetSection;
