import { useState, useEffect, useRef } from 'react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { MeetPageText } from '@/assets/meet';

interface AccordionSectionProps {
  textContent: MeetPageText['accordionSection'];
}

export default function AccordionSection({ textContent }: AccordionSectionProps): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [hasCompletedTour, setHasCompletedTour] = useState<boolean>(false);
  const [slideDirection, setSlideDirection] = useState<'down' | 'up' | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef<boolean>(false);

  const cardTitles = textContent?.accordionSection?.titles ?? [];
  const cardDescriptions = textContent?.accordionSection?.descriptions ?? [];
  const images = ['/images/meet/meet1.webp', '/images/meet/meet2.webp', '/images/meet/meet3.webp'];
  const totalCards = cardTitles.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isNearTop = rect.top < windowHeight * 0.3;
      const isNearBottom = rect.bottom > windowHeight * 0.7;
      const isInSection = isNearTop && isNearBottom;

      if (!isInSection) return;

      const scrollingDown = e.deltaY > 0;
      const currentIdx = openIndex;

      if (scrollingDown) {
        if (hasCompletedTour) {
          return;
        }

        if (currentIdx < totalCards - 1) {
          e.preventDefault();
          isScrollingRef.current = true;
          setSlideDirection('down');
          setOpenIndex(currentIdx + 1);

          setTimeout(() => {
            isScrollingRef.current = false;
            setSlideDirection(null);
          }, 700);
        } else {
          e.preventDefault();
          setHasCompletedTour(true);

          setTimeout(() => {
            window.scrollBy({ top: 150, behavior: 'smooth' });
          }, 300);
        }
      } else {
        if (currentIdx > 0) {
          e.preventDefault();
          isScrollingRef.current = true;
          setSlideDirection('up');
          setOpenIndex(currentIdx - 1);

          if (hasCompletedTour) {
            setHasCompletedTour(false);
          }

          setTimeout(() => {
            isScrollingRef.current = false;
            setSlideDirection(null);
          }, 700);
        } else if (currentIdx === 0) {
          e.preventDefault();
          setTimeout(() => {
            window.scrollBy({ top: -150, behavior: 'smooth' });
          }, 100);
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [openIndex, totalCards, hasCompletedTour]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index);

    if (index === totalCards - 1) {
      setHasCompletedTour(true);
    }
  };

  const currentImage = images[openIndex];
  const currentImageAlt = `${cardTitles[openIndex]} - Imagen ilustrativa`;

  return (
    <section ref={sectionRef} className="relative flex w-full flex-col items-center justify-start bg-neutral-17 py-20">
      <div
        className={`sticky top-0 flex h-screen w-full flex-col items-center justify-center gap-8 py-10 transition-transform duration-300 lg:gap-16 lg:py-20 ${
          slideDirection === 'down' ? 'animate-slide-down' : slideDirection === 'up' ? 'animate-slide-up' : ''
        }`}
        style={{ minHeight: `${Math.max(1, 1 + totalCards * 20)}vh` }}
      >
        <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:w-[850px]">
          <p className="text-30 font-bold leading-tight text-gray-95 lg:w-[736px] lg:text-3xl">{textContent.title}</p>
          <p className="whitespace-pre-line text-base font-normal leading-tight text-gray-55 lg:text-xl">
            {textContent.description}
          </p>
        </div>

        <div className="flex w-[345px] flex-row lg:w-full lg:pl-52">
          <div className="space-y-4">
            {cardTitles.map((title, index) => (
              <div key={index} className="w-[352px] overflow-hidden rounded-2xl bg-white">
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  className={`flex w-full items-center px-8 text-left transition-all duration-700 ${
                    openIndex === index ? 'pt-4' : 'h-[93px] py-4'
                  }`}
                >
                  <span className="flex items-center justify-center gap-4 py-4 text-2xl text-primary">
                    {index + 1}
                    <p className="text-lg font-medium text-gray-95 lg:text-xl">{title}</p>
                  </span>
                </button>
                <div
                  className={`transition-all duration-700 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-8">
                    <p className="text-base leading-tight text-gray-55 lg:text-base">{cardDescriptions[index]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative ml-16 overflow-hidden rounded-lg">
            <Image
              key={`accordion-img-${openIndex}`}
              src={getImage(currentImage)}
              alt={currentImageAlt}
              width={628}
              height={430}
              quality={100}
              className="transform transition-all duration-700 ease-in-out hover:scale-105"
              priority={openIndex === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-0 transition-opacity duration-700 hover:opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
