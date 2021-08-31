import React from 'react'
import styles from './InvestorsSection.module.scss';

const InvestorsSection = ({textContent}) => {
  return (
    <section>
      <div className="content">
        <div className={`flex flex-col items-center justify-center w-full text-center flex-shrink-0 px-10 md:px-0 py-12 md:py-24`}>
            <h2 className={`mb-4 text-4xl font-semibold`}>
              {textContent.title}
            </h2>
            <p className={`mb-8 text-lg text-neutral-500`}>
              {textContent.subtitle.line1}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line2}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line3}
            </p>

            <div className="flex flex-row justify-around flex-wrap sm:px-10">
              <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
                <img src="../../logos/investors/ovhcloud.svg" draggable="false" alt="ovhcloud logo"/>
              </div>
              <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
                <img src="../../logos/investors/blackberry.svg" draggable="false" alt="blackberry logo"/>
              </div>
              <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
                <img src="../../logos/investors/stripe.svg" draggable="false" alt="stripe logo"/>
              </div>
              <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
                <img src="../../logos/investors/esade.svg" draggable="false" alt="esade logo"/>
              </div>
              <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
                <img src="../../logos/investors/ycombinator.svg" draggable="false" alt="ycombinator logo"/>
              </div>
              <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
                <img src="../../logos/investors/angelscapital.svg" draggable="false" alt="angelscapital logo"/>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;