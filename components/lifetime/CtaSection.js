import React from 'react';

const CtaSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-primary-dark">
      <div className="flex flex-col items-center justify-center px-20 py-12">
        <div className="flex flex-col text-center text-white">
          <p className="text-3xl font-semibold">{textContent.title}</p>
          <p className="pt-4 text-base font-normal">{textContent.description}</p>
        </div>
        <div
          onClick={() => {
            window.location.href = `#payment`;
          }}
          className="mt-8 flex max-w-[260px] cursor-pointer flex-col items-center rounded-full bg-white"
        >
          <p className="px-9 py-3 text-center font-sans text-lg text-primary">{textContent.cta}</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
