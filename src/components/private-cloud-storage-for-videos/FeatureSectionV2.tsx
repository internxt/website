import { FeaturesSectionV2 as FeaturesSectionType } from '@/assets/types/private-cloud-storage-for-videos';
import { useState } from 'react';

interface Props {
  textContent: FeaturesSectionType;
}

const FeatureSectionV2 = ({ textContent }: Props): JSX.Element => {
  const videos = Object.values(textContent.featuresForVideos);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const getVisibleVideos = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      return videos[(startIndex + i) % videos.length];
    });
  };

  const visibleVideos = getVisibleVideos();

  return (
    <section className="flex w-full flex-col items-center overflow-hidden bg-gradient-to-t from-[#FFFFFF] to-[#F4F8FF] py-24 transition-all duration-500 ease-in-out">
      <p className="w-[832px] text-start text-5xl font-bold text-gray-100 transition-opacity duration-500">
        {textContent.title}
      </p>
      <p className="w-[832px] pt-16 text-start text-lg font-normal text-gray-55 transition-opacity duration-500">
        {textContent.subtitle}
      </p>

      <div className="flex w-full flex-row items-center justify-center gap-8 overflow-hidden py-12">
        <div className="flex transform flex-row gap-8 transition-transform duration-500 ease-in-out">
          {visibleVideos.map((video, index) => (
            <div
              key={index}
              className="flex h-[500px] w-[400px] flex-col gap-6 transition-all duration-500 hover:scale-105"
            >
              <div className="flex h-[310px] w-[400px] flex-shrink-0 items-center justify-center rounded-[16px] bg-red text-lg text-white transition-colors duration-300">
                Video Slider Component
              </div>
              <p className="text-xl font-medium text-gray-100">{video.title}</p>
              <p className="text-base font-normal text-gray-55">{video.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={handlePrev}
          className="h-10 w-10 rounded-full bg-gray-70 text-white transition-all duration-300 hover:scale-110 hover:bg-gray-50"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-full bg-gray-70 text-white transition-all duration-300 hover:scale-110 hover:bg-gray-50"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default FeatureSectionV2;
