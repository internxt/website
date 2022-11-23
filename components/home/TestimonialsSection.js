import React, { useState } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';

const TestimonialsSection = ({ textContent }) => {
  const data = textContent.cards;
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeIndex =
    currentIndex !== 0 ? textContent.cards.slice(0, currentIndex) : textContent.cards.slice(4, data.length);
  const current =
    // currentIndex === 5
    //   ? textContent.cards.slice(currentIndex, 0)
    textContent.cards.slice(currentIndex, currentIndex + 2);
  const afterIndex =
    currentIndex !== 4 ? textContent.cards.slice(currentIndex + 2, data.length) : textContent.cards.slice(0, 2);

  const onPrev = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(data.length - 2);
    }
    return setCurrentIndex(currentIndex - 2);
  };

  const onNext = () => {
    if (currentIndex === data.length - 2) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 2);
  };

  return (
    <section className="bg-gray-1 pb-20 pt-16">
      <div className="flex items-center justify-center pb-[70px]">
        <p className="text-center text-5xl font-semibold">{textContent.title}</p>
      </div>
      <div className="hidden w-full flex-row items-center justify-center space-x-12 xl:flex">
        <div className="relative flex h-full flex-1 flex-row justify-end space-x-10 overflow-hidden">
          {beforeIndex.map((card, index) => (
            <div
              key={index}
              className="relative flex h-[339px] w-[465px] shrink-0 flex-col rounded-2xl bg-white p-10 opacity-40 drop-shadow-md"
            >
              <div className="flex flex-row">
                <img src="/images/home/testimonials/Comas.svg" sizes="52.16 48" />
                <div className="flex flex-col pl-4">
                  <p className="text-xl font-semibold">{card.name}</p>
                  <p className="text-lg font-light text-gray-50">{card.enterprise}</p>
                </div>
              </div>
              <p className="pt-9 text-lg font-normal">{card.review}</p>
            </div>
          ))}
          <div className="absolute top-1/2 bottom-1/2 flex">
            <button
              className="z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-40  text-3xl text-white drop-shadow-lg hover:bg-opacity-100 xl:flex"
              onClick={onPrev}
            >
              <CaretLeft size={32} />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10">
          {current.map((card, index) => (
            <div
              key={index}
              className="relative flex h-[339px] w-[465px] shrink-0 flex-col rounded-2xl bg-white p-10 drop-shadow-lg"
            >
              <div className="flex flex-row">
                <img src="/images/home/testimonials/Comas.svg" sizes="52.16 48" />
                <div className="flex flex-col pl-4">
                  <p className="text-xl font-semibold">{card.name}</p>
                  <p className="text-lg font-light text-gray-50">{card.enterprise}</p>
                </div>
              </div>
              <p className="pt-9 text-lg font-normal">{card.review}</p>
            </div>
          ))}
        </div>
        <div className="relative flex h-full flex-1 flex-row justify-start space-x-10 overflow-hidden">
          <div className="absolute top-1/2 bottom-1/2 ml-5 flex">
            <button
              className="z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-50 text-3xl text-white drop-shadow-lg hover:bg-opacity-100 xl:flex"
              onClick={onNext}
            >
              <CaretRight size={32} />
            </button>
          </div>
          {afterIndex.map((card, index) => (
            <div
              key={index}
              className="relative flex h-[339px] w-[465px] shrink-0 flex-col rounded-2xl bg-white p-10 opacity-40 drop-shadow-md"
            >
              <div className="flex flex-row">
                <img src="/images/home/testimonials/Comas.svg" sizes="52.16 48" />
                <div className="flex flex-col pl-4">
                  <p className="text-xl font-semibold">{card.name}</p>
                  <p className="text-lg font-light text-gray-50">{card.enterprise}</p>
                </div>
              </div>
              <p className="pt-9 text-lg font-normal">{card.review}</p>
            </div>
          ))}
        </div>
      </div>
      {/*Mobile View*/}
      <div className="flex snap-x snap-mandatory flex-row overflow-scroll px-5 pb-3 xl:hidden">
        <div className="flex space-x-10">
          {textContent.cards.map((card, index) => (
            <div
              key={index}
              className="z-10 flex max-h-[339px] max-w-[380px] shrink-0 snap-center flex-col rounded-2xl bg-white p-10  px-10 drop-shadow-lg"
            >
              <div className="flex flex-row">
                <img src="/images/home/testimonials/Comas.svg" sizes="52.16 48" />
                <div className="flex flex-col pl-4">
                  <p className="text-xl font-semibold">{card.name}</p>
                  <p className="text-lg font-light text-gray-50">{card.enterprise}</p>
                </div>
              </div>
              <p className="pt-9 text-lg font-normal">{card.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
