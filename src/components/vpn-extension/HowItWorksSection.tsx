import { Binary, Detective, ShieldStar } from '@phosphor-icons/react';

export const HowItWorksSection = ({ textContent }) => {
  const cards = [
    {
      icon: Binary,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: ShieldStar,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: Detective,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex flex-col items-center justify-center space-y-12">
        <p className="text-center text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
        <div className="flex max-w-[800px] flex-col space-y-6 text-center">
          <p className="text-xl font-medium text-gray-80">{textContent.subtitle}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {cards.map((card) => (
            <div className="flex w-full flex-col space-y-6 rounded-2xl bg-white p-10 sm:max-w-[350px]" key={card.title}>
              <card.icon size={32} className="text-primary" />
              <p className="text-2xl font-medium text-gray-100">{card.title}</p>
              <p className="text-lg text-gray-80">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
