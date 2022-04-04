import React from 'react';

const FaqSection = ({
  textContent
}) => (
  <section className="relative bg-gray-5">
    <div className="flex flex-col items-center px-6 py-10 lg:p-20 space-y-10 sm:space-y-20">

      {/* Title */}
      <h2 className="text-4xl lg:text-5xl font-semibold text-center">
        {textContent.title.line1}
        <br />
        {textContent.title.line2}
      </h2>

      {/* CTA Section */}
      <div className="flex flex-col items-center text-center p-6 md:p-10 rounded-3xl bg-white space-y-4 shadow-subtle">
        <h3 className="text-2xl sm:text-3xl font-medium">
          {textContent.getStartedSection.title.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.getStartedSection.title.line2}
        </h3>

        <span className="text-gray-50">{textContent.getStartedSection.subtitle}</span>

        <a
          href="#pricing"
          className="button-primary-rounded"
        >
          {textContent.getStartedSection.cta}
        </a>
      </div>

    </div>
  </section>
);

export default FaqSection;
