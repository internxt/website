import Image from 'next/image';
import { FiveStars } from '../shared/StarsRate';
import { getImage } from '@/lib/getImage';
import { useState } from 'react';
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';

interface TestimonialsSectionForBusinessProps {
  textContent: any;
}

export const TestimonialsSectionForBusiness = ({ textContent }: TestimonialsSectionForBusinessProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = textContent.testimonials.length;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  const mobileMaxIndex = Math.max(0, totalItems - 1);

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const scrollLeftMobile = () => {
    const newIndex = currentIndex === 0 ? mobileMaxIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const scrollRightMobile = () => {
    const newIndex = currentIndex >= mobileMaxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const visibleTestimonials = textContent.testimonials.slice(currentIndex, currentIndex + itemsPerPage);
  const visibleTestimonialMobile = textContent.testimonials[currentIndex];

  return (
    <section
      className="relative overflow-hidden bg-neutral-17 px-5 py-20 lg:bg-transparent"
      style={{ background: 'linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className="relative z-10">
        <div className="hidden h-full w-full flex-col items-center justify-center gap-20 lg:flex">
          <h2 className="text-center text-3xl font-bold text-gray-100 lg:text-3xl">{textContent.title}</h2>

          <div className="hidden w-full max-w-7xl lg:flex lg:items-center lg:justify-center xl:gap-8">
            <button
              onClick={scrollLeft}
              className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all duration-200 hover:bg-white-summer"
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>

            <div className="flex-1 px-4">
              <div className="flex h-screen max-h-60 flex-row gap-12 transition-all duration-300">
                {visibleTestimonials.map((testimonial, index) => (
                  <div
                    className="flex max-w-[375px] flex-col justify-between gap-3"
                    key={`${testimonial.review}-${currentIndex}-${index}`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex h-[60px] flex-row items-center gap-3">
                        <Image
                          src={getImage(`/images/business/logos-b2b/${testimonial.imageBrandName}.svg`)}
                          alt={testimonial.imageBrandName}
                          width={150}
                          height={30}
                        />
                        <FiveStars totalStars={5} />
                      </div>
                      <p className="text-xl font-normal leading-tight text-gray-80">{testimonial.review}</p>
                    </div>
                    <div className="flex h-full items-end"></div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollRight}
              className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all duration-200 hover:bg-white-summer"
            >
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </button>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-6 md:hidden">
          <h2 className="text-start text-30 font-bold leading-tight text-gray-100">{textContent.title}</h2>

          <div className="flex h-min w-full flex-col justify-center gap-3">
            <Quotes className="text-primary" weight="fill" size={24} />
            <p className="text-xs font-normal leading-tight text-gray-55">{visibleTestimonialMobile.review}</p>
            <p className="text-xs font-bold leading-tight text-gray-55">{visibleTestimonialMobile.imageBrandName}</p>
          </div>

          <div className="flex w-full flex-row justify-end gap-4">
            <button
              onClick={scrollLeftMobile}
              className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all duration-200 hover:bg-white-summer"
            >
              <CaretLeft className="h-[24px] w-[24px] text-primary" />
            </button>
            <button
              onClick={scrollRightMobile}
              className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all duration-200 hover:bg-white-summer"
            >
              <CaretRight className="h-[24px] w-[24px] text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
