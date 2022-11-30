import React from 'react';

const CtaSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-primary-dark">
      <div className="flex flex-col items-center justify-center py-12 pb-7 lg:px-20">
        <div className="flex flex-col text-center text-white">
          <p className="text-3xl font-semibold">{textContent.title}</p>
          <p className="pt-4 text-base font-normal">{textContent.description}</p>
        </div>
        <div
          onClick={() => {
            window.location.href = `#payment`;
          }}
          className="flex max-w-[260px] cursor-pointer flex-col items-center rounded-full bg-white text-center"
        >
          <p className="px-9 py-3 text-lg font-medium text-primary">{textContent.cta}</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
