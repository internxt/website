import React, { useState } from 'react';
import { PlusCircle } from 'phosphor-react';

const FaqAccordion = ({
  question,
  children
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col items-stretch justify-start">
      <button
        type="button"
        onClick={() => { setActive(!active); }}
        className="flex flex-row items-center justify-between my-5 text-left space-x-6 hover:text-primary cursor-pointer"
      >
        <span className="w-full text-lg sm:text-lg md:text-xl font-medium">{question}</span>
        <PlusCircle size={32} className={`transform ${active && 'rotate-45'} transition-transform duration-250 ease-in-out`} />
      </button>

      <p className={`flex overflow-hidden will-change-height h-auto ${active ? 'max-h-double-screen pb-8 opacity-100' : 'max-h-0 opacity-50'} text-left text-lg w-full pr-14 whitespace-pre-wrap text-gray-60 transition-all duration-250 ease-in-out`}>
        {children}
      </p>
    </div>
  );
};

export default FaqAccordion;
