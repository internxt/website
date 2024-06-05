import { Barcode, ChartPolar, Envelope, Keyhole } from '@phosphor-icons/react';

export const IsPCloudSafeSection = ({ textContent }) => {
  const cards = [
    {
      icon: Envelope,
      title: textContent.cards[0].title,
      subtitle: textContent.cards[0].description,
    },
    {
      icon: Keyhole,
      title: textContent.cards[1].title,
      subtitle: textContent.cards[1].description,
    },
    {
      icon: Barcode,
      title: textContent.cards[2].title,
      subtitle: textContent.cards[2].description,
    },
    {
      icon: ChartPolar,
      title: textContent.cards[3].title,
      subtitle: textContent.cards[3].description,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="content flex flex-col items-center justify-center gap-16">
        <div className="flex max-w-3xl flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="grid grid-cols-1 flex-row flex-wrap justify-center gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-start rounded-2xl bg-white p-8 sm:p-10 md:max-w-[488px]`}
            >
              <card.icon className="mb-6 text-4xl text-red" size={32} />
              <div className="flex w-full max-w-[400px] flex-col">
                <p className="mb-6 text-2xl font-medium text-gray-100">{card.title}</p>
                <p className="text-base text-cool-gray-80 sm:text-lg">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
