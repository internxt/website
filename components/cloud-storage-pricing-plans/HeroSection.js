import React from 'react';

const HeroSection = ({
  textContent
}) => (
  <section className="relative bg-white">
    <div className="flex flex-col items-center p-6 sm:p-10 lg:py-16 lg:px-8 space-y-8 sm:space-y-12">

      {/* Fold */}
      <div className="flex flex-col items-center space-y-4 md:space-y-8 text-center">

        {/* Title */}
        <div className="flex flex-col space-y">
          <h2 className="text-base sm:text-xl font-semibold text">{textContent.eyebrow}</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold sm:font-medium">
            {textContent.title.line1}
            {' '}
            <br className="hidden md:flex" />
            {textContent.title.line2}
          </h1>
        </div>

        {/* Description */}
        <h2 className="text-lg lg:text-xl">
          {textContent.subtitle.line1}
          {' '}
          <br className="hidden md:flex" />
          {textContent.subtitle.line2}
          {' '}
          <br className="hidden md:flex" />
          {textContent.subtitle.line3}
        </h2>

        {/* CTA Section */}
        <div className="flex flex-col items-center space-y-3">

          <h4 className="text-gray-50">{textContent.getStartedSection.subtitle}</h4>

          <a
            href="#pricing"
            className="button-primary-rounded"
          >
            {textContent.getStartedSection.cta}
          </a>

        </div>

      </div>

      {/* Features quick summary */}
      <div className="flex flex-col items-center text-center space-y-10 md:space-y-16">

        {/* Info cards */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center flex-wrap">

          {/* Card 1: "All your photos. One gallery." */}
          <div className="flex flex-col w-full md:w-72 bg-gray-5 rounded-xl overflow-hidden my-3 md:m-3">
            <div className="flex flex-col items-center justify-start w-full h-52">
              <img
                src="./images/landing/summary_photos.webp"
                draggable="false"
                className="w-52 h-52 -mt-8"
                alt="Internxt Photos gallery"
                style={{
                  // Custom image shadow
                  filter: 'drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.12)) drop-shadow(0px 16px 32px rgba(24, 24, 27, 0.06)) drop-shadow(0px 0px 8px rgba(24, 24, 27, 0.06)) drop-shadow(0px 8px 32px rgba(24, 24, 27, 0.16))',
                }}
              />
            </div>

            <div className="flex flex-col items-center p-8 pt-0 md:p-10 md:pt-0 text-center text-2xl font-semibold">
              {textContent.summaryCards.card1.line1}
              <br />
              {textContent.summaryCards.card1.line2}
            </div>
          </div>

          {/* Card 2: "Backup your computer. Access from everywhere." */}
          <div className="flex flex-col w-full md:w-96 bg-gray-5 rounded-xl overflow-hidden my-3 md:m-3 order-last lg:order-none">
            <div className="flex flex-col items-center p-8 pb-0 md:p-10 md:pb-0 text-center text-2xl font-semibold">
              {textContent.summaryCards.card2.line1}
              {' '}
              <br className="hidden sm:flex" />
              {textContent.summaryCards.card2.line2}
            </div>

            <div className="flex flex-col items-start justify-start w-full h-52">
              <img
                src="./images/landing/summary_web.webp"
                draggable="false"
                className="w-96 h-52 mt-8 ml-8"
                alt="Internxt Drive Web application in Backups tab"
                style={{
                  // Custom image shadow
                  filter: 'drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.24)) drop-shadow(0px 32px 64px rgba(24, 24, 27, 0.06)) drop-shadow(0px 0px 8px rgba(24, 24, 27, 0.04)) drop-shadow(0px 12px 24px rgba(24, 24, 27, 0.06))',
                }}
              />
            </div>
          </div>

          {/* Card 3: "Keep your files always up to date." */}
          <div className="flex flex-col w-full md:w-72 bg-gray-5 rounded-xl overflow-hidden my-3 md:m-3">
            <div className="flex flex-col items-center p-8 pb-0 md:p-10 md:pb-0 text-center text-2xl font-semibold">
              {textContent.summaryCards.card3.line1}
              <br />
              {textContent.summaryCards.card3.line2}
            </div>

            <div className="flex flex-col items-center justify-end w-full h-52">
              <img
                src="./images/landing/summary_desktop.webp"
                draggable="false"
                className="w-56 h-52 -mb-8"
                alt="Internxt Desktop widget showing files syncing with the cloud"
                style={{
                  // Custom image shadow
                  filter: 'drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.24)) drop-shadow(0px 32px 64px rgba(24, 24, 27, 0.06)) drop-shadow(0px 0px 8px rgba(24, 24, 27, 0.04)) drop-shadow(0px 12px 24px rgba(24, 24, 27, 0.06))',
                }}
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
);

export default HeroSection;
