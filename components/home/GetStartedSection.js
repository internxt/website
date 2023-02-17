import React from 'react';
import { goToSignUpURL } from '../../lib/auth';

const GetStartedSection = ({ textContent }) => (
  <section className="text-white">
    <div className="content">
      <div className="flex w-full flex-shrink-0 flex-col justify-center px-10 py-12 text-center sm:items-center md:px-0">
        <h2 className="mb-4 text-3xl font-medium sm:text-2xl">
          {textContent.title.line1}
          <br className="sm:hidden" /> {textContent.title.line2}
        </h2>
        <h3 className="mb-8 text-lg text-blue-20">
          {textContent.subtitle.line1}
          <br className="hidden sm:inline-flex" /> {textContent.subtitle.line2}
        </h3>
        <div>
          <button
            onClick={() => goToSignUpURL()}
            id="get-started-link"
            className="inline-flex w-auto items-center justify-center rounded-full border border-transparent bg-white px-6 py-2 text-lg font-medium text-primary focus:outline-none sm:text-base"
          >
            {textContent.cta1}
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default GetStartedSection;
