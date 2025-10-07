import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface ThreeCardsProps {
  textContent: any;
}

export default function ThreeCardsSection({ textContent }: Readonly<ThreeCardsProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const redirections = [
    'https://github.com/internxt/cli/blob/7d7c9b233f20a71513a8ffc226d340d34c349741/docker/README.md',
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

  return (
    <section className="flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-17 pb-10 pt-10 lg:h-min lg:gap-16 lg:py-20">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 text-start lg:w-[850px] lg:text-center">
        <p className="text-30 font-bold leading-tight text-gray-95 lg:text-3xl">{textContent.title}</p>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
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
                className="flex w-[calc(100vw-32px)] flex-shrink-0 snap-center flex-col justify-between gap-6 rounded-xl bg-white p-6 lg:rounded-16 lg:p-8"
              >
                <div className="flex flex-col">
                  <span className="flex items-center justify-start gap-4 text-lg font-medium text-gray-100">
                    {hasCta && <p className="text-xl font-medium text-primary lg:text-2xl">{index + 1}</p>}
                    {title}
                  </span>
                  <p className="pt-[16px] text-sm font-normal leading-tight text-gray-55 lg:pt-6 lg:text-base">
                    {textContent.cards.descriptions[index]}
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
        {textContent.cards.titles.map((title: string, index: number) => (
          <div key={title} className="flex w-full flex-col justify-between gap-6 rounded-16 bg-white p-8">
            <div className="flex flex-col">
              <span className="flex items-center justify-start gap-4 text-xl font-medium text-gray-100">
                {hasCta && <p className="text-2xl font-medium text-primary">{index + 1}</p>}
                {title}
              </span>
              <p className="pt-6 text-base font-normal leading-tight text-gray-55">
                {textContent.cards.descriptions[index]}
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
