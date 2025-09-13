import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface HorizontalScrollableProps {
  textContent: any;
  bgGradient?: string;
  competitor?: string;
  hideDivider?: boolean;
}

export default function HorizontalScrollableSection({
  textContent,
  bgGradient,
  competitor,
  hideDivider = false,
}: Readonly<HorizontalScrollableProps>): JSX.Element {
  const competitorPath =
    competitor === 'pCloud'
      ? textContent.HorizontalpCloudScrollableSection
      : competitor === 'MEGA'
      ? textContent.HorizontalMegaScrollableSection
      : competitor === 'Dropbox'
      ? textContent.HorizontalDropboxScrollableSection
      : textContent.scrollableSection;

  const cardTitles = competitorPath?.titles ?? competitorPath.scrollableSection?.titles ?? [];
  const cardDescriptions = competitorPath?.descriptions ?? competitorPath.scrollableSection?.descriptions ?? [];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = 400;
  const mobileCardWidth = 345;
  const gap = isMobile ? 16 : 24;
  const scrollAmount = cardWidth + gap;
  const mobileScrollAmount = mobileCardWidth + gap;

  useEffect(() => {
    const updateScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getMaxIndex = () => {
    if (isMobile) {
      return Math.max(0, cardTitles.length - 1);
    } else {
      return Math.max(0, cardTitles.length - 2);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0 && scrollContainerRef.current) {
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
    if (currentIndex < maxIndex && scrollContainerRef.current) {
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

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const amount = isMobile ? mobileScrollAmount : scrollAmount;
      const newIndex = Math.round(scrollLeft / amount);
      setCurrentIndex(Math.min(newIndex, getMaxIndex()));
    }
  };

  const maxIndex = getMaxIndex();

  return (
    <section
      className={`flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden ${
        bgGradient ? '' : 'bg-neutral-17'
      } py-10 lg:h-min lg:gap-16 lg:py-20`}
      style={{ background: bgGradient }}
    >
      {!hideDivider && (
        <>
          <div className="absolute left-8 right-8 top-0 flex h-[1px] bg-neutral-35 lg:left-32 lg:right-32 lg:hidden"></div>
          <div className="absolute left-8 right-8 hidden h-[1px] bg-neutral-35 lg:left-32 lg:right-32 lg:top-0 lg:flex"></div>
        </>
      )}
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[850px]">
        <p className="text-30 font-bold leading-tight text-gray-95 lg:text-3xl">
          {competitor ? competitorPath?.title ?? textContent.title : textContent.title}
        </p>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">
          {competitor ? competitorPath?.description ?? textContent.description : textContent.description}
        </p>
        {textContent.cta && !competitor && (
          <span
            onClick={() => window.open('https://internxt.com/privacy/', '_blank', 'noopener,noreferrer')}
            className="flex w-max cursor-pointer flex-row items-center gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline"
          >
            {textContent.cta}
            <CaretRight className="pt-[2px] text-primary" size={24} />
          </span>
        )}
      </div>
      <div className="flex h-min w-full flex-col items-center gap-4 lg:gap-8">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto px-5 lg:px-20 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div
            className="flex gap-4 lg:gap-6 lg:pl-32 lg:pr-48 1.5xl:pl-48 1.5xl:pr-64 2xl:pl-[440px] 2xl:pr-[440px]"
            style={{
              width: 'max-content',
              alignItems: 'stretch',
            }}
          >
            {cardTitles.map((title: string, index: number) => (
              <div key={index} className="flex-shrink-0">
                <div className="flex h-full w-[345px] flex-col rounded-16 bg-white p-8 lg:w-[400px]">
                  <p className="pb-6 text-xl font-medium text-gray-95">{title}</p>
                  <p className="flex-1 text-base font-normal leading-tight text-gray-55">{cardDescriptions[index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end lg:w-[850px]">
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
