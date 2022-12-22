import React from 'react';
import FaqAccordion from '../password-checker/FaqAccordion';

const FaqSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-16 py-[60px]">
        <p className="text-4xl font-semibold">{textContent.title}</p>
        <div className="flex w-full max-w-[850px] flex-col space-y-2 pt-10">
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

export default FaqSection;
