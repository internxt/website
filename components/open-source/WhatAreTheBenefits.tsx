import { ArrowsInSimple, CalendarCheck, CodeBlock, Eye, ShieldCheck, SketchLogo } from '@phosphor-icons/react';

const WhatAreTheBenefits = ({ textContent }) => {
  const cards = [
    {
      icon: Eye,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: ShieldCheck,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: ArrowsInSimple,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
    {
      icon: CalendarCheck,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
    },
    {
      icon: CodeBlock,
      title: textContent.cards[4].title,
      description: textContent.cards[4].description,
    },
    {
      icon: SketchLogo,
      title: textContent.cards[5].title,
      description: textContent.cards[5].description,
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-16 px-5 py-20">
        <div className="flex  flex-col space-y-6 text-center">
          <p className="max-w-[800px] text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card, index) => (
            <div className="flex flex-col space-y-6 rounded-2xl bg-gray-5 p-10">
              <card.icon className="h-8 w-8 text-primary" />
              <p className="text-2xl font-medium text-gray-100">{card.title}</p>
              <p className="max-w-[408px] text-lg  text-gray-80">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAreTheBenefits;
