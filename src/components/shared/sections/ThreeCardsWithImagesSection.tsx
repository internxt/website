'use client';

import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface ThreeCardsWithImagesProps {
  textContent: {
    title: string;
    description?: string;
    cards: {
      titles: string[];
      descriptions: string[];
      images: string[];
      imagesMobile: string[];
      cta?: string[];
      links?: string[];
    };
  };
  darkMode?: boolean;
  bgColor?: string;
  cardColor?: string;
  bottomSeparationBar?: boolean;
}

export default function ThreeCardsWithImagesSection({
  textContent,
  darkMode = false,
  bgColor,
  cardColor,
  bottomSeparationBar = false,
}: Readonly<ThreeCardsWithImagesProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    checkIsMobile();

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 150);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedResize);
    };
  }, [checkIsMobile]);

  const getMaxIndex = () => {
    return isMobile ? Math.max(0, textContent.cards.titles.length - 1) : 0;
  };

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current && isMobile) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(newIndex, getMaxIndex()));
    }
  }, [isMobile]);

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
  const hasCta = Boolean(textContent.cards.cta && textContent.cards.links);

  return (
    <section
      className={`flex min-h-0 w-full flex-col items-center justify-center gap-8 overflow-hidden ${
        bgColor ? '' : darkMode ? 'bg-[#1C1C1C]' : 'bg-neutral-17'
      } relative py-10 lg:gap-16 lg:py-20`}
      style={{ background: bgColor || undefined }}
    >
      <hr
        className={`absolute left-8 right-8 top-0 border-t ${
          darkMode ? 'border-gray-71' : 'border-neutral-35'
        } lg:left-32 lg:right-32`}
      />
      {bottomSeparationBar && (
        <hr
          className={`absolute bottom-0 left-8 right-8 border-t ${
            darkMode ? 'border-gray-71' : 'border-neutral-35'
          } lg:left-32 lg:right-32`}
        />
      )}

      <div className="flex min-h-0 w-[345px] flex-col justify-center gap-6 text-start lg:w-[1000px] lg:text-center">
        <h2 className={`text-30 font-bold leading-tight ${darkMode ? 'text-gray-1' : 'text-gray-95'} lg:text-3xl`}>
          {textContent.title}
        </h2>
        {textContent.description && (
          <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        )}
      </div>

      <div className="flex min-h-0 w-full flex-col items-center gap-4 lg:hidden">
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
              <article
                key={`${title}-${index}`}
                className={`flex w-[calc(100vw-32px)] flex-shrink-0 snap-center flex-col justify-between gap-6 rounded-xl ${
                  cardColor || (darkMode ? 'bg-gray-105' : '')
                }  lg:rounded-16 lg:p-8`}
              >
                <div className="flex flex-col gap-4">
                  <div className="relative h-[170px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={getImage(textContent.cards.imagesMobile[index])}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3
                    className={`flex items-center justify-start gap-4 text-lg font-medium ${
                      darkMode ? 'text-white-95' : 'text-gray-100'
                    }`}
                  >
                    {hasCta && <span className="text-xl font-medium text-primary lg:text-2xl">{index + 1}</span>}
                    {title}
                  </h3>
                  <p
                    className={`text-sm font-normal leading-tight ${
                      darkMode ? 'text-green-120' : 'text-gray-55'
                    } lg:text-base`}
                  >
                    {textContent.cards.descriptions[index]}
                  </p>
                </div>
                {hasCta && textContent.cards.cta && textContent.cards.links && (
                  <a
                    href={textContent.cards.links[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-1 font-medium text-primary hover:underline"
                  >
                    {textContent.cards.cta[index]}
                    <CaretRight size={24} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="flex h-12 w-[310px] flex-row items-end justify-end">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              aria-label="Previous card"
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-transparent transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretLeft size={24} className="text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              aria-label="Next card"
              className={`flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-transparent transition-opacity ${
                currentIndex === maxIndex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretRight size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden w-full grid-cols-3 justify-center gap-8 lg:grid xl:px-32 3xl:px-80">
        {textContent.cards.titles.map((title: string, index: number) => (
          <article
            key={`${title}-${index}`}
            className={`flex w-full flex-col justify-between gap-6 rounded-16 ${
              cardColor || (darkMode ? 'bg-gray-105' : '')
            } p-8`}
          >
            <div className="flex flex-col gap-6">
              <div className="relative h-[352px] w-full overflow-hidden rounded-2xl">
                <Image src={getImage(textContent.cards.images[index])} alt={title} fill className="object-cover" />
              </div>

              <h3
                className={`flex items-center justify-start gap-4 text-xl font-medium ${
                  darkMode ? 'text-white-95' : 'text-gray-100'
                }`}
              >
                {hasCta && <span className="text-2xl font-medium text-primary">{index + 1}</span>}
                {title}
              </h3>
              <p className={`${darkMode ? 'text-green-120' : 'text-gray-55'} text-base font-normal leading-tight`}>
                {textContent.cards.descriptions[index]}
              </p>
            </div>
            {hasCta && textContent.cards.cta && textContent.cards.links && (
              <a
                href={textContent.cards.links[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1 font-medium text-primary hover:underline"
              >
                {textContent.cards.cta[index]}
                <CaretRight size={24} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
