import { Fragment, useEffect, useRef, useState } from 'react';
import RevealX from '@/components/components/RevealX';

const FeaturesSlider = ({ textContent, cardInfo, backgroundClass = 'bg-white' }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);
  const DescriptionIcon = cardInfo[cardIndex].icon;

  useEffect(() => {
    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section || isScrollingRef.current) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > window.innerHeight;

      if (!inView) return;

      e.preventDefault();
      isScrollingRef.current = true;

      if (e.deltaY > 0 && cardIndex < cardInfo.length - 1) {
        setCardIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && cardIndex > 0) {
        setCardIndex((prev) => prev - 1);
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 200);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [cardIndex, cardInfo.length]);

  return (
    <section className={`overflow-hidden ${backgroundClass}`}>
      <section className="flex flex-col items-center justify-center space-y-12 px-5 py-20 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
        <div className="flex w-full max-w-[858px] flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-30 font-semibold text-gray-100 lg:text-3xl">{textContent.title}</h2>

          <div className="flex flex-col">
            <p className="text-lg leading-tight text-gray-80">{textContent.description}</p>
          </div>
        </div>
      </section>

      <div
        ref={sectionRef}
        className="hidden flex-row items-start justify-center pb-20 transition-all duration-700 lg:flex"
      >
        <div className="flex h-[400px] max-w-[400px] flex-col justify-between">
          {cardInfo.map((info, index) => (
            <Fragment key={info.title}>
              <button
                className={`flex ${
                  cardIndex === index ? 'border-primary' : 'border-gray-10'
                } cursor-pointer flex-row items-center border-r-4 p-2 pr-8 transition-all duration-500 ease-in-out`}
                onClick={() => setCardIndex(index)}
              >
                <info.icon className="mr-2 text-primary" size={32} />
                <h3
                  className={`text-left text-2xl font-medium transition-colors duration-500 ${
                    cardIndex === index ? 'text-primary' : 'text-gray-100 hover:text-primary'
                  }`}
                >
                  {info.title}
                </h3>
              </button>
              <div className="h-8 border-r-4 border-gray-10 pr-8 transition-all duration-500">
                <div
                  className={`border-r-4 pr-8 transition-all duration-500 ${
                    index === cardIndex ? 'border-primary' : 'border-gray-10'
                  }`}
                />
              </div>
            </Fragment>
          ))}
        </div>

        <RevealX direction="left" className="flex flex-col justify-start transition-all duration-700 ease-in-out">
          <div className="flex w-auto justify-center px-6">
            <div className="flex flex-col rounded-3xl pl-6">
              <div className="flex w-full max-w-[384px] flex-col space-y-6 opacity-100 transition-opacity duration-700">
                <DescriptionIcon className="text-primary transition-all duration-500" size={64} />
                <p className="text-4xl font-semibold text-gray-100">{cardInfo[cardIndex].title}</p>
                <p className="font-regular text-base leading-relaxed text-gray-80 sm:text-lg md:text-xl">
                  {Array.isArray(cardInfo[cardIndex].description)
                    ? cardInfo[cardIndex].description.map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                          <br />
                        </span>
                      ))
                    : cardInfo[cardIndex].description}
                </p>
              </div>
            </div>
          </div>
        </RevealX>
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 px-5 py-10 lg:hidden">
        {cardInfo.map((info) => (
          <div
            key={info.title}
            className="flex flex-col items-start justify-start rounded-2xl bg-gray-1 p-8 transition-all duration-500 sm:p-10 md:max-w-[488px]"
          >
            <info.icon className="mb-6 text-4xl text-primary" size={32} />
            <div className="flex w-full max-w-[400px] flex-col space-y-4">
              <p className="text-2xl font-medium text-gray-100">{info.title}</p>
              {Array.isArray(info.description) ? (
                info.description.map((line, index) => (
                  <p key={index} className="text-base text-cool-gray-80 sm:text-lg">
                    {line}
                  </p>
                ))
              ) : (
                <p className="text-base text-cool-gray-80 sm:text-lg">{info.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSlider;
