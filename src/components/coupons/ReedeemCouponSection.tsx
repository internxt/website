import { CouponPageText } from '@/assets/types/couponsPage';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface RedeemCouponsSectionProps {
  textContent: CouponPageText['howToRedeemSection'];
}

export default function RedeemCouponsSection({ textContent }: Readonly<RedeemCouponsSectionProps>): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardWidth = 361;

  const maxIndex = textContent.cards.titles.length - 1;

  useEffect(() => {
    const updateScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
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
    <section className="flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-17 pb-10 lg:h-min lg:gap-16 lg:p-20 ">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32 " />

      <div className="flex h-min w-full flex-col justify-center gap-8 p-6 lg:gap-12 lg:p-10">
        <div className="flex h-min w-full flex-col items-center justify-center gap-8 lg:gap-6">
          <p className="text-30 font-bold leading-tight text-gray-100 lg:text-5xl">{textContent.title}</p>
          <p className="font-regular text-base leading-tight text-gray-55 lg:text-lg">{textContent.description}</p>
        </div>

        <div className="hidden items-stretch lg:flex lg:flex-row lg:justify-center lg:gap-8 xl:px-20 3xl:px-52">
          {textContent.cards.titles.map((card, index) => (
            <div key={index} className="flex h-[220px] w-full flex-col gap-6 rounded-16 bg-white p-8">
              <span className="flex flex-row items-center gap-4 text-xl font-medium text-gray-95">
                <p className="text-2xl text-primary ">{index + 1}</p>
                {card}
              </span>
              <p className="flex-1 text-base font-normal leading-tight text-gray-55">
                {textContent.cards.descriptions[index]}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-4 lg:hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div
              className="flex items-stretch gap-4"
              style={{
                width: 'max-content',
              }}
            >
              {textContent.cards.titles.map((card, index) => (
                <div
                  key={index}
                  className="flex h-[220px] w-[345px] flex-shrink-0 flex-col gap-6 rounded-16 bg-white p-8"
                >
                  <span className="flex flex-row items-center gap-4 text-xl font-medium text-gray-95">
                    <p className="text-2xl text-primary ">{index + 1}</p>
                    {card}
                  </span>
                  <p className="flex-1 text-base font-normal leading-tight text-gray-55">
                    {textContent.cards.descriptions[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-[48px] w-[310px] flex-row items-end justify-end">
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
                disabled={currentIndex === maxIndex}
                className={`flex h-[48px] w-[48px] items-center justify-center rounded-100 border border-primary bg-transparent transition-opacity ${
                  currentIndex === maxIndex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white-summer'
                }`}
              >
                <CaretRight className="h-[24px] w-[24px] text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
