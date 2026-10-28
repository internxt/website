import React from 'react';
import FaqAccordion from './FaqAccordion';
import { DARK_MODE_ENABLED } from '@/theme.config';

const QuestionsSection = ({ darkMode = DARK_MODE_ENABLED, textContent, isCorrectAnswer }) => {
  return (
    <section className={`overflow-hidden ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'}`}>
      <div className="flex flex-col items-center justify-center space-y-10 px-10 py-20">
        <p className="text-center text-4xl font-semibold">{textContent.title}</p>
        <div className="flex w-full max-w-[850px] flex-col space-y-2">
          {textContent.faq.map((item, index) => (
            <div
              className={`rounded-lg border ${darkMode ? 'border-gray-71' : 'border-gray-20'} px-5`}
              key={item.question}
            >
              <FaqAccordion
                key={item.question}
                question={item.question}
                answer={item.answer}
                isQuestionBigger
                isCorrectAnswer={isCorrectAnswer[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
