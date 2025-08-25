import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface HorizontalScrollableSectionProps {
  textContent: Record<string, any>;
  bgColor?: string;
  redirection?: boolean;
  containerDecoration?: string;
  cardDecoration?: boolean;
  bgGardient?: string;
  bgColorCard?: string;
}
export default function HorizontalScrollableSectionWithImages({
  textContent,
  bgColor = 'bg-white',
  redirection = false,
  containerDecoration,
  cardDecoration = false,
  bgGardient,
  bgColorCard,
}: HorizontalScrollableSectionProps) {
  const cardTitles = textContent?.scrollableSection.titles ?? [];
  const cardDescriptions = textContent?.scrollableSection.descriptions;
  const cardImages = textContent?.scrollableSection?.imagesPathname || [];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 420;
  const mobileCardWidth = 320;
  const gap = 32;
  const scrollAmount = cardWidth + gap;
  const mobileScrollAmount = mobileCardWidth + gap;
  const hasImages = Array.isArray(cardImages) && cardImages.length > 0;

  const sectionHeight = hasImages ? 'lg:h-[1100px]' : 'lg:h-[580px]';
  const innerHeight = hasImages ? 'lg:h-[1000px]' : 'lg:h-[620px]';

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getMaxIndex = () => {
    if (isMobile) {
      return Math.max(0, cardTitles.length - 1);
    } else {
      return Math.max(0, cardTitles.length - 2);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > -1 && scrollContainerRef.current) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      const amount = isMobile ? mobileScrollAmount : scrollAmount;
      const element = scrollContainerRef.current;
      if (element && 'scrollTo' in element) {
        element.scrollTo({
          left: newIndex * amount,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollRight = () => {
    const maxIndex = getMaxIndex();
    if (currentIndex < maxIndex - 1 && scrollContainerRef.current) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      const amount = isMobile ? mobileScrollAmount : scrollAmount;
      const element = scrollContainerRef.current;
      if (element && 'scrollTo' in element) {
        element.scrollTo({
          left: newIndex * amount,
          behavior: 'smooth',
        });
      }
    }
  };

  const maxIndex = getMaxIndex();

  return (
    <section
      className={`flex h-min w-full items-center justify-center ${bgColor} ${sectionHeight}  lg:px-10 lg:py-9 xl:px-32 3xl:px-80`}
      style={{ background: bgGardient }}
    >
      <div
        className={`${containerDecoration} flex h-min w-full flex-col items-center justify-center gap-10 px-10 ${innerHeight} lg:justify-between lg:gap-0 lg:py-9 `}
      >
        <p className="w-[320px] pt-10 text-left text-30 font-bold leading-tight text-gray-100 lg:w-[832px] lg:pt-0 lg:text-left lg:text-3xl">
          {textContent.title}
        </p>

        <p className="w-[320px] text-left text-base font-normal leading-tight text-gray-55 lg:w-[832px] lg:text-left lg:text-lg">
          {textContent.description}
        </p>

        {redirection && (
          <Link
            href={'/privacy'}
            className="flex w-full cursor-pointer flex-row items-start justify-start gap-1 text-base font-medium text-primary hover:underline"
          >
            {textContent.cta}
            <CaretRight className="h-[24px] w-[24px] text-primary" />
          </Link>
        )}

        <div
          ref={scrollContainerRef}
          className="flex h-[240px] w-[320px] flex-row items-start justify-start gap-8 overflow-hidden scroll-smooth  lg:h-min lg:w-screen lg:pl-56"
        >
          {cardTitles.map((title, index) => (
            <div
              key={title}
              className={
                cardDecoration
                  ? `${bgColorCard} flex h-[207px] w-[320px] shrink-0 flex-col rounded-16 p-6 lg:w-[400px]`
                  : 'flex h-full w-[320px] shrink-0 flex-col justify-start py-6 lg:w-[400px]'
              }
            >
              <div className="flex flex-col gap-6">
                {cardImages && cardImages[index] && (
                  <div className="relative hidden h-[380px] w-[400px] items-end overflow-hidden lg:flex ">
                    <Image
                      src={getImage(`/images/business/features/${cardImages[index]}.webp`)}
                      alt="Internxt B2B Business Solution"
                      fill
                      quality={100}
                      style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                    />
                  </div>
                )}

                <div className="flex flex-row gap-4">
                  <p className="text-left text-xl font-medium text-gray-100">{title}</p>
                </div>

                <p className="text-base font-normal leading-tight text-gray-55">{cardDescriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[832px]">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-opacity ${
                currentIndex === maxIndex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
