import { Check } from 'phosphor-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ButtonDeal from './components/ButtonDeal';

const DealSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1 px-4 py-20 md:px-32 xl:px-56">
      <div className="flex flex-col justify-center space-y-5 lg:flex-row lg:space-x-40">
        {/* Text */}
        <div className="flex flex-col items-center justify-center space-y-8 px-4 lg:items-start lg:whitespace-nowrap">
          <p className="text-center text-5xl font-semibold lg:text-start">{textContent.title}</p>
          <div className="flex flex-col space-y-4">
            {textContent.adv.map((adv) => (
              <div key={adv.title} className="flex flex-row items-start space-x-4 whitespace-pre-wrap lg:items-center">
                <Check className="text-primary" size={25} weight="bold" />
                <p className="text-xl font-normal">{adv.title}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-normal text-gray-60 lg:text-start">{textContent.footer}</p>
        </div>
        {/* Card */}
        <div className="flex flex-col items-center space-y-8 rounded-2xl border-8 border-primary border-opacity-20 py-6 shadow-xl">
          <div
            className={`storage flex max-w-min flex-row whitespace-nowrap rounded-full bg-neutral-20 py-1 px-4 pb-0.5
          text-xl font-medium text-black`}
          >
            <p>{textContent.card.title}</p>
          </div>
          <div className={`priceBreakdown flex flex-row items-center justify-center space-x-px`}>
            <p className="flex flex-row space-x-0.5 text-primary">
              <span className={`mt-2 text-3xl font-semibold`}>€</span>
              <span className="price text-8xl font-bold">0.00</span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-gray-60">
            <p className="text-lg font-normal">
              <span>{textContent.card.priceBefore}</span>
              <span> €</span>
              <span>{textContent.card.month}</span>
            </p>
          </div>
          <div>
            <ButtonDeal textContent={textContent.card} large />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
