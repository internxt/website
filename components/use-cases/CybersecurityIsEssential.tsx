import { Browsers, FolderSimpleUser, Timer } from '@phosphor-icons/react';

const RenderParagraphs = ({ mainText, description }) => {
  return (
    <div className="flex max-w-[774px] flex-col space-y-8">
      <h2 className="text-2xl font-medium text-gray-100">{mainText}</h2>
      <p className="text-xl text-gray-80">{description}</p>
    </div>
  );
};

const CybersecurityIsEssential = ({ textContent }) => {
  const cards = [
    {
      id: 0,
      icon: FolderSimpleUser,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      id: 1,
      icon: Browsers,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      id: 2,
      icon: Timer,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-16 py-20 px-5">
        <RenderParagraphs mainText={textContent.mainText} description={textContent.description} />

        <p className="text-center text-5xl font-semibold text-gray-100">{textContent.title}</p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-center space-y-6 rounded-2xl bg-gray-1 p-10 text-center"
            >
              <card.icon size={48} className="text-primary" />
              <h3 className="text-5xl font-semibold text-primary">{card.title}</h3>
              <p className="max-w-[230px] text-xl font-medium text-gray-100">{card.description}</p>
            </div>
          ))}
        </div>

        <RenderParagraphs mainText={textContent.secondaryMainText} description={textContent.secondaryDescription} />
      </div>
    </section>
  );
};

export default CybersecurityIsEssential;
