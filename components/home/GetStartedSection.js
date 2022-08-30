import React from 'react';
import openAuthDialog from '../../lib/authDialog';

const GetStartedSection = ({ textContent }) => (
  <section className="text-white">
    <div className="content">
      <div className="flex flex-col sm:items-center justify-center w-full text-left sm:text-center flex-shrink-0 px-10 md:px-0 py-12">
        <h2 className="mb-4 text-3xl sm:text-2xl font-medium">
          {textContent.title.line1}
          <br className="sm:hidden" /> {textContent.title.line2}
        </h2>
        <h3 className="mb-8 text-lg text-blue-20">
          {textContent.subtitle.line1}
          <br className="hidden sm:inline-flex" /> {textContent.subtitle.line2}
        </h3>
        <div>
          <button
            onClick={() => openAuthDialog('signup')}
            id="get-started-link"
            className="inline-flex justify-center w-auto items-center px-6 py-2 border border-transparent rounded-full text-lg sm:text-base font-medium text-primary bg-white focus:outline-none"
          >
            {textContent.cta1}
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default GetStartedSection;
