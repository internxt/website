import Image from 'next/image';
import { FiveStars } from '../shared/StarsRate';
import { getImage } from '@/lib/getImage';
import { useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { Transition } from '@headlessui/react';

interface TestimonialsSectionForBusinessProps {
  textContent: any;
}

export const TestimonialsSectionForBusiness = ({ textContent }: TestimonialsSectionForBusinessProps): JSX.Element => {
  const testimonialsParts = [
    textContent.testimonials.slice(0, textContent.testimonials.length - 3),
    textContent.testimonials.slice(textContent.testimonials.length - 3, textContent.testimonials.length),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const onLeftArrowClick = () => {
    const newIndex = currentIndex === 0 ? testimonialsParts.length - 1 : currentIndex - 1;
    onTabSelectorButtonClicked(newIndex);
  };

  const onRightArrowClick = () => {
    const newIndex = currentIndex === testimonialsParts.length - 1 ? 0 : currentIndex + 1;
    onTabSelectorButtonClicked(newIndex);
  };

  const onTabSelectorButtonClicked = (index: number) => {
    if (currentIndex !== index) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <section className="overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex h-full w-full flex-col items-center justify-center gap-20">
        <h2 className="text-center text-5xl font-semibold text-gray-100">{textContent.title}</h2>
        <div className="hidden gap-8 lg:px-14 xl:flex">
          <button onClick={onLeftArrowClick}>
            <CaretLeft size={24} />
          </button>
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
                  <FiveStars totalStars={5} />
                  <p className="text-xl text-gray-80">{testimonial.review}</p>
                </div>
                <div className="flex h-full items-end">
                  <Image
                    src={getImage(`/images/business/logos-b2b/${testimonial.imageBrandName}.svg`)}
                    alt={testimonial.imageBrandName}
                    width={185}
                    height={30}
                  />
                </div>
              </div>
            ))}
          </Transition>
          <button onClick={onRightArrowClick}>
            <CaretRight size={24} />
          </button>
        </div>

        {/*Mobile/Tablet View*/}
        <div className="flex w-full snap-x snap-mandatory flex-row justify-start gap-6 overflow-scroll xl:hidden">
          {textContent.testimonials.map((testimonial) => (
            <div className="mx-auto flex w-full shrink-0 snap-center flex-col justify-start rounded-3xl bg-white p-8">
              <div className="flex h-full max-w-[375px] flex-col justify-between gap-3" key={testimonial.review}>
                <div className="flex flex-col gap-3">
                  <FiveStars totalStars={5} />
                  <p className="text-xl text-gray-80">{testimonial.review}</p>
                </div>
                <div className="flex h-full items-end">
                  <Image
                    src={getImage(`/images/business/logos-b2b/${testimonial.imageBrandName}.svg`)}
                    alt={testimonial.imageBrandName}
                    width={185}
                    height={30}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
