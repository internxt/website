import React from 'react';

const HeroSection = ({ textContent }) => (
  <section className="relative bg-white">
    <div className="flex flex-col items-center space-y-8 p-6 sm:space-y-12 sm:p-10 lg:py-16 lg:px-8">
      {/* Fold */}
      <div className="flex flex-col items-center space-y-4 text-center md:space-y-8">
        {/* Title */}
        <div className="space-y flex flex-col">
          <h2 className="text text-base font-medium sm:text-xl">{textContent.eyebrow}</h2>
          <h1 className="text-3xl font-medium sm:text-4xl sm:font-medium lg:text-5xl">
            {textContent.title.line1} <br className="hidden md:flex" />
            {textContent.title.line2}
          </h1>
        </div>

        {/* Description */}
        <h2 className="text-lg lg:text-xl">
          {textContent.subtitle.line1} <br className="hidden md:flex" />
          {textContent.subtitle.line2} <br className="hidden md:flex" />
          {textContent.subtitle.line3}
        </h2>

        {/* CTA Section */}
        <div className="flex flex-col items-center space-y-3">
          <h4 className="text-gray-50">{textContent.getStartedSection.subtitle}</h4>

          <a href="#pricing" className="button-primary-rounded">
            {textContent.getStartedSection.cta}
          </a>
        </div>
      </div>

      {/* Features quick summary */}
      <div className="flex flex-col items-center space-y-10 text-center md:space-y-16">
        {/* Info cards */}
        <div className="flex w-full flex-col flex-wrap items-center justify-center md:flex-row">
          {/* Card 1: "All your photos. One gallery." */}
          <div className="my-3 flex w-full flex-col overflow-hidden rounded-xl bg-gray-5 md:m-3 md:w-72">
            <div className="flex h-52 w-full flex-col items-center justify-start">
              <img
                src="/images/landing/summary_photos.webp"
                draggable="false"
                className="-mt-8 h-52 w-52"
                alt="Internxt Photos gallery"
                style={{
                  // Custom image shadow
                  filter:
                    'drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.12)) drop-shadow(0px 16px 32px rgba(24, 24, 27, 0.06)) drop-shadow(0px 0px 8px rgba(24, 24, 27, 0.06)) drop-shadow(0px 8px 32px rgba(24, 24, 27, 0.16))',
                }}
              />
            </div>

            <div className="flex flex-col items-center p-8 pt-0 text-center text-2xl font-medium md:p-10 md:pt-0">
              {textContent.summaryCards.card1.line1}
              <br />
              {textContent.summaryCards.card1.line2}
            </div>
          </div>

          {/* Card 2: "Backup your computer. Access from everywhere." */}
          <div className="order-last my-3 flex w-full flex-col overflow-hidden rounded-xl bg-gray-5 md:m-3 md:w-96 lg:order-none">
            <div className="flex flex-col items-center p-8 pb-0 text-center text-2xl font-medium md:p-10 md:pb-0">
              {textContent.summaryCards.card2.line1} <br className="hidden sm:flex" />
              {textContent.summaryCards.card2.line2}
            </div>

            <div className="flex h-52 w-full flex-col items-start justify-start">
              <img
                src="/images/landing/summary_web.webp"
                draggable="false"
                className="mt-8 ml-8 h-52 w-96"
                alt="Internxt Drive Web application in Backups tab"
                style={{
                  // Custom image shadow
                  filter:
                    'drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.24)) drop-shadow(0px 32px 64px rgba(24, 24, 27, 0.06)) drop-shadow(0px 0px 8px rgba(24, 24, 27, 0.04)) drop-shadow(0px 12px 24px rgba(24, 24, 27, 0.06))',
                }}
              />
            </div>
          </div>

          {/* Card 3: "Keep your files always up to date." */}
          <div className="my-3 flex w-full flex-col overflow-hidden rounded-xl bg-gray-5 md:m-3 md:w-72">
            <div className="flex flex-col items-center p-8 pb-0 text-center text-2xl font-medium md:p-10 md:pb-0">
              {textContent.summaryCards.card3.line1}
              <br />
              {textContent.summaryCards.card3.line2}
            </div>

            <div className="flex h-52 w-full flex-col items-center justify-end">
              <img
                src="/images/landing/summary_desktop.webp"
                draggable="false"
                className="-mb-8 h-52 w-56"
                alt="Internxt Desktop widget showing files syncing with the cloud"
                style={{
                  // Custom image shadow
                  filter:
                    'drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.24)) drop-shadow(0px 32px 64px rgba(24, 24, 27, 0.06)) drop-shadow(0px 0px 8px rgba(24, 24, 27, 0.04)) drop-shadow(0px 12px 24px rgba(24, 24, 27, 0.06))',
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
