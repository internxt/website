import React from 'react';
import FaqAccordion from '@/components/shared/FAQAccordion';

const InfoSection = ({ darkMode = false, textContent }) => {
  return (
    <section className="overflow-hidden dark:bg-gray-95">
      <div className="flex flex-col items-center justify-center space-y-16 px-10 py-20">
        <div className="flex max-w-[784px] flex-col space-y-4 text-center">
          <p className="text-4xl font-semibold text-gray-100 dark:text-white-95">
            {textContent.title}
          </p>
          <p className="text-xl font-normal text-gray-100 dark:text-white-95">
            {textContent.description}
          </p>
        </div>
        <div className="flex w-full max-w-[850px] flex-col space-y-2">
          {textContent.faq.faq.map((item) => (
            <div className="rounded-lg border border-gray-20 dark:border-gray-71 px-5" key={item.question}>
              <FaqAccordion
                key={item.question}
                question={item.question}
                answer={item.answer}
                isQuestionBigger
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
