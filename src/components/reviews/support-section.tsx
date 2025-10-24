import { ReviewsTextPage } from '@/assets/types/reviews';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface SupportSectionProps {
  textContent: ReviewsTextPage['supportSection'];
}

interface CardProps {
  title: string;
  description: string;
}

const SupportCard = ({ title, description }: CardProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-6 lg:gap-6 lg:rounded-16 lg:p-8">
      <p className="text-lg font-medium text-gray-95 lg:text-xl">{title}</p>
      <p className="text-sm font-normal leading-tight text-gray-55 lg:text-base">{description}</p>
    </div>
  );
};

const SupportSection = ({ textContent }: Readonly<SupportSectionProps>): JSX.Element => {
  const cards = Object.values(textContent.cards);

  return (
    <section className="flex h-min w-full flex-col-reverse items-center justify-center gap-8 bg-neutral-17 px-6 py-10 lg:flex-row lg:gap-8 lg:p-10">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32" />

      <div className="flex justify-center lg:w-1/2">
        <Image
          src={getImage('/images/reviews/support.webp')}
          alt="Woman Working"
          height={535}
          width={575}
          className="rounded-16"
          quality={100}
        />
      </div>

      <div className="flex flex-col gap-8 lg:w-1/2 lg:gap-12">
        <div className="flex flex-col gap-8 lg:gap-6">
          <p className="text-30 font-bold leading-tight text-gray-95 lg:text-3xl">{textContent.title}</p>
          <p className="font-regular text-base leading-tight text-gray-55 lg:text-lg">{textContent.description}</p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-6">
          {cards.map((card, index) => (
            <SupportCard key={`support-card-${index}`} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
