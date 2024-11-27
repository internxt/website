import { SustainabilityText } from '@/assets/types/sustainabilty';

export interface FeatureSectionV2 {
  textContent: SustainabilityText['FeatureSectionV3'];
}

const FeatureSectionV2 = ({ textContent }) => {
  const cards = [
    {
      number: textContent.cards.reduceCarbonEnergy.number,
      title: textContent.cards.reduceCarbonEnergy.title,
      description: textContent.cards.reduceCarbonEnergy.description,
    },
    {
      number: textContent.cards.globalNetZero.number,
      title: textContent.cards.globalNetZero.title,
      description: textContent.cards.globalNetZero.description,
    },
    {
      number: textContent.cards.zeroWaste.number,
      title: textContent.cards.zeroWaste.title,
      description: textContent.cards.zeroWaste.description,
    },
  ];

  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-16 bg-gray-1 py-10 sm:py-20">
        <div className="flex w-full max-w-[90%] flex-col items-center justify-center space-y-6 text-center sm:max-w-[850px]">
          <p className="text-3xl font-semibold text-gray-100 sm:text-5xl">{textContent.title}</p>
          <p className="text-base text-gray-80 sm:text-xl">{textContent.description}</p>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-6 py-8 sm:gap-8 sm:py-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex w-full max-w-[90%] flex-col items-start space-y-4 bg-white p-4  sm:max-w-[350px] sm:space-y-5 sm:p-6"
            >
              <p className="text-2xl font-semibold text-primary sm:text-3xl">{card.number}</p>
              <p className="text-gray-800 text-lg font-medium sm:text-xl">{card.title}</p>
              <p className="text-gray-600 mt-1 text-sm sm:mt-2 sm:text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionV2;
