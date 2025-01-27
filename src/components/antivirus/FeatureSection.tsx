import { AntivirusText } from '@/assets/types/antivirus';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import RevealX from '../components/RevealX';

export interface FeatureSectionProps {
  textContent: AntivirusText['FeatureSection'];
}

const FeatureSection = ({ textContent }: FeatureSectionProps) => {
  const cards = [
    {
      icon: '/images/antivirus/internxt_antivirus_1.webp',
      title: textContent.cards.element1.title,
      description: textContent.cards.element1.description,
      image: '/images/antivirus/Internxt_Antivirus_feature1.png',
    },
    {
      icon: '/images/antivirus/internxt_antivirus_2.webp',
      title: textContent.cards.element2.title,
      description: textContent.cards.element2.description,
      image: '/images/antivirus/Internxt_Antivirus_feature2.png',
    },
    {
      icon: '/images/antivirus/internxt_antivirus_3.webp',
      title: textContent.cards.element3.title,
      description: textContent.cards.element3.description,
      image: '/images/antivirus/Internxt_Antivirus_feature3.png',
    },
  ];

  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-16 bg-white py-20">
        <div className="flex max-w-[850px] flex-col items-center justify-center space-y-6 text-center">
          <p className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div>
          {cards.map((card, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center space-y-8 py-10 text-center  md:py-10 ${
                  isEven ? 'md:flex-row md:justify-between md:space-x-20' : 'md:flex-row-reverse md:justify-between'
                } md:text-start`}
              >
                <RevealX
                  direction={isEven ? 'right' : 'left'}
                  className="flex w-full max-w-[90%] flex-col rounded-3xl pt-5 sm:max-w-[75%] md:w-auto md:pt-0"
                >
                  <Image
                    src={getImage(card.image)}
                    width={600}
                    height={480}
                    quality={100}
                    loading="lazy"
                    layout="intrinsic"
                    className="rounded-3xl shadow-md"
                    alt={`${card.title} image`}
                  />
                </RevealX>

                <div
                  className={`flex max-h-[385px] w-full max-w-[100%] flex-col items-center justify-center space-y-4 md:max-w-[400px] md:items-start md:space-y-6 ${
                    isEven ? 'md:pl-10' : 'md:pr-10'
                  }`}
                >
                  <Image
                    src={getImage(card.icon)}
                    width={61}
                    height={61}
                    quality={100}
                    loading="lazy"
                    layout="intrinsic"
                    className="rounded-3xl"
                    alt={`${card.title} image`}
                  />
                  <p className=" text-3xl font-semibold sm:text-5xl sm:leading-tight md:text-5xl">{card.title}</p>
                  <p className="font-regular text-base sm:text-lg md:text-xl">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
