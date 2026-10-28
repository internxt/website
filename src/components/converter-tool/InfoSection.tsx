import React from 'react';
import FaqAccordion from '@/components/shared/FAQAccordion';
import { DARK_MODE_ENABLED } from '@/theme.config';

const InfoSection = ({ darkMode = DARK_MODE_ENABLED, textContent }) => {
  return (
    <section className={`overflow-hidden ${darkMode ? 'bg-[#1C1C1C]' : ''}`}>
      <div className="flex flex-col items-center justify-center space-y-16 px-10 py-20">
        <div className="flex max-w-[784px] flex-col space-y-4 text-center">
          <p className={`text-4xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
            {textContent.title}
          </p>
          <p className={`text-xl font-normal ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
            {textContent.description}
          </p>
        </div>
        <div className="flex w-full max-w-[850px] flex-col space-y-2">
          {textContent.faq.faq.map((item, index) => (
            <div className={`rounded-lg border ${darkMode ? 'border-gray-71' : 'border-gray-20'} px-5`} key={index}>
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} isQuestionBigger />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
