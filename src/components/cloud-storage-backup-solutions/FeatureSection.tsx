import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import RevealX from '../components/RevealX';
import Link from 'next/link';
import { CloudStorageBackupSolutionsText } from '@/assets/types/cloud-storage-backup-solutions';

export interface FeatureSectionProps {
  textContent: CloudStorageBackupSolutionsText['FeatureSection'];
}

const FeatureSection = ({ textContent }: FeatureSectionProps) => {
  const cards = [
    {
      title: textContent.cards.element1.title,
      description: textContent.cards.element1.description,
      image: '/images/cloud-storage-backup-solutions/internxt_increased_protection.webp',
    },
    {
      title: textContent.cards.element3.title,
      description: textContent.cards.element3.description,
      image: '/images/cloud-storage-backup-solutions/internxt_ease_of_use.webp',
    },
    {
      title: textContent.cards.element2.title,
      description: textContent.cards.element2.description,
      image: '/images/cloud-storage-backup-solutions/internxt_recover_your_files.webp',
    },
    {
      title: textContent.cards.element4.title,
      description: textContent.cards.element4.description,
      image: '/images/cloud-storage-backup-solutions/internxt_cross_platforms.webp',
    },
  ];

  const wordsToBold = ['Windows', 'Linux', 'macOS'];
  const formattedDescription = textContent.description
    .split(/(Windows|Linux|macOS)/g)
    .map((word, index) => (wordsToBold.includes(word) ? <b key={index}>{word}</b> : word));

  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-16 bg-white py-20">
        <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden  px-5">
          <div className="flex w-full max-w-[800px] flex-col items-center justify-center space-y-12 text-center">
            <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
            <div className="flex flex-col space-y-6">
              <p className="text-2xl font-medium text-gray-80">{textContent.titleLine2}</p>
            </div>
            <Link
              className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
              href={'/pricing'}
            >
              {textContent.cta}
            </Link>
          </div>
        </section>

        <div>
          {cards.map((card, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center space-y-8 py-10 text-center  md:py-20 ${
                  isEven ? 'md:flex-row md:justify-between md:space-x-8' : 'md:flex-row-reverse md:justify-between'
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
                    alt={`${card.title} image`}
                  />
                </RevealX>

                <div
                  className={`flex w-full max-w-[100%] flex-col items-center justify-center space-y-4 md:max-w-[400px] md:items-start md:space-y-6 ${
                    isEven ? 'md:pl-10' : 'md:pr-10'
                  }`}
                >
                  <p className=" text-3xl font-semibold sm:text-5xl sm:leading-tight md:text-5xl">{card.title}</p>
                  <p className="font-regular text-base sm:text-lg md:text-xl">
                    {Array.isArray(card.description)
                      ? card.description.map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                            <br />
                          </span>
                        ))
                      : card.description}
                  </p>
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
