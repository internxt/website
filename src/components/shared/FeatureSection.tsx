import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import RevealX from '../components/RevealX';
import Link from 'next/link';

export interface FeatureCard {
  title: string;
  description: string | string[];
  image: string;
}

export interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  cards: FeatureCard[];
}

const FeatureSection = ({ title, subtitle, description, ctaText, ctaLink, cards }: FeatureSectionProps) => {
  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-16 bg-white py-10 md:py-20">
        <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden px-5">
          <div className="flex w-full flex-col items-center justify-center space-y-6 text-center lg:max-w-[70%]">
            <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{title}</p>
            <div className="flex flex-col space-y-6 lg:max-w-[800px]">
              {subtitle && <p className="text-2xl font-medium text-gray-80">{subtitle}</p>}
              {description && <p className="font-regular text-xl text-gray-80">{description}</p>}
            </div>
            {ctaText && ctaLink && (
              <Link
                className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
                href={ctaLink}
              >
                {ctaText}
              </Link>
            )}
          </div>
        </section>
        <div>
          {cards.map((card, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center space-y-8 pb-10 text-center md:pb-20 ${
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
                  <p className="text-3xl font-semibold sm:text-5xl sm:leading-tight md:text-5xl">{card.title}</p>
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
