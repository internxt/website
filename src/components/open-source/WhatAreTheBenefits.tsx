import { ArrowsInSimple, CalendarCheck, CodeBlock, Eye, ShieldCheck, SketchLogo } from '@phosphor-icons/react';

const WhatAreTheBenefits = ({ darkMode = false, textContent }) => {
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
    <section className={`overflow-hidden ${darkMode ? 'bg-[#1C1C1C]' : ''}`}>
      <div className="flex flex-col items-center justify-center space-y-16 px-5 py-20">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h2 className={`max-w-[800px] text-5xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
            {textContent.title}
          </h2>
          <p className={`text-xl ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>{textContent.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              className={`flex flex-col space-y-6 rounded-2xl ${darkMode ? 'bg-gray-105' : 'bg-gray-1'} p-10`}
              key={index}
            >
              <card.icon className="h-8 w-8 text-primary" />
              <h3 className={`text-2xl font-medium ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>{card.title}</h3>
              <p className={`max-w-[408px] text-lg  ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAreTheBenefits;
