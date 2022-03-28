import React from 'react';
import { PlusCircle } from 'phosphor-react';

const FaqSection = ({
  textContent
}) => (
  <section className="relative bg-gray-5">
    <div className="flex flex-col items-center p-10 lg:p-16 space-y-10 sm:space-y-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-center">
        {textContent.title.line1}
        <br />
        {textContent.title.line2}
      </h2>

      <div className="flex flex-col w-full max-w-screen-sm divide-y divide-gray-10">
        {textContent.faq.map((item) => (
          <div className="flex flex-row items-center justify-between h-20 px-10 hover:text-primary cursor-pointer">
            <span className="text-2xl">{item.question}</span>
            <PlusCircle size={32} />
          </div>
        ))}
      </div>

      <h3 className="text-5xl font-semibold text-center text-gray-20">...</h3>
    </div>
  </section>
);

export default FaqSection;
