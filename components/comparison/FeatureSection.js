import React from 'react';

const FeatureSection = ({ textContent }) => (
  <section>
    <div className="flex flex-col items-center justify-center space-y-20 px-6 py-20 bg-gradient-to-b from-cool-gray-5 to-white">
      {/* Why start using Internxt */}
      <div className="flex flex-col items-center text-center space-y-5 md:space-y-10">
        <h3 className="text-3xl font-medium">{textContent.whyStartUsingInternxt.title}</h3>

        <h4 className="text-lg lg:text-xl text-cool-gray-80">
          {textContent.whyStartUsingInternxt.description.line1}
          <br className="hidden sm:inline-flex" /> {textContent.whyStartUsingInternxt.description.line2}
          <br className="hidden sm:inline-flex" /> {textContent.whyStartUsingInternxt.description.line3}
        </h4>
      </div>

      {/* Create account */}
      <div className="flex flex-col-reverse md:flex-row items-stretch justify-center bg-white shadow-subtle rounded-3xl overflow-hidden -mx-3 md:mx-0">
        <div className="flex flex-col items-start justify-start p-8 md:p-16 md:mr-6 space-y-8">
          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl md:text-3xl font-medium">
              {textContent.createAccount.title.line1}
              <br className="hidden md:inline-flex" /> {textContent.createAccount.title.line2}
              <br className="hidden md:inline-flex" /> {textContent.createAccount.title.line3}
            </h3>

            <p className="text-lg text-cool-gray-80">
              {textContent.createAccount.description.line1}
              <br className="hidden md:inline-flex" /> {textContent.createAccount.description.line2}
            </p>
          </div>

          <a
            id="get-started-link"
            href="https://drive.internxt.com/new"
            target="_top"
            rel="noreferrer"
            className="flex flex-col justify-center items-center px-6 py-2 w-full md:w-auto border border-transparent rounded-xl text-lg sm:text-base font-medium text-blue-60 bg-blue-10 focus:outline-none whitespace-nowrap"
          >
            {textContent.createAccount.cta}
          </a>
        </div>

        <div className="flex flex-col w-full md:w-64 lg:w-80 pt-10 md:pt-16 px-8 md:px-0">
          <img
            loading="lazy"
            className="object-cover object-left-top w-full h-full"
            src="/images/comparison/iphone-and-mac.webp"
            draggable="false"
            alt="Internxt Drive web and mobile apps"
          />
        </div>
      </div>

      {/* Why people love Internxt */}
      <div className="flex flex-col w-full items-center text-center space-y-5 md:space-y-10">
        <h3 className="text-3xl font-medium mb-4">{textContent.whyPeopleLoveInternxt.title}</h3>

        <div className="flex flex-col w-screen overflow-x-auto">
          <div className="relative flex flex-row items-stretch justify-center text-left space-x-5 md:space-x-10 px-6 mx-auto">
            {textContent.whyPeopleLoveInternxt.cards.map((card) => (
              <div
                className="flex flex-col flex-shrink-0 justify-between w-72 md:w-96 p-8 rounded-2xl bg-cool-gray-10 space-y-4"
                key={card.author}
              >
                <h3 className="text-lg">{`“${card.quote}”`}</h3>

                <div className="flex flex-col items-start justify-center text-sm">
                  <p>{card.author}</p>
                  <div className="flex flex-row justify-start items-center space-x-2 font-bold">
                    <span>—</span>
                    <span>{card.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
