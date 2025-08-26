import { FeaturesSection as FeaturesSectionType } from '@/assets/types/private-cloud-storage-for-videos';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { useState, useRef, useCallback, useEffect } from 'react';
import VideoScroller from './VideoScroller';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface Props {
  textContent: FeaturesSectionType;
}

const FeatureSection = ({ textContent }: Props): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const featuresArray = Object.entries(textContent.features);
  const totalFeatures = featuresArray.length;

  const cardWidth = 352; // lg:w-[352px]
  const mobileCardWidth = 330; // w-[330px]
  const gap = 32; // md:gap-8

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
      return Math.max(0, totalFeatures - 1);
    } else {
      return Math.max(0, totalFeatures - 2);
    }
  };

  // Función para actualizar el índice basado en la posición del scroll
  const updateIndexFromScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const itemWidth = isMobile ? mobileCardWidth + 24 : cardWidth + gap; // gap-6 = 24px en mobile
      const newIndex = Math.round(scrollLeft / itemWidth);
      const maxIndex = getMaxIndex();

      setCurrentIndex(Math.min(Math.max(0, newIndex), maxIndex));
    }
  }, [isMobile, getMaxIndex]);

  // Event listener para el scroll manual
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      let scrollTimeout: NodeJS.Timeout;

      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          updateIndexFromScroll();
        }, 150); // Debounce para mejor performance
      };

      container.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        container.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [updateIndexFromScroll]);

  const scrollLeft = useCallback(() => {
    if (currentIndex > 0 && scrollContainerRef.current) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);

      const amount = isMobile ? newIndex * (mobileCardWidth + 24) : newIndex * (cardWidth + gap);

      scrollContainerRef.current.scrollTo({
        left: amount,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, isMobile]);

  const scrollRight = useCallback(() => {
    const maxIndex = getMaxIndex();
    if (currentIndex < maxIndex && scrollContainerRef.current) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);

      const amount = isMobile ? newIndex * (mobileCardWidth + 24) : newIndex * (cardWidth + gap);

      scrollContainerRef.current.scrollTo({
        left: amount,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, getMaxIndex, isMobile]);

  const maxIndex = getMaxIndex();

  return (
    <section className="flex w-full flex-col items-center justify-center gap-16 overflow-hidden">
      <div className="flex w-full flex-col items-center justify-center bg-gradient-to-t from-[#FFFFFF] to-[#001D6C] pt-10">
        <p className="w-[323px] text-center text-sm font-normal leading-tight text-gray-25 lg:w-[832px] lg:text-lg">
          {textContent.intro}
        </p>
        <Image
          src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
          alt="Internxt Secure Cloud Storage"
          width={1920}
          height={1080}
          className="h-auto max-w-full"
        />
      </div>

      <div className="flex w-[330px] flex-col items-start justify-center gap-12 lg:w-full lg:items-center">
        <div
          ref={scrollContainerRef}
          className="flex w-full flex-row items-start justify-start gap-6 overflow-x-auto overflow-y-hidden scroll-smooth md:gap-8 lg:justify-center"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {featuresArray.map(([key, { title, description }]) => (
            <div key={key} className="h-full w-[330px] shrink-0 lg:w-[352px]">
              <p className="pb-6 text-lg font-medium text-gray-100 lg:text-xl">{title}</p>
              <div className="space-y-4">
                {description.map((paragraph, i) => (
                  <p key={i} className="text-base font-normal leading-tight text-gray-55 lg:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-end lg:hidden">
          <div className="flex justify-between gap-4">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary bg-white transition-opacity ${
                currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex === maxIndex}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary bg-white transition-opacity ${
                currentIndex === maxIndex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
              }`}
            >
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </button>
          </div>
        </div>
      </div>

      <VideoScroller />

      <style jsx>{`
        /* Ocultar scrollbar en WebKit browsers */
        div[ref] ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;
