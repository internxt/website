import React from 'react';

const HeroSection = ({ textContent }) => {

  return (
    <section>
      <div className="content">
        <p className={`py-80 text-lg lg:text-xl`}>
          {textContent.description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
