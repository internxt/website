import React from 'react';
import FaqAccordion from '@/components/shared/FAQAccordion';

const FaqSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center bg-black py-20 lg:px-44">
        <div className="center flex flex-col items-center text-center">
          <p className="text-4xl font-semibold text-white ">{textContent.faq.title}</p>
        </div>
        <div className="flex w-full max-w-screen-sm flex-col space-y-2 pt-10">
          {textContent.faq.faq.map((item, index) => (
            <div className="rounded-lg border border-gray-90 px-5 text-gray-5" key={index}>
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
