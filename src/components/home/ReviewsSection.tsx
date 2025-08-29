import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useRef } from 'react';

interface ReviewSectionProps {
  textContent: {
    pcMag: string;
    mashable: string;
    pcWorld: string;
  };
}

const ReviewText = ({ text }: { text: string }) => {
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return (
          <strong key={index} className="text-xs font-semibold lg:text-base">
            {boldText}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <p className="w-full text-xs font-normal leading-tight text-gray-55 lg:w-[321px] lg:text-base">
      {formatText(text)}
    </p>
  );
};

export default function ReviewSection({ textContent }: ReviewSectionProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      logo: '/images/home/NewDesign/pcmag.png',
      alt: 'pcMag Logo',
      text: textContent.pcMag,
    },
    {
      logo: '/images/home/NewDesign/mashable.png',
      alt: 'mashable Logo',
      text: textContent.mashable,
    },
    {
      logo: '/images/home/NewDesign/pcworld.png',
      alt: 'pcworld Logo',
      text: textContent.pcWorld,
    },
  ];

  const maxIndex = reviews.length - 1;

  const scrollLeft = () => {
    if (currentIndex > 0 && scrollContainerRef.current) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      const scrollAmount = scrollContainerRef.current.scrollWidth / reviews.length;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount * newIndex,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (currentIndex < maxIndex && scrollContainerRef.current) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      const scrollAmount = scrollContainerRef.current.scrollWidth / reviews.length;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount * newIndex,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative flex h-min w-full flex-col items-center justify-center overflow-hidden px-6 py-10 lg:flex-row lg:gap-12 lg:p-10 xl:p-32 3xl:p-80">
      <div className="absolute bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32 lg:h-[1px]" />
      <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:left-32 lg:right-32 " />

      <div className="flex w-full flex-col gap-8 lg:hidden ">
        <div
          ref={scrollContainerRef}
          className="scrollbar-none flex w-full snap-x snap-mandatory gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex h-min w-full flex-shrink-0 snap-center flex-row items-start justify-center gap-5  px-4"
            >
              <Image
                src={getImage(review.logo)}
                alt={review.alt}
                height={70}
                width={70}
                quality={100}
                className="flex-shrink-0"
              />
              <ReviewText text={review.text} />
            </div>
          ))}
        </div>
        <div className="flex h-[48px] w-[345px] flex-row items-end justify-end ">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-white transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-white transition-opacity ${
                currentIndex === maxIndex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden w-full flex-row gap-8 lg:flex ">
        {reviews.map((review, index) => (
          <div key={index} className="flex h-min min-w-0 flex-1 flex-row items-start justify-between gap-5">
            <Image
              src={getImage(review.logo)}
              alt={review.alt}
              height={70}
              width={70}
              quality={100}
              className="flex-shrink-0"
            />
            <ReviewText text={review.text} />
          </div>
        ))}
      </div>
    </section>
  );
}
