import React from 'react';
import Image from 'next/image';
import CtaSection from './CtaSection';

const TestimonialsSection = ({ textContent, lang }) => {
  const cards = [
    {
      image: '/images/special-offer/black-friday/josep.png',
      text: textContent.josep.text,
      footer: textContent.josep.footer,
    },
    {
      image: '/images/special-offer/black-friday/cristian.png',
      text: textContent.cristian.text,
      footer: textContent.cristian.footer,
    },
    {
      image: '/images/special-offer/black-friday/eva.png',
      text: textContent.eva.text,
      footer: textContent.eva.footer,
    },
  ];
  return (
    <section className="overflow-hidden bg-[#111111]">
      <div className="flex flex-col space-y-5 py-14 text-white lg:py-24">
        <div className="flex flex-col items-center text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-y-10 p-5 pt-10 sm:justify-evenly lg:gap-y-20 lg:pt-12 xl:px-40">
          {cards.map((card) => (
            <div key={card.footer} className="h-full max-w-[320px] rounded-2xl bg-gray-100 lg:h-full">
              <div className="flex w-full flex-col space-y-6 p-8">
                <div>
                  <Image
                    src={card.image}
                    alt="Josep"
                    width={72}
                    height={72}
                    quality={100}
                    className="w-max rounded-full"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="text-lg font-normal text-gray-5">{card.text}</p>
                  <p className="text-lg font-medium text-gray-20">— {card.footer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <CtaSection textContent={textContent.cta} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
