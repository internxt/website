import React from 'react';
import { CaretRight } from 'phosphor-react';

const SupportNGOsSection = ({ textContent }) => (
  <section className="relative flex flex-col items-center bg-white px-6">
    <div className="flex flex-col md:flex-row justify-start items-center w-full max-w-screen-lg py-16 sm:py-24 lg:px-0 space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20">
      {/* Card */}
      <div className="flex flex-col flex-shrink-0 w-full md:w-96 bg-black text-white rounded-3xl overflow-hidden">
        <h3 className="text-4xl sm:text-5xl font-medium p-8 pb-5 sm:p-12 sm:pb-5 text-center md:text-left">
          {textContent.cardTitle.line1} <br className="hidden md:flex" />
          {textContent.cardTitle.line2} <br className="hidden md:flex" />
          {textContent.cardTitle.line3} <br className="hidden md:flex" />
          {textContent.cardTitle.line4}
        </h3>

        <div
          className="flex flex-col w-full h-56 bg-cover bg-top"
          style={{
            backgroundImage: 'url("./images/privacy-directory/globe.webp")',
          }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-start space-y-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-medium sm:font-medium">{textContent.body.title}</h1>

        {/* Paragraphs */}
        <div className="flex flex-col space-y-4">
          <p className="text-xl">{textContent.body.paragraph1}</p>
          <p className="text-xl">
            {textContent.body.paragraph2.regular}{' '}
            <span className="font-medium">{textContent.body.paragraph2.semibold}</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-row text-primary">
          <a href="mailto:hello@internxt.com" className="flex flex-row flex-wrap justify-start text-xl">
            <span className="flex flex-row items-end">{textContent.body.cta.line1}</span>
            &nbsp;
            <span className="flex flex-row items-end">
              {textContent.body.cta.line2}
              <CaretRight size={18} weight="bold" className="mb-0.75 ml-0.5" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SupportNGOsSection;
