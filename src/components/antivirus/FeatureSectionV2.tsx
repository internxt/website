import { AntivirusText } from '@/assets/types/antivirus';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
export interface FeatureSectionV2Props {
  textContent: AntivirusText['FeatureSectionV2'];
}

const FeatureSectionV2 = ({ textContent }: FeatureSectionV2Props) => {
  const cards = [
    {
      image: '/images/antivirus/detect_malware.svg',
      description: textContent.cards.element1.description,
    },
    {
      image: '/images/antivirus/file_protection.svg',
      description: textContent.cards.element2.description,
    },
    {
      image: '/images/antivirus/file_scanning.svg',
      description: textContent.cards.element3.description,
    },
  ];

  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-16 bg-white py-10 sm:py-20">
        <div className="flex w-full max-w-[90%] flex-col items-center justify-center space-y-6 text-center sm:max-w-[850px]">
          <p className="text-3xl font-semibold text-gray-100 sm:text-5xl">{textContent.title}</p>
          <p className="font-regular text-base text-gray-80 sm:text-xl">{textContent.description}</p>
        </div>
        <div className="grid grid-cols-1 justify-center gap-6 py-8 sm:gap-8 sm:py-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex min-h-[300px] w-full flex-col space-y-4 rounded-lg bg-gray-1 p-4  sm:max-w-[350px] sm:space-y-5 sm:p-6"
            >
              <Image
                src={getImage(cards[index].image)}
                alt="icon"
                width={264}
                height={164}
                className="ml-5 text-primary"
              />

              <p className="mt-1 items-center text-center text-xl font-medium text-gray-80  sm:mt-2 sm:text-center sm:text-2xl">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionV2;
