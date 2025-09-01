import RevealY from '../components/RevealY';

export const CardGroup = ({
  cards,
  backgroundColorCard,
  textColor,
  iconColor,
}: {
  cards: any[];
  backgroundColorCard?: string;
  textColor?: string;
  iconColor?: string;
}) => (
  <RevealY className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
    {cards.map((card) => (
      <div
        key={card.title}
        className={`flex flex-col items-start justify-start rounded-2xl ${
          backgroundColorCard ?? 'bg-gray-1'
        } p-8 sm:p-10 md:max-w-[488px]`}
      >
        <card.icon className={`mb-6 text-4xl ${iconColor ? iconColor : 'text-primary'}`} size={32} />
        <div className="flex w-full max-w-[400px] flex-col">
          <p className={`mb-6 text-base font-medium leading-tight lg:text-2xl ${textColor}`}>{card.title}</p>
          <p className={`text-sm ${textColor} leading-tight sm:text-lg`}>{card.description}</p>
        </div>
      </div>
    ))}
  </RevealY>
);
