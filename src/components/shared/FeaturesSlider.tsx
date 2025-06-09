import { Fragment, useState } from 'react';
import RevealX from '@/components/components/RevealX';

const FeaturesSlider = ({ textContent, cardInfo, backgroundClass = 'bg-white' }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const DescriptionIcon = cardInfo[cardIndex].icon;

  return (
    <section className={`overflow-hidden ${backgroundClass}`}>
      <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden px-5 py-20">
        <div className="flex w-full max-w-[858px] flex-col items-center justify-center space-y-6 text-center">
          <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <div className="flex flex-col space-y-6">
            <p className="text-lg text-gray-80">{textContent.description}</p>
          </div>
        </div>
      </section>

      <div className="hidden flex-row items-start justify-center pb-20 lg:flex">
        <div className="flex max-w-[378px] flex-col">
          {cardInfo.map((info, index) => (
            <Fragment key={info.title}>
              <button
                className={`flex ${
                  cardIndex === index ? 'border-primary' : 'border-gray-10'
                } cursor-pointer flex-row items-center border-r-4 p-2 pr-8`}
                onClick={() => setCardIndex(index)}
              >
                <p className="text-left text-2xl font-medium text-gray-100 hover:text-primary">{info.title}</p>
              </button>
              <div className="h-8 border-r-4 border-gray-10 pr-8 last:hidden" />
            </Fragment>
          ))}
        </div>

        <RevealX direction="left" className="flex flex-col justify-start">
          <div className="flex w-auto justify-center px-6">
            <div className="flex flex-col rounded-3xl pl-6">
              <div className="flex w-full max-w-[384px] flex-col space-y-6">
                <DescriptionIcon className="text-primary" size={64} />
                <p className="text-4xl font-semibold text-gray-100">{cardInfo[cardIndex].title}</p>
                <p className="font-regular text-base sm:text-lg md:text-xl">
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
            className="flex flex-col items-start justify-start rounded-2xl bg-gray-1 p-8 sm:p-10 md:max-w-[488px]"
          >
            <info.icon className="mb-6 text-4xl text-primary" size={32} />
            <div className="flex w-full max-w-[400px] flex-col">
              <p className="mb-6 text-2xl font-medium text-gray-100">{info.title}</p>
              {Array.isArray(info.description) ? (
                info.description.map((line, index) => (
                  <p key={index} className="mb-4 text-base text-cool-gray-80 sm:text-lg">
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
