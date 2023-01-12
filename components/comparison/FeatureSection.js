import React from 'react';

const FeatureSection = ({ textContent }) => {
  const splitInternxtFromDescriptionPart1 = textContent.whyStartUsingInternxt.description.line3.split('Internxt')[0];
  const splitInternxtFromDescriptionPart2 = textContent.whyStartUsingInternxt.description.line3.split('Internxt')[1];
  const internxt = textContent.whyStartUsingInternxt.description.line3.substr(
    textContent.whyStartUsingInternxt.description.line3.indexOf('Internxt'),
    8,
  );

  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-20 bg-gradient-to-b from-cool-gray-5 to-white px-6 py-20">
        {/* Why start using Internxt */}
        <div className="flex flex-col items-center space-y-5 text-center md:space-y-10">
          <h3 className="text-3xl font-medium">{textContent.whyStartUsingInternxt.title}</h3>

          <h4 className="text-lg text-cool-gray-80 lg:text-xl">
            {textContent.whyStartUsingInternxt.description.line1}
            <br className="hidden sm:inline-flex" /> {textContent.whyStartUsingInternxt.description.line2}
            <br className="hidden sm:inline-flex" /> {splitInternxtFromDescriptionPart1}
            <b
              onClick={() => window.open('https://internxt.com', '_self')}
              className="cursor-pointer underline underline-offset-4"
            >
              {internxt}
            </b>
            {splitInternxtFromDescriptionPart2}
          </h4>
        </div>

        {/* Create account */}
        <div className="-mx-3 flex flex-col-reverse items-stretch justify-center overflow-hidden rounded-3xl bg-white shadow-subtle md:mx-0 md:flex-row">
          <div className="flex flex-col items-start justify-start space-y-8 p-8 md:mr-6 md:p-16">
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl font-medium md:text-3xl">
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
              className="flex w-full flex-col items-center justify-center whitespace-nowrap rounded-xl border border-transparent bg-blue-10 px-6 py-2 text-lg font-medium text-primary focus:outline-none sm:text-base md:w-auto"
            >
              {textContent.createAccount.cta}
            </a>
          </div>

          <div className="flex w-full flex-col px-8 pt-10 md:w-64 md:px-0 md:pt-16 lg:w-80">
            <img
              loading="lazy"
              className="h-full w-full object-cover object-left-top"
              src="/images/comparison/iphone-and-mac.webp"
              draggable="false"
              alt="Internxt Drive web and mobile apps"
            />
          </div>
        </div>

        {/* Why people love Internxt */}
        <div className="flex w-full flex-col items-center space-y-5 text-center md:space-y-10">
          <h3 className="mb-4 text-3xl font-medium">{textContent.whyPeopleLoveInternxt.title}</h3>

          <div className="flex w-screen flex-col overflow-x-auto">
            <div className="relative mx-auto flex flex-row items-stretch justify-center space-x-5 px-6 text-left md:space-x-10">
              {textContent.whyPeopleLoveInternxt.cards.map((card) => (
                <div
                  className="flex w-72 flex-shrink-0 flex-col justify-between space-y-4 rounded-2xl bg-cool-gray-10 p-8 md:w-96"
                  key={card.author}
                >
                  <h3 className="text-lg">{`“${card.quote}”`}</h3>

                  <div className="flex flex-col items-start justify-center text-sm">
                    <p>{card.author}</p>
                    <div className="flex flex-row items-center justify-start space-x-2 font-bold">
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
};

export default FeatureSection;
