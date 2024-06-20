import RevealY from '../components/RevealY';

export const CardGroup = ({ cards, backgroundColorCard }: { cards: any[]; backgroundColorCard?: string }) => (
  <RevealY className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
    {cards.map((card) => (
      <div
        key={card.title}
        className={`flex flex-col items-start justify-start rounded-2xl ${
          backgroundColorCard ?? 'bg-gray-1'
        } p-8 sm:p-10 md:max-w-[488px]`}
      >
        <card.icon className="mb-6 text-4xl text-primary" size={32} />
        <div className="flex w-full max-w-[400px] flex-col">
          <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
          <p className="text-base text-cool-gray-80 sm:text-lg">{card.description}</p>
        </div>
      </div>
    ))}
  </RevealY>
);
