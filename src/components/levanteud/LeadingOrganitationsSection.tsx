import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CertificationsSection } from '../cloud-object-storage/certificationsSections';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface LeadingOrganizationsSectionProps {
    textContent: any;
}

export default function LeadingOrganizationsSection({
  textContent,
}: Readonly<LeadingOrganizationsSectionProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const mobileCardWidth = 340;
  const mobileGap = 32;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeftHandler = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = mobileCardWidth + mobileGap;
    scrollContainerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollRightHandler = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = mobileCardWidth + mobileGap;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    updateScrollButtons();
    scrollContainer.addEventListener('scroll', updateScrollButtons);
    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(scrollContainer);
    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  return (
    <section
      className={`flex h-min flex-col w-full items-center justify-center overflow-hidden py-10 lg:py-20 gap-16`}
      style={{ background: 'linear-gradient(180deg, #F4F8FF 59.26%, #FFFFFF 100%)' }}
    >
      <div className='flex flex-col gap-6 text-start lg:text-center px-6 lg:px-0 lg:px-10 xl:px-32 3xl:px-80'>
       <p className='text-30 lg:text-5xl text-start lg:text-center font-semibold leading-tight lg:whitespace-pre-line'>{textContent.title}</p>
       <p className='text-base text-start lg:text-center font-regular text-gray-55 leading-tight lg:whitespace-pre-line'>{textContent.subtitle[0]}</p>
       <p className='text-base text-start lg:text-center font-regular text-gray-55 leading-tight lg:whitespace-pre-line'>{textContent.subtitle[1]}</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 w-full items-center lg:items-stretch lg:px-10 xl:px-32 3xl:px-80'>
        <div className='w-full lg:w-max flex justify-center px-6 lg:px-0'>
          <Image
            src={getImage('/images/Levante/Levante7.webp')}
            alt="Levante"
            width={534}
            height={320}
            className='rounded-16 w-full lg:w-full- h-auto object-cover'
            quality={100}
          />
        </div>
        <div className='flex flex-col gap-6 w-full'>
          <div
            ref={scrollContainerRef}
            className='scrollbar-hide flex flex-row lg:flex-col gap-8 overflow-x-auto justify-between lg:overflow-visible scroll-smooth w-full'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingLeft: isMobile ? '20px' : '0px',
              paddingRight: isMobile ? '72px' : '0px',
              paddingTop: '8px',
              paddingBottom: '8px'
            }}
          >
            {textContent.cards.map((card, index) => (
              <div
                key={index}
                className='flex flex-col gap-6 bg-white rounded-xl lg:rounded-16 p-6 lg:p-8 w-full lg:min-w-0 flex-shrink-0 lg:flex-shrink'
              >
                <p className='text-xl font-medium leading-tight lg:whitespace-pre-line text-black'>{card.title}</p>
                <div className="flex flex-col gap-2">
                  {card.description.map((description, idx) => (
                    <p key={idx} className='text-base text-start leading-tight lg:whitespace-pre-line text-gray-55'>{description}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {isMobile && (
            <div className="flex flex-row justify-end gap-4 px-6">
              <button
                onClick={scrollLeftHandler}
                disabled={!canScrollLeft}
                className={`flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all ${
                  !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/10'
                }`}
                aria-label="Anterior"
              >
                <CaretLeft className="h-[24px] w-[24px] text-primary" />
              </button>
              <button
                onClick={scrollRightHandler}
                disabled={!canScrollRight}
                className={`flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all ${
                  !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/10'
                }`}
                aria-label="Siguiente"
              >
                <CaretRight className="h-[24px] w-[24px] text-primary" />
              </button>
            </div>
          )}
        </div>
      </div>
      <CertificationsSection />
    </section>
  );
}
