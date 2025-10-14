import { CaretLeft, CaretRight, CircleWavyCheck, Database, Eye, Key, Recycle } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface HorizontalScrollableProps {
  textContent: any;
}

export default function HorizontalScrollableSection({ textContent }: Readonly<HorizontalScrollableProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(361);

  const maxIndex = isMobile
    ? textContent.scrollableSection.titles.length - 2
    : textContent.scrollableSection.titles.length - 1;

  useEffect(() => {
    const updateScreenSize = () => {
      const isDesktop = window.innerWidth >= 1024;
      setIsMobile(isDesktop);
      setCardWidth(isDesktop ? 424 : 361);
    };

    updateScreenSize();

    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      scrollContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      scrollContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const features: any = [
    {
      icon: Database,
      title: textContent.features[0],
    },
    {
      icon: Key,
      title: textContent.features[1],
    },
    {
      icon: Recycle,
      title: textContent.features[2],
    },
    {
      icon: Eye,
      title: textContent.features[3],
    },
    {
      icon: CircleWavyCheck,
      title: textContent.features[4],
    },
  ];
  const formatText = (text: string) => {
    const firstSpaceIndex = text.indexOf(' ');
    if (firstSpaceIndex === -1) return text;

    const firstPart = text.substring(0, firstSpaceIndex);
    const secondPart = text.substring(firstSpaceIndex + 1);

    return (
      <>
        {firstPart}
        <br />
        {secondPart}
      </>
    );
  };

  const FeatureItem = ({
    feature,
    iconSize,
    containerWidth,
    textSize,
  }: {
    feature: any;
    iconSize: number;
    containerWidth: string;
    textSize: string;
  }) => (
    <div className={`flex ${containerWidth} flex-col items-center text-center`}>
      <feature.icon
        size={iconSize}
        className="mb-2 text-primary transition-colors duration-200 hover:text-primary/80"
      />
      <p className={`${textSize} whitespace-nowrap font-medium text-white-95`}>{formatText(feature.title)}</p>
    </div>
  );
  return (
    <section className="flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[#1C1C1C] pb-10 lg:h-min lg:gap-16 lg:py-20 ">
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[780px] lg:gap-12">
        <p className="text-30 font-bold leading-tight text-white-95 lg:w-[680px] lg:text-3xl">{textContent.title}</p>
        <p className="text-base font-normal leading-tight text-green-120 lg:w-[680px] lg:text-xl">
          {textContent.description}
        </p>
        <div className="b hidden w-full flex-row justify-center gap-8 lg:flex">
          {features.map((feature, index) => (
            <FeatureItem
              key={`desktop-${index}`}
              feature={feature}
              iconSize={32}
              containerWidth="w-min"
              textSize="text-lg"
            />
          ))}
        </div>
        <div className="flex h-min w-full flex-col items-center justify-center gap-6 pr-6 lg:hidden">
          <div className="flex w-full max-w-sm flex-row justify-center gap-6">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureItem
                key={`mobile-row1-${index}`}
                feature={feature}
                iconSize={24}
                containerWidth="flex-1 max-w-[100px]"
                textSize="text-xs"
              />
            ))}
          </div>

          <div className="flex w-full max-w-sm flex-row justify-center gap-6">
            {features.slice(3, 5).map((feature, index) => (
              <FeatureItem
                key={`mobile-row2-${index}`}
                feature={feature}
                iconSize={24}
                containerWidth="flex-1 max-w-[100px]"
                textSize="text-xs"
              />
            ))}
          </div>
        </div>
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
            className="3xl:pl-84 flex gap-4 lg:gap-6 lg:pl-32 lg:pr-48 1.5xl:pl-48 1.5xl:pr-64 2xl:pl-60 2xl:pr-72"
            style={{
              width: 'max-content',
              alignItems: 'stretch',
            }}
          >
            {textContent.scrollableSection.titles.map((title: string, index: number) => (
              <div key={index} className="flex-shrink-0">
                <div className="flex h-full w-[345px] flex-col gap-4 rounded-16 bg-gray-105 p-6 lg:w-[400px]">
                  <p className="text-lg font-medium text-white-95 lg:text-xl">{title}</p>
                  <p className="flex-1 text-sm font-normal leading-tight text-green-120 lg:text-base">
                    {textContent.scrollableSection.descriptions[index]}
                  </p>
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
