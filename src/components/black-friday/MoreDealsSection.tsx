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
      };
      card2: {
        title: string;
        description: string;
        cta: string;
      };
    };
  };
  urls: {
    card1: string;
    card2: string;
  };
  darkMode?: boolean;
  percentOff: any;
}

const MoreDealsSection = ({ textContent, urls, darkMode = true, percentOff }: MoreDealsSectionProps) => {
  const cards = [textContent.cards.card1, textContent.cards.card2];
  const urlsArray = [urls.card1, urls.card2];
  const parsePercentText = (text: string) => {
    if (!percentOff || percentOff === '0') {
      return <div className="bg-gray-200 h-4 w-16 animate-pulse rounded"></div>;
    }
    return typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;
  };

  return (
    <section
      className={`flex w-full flex-col items-center justify-center gap-8 overflow-hidden py-10 lg:gap-16 lg:py-20 xl:px-32 3xl:px-80 ${
        darkMode ? 'bg-[#1C1C1C]' : undefined
      }`}
      style={{ background: darkMode ? '' : 'linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <h2 className={`text-30 font-bold lg:text-3xl ${darkMode ? 'text-white-95' : 'text-gray-95'}`}>
          {textContent.title}
        </h2>
        <p className={`text-sm font-normal ${darkMode ? 'text-white-95' : 'text-gray-55'} lg:text-lg`}>
          {textContent.description}
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-8 px-6 lg:flex-row lg:items-stretch lg:px-0">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${
              darkMode ? 'bg-gray-105' : 'bg-white'
            } flex w-full flex-1 flex-col gap-4 rounded-xl p-6 lg:max-w-[50%] lg:gap-8 lg:rounded-16 lg:p-8`}
          >
            <h3 className={`text-xl font-medium ${darkMode ? 'text-white-95' : 'text-gray-95'}`}>
              {parsePercentText(card.title)}
            </h3>
            <p className={`flex-grow text-base font-normal ${darkMode ? 'text-white-95' : 'text-gray-55h'}`}>
              {parsePercentText(card.description)}
            </p>
            <a
              href={urlsArray[index]}
              className="flex w-max cursor-pointer flex-row items-center gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline"
            >
              {card.cta}
              <CaretRight className="pt-[2px] text-primary" size={24} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreDealsSection;
