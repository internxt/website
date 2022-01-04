import React from 'react';

const FeatureSection = ({
  textContent
}) => (

  <section>
    <div className="flex flex-col items-center justify-center space-y-20 px-6 py-20 bg-gradient-to-b from-cool-gray-5 to-white">
      {/* Why start using Internxt */}
      <div className="flex flex-col items-center text-center mb-8">
        <h3 className="text-3xl font-semibold mb-4">
          {textContent.whyStartUsingInternxt.title.line1}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.whyStartUsingInternxt.title.line2}
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
      <div className="flex flex-row items-stretch justify-center bg-white shadow-subtle-hard rounded-3xl overflow-hidden">
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

        <div className="flex flex-col w-80 bg-red-10">image goes here</div>
      </div>
    </div>
  </section>

);

export default FeatureSection;
