import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useRef, useCallback, useEffect } from 'react';

interface ReviewSectionProps {
  textContent: {
    forbes: string;
    deloitte: string;
    techradar: string;
    fortune: string;
    trustpilot: string;
  };
  darkMode?: boolean;
  bgColor?: string;
  reverseDivider?: boolean;
}

const brands = [
  { name: 'Forbes', logo: '/images/reviews/Forbes.webp', width: 96, height: 24, key: 'forbes' as const },
  { name: 'Deloitte', logo: '/images/reviews/Deloitte.webp', width: 125, height: 24, key: 'deloitte' as const },
  { name: 'Techradar', logo: '/images/reviews/Techradar.webp', width: 149, height: 24, key: 'techradar' as const },
  { name: 'Fortune', logo: '/images/reviews/Fortune.webp', width: 104, height: 23, key: 'fortune' as const },
  { name: 'Trustpilot', logo: '/images/reviews/Trustpilot.webp', width: 136, height: 24, key: 'trustpilot' as const },
];

export default function ReviewSection({
  textContent,
  darkMode = false,
  bgColor,
  reverseDivider = false,
}: Readonly<ReviewSectionProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ canGoLeft: false, canGoRight: true });

  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setScrollState({
      canGoLeft: scrollLeft > 0,
      canGoRight: scrollLeft < scrollWidth - clientWidth - 1,
    });
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    updateScrollState();
    container.addEventListener('scroll', updateScrollState);
    return () => container.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -220, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 220, behavior: 'smooth' });
  };

  const sectionBg = bgColor ?? (darkMode ? '#1C1C1C' : 'white');
  const dividerColor = darkMode ? 'bg-gray-55' : 'bg-neutral-35';
  const dividerPosition = reverseDivider ? 'lg:top-0' : 'lg:bottom-0';
  const buttonBase = `flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary transition-all ${
    darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
  }`;

  const getButtonClass = (disabled: boolean) => {
    if (disabled) return `${buttonBase} cursor-not-allowed opacity-30`;
    const hover = darkMode ? 'hover:bg-gray-105' : 'hover:bg-white-summer';
    return `${buttonBase} cursor-pointer ${hover}`;
  };

  const quoteClass = `text-sm font-medium italic leading-[1.2] text-gray-55 text-center whitespace-pre-line`;

  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 lg:py-16"
      style={{ background: sectionBg }}
    >
      <div className={`absolute ${dividerColor} lg:left-32 lg:right-32 ${dividerPosition} lg:h-[1px]`} />

      <div className="flex w-full flex-col gap-4 lg:hidden">
        <div
          ref={scrollContainerRef}
          className="scrollbar-none flex w-full gap-6 overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden"
        >
          {brands.map((brand) => (
            <div key={brand.key} className="flex w-[200px] flex-shrink-0 flex-col items-center gap-3">
              <div className="flex h-6 items-center justify-center">
                <Image
                  src={getImage(brand.logo)}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  quality={100}
                />
              </div>
              <p className={quoteClass}>{textContent[brand.key]}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 px-6">
          <button
            onClick={scrollLeft}
            disabled={!scrollState.canGoLeft}
            aria-label="Previous"
            className={getButtonClass(!scrollState.canGoLeft)}
          >
            <CaretLeft className="h-[24px] w-[24px] text-primary" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!scrollState.canGoRight}
            aria-label="Next"
            className={getButtonClass(!scrollState.canGoRight)}
          >
            <CaretRight className="h-[24px] w-[24px] text-primary" />
          </button>
        </div>
      </div>

      <div className="hidden w-full flex-row items-center justify-between gap-4 px-10 lg:flex xl:px-32 3xl:px-80">
        {brands.map((brand) => (
          <div key={brand.key} className="group relative flex h-16 w-full flex-1 cursor-default items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
              <Image
                src={getImage(brand.logo)}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                quality={100}
              />
            </div>
            <p className={`${quoteClass} absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
              {textContent[brand.key]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
