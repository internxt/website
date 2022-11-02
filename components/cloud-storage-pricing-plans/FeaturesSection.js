import React from 'react';

const FeaturesSection = ({ textContent }) => (
  <section className="relative overflow-hidden bg-white">
    <div className="flex flex-col items-center space-y-10 px-4 py-10 md:space-y-20 lg:space-y-32 lg:py-20">
      {/* Detailed features with mockups */}
      <div className="flex flex-col items-center space-y-4 px-4 sm:space-y-0 md:space-y-32 md:px-0">
        {/* Section 1: "Ultra secure. Super private." */}
        <div className="flex w-full flex-row items-stretch justify-center lg:space-x-20">
          <div className="flex w-full flex-col space-y-4 pb-10 sm:pt-10 md:w-80 md:space-y-6 md:pb-32 lg:w-96">
            <div className="pointer-events-none relative -mx-8 mt-4 -mb-14 flex h-60 w-screen overflow-hidden md:hidden xs:-mb-24 xs:h-96">
              <div
                className="relative mx-auto hidden xs:flex"
                style={{
                  width: '557px',
                  height: '377px',
                  left: '56px',
                }}
              >
                <img
                  src="/images/landing/mockup_mac.webp"
                  draggable="false"
                  className="absolute h-full w-full"
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
                  src="/images/landing/mockup_mac.webp"
                  draggable="false"
                  className="absolute h-full w-full"
                  alt="Macbook Pro with Finder and Internxt Desktop apps open"
                />
              </div>
            </div>

            <h4 className="text-4xl font-medium md:text-5xl lg:text-6xl">
              {textContent.features.section1.title.line1}
              <br />
              {textContent.features.section1.title.line2}
            </h4>

            <h4 className="w-full text-xl font-medium lg:text-2xl">
              {textContent.features.section1.subtitle.line1}
              <br />
              {textContent.features.section1.subtitle.line2}
            </h4>
          </div>

          <div className="relative hidden w-60 md:flex lg:w-96">
            <div
              className="absolute"
              style={{
                width: '975px',
                height: '660px',
              }}
            >
              <img
                src="/images/landing/mockup_mac.webp"
                draggable="false"
                className="absolute h-full w-full"
                alt="Macbook Pro with Finder and Internxt Desktop apps open"
              />
            </div>
          </div>
        </div>

        {/* Section 2: "Available in all platforms." */}
        <div className="flex w-full flex-row items-stretch justify-center md:space-x-16 lg:space-x-20">
          <div className="relative hidden w-60 md:flex lg:w-96">
            <div
              className="absolute"
              style={{
                width: '574px',
                height: '615px',
              }}
            >
              <img
                src="/images/landing/mockup_phones.webp"
                draggable="false"
                className="absolute hidden h-full w-full lg:flex"
                alt="Samsung and Apple phones side by side with Internxt Drive App open"
                style={{
                  top: '-121px',
                  left: '-64px',
                }}
              />
              <img
                src="/images/landing/mockup_phones.webp"
                draggable="false"
                className="absolute flex h-full w-full lg:hidden"
                alt="Samsung and Apple phones side by side with Internxt Drive App open"
                style={{
                  top: '-121px',
                  left: '-220px',
                }}
              />
            </div>
          </div>

          <div className="flex w-full flex-col space-y-1 pb-10 sm:pt-10 md:w-80 md:space-y-2 md:pb-40 lg:w-96">
            <div className="relative -mb-5 flex h-60 w-full md:hidden xs:mb-0 xs:h-80">
              <div
                className="relative mx-auto hidden xs:flex"
                style={{
                  width: '346px',
                  height: '371px',
                  left: '36px',
                }}
              >
                <img
                  src="/images/landing/mockup_phones.webp"
                  draggable="false"
                  className="absolute h-full w-full"
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
                  src="/images/landing/mockup_phones.webp"
                  draggable="false"
                  className="absolute h-full w-full"
                  alt="Samsung and Apple phones side by side with Internxt Drive App open"
                />
              </div>
            </div>

            <h4 className="text-2xl font-medium">{textContent.features.section2.title}</h4>

            <h4 className="w-full text-xl font-medium text-gray-50 lg:text-2xl">
              {textContent.features.section2.subtitle}
            </h4>
          </div>
        </div>

        {/* Section 3: "Simple and easy." */}
        <div className="flex w-full flex-row items-stretch justify-center md:space-x-16 lg:space-x-20">
          <div className="flex w-full flex-col space-y-1 pb-6 sm:pt-10 md:w-80 md:space-y-2 md:pb-40 lg:w-96 lg:pb-20">
            <div className="relative -mb-2 flex h-52 w-full md:hidden xs:-mb-8 xs:h-80">
              <div
                className="relative mx-auto hidden xs:flex"
                style={{
                  width: '425px',
                  height: '323px',
                  left: '28px',
                }}
              >
                <img
                  src="/images/landing/mockup_ipad.webp"
                  draggable="false"
                  className="absolute h-full w-full"
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
                  src="/images/landing/mockup_ipad.webp"
                  draggable="false"
                  className="absolute h-full w-full"
                  alt="iPad Pro showing Internxt Drive Web app in Safari with a file preview open"
                />
              </div>
            </div>

            <h4 className="text-2xl font-medium">{textContent.features.section3.title}</h4>

            <h4 className="w-full text-xl font-medium text-gray-50 lg:text-2xl">
              {textContent.features.section3.subtitle.line1}
              <br />
              {textContent.features.section3.subtitle.line2}
              <br />
              {textContent.features.section3.subtitle.line3}
            </h4>
          </div>

          <div className="relative hidden w-60 md:flex lg:w-96">
            <div
              className="absolute"
              style={{
                width: '707px',
                height: '538px',
              }}
            >
              <img
                src="/images/landing/mockup_ipad.webp"
                draggable="false"
                className="absolute h-full w-full"
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
          <h4 className="text-lg font-medium md:text-xl">{textContent.getStartedSection.eyebrow}</h4>
          <h3 className="text-center text-4xl font-medium sm:text-5xl sm:font-medium md:text-6xl">
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
