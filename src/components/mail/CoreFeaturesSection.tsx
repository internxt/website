import { MailText } from '@/assets/types/mail';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface CoreFeaturesSectionProps {
  textContent: MailText['CoreFeatures'];
}

const CoreFeaturesSection = ({ textContent }: CoreFeaturesSectionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const mobileCardWidth = 293;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index);
  };

  const getPaddingRight = () => {
    const containerWidth = 345;
    const visibleWidth = mobileCardWidth;
    const paddingRight = containerWidth - visibleWidth;
    return paddingRight;
  };

  return (
    <section className="flex w-full flex-col gap-6 bg-neutral-17 px-5 py-20 lg:py-20 lg:pl-10 xl:pl-32 3xl:pl-80">
      <h2 className="flex flex-col text-[30px] lg:translate-x-40 lg:pl-20 lg:text-5xl lg:pr-10 lg:max-w-[1000px] font-bold leading-tight text-gray-100">{textContent.title}</h2>
      {textContent.descriptions.map((description: string) => (
        <p
          key={description.slice(0,5)} 
          className="w-full max-w-[950px] lg:translate-x-60 text-[16px] pr-3 leading-tight lg:pr-0 lg:text-lg font-normal text-gray-55"
        >
          {description}
        </p>
      ))}

      <div className="flex w-full flex-row gap-2 lg:max-w-[1500px] lg:pl-20">
        <div className="flex w-full flex-col gap-6 lg:max-w-[500px] lg:pl-40">
          <div className="flex flex-row items-center justify-center lg:hidden">
            <Image
              src={getImage(`/images/mail/mockup${activeIndex + 1}.webp`)}
              alt={textContent.accordionCards.titles[activeIndex]}
              height={214}
              width={342}
              className="object-cover"
            />
          </div>
          {textContent.accordionCards.titles.map((title: string, index: number) => (
            <button
              key={title}
              type="button"
              onClick={() => handleAccordionClick(index)}
              className={`flex flex-col rounded-16 bg-white text-left transition-all duration-300 ${
                activeIndex === index ? 'gap-6 p-8' : 'gap-0 px-8 py-4'
              }`}
              aria-expanded={activeIndex === index}
            >
              <span className="flex flex-row items-center gap-4 text-2xl font-medium text-primary">
                {index + 1}
                <h3 className="text-xl font-medium text-gray-100">{title}</h3>
              </span>
              <div
                className={`grid transition-all duration-300 ${
                  activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="flex flex-col lg:text-base overflow-hidden">
                  {textContent.accordionCards.descriptions[index]}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="hidden lg:flex w-full justify-center">
          <div className="w-full max-w-[820px]">
            <Image
              src={getImage(`/images/mail/mockup${activeIndex + 1}.webp`)}
              alt={textContent.accordionCards.titles[activeIndex]}
              height={520}
              width={820}
              className="rounded-16 object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 lg:gap-0">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full flex-row gap-8 overflow-x-auto scroll-smooth lg:pr-10 xl:pr-32 3xl:pr-80"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingRight: isMobile ? `calc(20px + ${getPaddingRight()}px)` : undefined,
          }}
        >
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
