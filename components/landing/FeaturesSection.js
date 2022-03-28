import React from 'react';

const FeaturesSection = ({
  textContent
}) => (
  <section className="relative bg-white">
    <div className="flex flex-col items-center p-10 lg:p-16 space-y-10 sm:space-y-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-center">
        {textContent.title.line1}
        <br />
        {textContent.title.line2}
      </h2>

      <h3 className="text-5xl font-semibold text-center text-gray-20">...</h3>
    </div>
  </section>
);

export default FeaturesSection;
