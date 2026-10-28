interface CardsGridSectionProps {
  textContent: {
    title: string;
    description?: string;
    cards: {
      titles: string[];
      descriptions: string[];
    };
  };
  bgColor?: string;
  cardColor?: string;
  needsH2?: boolean;
  needsH3?: boolean;
  topSeparationBar?: boolean;
}

export const CardsGridSection = ({
  textContent,
  bgColor = 'bg-white',
  cardColor = 'bg-white',
  needsH2 = true,
  needsH3 = true,
  topSeparationBar = true,
}: CardsGridSectionProps): JSX.Element => {
  const TitleTag = needsH2 ? 'h2' : 'p';
  const CardTitleTag = needsH3 ? 'h3' : 'p';

  return (
    <section className={`relative flex w-full flex-col items-center overflow-hidden ${bgColor} py-10 lg:py-20`}>
      {topSeparationBar && (
        <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32" />
      )}

      <div className="flex w-full max-w-[345px] flex-col gap-10 lg:max-w-[1000px] lg:gap-16">
        <div className="flex flex-col gap-6">
          <TitleTag className="text-30 font-bold leading-tight text-gray-95 lg:text-5xl">{textContent.title}</TitleTag>
          {textContent.description && (
            <p className="text-base font-normal leading-tight text-gray-55 lg:text-lg">{textContent.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {textContent.cards.titles.map((title, index) => (
            <div key={title} className={`flex flex-col gap-4 rounded-16 border border-gray-10 ${cardColor} p-6 lg:p-8`}>
              <CardTitleTag className="text-lg font-medium text-gray-95 lg:text-xl">{title}</CardTitleTag>
              <p className="text-sm font-normal leading-tight text-gray-55 lg:text-base">
                {textContent.cards.descriptions[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsGridSection;
