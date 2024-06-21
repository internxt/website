import { useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import RevealY from '@/components/components/RevealY';
import { getImage } from '@/lib/getImage';

const InternxtInTheNews = ({ textContent }) => {
  const data = textContent.cards;
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeIndex =
    currentIndex !== 0 ? textContent.cards.slice(0, currentIndex) : textContent.cards.slice(4, data.length);
  const current = textContent.cards.slice(currentIndex, currentIndex + 2);
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
    <section className="overflow-hidden bg-white pb-20 pt-16">
      <RevealY className="flex items-center justify-center p-6 pb-[70px]">
        <p className="mb-6 text-center text-5xl font-medium">{textContent.title}</p>
      </RevealY>
      {/* Web View */}
      <RevealY className="hidden w-full flex-row items-center justify-center space-x-12 xl:flex">
        <div className="relative flex h-full flex-1 flex-row items-center justify-end space-x-10 overflow-hidden">
          {beforeIndex.map((card, index) => (
            <div
              key={index}
              className="relative flex h-[250px] w-[465px] shrink-0 flex-col space-y-9 rounded-3xl bg-white p-10 opacity-40 drop-shadow-md"
            >
              <div className="flex flex-col items-start">
                <Image src={getImage(`/images/media-area/${card.img}`)} alt="logo" height={30} width={120} />
              </div>
              <p className="text-lg font-normal">{card.title}</p>
            </div>
          ))}
          <div className="absolute flex">
            <button
              className="z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-40  text-3xl text-white drop-shadow-lg hover:bg-opacity-100 xl:flex"
              onClick={onPrev}
              aria-label="Previous"
            >
              <CaretLeft size={32} />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10">
          {current.map((card, index) => (
            <div
              key={index}
              className="card-soft relative flex h-[250px] w-[465px] shrink-0 flex-col space-y-9 rounded-3xl bg-white p-10 shadow-subtle-hard"
            >
              <div className="flex flex-col items-start justify-center">
                <Image src={getImage(`/images/media-area/${card.img}`)} alt="logo" height={30} width={card.width} />
              </div>
              <p className="text-lg font-normal">{card.title}</p>
            </div>
          ))}
        </div>
        <div className="relative flex h-full flex-1 flex-row items-center justify-start space-x-10 overflow-hidden">
          <div className="absolute ml-5 flex">
            <button
              className="z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-primary bg-opacity-50 text-3xl text-white drop-shadow-lg hover:bg-opacity-100 xl:flex"
              onClick={onNext}
              aria-label="Next"
            >
              <CaretRight size={32} />
            </button>
          </div>
          {afterIndex.map((card, index) => (
            <div
              key={index}
              className="relative flex h-[250px] w-[465px] shrink-0 flex-col space-y-9 rounded-3xl bg-white p-10 opacity-40 drop-shadow-md"
            >
              <div className="flex flex-col items-start justify-center">
                <Image src={getImage(`/images/media-area/${card.img}`)} alt="logo" height={30} width={card.width} />
              </div>
              <p className="text-lg font-normal">{card.title}</p>
            </div>
          ))}
        </div>
      </RevealY>

      {/*Mobile/Tablet View*/}
      <div className="flex snap-x snap-mandatory flex-row overflow-scroll pb-20 xl:hidden">
        <div className="flex justify-center">
          {data.map((card, index) => {
            return (
              <div key={index} className="flex w-screen justify-center px-6 shadow-subtle-hard md:w-auto">
                <div className="flex snap-center flex-col overflow-hidden rounded-3xl bg-white p-8">
                  <div className="flex w-auto max-w-[300px] flex-col">
                    <div className="flex w-[331px] flex-row">
                      <div className="flex flex-col pl-4">
                        <Image
                          src={getImage(`/images/media-area/${card.img}`)}
                          alt="logo"
                          height={30}
                          width={card.width}
                        />
                      </div>
                    </div>
                    <p className="pt-9 text-lg font-normal">{card.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternxtInTheNews;
