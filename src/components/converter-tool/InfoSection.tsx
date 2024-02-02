import React from 'react';
import FaqAccordion from '../shared/FAQAccordion';

const InfoSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-16 px-10 py-20">
        <div className="flex max-w-[784px] flex-col space-y-4 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal text-gray-100">{textContent.description}</p>
        </div>
        <div className="flex w-full max-w-[850px] flex-col space-y-2">
          {textContent.faq.faq.map((item, index) => (
            <div className="rounded-lg border border-gray-20 px-5" key={index}>
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} isQuestionBigger />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
