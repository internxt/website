import React from 'react';

const HeroSection = ({ textContent }) => {

  return (
    <section>
      <div className="content">
        <div className={`flex flex-col mx-auto text-center py-40 md:py-52 px-10 text-2xl max-w-3xl`}>
          <p>"{textContent.description}"</p>
          <p className="pt-4 text-neutral-100 text-lg">Fran Villalba Segarra, CEO</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
