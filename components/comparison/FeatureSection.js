import React from 'react';

const FeatureSection = ({
  textContent
}) => (

  <section>
    <div className="flex flex-col items-center justify-center space-y-20 px-6 py-20 bg-gradient-to-b from-cool-gray-5 to-white">
      {/* Why start using Internxt */}
      <div className="flex flex-col items-center text-center space-y-10">
        <h3 className="text-3xl font-semibold">
          {textContent.whyStartUsingInternxt.title}
        </h3>

        <h4 className="text-lg lg:text-xl text-cool-gray-80">
          {textContent.whyStartUsingInternxt.description.line1}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.whyStartUsingInternxt.description.line2}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.whyStartUsingInternxt.description.line3}
        </h4>
      </div>

      {/* Create account */}
      <div className="flex flex-row items-stretch justify-center bg-white shadow-subtle rounded-3xl overflow-hidden">
        <div className="flex flex-col items-start justify-start p-16 mr-6 space-y-8">
          <div className="flex flex-col space-y-2">
            <h3 className="text-3xl font-semibold">
              {textContent.createAccount.title.line1}
              <br className="hidden sm:inline-flex" />
              {' '}
              {textContent.createAccount.title.line2}
              <br className="hidden sm:inline-flex" />
              {' '}
              {textContent.createAccount.title.line3}
            </h3>

            <p className="text-lg">
              {textContent.createAccount.description.line1}
              <br className="hidden sm:inline-flex" />
              {' '}
              {textContent.createAccount.description.line2}
            </p>
          </div>

          <a
            href="https://drive.internxt.com/new"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-center items-center px-6 py-2 border border-transparent rounded-xl text-lg sm:text-base font-semibold text-blue-60 bg-blue-10 focus:outline-none"
          >
            {textContent.createAccount.cta}
          </a>
        </div>

        <div className="flex flex-col w-80 pt-16">
          <img loading="lazy" className="object-cover object-left-top w-full h-full" src="/images/comparison/iphone-and-mac.webp" draggable="false" alt="Internxt Drive web and mobile apps" />
        </div>
      </div>

      {/* Why people love Internxt */}
      <div className="flex flex-col w-full items-center text-center space-y-10">
        <h3 className="text-3xl font-semibold mb-4">
          {textContent.whyPeopleLoveInternxt.title}
        </h3>

        <div className="flex flex-row items-start justify-center w-full text-left space-x-10">

          {textContent.whyPeopleLoveInternxt.cards.map((card) => (
            <div className="flex flex-col flex-shrink-0 w-80 p-8 rounded-2xl bg-cool-gray-5 space-y-4">
              <h3 className="text-lg">
                {`“${card.quote}”`}
              </h3>

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
  </section>

);

export default FeatureSection;
