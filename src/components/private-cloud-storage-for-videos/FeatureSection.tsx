import { FeaturesSection as FeaturesSectionType } from '@/assets/types/private-cloud-storage-for-videos';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';
import VideoScroller from './VideoScroller';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface Props {
  textContent: FeaturesSectionType;
}

const FeatureSection = ({ textContent }: Props): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const totalFeatures = Object.keys(textContent.features).length;
  const maxIndex = Math.max(0, totalFeatures - 1);

  const scrollLeft = useCallback(() => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);

      if (scrollContainerRef.current) {
        const scrollAmount = newIndex * 326;
        scrollContainerRef.current.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex]);

  const scrollRight = useCallback(() => {
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);

      if (scrollContainerRef.current) {
        const scrollAmount = newIndex * 326; // width de cada card
        scrollContainerRef.current.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex, maxIndex]);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-16 overflow-hidden pb-20">
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

      <div className="flex flex-col gap-12">
        <div className="hidden min-w-max flex-row gap-6 pb-4 pl-4 pr-4 md:gap-8 lg:flex">
          {Object.entries(textContent.features).map(([key, { title, description }]) => (
            <div key={key} className="w-[280px] flex-shrink-0 md:w-[326px] lg:w-[352px]">
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

        <VideoScroller />
      </div>
    </section>
  );
};

export default FeatureSection;
