import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import RevealX from '@/components/components/RevealX';
import { getImage } from '@/lib/getImage';

interface HorizontalScrollableProps {
  textContent: any;
  header?: boolean;
}

export default function HorizontalScrollableSection({
  textContent,
  header = true,
}: Readonly<HorizontalScrollableProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isBigDesktop, setIsBigDesktop] = useState(false);
  const [cardWidth, setCardWidth] = useState(359);
  const [visibleCards, setVisibleCards] = useState(1);

  const calculateVisibleCards = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        const containerPadding = header ? 192 * 2 : 192 + 384;
        const availableWidth = screenWidth - containerPadding;
        const gap = 24;
        return Math.floor((availableWidth + gap) / (359 + gap));
      }
      if (screenWidth >= 1536) {
        const containerPadding = header ? 192 * 2 : 192 + 384;
        const availableWidth = screenWidth - containerPadding;
        const gap = 24;
        return Math.floor((availableWidth + gap) / (359 + gap));
      }
    }
    return 1;
  };

  const totalCards = textContent.cardDescriptions.titles.length;
  const maxIndex = Math.max(0, totalCards - visibleCards);

  useEffect(() => {
    const updateScreenSize = () => {
      const desktop = window.innerWidth >= 1024;
      const bigDesktop = window.innerWidth >= 1536;
      setIsDesktop(desktop);
      setIsBigDesktop(bigDesktop);
      setCardWidth(359);
      setVisibleCards(calculateVisibleCards());

      setCurrentIndex((prev) => Math.min(prev, Math.max(0, totalCards - calculateVisibleCards())));
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, [totalCards]);

  const scrollLeft = () => {
    if (scrollContainerRef.current && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      const gap = isDesktop ? 24 : 0;
      scrollContainerRef.current.scrollTo({
        left: newIndex * (cardWidth + gap),
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      const gap = isDesktop ? 24 : 0;
      scrollContainerRef.current.scrollTo({
        left: newIndex * (cardWidth + gap),
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const gap = isDesktop ? 24 : 16;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(newIndex, maxIndex));
    }
  };

  return (
    <section
      className={`flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden py-10 lg:h-min ${
        header ? 'gap-8 lg:gap-16' : ' gap-6 bg-neutral-17 lg:gap-12'
      } lg:py-20 `}
      style={header ? { background: 'linear-gradient(180deg, #F4F8FF 63.1%, #FFFFFF 100%)' } : undefined}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>

      <p
        className={`whitespace-pre-line ${
          header ? 'text-start lg:text-center' : 'text-start lg:pl-20'
        } w-[345px] text-30 font-bold leading-tight text-gray-95 lg:w-[853px] lg:text-5xl`}
      >
        {textContent.title}
      </p>

      <div className="flex w-[345px] flex-col items-center justify-between gap-8 lg:w-[749px] lg:flex-row">
        {header && (
          <>
            <p
              className="w-full text-sm font-normal leading-tight text-gray-55 lg:w-1/2 lg:text-base"
              dangerouslySetInnerHTML={{
                __html: textContent.description
                  .replace(/\n/g, '<br/>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
              }}
            />
            <RevealX direction="right" className="hidden lg:flex">
              <Image
                src={getImage('/images/about/logos/GDPR.webp')}
                width={358}
                height={346}
                quality={100}
                layout="intrinsic"
                className="rounded-2xl"
                draggable={false}
                alt="Internxt gift"
                loading="eager"
              />
            </RevealX>
            <RevealX direction="right" className="flex lg:hidden">
              <Image
                src={getImage('/images/about/logos/GDPR.webp')}
                width={345}
                height={324}
                quality={100}
                layout="intrinsic"
                className="rounded-2xl"
                draggable={false}
                alt="Internxt gift"
                loading="eager"
              />
            </RevealX>
          </>
        )}
      </div>

      {textContent.cta !== undefined && (
        <span
          onClick={() => window.open('https://internxt.com/about/', '_blank', 'noopener,noreferrer')}
          className="flex w-max cursor-pointer flex-row items-center gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline"
        >
          {textContent.cta}
          <CaretRight className="pt-[2px] text-primary" size={24} />
        </span>
      )}

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
            className={`flex gap-4 lg:gap-6 ${
              header ? 'lg:pl-48 lg:pr-48 2xl:pl-[500px]' : 'lg:pl-48 lg:pr-48  2xl:pl-[520px]'
            } 1.5xl:pl-64 1.5xl:pr-64  2xl:pr-[520px]`}
            style={{
              width: 'max-content',
              alignItems: 'stretch',
            }}
          >
            {textContent.cardDescriptions.titles.map((title: string, index: number) => (
              <div key={index} className="flex-shrink-0">
                <div className="flex h-full w-[345px] flex-col rounded-16 bg-white p-8 lg:w-[359px]">
                  <p className="pb-6 text-xl font-medium text-gray-95">{title}</p>
                  <p className="flex-1 text-base font-normal leading-tight text-gray-55">
                    {textContent.cardDescriptions.descriptions[index]}
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
              disabled={currentIndex >= maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-opacity ${
                currentIndex >= maxIndex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
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
