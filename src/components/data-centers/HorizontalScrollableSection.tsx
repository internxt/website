import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface HorizontalScrollableProps {
  textContent: any;
  darkMode?: boolean;
}

export default function HorizontalScrollableSection({
  textContent,
  darkMode = false,
}: Readonly<HorizontalScrollableProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(361);

  const maxIndex = isMobile ? textContent.cards.titles.length - 2 : textContent.cards.titles.length - 1;

  useEffect(() => {
    const updateScreenSize = () => {
      const isDesktop = window.innerWidth >= 1024;
      setIsMobile(isDesktop);
      setCardWidth(isDesktop ? 376 : 361);
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

  return (
    <section
      className={`flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden py-10 lg:h-min lg:gap-16 lg:py-20`}
      style={{ background: 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex h-min w-[345px] flex-col justify-start gap-8 lg:w-[850px] lg:flex-row">
        <div className="flex h-min flex-col justify-center gap-6 ">
          <p
            className={`text-30 font-bold leading-tight lg:whitespace-pre-line ${
              darkMode ? 'text-white-95' : 'text-gray-95'
            } lg:text-3xl`}
          >
            {textContent.title}
          </p>
          <p
            className={`${
              darkMode ? 'text-green-120' : 'text-gray-55'
            } text-base font-normal leading-tight text-gray-55 lg:whitespace-pre-line lg:text-xl`}
          >
            {textContent.description}
          </p>
        </div>
        <Image
          loading="lazy"
          src={getImage(`/images/datacenters-and-certifications/datacenters-desktop.webp`)}
          draggable="false"
          alt={'Internxt data centers and certifications'}
          width={352}
          height={120}
          quality={100}
        />
      </div>

      <div className="flex h-min w-full flex-col items-center gap-4 lg:gap-8">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full overflow-x-auto px-5 lg:px-28 [&::-webkit-scrollbar]:hidden"
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
            {textContent.cards.titles.map((title: string, index: number) => (
              <div key={index} className="flex-shrink-0">
                <div
                  className={`flex h-full w-[345px] flex-col gap-4 rounded-16 ${
                    darkMode ? 'bg-gray-105' : 'bg-white'
                  } p-6 lg:w-[352px]`}
                >
                  <p className={`text-lg font-medium ${darkMode ? 'text-white-95' : 'text-gray-95'} lg:text-xl`}>
                    {title}
                  </p>
                  <p
                    className={`${
                      darkMode ? 'text-green-120' : 'text-gray-55'
                    } flex-1 text-sm font-normal leading-tight  lg:text-base`}
                  >
                    {textContent.cards.description[index]}
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
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary ${
                darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
              } transition-opacity ${
                currentIndex === 0
                  ? 'cursor-not-allowed opacity-50'
                  : `cursor-pointer ${darkMode ? 'hover:bg-gray-105' : 'hover:bg-white-summer'}`
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary ${
                darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
              } transition-opacity ${
                currentIndex === maxIndex
                  ? 'cursor-not-allowed opacity-50'
                  : `cursor-pointer ${darkMode ? 'hover:bg-gray-105' : 'hover:bg-white-summer'}`
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
