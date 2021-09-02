import React from 'react'
import CheckoutForm from '../CheckoutForm';
import styles from './HeroSection.module.scss';

const HeroSection = ({textContent, download, lang, checkout}) => {
  return (
    <section>
      <div className="content pt-32 sm:pt-10">

        <div className={`flex flex-col items-center justify-center w-full sm:mb-20`}>
          
          <div className={`flex-shrink-0 px-6 md:px-0 m-6 md:m-10 lg:m-32 flex flex-col w-screen sm:w-auto text-center`}>
            <p className={`mb-2 md:mb-2 text-base text-neutral-50 font-semibold`}>
              {textContent.eyebrow}
            </p>
            <h1 className={`title mb-8 md:mb-10 text-4xl md:text-5xl lg:text-6xl`}>
              {textContent.title.line1}<br className="hidden sm:inline-flex"/> {textContent.title.line2}
            </h1>
            <p className={`mb-8 text-lg lg:text-xl text-neutral-500`}>
              {textContent.subtitle.line1}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line2}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line3}
            </p>
            <p className={`mb-8 text-lg text-neutral-500`}>
              <span className="line-through text-neutral-80 mr-0 sm:mr-2">{textContent.previousPrice}</span><br className="inline-flex sm:hidden"/> {textContent.price}
            </p>

            <CheckoutForm
              product="lifetime2TB"
              value={textContent.cta}
              input={textContent.input}
              loading={textContent.loading}
              className={`className="flex justify-center w-full sm:max-w-min sm:w-auto items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75 cursor-pointer`}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;