import React from 'react';

const ConversionTableSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-16 py-20 px-10">
        <div className="flex w-full max-w-[835px] flex-col space-y-4 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal text-gray-100">{textContent.description}</p>
        </div>
        <div>
          <p>Tabla</p>
        </div>
      </div>
    </section>
  );
};

export default ConversionTableSection;
