import React from 'react';
import FaqAccordion from '../shared/FAQAccordion';

const QASection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-10 px-10 py-[60px]">
        <p className="text-center text-4xl font-semibold">{textContent.title}</p>
        <div className="flex w-full max-w-[850px] flex-col space-y-2">
          {textContent.questions.map((item, index) => (
            <div className="rounded-lg border border-gray-20 px-5" key={item.question}>
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} isQuestionBigger />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QASection;
