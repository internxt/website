import React from 'react';

const FeaturesSection = ({ textContent }) => (
  <section className="relative bg-white overflow-hidden">
    <div className="flex flex-col items-center px-4 py-10 lg:py-20 space-y-10 md:space-y-20 lg:space-y-32">
      {/* Detailed features with mockups */}
      <div className="flex flex-col items-center space-y-4 sm:space-y-0 md:space-y-32 px-4 md:px-0">
        {/* Section 1: "Ultra secure. Super private." */}
        <div className="flex flex-row w-full items-stretch justify-center lg:space-x-20">
          <div className="flex flex-col w-full md:w-80 lg:w-96 sm:pt-10 pb-10 md:pb-32 space-y-4 md:space-y-6">
            <div className="relative w-screen mt-4 -mx-8 h-60 -mb-14 xs:h-96 xs:-mb-24 flex md:hidden overflow-hidden pointer-events-none">
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

            <h4 className="text-4xl md:text-5xl lg:text-6xl font-medium">
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

          <div className="flex flex-col w-full md:w-80 lg:w-96 sm:pt-10 pb-10 md:pb-40 space-y-1 md:space-y-2">
            <div className="relative w-full h-60 -mb-5 xs:h-80 xs:mb-0 flex md:hidden">
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

            <h4 className="text-2xl font-medium">{textContent.features.section2.title}</h4>

            <h4 className="text-xl lg:text-2xl font-medium text-gray-50 w-full">
              {textContent.features.section2.subtitle}
            </h4>
          </div>
        </div>

        {/* Section 3: "Simple and easy." */}
        <div className="flex flex-row w-full items-stretch justify-center md:space-x-16 lg:space-x-20">
          <div className="flex flex-col w-full md:w-80 lg:w-96 sm:pt-10 pb-6 md:pb-40 lg:pb-20 space-y-1 md:space-y-2">
            <div className="relative w-full h-52 -mb-2 xs:h-80 xs:-mb-8 flex md:hidden">
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

            <h4 className="text-2xl font-medium">{textContent.features.section3.title}</h4>

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
                  top: '-121px',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center space-y-6 md:space-y-4">
        <div className="flex flex-col items-center">
          <h4 className="text-lg md:text-xl font-medium">{textContent.getStartedSection.eyebrow}</h4>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-medium sm:font-medium text-center">
            {textContent.getStartedSection.title}
          </h3>
        </div>

        <a href="#pricing" className="button-primary-rounded">
          {textContent.getStartedSection.cta}
        </a>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
