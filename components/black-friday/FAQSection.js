import { Plus, PlusCircle } from 'phosphor-react';
import React from 'react';
import FaqAccordion from '../password-checker/FaqAccordion';

const FAQSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col bg-gray-1 py-20 lg:px-56">
        <div className="center flex flex-col items-center text-center">
          <p className="text-4xl font-semibold">{textContent.faq.title}</p>
        </div>
        <div className="pt-16">
          {textContent.faq.faq.map((item) => (
            <div className="border border-gray-20 px-5">
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
