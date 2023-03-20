import React from 'react';

const CtaSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-primary py-14">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="flex max-w-[570px] flex-col space-y-4 text-white">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl">{textContent.description}</p>
        </div>
        <button
          className="flex rounded-lg bg-white px-5 py-3 text-lg font-medium text-black"
          onClick={() => {
            window.scrollTo({
              top: document.getElementById('priceTable').offsetTop,
              behavior: 'smooth',
            });
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
