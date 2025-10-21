import { CaretRight } from '@phosphor-icons/react';

interface MoreDealsSectionProps {
  textContent: {
    title: string;
    description: string;
    cards: {
      card1: {
        title: string;
        description: string;
        cta: string;
        url?: string;
      };
      card2: {
        title: string;
        description: string;
        cta: string;
        url?: string;
      };
    };
  };
  darkMode?: boolean;
}

const MoreDealsSection = ({ textContent, darkMode = false }: MoreDealsSectionProps) => {
  const cards = [textContent.cards.card1, textContent.cards.card2];

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      className={`flex w-full flex-col items-center justify-center gap-16 overflow-hidden py-20 xl:px-32 3xl:px-80 ${
        darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <h2 className={`text-30 font-bold lg:text-3xl ${darkMode ? 'text-white-95' : 'text-gray-95'}`}>
          {textContent.title}
        </h2>
        <p className="text-sm font-normal text-white-95 lg:text-lg">{textContent.description}</p>
      </div>

      <div className="flex w-full flex-row items-stretch justify-center gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex w-full max-w-[50%] flex-1 flex-col gap-8 rounded-16 bg-gray-105 p-8">
            <h3 className="text-xl font-medium text-white-95">{card.title}</h3>
            <p className="flex-grow text-base font-normal text-green-120">{card.description}</p>
            <button
              onClick={() => handleCardClick(card.url || 'https://internxt.com/privacy/')}
              className="flex w-max cursor-pointer flex-row items-center gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline"
              type="button"
            >
              {card.cta}
              <CaretRight className="pt-[2px] text-primary" size={24} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreDealsSection;
