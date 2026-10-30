import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';
import { DARK_MODE_ENABLED } from '@/theme.config';
import { parseDynamicText } from '@/components/utils/parse-dynamic-text';

interface ThreeCardsProps {
  textContent: any;
  darkMode?: boolean;
  bgColor?: string;
  cardColor?: string;
  bottomSeparationBar?: boolean;
  topSeparationBar?: boolean;
  TitleTag?: React.ElementType;
  needsH2?: boolean;
  percentOff?: string;
}

export default function ThreeCardsSection({
  textContent,
  darkMode = false,
  bgColor,
  cardColor,
  bottomSeparationBar = false,
  topSeparationBar = true,
  TitleTag = 'p',
  needsH2 = true,
  percentOff,
}: Readonly<ThreeCardsProps>): JSX.Element {
  const hoverClass = darkMode ? 'hover:bg-gray-105' : 'hover:bg-white-summer dark:hover:bg-gray-105';
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const redirections = [
    'https://github.com/internxt/cli/blob/main/docker/README.md',
    'https://help.internxt.com/en/',
    'https://github.com/internxt/cli',
  ];
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
  const hasCta = textContent.cards.cta;
  const SectionTitleTag = needsH2 ? 'h2' : 'p';
  const sectionBgClass = darkMode ? 'bg-gray-95' : 'bg-neutral-17 dark:bg-gray-95';
  return (
    <section
      className={`flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden ${bgColor ?? sectionBgClass} py-10 lg:h-min lg:gap-16 lg:py-20`}
    >
      {topSeparationBar && (
        <div className={`absolute left-8 right-8 top-0 h-[1px] ${darkMode ? 'bg-gray-71' : 'bg-neutral-35 dark:bg-gray-71'} lg:bottom-0 lg:left-32 lg:right-32`}></div>
      )}
      {bottomSeparationBar && (
        <div className={`absolute bottom-0 left-8 right-8 h-[1px] ${darkMode ? 'bg-gray-71' : 'bg-neutral-35 dark:bg-gray-71'} lg:bottom-0 lg:left-32 lg:right-32`} />
      )}

      <div className="flex h-min w-[345px] flex-col justify-center gap-6 text-start lg:w-[1000px] lg:text-center">
        <SectionTitleTag
          className={`text-30 font-bold leading-tight ${darkMode ? 'text-gray-1' : 'text-gray-95 dark:text-gray-1'} lg:text-3xl`}
        >
          {parseDynamicText(textContent.title, { percentage: percentOff, discount: percentOff })}
        </SectionTitleTag>
        {textContent.description && (
          <p className={`text-base font-normal leading-tight ${darkMode ? 'text-green-120' : 'text-gray-55 dark:text-green-120'} lg:text-xl`}>{parseDynamicText(textContent.description, { percentage: percentOff, discount: percentOff })}</p>
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
            {textContent.cards.titles.map((title: string, index: number) => (
              <div
                key={title}
                className={`flex w-[calc(100vw-32px)] flex-shrink-0 snap-center flex-col justify-between gap-6 rounded-xl ${cardColor || (darkMode ? 'bg-gray-105' : 'bg-neutral-17 dark:bg-gray-105')} p-6 lg:rounded-16 lg:p-8`}
              >
                <div className="flex flex-col">
                  <TitleTag
                    className={`flex items-center justify-start gap-4 text-lg font-medium ${darkMode ? 'text-white-95' : 'text-gray-100 dark:text-white-95'}`}
                  >
                    {hasCta && <p className="text-xl font-medium text-primary lg:text-2xl">{index + 1}</p>}
                    {parseDynamicText(title, { percentage: percentOff, discount: percentOff })}
                  </TitleTag>
                  <p className={`pt-[16px] text-sm font-normal leading-tight ${darkMode ? 'text-green-120' : 'text-gray-55 dark:text-green-120'} lg:pt-6 lg:text-base`}>
                    {parseDynamicText(textContent.cards.descriptions[index], { percentage: percentOff, discount: percentOff })}
                  </p>
                </div>
                {hasCta && (
                  <a
                    href={redirections[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-pointer flex-row items-center gap-1 font-medium text-primary hover:underline"
                  >
                    {textContent.cards.cta[index]}
                    <CaretRight height={24} width={24} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-[48px] w-[310px] flex-row items-end justify-end">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-opacity ${currentIndex === 0 ? 'cursor-not-allowed opacity-50' : `cursor-pointer ${hoverClass}`}`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-opacity ${currentIndex === maxIndex ? 'cursor-not-allowed opacity-50' : `cursor-pointer ${hoverClass}`}`}
            >
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden w-full grid-cols-3 justify-center gap-8 lg:grid xl:px-32 3xl:px-80">
        {textContent.cards.titles.map((title: string, index: number) => (
          <div
            key={title}
            className={`flex w-full flex-col justify-between gap-6 rounded-16 ${cardColor || (darkMode ? 'bg-gray-105' : 'bg-neutral-17 dark:bg-gray-105')} p-8`}
          >
            <div className="flex flex-col">
              <p className={`flex items-center justify-start gap-4 text-xl font-medium  ${darkMode ? 'text-white-95' : 'text-gray-100 dark:text-white-95'}`}>
                {hasCta && <p className="text-2xl font-medium text-primary">{index + 1}</p>}
                {parseDynamicText(title, { percentage: percentOff, discount: percentOff })}
              </p>
              <p
                className={`${darkMode ? 'text-green-120' : 'text-gray-55 dark:text-green-120'} pt-6 text-base font-normal
                leading-tight`}
              >
                {parseDynamicText(textContent.cards.descriptions[index], { percentage: percentOff, discount: percentOff })}
              </p>
            </div>
            {hasCta && (
              <a
                href={redirections[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer flex-row items-center gap-1 font-medium text-primary hover:underline"
              >
                {textContent.cards.cta[index]}
                <CaretRight height={24} width={24} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
