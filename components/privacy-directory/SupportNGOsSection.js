import React from 'react';
import { CaretRight } from '@phosphor-icons/react';

const SupportNGOsSection = ({ textContent }) => (
  <section className="relative flex flex-col items-center bg-white px-6">
    <div className="flex w-full max-w-screen-lg flex-col items-center justify-center space-y-10 py-16 sm:py-24 md:flex-row md:space-y-0 md:space-x-10 lg:space-x-20 lg:px-0">
      {/* Card */}
      <div className="flex w-full flex-shrink-0 flex-col overflow-hidden rounded-3xl bg-black text-white md:w-96">
        <h3 className="p-8 pb-5 text-center text-4xl font-medium sm:p-12 sm:pb-5 sm:text-5xl md:text-left">
          {textContent.cardTitle.line1} <br className="hidden md:flex" />
          {textContent.cardTitle.line2} <br className="hidden md:flex" />
          {textContent.cardTitle.line3} <br className="hidden md:flex" />
          {textContent.cardTitle.line4}
        </h3>

        <div
          className="flex h-56 w-full flex-col bg-cover bg-top"
          style={{
            backgroundImage: 'url("/images/privacy-directory/globe.webp")',
          }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-start space-y-6">
        {/* Title */}
        <h2 className="text-base sm:font-semibold lg:text-4xl">{textContent.body.title}</h2>

        {/* Paragraphs */}
        <div className="flex max-w-[387px] flex-col space-y-4">
          <p className="text-lg">{textContent.body.paragraph1}</p>
          <p className="text-lg">
            {textContent.body.paragraph2.regular} <span>{textContent.body.paragraph2.semibold}</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-row text-primary">
          <a
            href="mailto:hello@internxt.com"
            className="flex flex-row flex-wrap items-center justify-start text-lg font-semibold"
          >
            <span className="flex flex-row items-end">{textContent.body.cta.line1}</span>
            &nbsp;
            <span className="flex flex-row items-end">
              {textContent.body.cta.line2}
              <CaretRight size={18} weight="bold" className="mb-1 ml-0.5" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SupportNGOsSection;
