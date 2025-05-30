import Image from 'next/image';
import { FiveStars } from '../shared/StarsRate';
import { getImage } from '@/lib/getImage';
import { useState } from 'react';
import { CaretLeft, CaretRight, DotsThree } from '@phosphor-icons/react';
import { Transition } from '@headlessui/react';

interface TestimonialsSectionForBusinessProps {
  textContent: any;
}

export const TestimonialsSectionForBusiness = ({ textContent }: TestimonialsSectionForBusinessProps): JSX.Element => {
  const testimonialsParts = [
    textContent.testimonials.slice(0, textContent.testimonials.length - 3),
    textContent.testimonials.slice(textContent.testimonials.length - 3, textContent.testimonials.length),
  ];

  const [currentIndex] = useState(0);
  const [isTransitioning] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);

  const onLeftMobileArrowClick = () => {
    const newIndex = mobileIndex === 0 ? textContent.testimonials.length - 1 : mobileIndex - 1;
    setMobileIndex(newIndex);
  };

  const onRightMobileArrowClick = () => {
    const newIndex = mobileIndex === textContent.testimonials.length - 1 ? 0 : mobileIndex + 1;
    setMobileIndex(newIndex);
  };

  return (
    <section className="overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-20">
        <h2 className="text-center text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h2>
        <div className="hidden gap-8 lg:px-14 xl:flex">
          <Transition
            appear={true}
            show={!isTransitioning}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="flex h-screen max-h-60 flex-row gap-12"
          >
            {testimonialsParts[currentIndex].map((testimonial) => (
              <div className="flex max-w-[375px] flex-col justify-between gap-3" key={testimonial.review}>
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
                  <p className="text-xl text-gray-80">{testimonial.review}</p>
                </div>
                <div className="flex h-full items-end"></div>
              </div>
            ))}
          </Transition>
        </div>

        {/*Mobile/Tablet View*/}
        <div className="flex w-full snap-x snap-mandatory flex-row flex-col justify-start gap-6 xl:hidden">
          <div className="flex items-center justify-center space-x-2 text-center">
            <button onClick={onLeftMobileArrowClick} className="flex items-center">
              <CaretLeft size={24} />
            </button>
            <DotsThree size={24} />
            <button onClick={onRightMobileArrowClick} className="flex items-center">
              <CaretRight size={24} />
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-[375px] shrink-0 snap-center flex-col justify-start rounded-3xl bg-white p-8">
            <div className="flex h-full flex-col justify-between gap-3">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-3">
                  <Image
                    src={getImage(
                      `/images/business/logos-b2b/${textContent.testimonials[mobileIndex].imageBrandName}.svg`,
                    )}
                    alt={textContent.testimonials[mobileIndex].imageBrandName}
                    width={185}
                    height={30}
                  />
                  <FiveStars totalStars={5} />
                </div>
                <p className="text-xl text-gray-80">{textContent.testimonials[mobileIndex].review}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
