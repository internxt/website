import React from 'react';

const HeroSection = ({ textContent }) => (
  <div className="flex-col items-start justify-center w-full bg-gradient-to-t from-black via-black to-white pb-56 md:pb-12 lg:pb-0 transition-all duration-150 ease-in-out">
    <div className="relative flex-col max-h-screen md:overflow-hidden">
      <div className="relative pt-24 md:pt-6">
        <div className="absolute top-0 flex-col justify-end w-full h-full max-h-screen">
          <div className="absolute bottom-0 flex h-1/3 md:h-1/2 xl:h-2/5 w-full bg-gradient-to-t from-black to-transparent transition-all duration-150 ease-in-out" />
          <div className="absolute top-24 md:top-6 flex h-12 md:h-24 w-full bg-gradient-to-b from-white to-transparentw" />
          <div className="absolute top-0 flex h-24 md:h-6 w-full bg-white" />
        </div>
        <img loading="lazy" src="../../images/about/team/Internxt-family-crop.webp" draggable="false" className="w-full" />
      </div>
      <div className="absolute bottom-0 flex flex-col justify-end w-full h-full text-left sm:text-center -mb-64 md:-mb-12 lg:mb-0 px-8 pb-8 transition-all duration-150 ease-in-out">
        <h1 className="text-4xl sm:text-6xl font-medium text-white mb-6">{textContent.theTeam}</h1>
        <p className="mb-12 lg:text-lg text-neutral-40 md:text-white">
          {textContent.description.line1}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.description.line2}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.description.line3}
        </p>
      </div>
    </div>
  </div>
);

export default HeroSection;

/*
    <section>
      <div className="content">

        <div className={`flex flex-col mx-auto text-center py-40 md:py-52 px-10 text-2xl max-w-3xl`}>
          <p>"{textContent.description}"</p>
          <p className="pt-4 text-neutral-100 text-lg">Fran Villalba Segarra, CEO</p>
        </div>
      </div>
    </section>
*/
