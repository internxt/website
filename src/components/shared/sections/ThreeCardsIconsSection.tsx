import { CaretLeft, CaretRight, Gear, RocketLaunch, Bank } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface ThreeCardsIconsProps {
  textContent: any;
  bgColor?: string;
  cardColor?: string;
  bottomSeparationBar?: boolean;
  topSeparationBar?: boolean;
  TitleTag?: React.ElementType;
  needsH2?: boolean;
  icons?: string[];
}

export default function ThreeCardsIconsSection({
  textContent,
  bgColor,
  cardColor,
  bottomSeparationBar = false,
  topSeparationBar = false,
  TitleTag = 'p',
  needsH2 = false,
  icons,
}: Readonly<ThreeCardsIconsProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getMaxIndex = () => {
    return isMobile ? Math.max(0, textContent.cards.titles.length - 1) : 0;
  };

  const handleScroll = () => {
    if (scrollContainerRef.current && isMobile) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(newIndex, getMaxIndex()));
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0 && scrollContainerRef.current) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      const container = scrollContainerRef.current;
      container.scrollTo({
        left: newIndex * container.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const maxIndex = getMaxIndex();
    if (currentIndex < maxIndex && scrollContainerRef.current) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      const container = scrollContainerRef.current;
      container.scrollTo({
        left: newIndex * container.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const maxIndex = getMaxIndex();
  const SectionTitleTag = needsH2 ? 'h2' : 'p';
  const Icons = [Gear, RocketLaunch, Bank];

  return (
    <section
      className={`flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden ${
        bgColor ? '' : 'bg-neutral-17'
      } py-10 lg:h-min lg:gap-16 lg:py-20`}
      style={{ background: bgColor ? bgColor : '' }}
    >
      {topSeparationBar && (
        <div className={`absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32`}></div>
      )}
      {bottomSeparationBar && (
        <div className={`absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32`} />
      )}

      <div className="flex h-min w-[345px] flex-col justify-center gap-6 text-start lg:w-[1000px] lg:text-center">
        <SectionTitleTag className={`text-30 font-bold leading-tight text-gray-95 lg:text-3xl`}>
          {textContent.title}
        </SectionTitleTag>
        {textContent.description && (
          <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        )}
      </div>

      <div className="flex h-min w-full flex-col items-center gap-4 lg:hidden">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full snap-x snap-mandatory overflow-x-scroll px-4 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="flex w-max gap-4">
            {textContent.cards.titles.map((title: string, index: number) => {
              const Icon = Icons[index];
              return (
                <div
                  key={title}
                  className={`flex w-[calc(100vw-32px)] flex-shrink-0 snap-center flex-col justify-between gap-6 rounded-xl ${
                    cardColor || 'bg-neutral-17'
                  } p-6 lg:rounded-16 lg:p-8`}
                >
                  <div className="flex flex-col">
                    {Icon && <Icon size={24} className={`shrink-0 text-primary`} />}
                    <TitleTag className={`flex items-center justify-start gap-4 text-lg font-medium text-gray-100`}>
                      {title}
                    </TitleTag>
                    <p className={`pt-[16px] text-sm font-normal leading-tight text-gray-55 lg:pt-6 lg:text-base`}>
                      {textContent.cards.descriptions[index]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end">
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

      <div className="hidden w-full grid-cols-3 justify-center gap-8 lg:grid xl:px-32 3xl:px-80">
        {textContent.cards.titles.map((title: string, index: number) => {
          const Icon = Icons[index];
          return (
            <div
              key={title}
              className={`flex w-full flex-col justify-between gap-6 rounded-16 ${cardColor || 'bg-neutral-17'} p-8`}
            >
              <div className="flex flex-col">
                {Icon && <Icon size={40} className="mb-4 shrink-0 text-primary" />}
                <p className={`flex items-center justify-start gap-4 text-xl font-medium text-gray-100`}>{title}</p>
                <p className={`pt-6 text-base font-normal leading-tight text-gray-55`}>
                  {textContent.cards.descriptions[index]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
