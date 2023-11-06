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
      <div className="flex flex-col space-y-10 py-14 px-5 text-white lg:space-y-20 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-4xl font-semibold md:text-5xl">{textContent.title}</p>
        </div>
        <div className="flex w-full flex-row flex-wrap items-start justify-center gap-10">
          {cards.map((card) => (
            <div key={card.footer} className="flex h-full max-w-[320px] rounded-2xl bg-gray-100 lg:h-full">
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
