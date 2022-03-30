import React from 'react';

const FeaturesSection = ({
  textContent
}) => (
  <section className="relative bg-white overflow-hidden">
    <div className="flex flex-col items-center px-4 py-10 lg:py-20 space-y-10 md:space-y-20 lg:space-y-32">

      {/* Features quick summary */}
      <div className="flex flex-col items-center text-center space-y-10 md:space-y-16">

        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-semibold text-center">
          {textContent.title.line1}
          <br />
          {textContent.title.line2}
        </h2>

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
              <br />
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

      {/* Detailed features with mockups */}
      <div className="flex flex-col items-center space-y-4 sm:space-y-0 md:space-y-32 px-4 md:px-0">

        {/* Section 1: "Ultra secure. Super private." */}
        <div className="flex flex-row w-full items-stretch justify-center lg:space-x-20">

          <div className="flex flex-col w-full md:w-80 lg:w-96 sm:pt-10 pb-16 md:pb-32 space-y-4 md:space-y-6">

            <div className="relative w-screen mt-4 -mx-8 h-64 -mb-14 xs:h-96 xs:-mb-24 flex md:hidden overflow-hidden pointer-events-none">
              <div
                className="relative mx-auto hidden xs:flex"
                style={{
                  width: '557px',
                  height: '377px',
                  left: '56px',
                }}
              >
                <img
                  src="./images/landing/mockup_mac.webp"
                  draggable="false"
                  className="absolute w-full h-full"
                  alt="Macbook Pro with Finder and Internxt Desktop apps open"
                />
              </div>
              <div
                className="relative mx-auto flex xs:hidden"
                style={{
                  width: '371px',
                  height: '250px',
                  left: '32px',
                }}
              >
                <img
                  src="./images/landing/mockup_mac.webp"
                  draggable="false"
                  className="absolute w-full h-full"
                  alt="Macbook Pro with Finder and Internxt Desktop apps open"
                />
              </div>
            </div>

            <h4 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
              {textContent.features.section1.title.line1}
              <br />
              {textContent.features.section1.title.line2}
            </h4>

            <h4 className="text-xl lg:text-2xl font-medium w-full">
              {textContent.features.section1.subtitle.line1}
              <br />
              {textContent.features.section1.subtitle.line2}
            </h4>
          </div>

          <div className="relative w-60 lg:w-96 hidden md:flex">
            <div
              className="absolute"
              style={{
                width: '975px',
                height: '660px',
              }}
            >
              <img
                src="./images/landing/mockup_mac.webp"
                draggable="false"
                className="absolute w-full h-full"
                alt="Macbook Pro with Finder and Internxt Desktop apps open"
              />
            </div>
          </div>

        </div>

        {/* Section 2: "Available in all platforms." */}
        <div className="flex flex-row w-full items-stretch justify-center md:space-x-16 lg:space-x-20">

          <div className="relative w-60 lg:w-96 hidden md:flex">
            <div
              className="absolute"
              style={{
                width: '574px',
                height: '615px',
              }}
            >
              <img
                src="./images/landing/mockup_phones.webp"
                draggable="false"
                className="absolute w-full h-full hidden lg:flex"
                alt="Samsung and Apple phones side by side with Internxt Drive App open"
                style={{
                  top: '-121px',
                  left: '-64px',
                }}
              />
              <img
                src="./images/landing/mockup_phones.webp"
                draggable="false"
                className="absolute w-full h-full flex lg:hidden"
                alt="Samsung and Apple phones side by side with Internxt Drive App open"
                style={{
                  top: '-121px',
                  left: '-220px',
                }}
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-80 lg:w-96 sm:pt-10 pb-16 md:pb-48 space-y-1 md:space-y-2">

            <div className="relative w-full h-60 -mb-3 xs:h-80 xs:mb-6 flex md:hidden">
              <div
                className="relative mx-auto hidden xs:flex"
                style={{
                  width: '346px',
                  height: '371px',
                  left: '36px',
                }}
              >
                <img
                  src="./images/landing/mockup_phones.webp"
                  draggable="false"
                  className="absolute w-full h-full"
                  alt="Samsung and Apple phones side by side with Internxt Drive App open"
                />
              </div>
              <div
                className="relative mx-auto flex xs:hidden"
                style={{
                  width: '231px',
                  height: '247px',
                  left: '20px',
                }}
              >
                <img
                  src="./images/landing/mockup_phones.webp"
                  draggable="false"
                  className="absolute w-full h-full"
                  alt="Samsung and Apple phones side by side with Internxt Drive App open"
                />
              </div>
            </div>

            <h4 className="text-2xl font-medium">
              {textContent.features.section2.title}
            </h4>

            <h4 className="text-xl lg:text-2xl font-medium text-gray-50 w-full">
              {textContent.features.section2.subtitle}
            </h4>
          </div>

        </div>

        {/* Section 3: "Simple and easy." */}
        <div className="flex flex-row w-full items-stretch justify-center md:space-x-16 lg:space-x-20">

          <div className="flex flex-col w-full md:w-80 lg:w-96 sm:pt-10 pb-16 md:pb-40 lg:pb-20 space-y-1 md:space-y-2">

            <div className="relative w-full h-52 xs:h-80 flex md:hidden">
              <div
                className="relative mx-auto hidden xs:flex"
                style={{
                  width: '425px',
                  height: '323px',
                  left: '28px',
                }}
              >
                <img
                  src="./images/landing/mockup_ipad.webp"
                  draggable="false"
                  className="absolute w-full h-full"
                  alt="iPad Pro showing Internxt Drive Web app in Safari with a file preview open"
                />
              </div>
              <div
                className="relative mx-auto flex xs:hidden"
                style={{
                  width: '283px',
                  height: '215px',
                  left: '20px',
                }}
              >
                <img
                  src="./images/landing/mockup_ipad.webp"
                  draggable="false"
                  className="absolute w-full h-full"
                  alt="iPad Pro showing Internxt Drive Web app in Safari with a file preview open"
                />
              </div>
            </div>

            <h4 className="text-2xl font-medium">
              {textContent.features.section3.title}
            </h4>

            <h4 className="text-xl lg:text-2xl font-medium text-gray-50 w-full">
              {textContent.features.section3.subtitle.line1}
              <br />
              {textContent.features.section3.subtitle.line2}
              <br />
              {textContent.features.section3.subtitle.line3}
            </h4>
          </div>

          <div className="relative w-60 lg:w-96 hidden md:flex">
            <div
              className="absolute"
              style={{
                width: '707px',
                height: '538px',
              }}
            >
              <img
                src="./images/landing/mockup_ipad.webp"
                draggable="false"
                className="absolute w-full h-full"
                alt="iPad Pro showing Internxt Drive Web app in Safari with a file preview open"
                style={{
                  top: '-121px'
                }}
              />
            </div>
          </div>

        </div>

      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center space-y-6 md:space-y-4">

        <div className="flex flex-col items-center">
          <h4 className="text-lg md:text-xl font-semibold">{textContent.getStartedSection.eyebrow}</h4>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold sm:font-medium text-center">{textContent.getStartedSection.title}</h3>
        </div>

        <button
          type="button"
          onClick={() => { window.scrollTo(0, 0); }}
          className="button-primary-rounded"
        >
          {textContent.getStartedSection.cta}
        </button>

      </div>

    </div>
  </section>
);

export default FeaturesSection;
