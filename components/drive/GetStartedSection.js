import React from 'react'
import styles from './GetStartedSection.module.scss';

const GetStartedSection = ({ descriptions }) => {
  const description = descriptions["GetStartedSection"];

  return (
    <section className="text-white">
      <div className="content">
        <div className={`flex flex-col items-center justify-center w-full text-center flex-shrink-0 px-10 md:px-0 py-12 md:py-8`}>
            <h2 className={`mb-4 text-3xl font-semibold`}>
              {description.title.line1}<br className="sm:hidden"/> {description.title.line2}
            </h2>
            <p className={`mb-8 text-lg lg:text-xl`}>
            {description.subtitle.line1}<br className="hidden sm:inline-flex"/> {description.subtitle.line2}
            </p>
            <div>
              <a href="https://drive.internxt.com/new?" target="_blank">
                <button
                  type="button"
                  className="inline-flex justify-center w-auto items-center px-6 py-2 border border-transparent rounded-full text-base font-medium text-blue-60 bg-white active:bg-blue-10 focus:bg-blue-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-60 focus:ring-blue-20 transition-all duration-75"
                >
                  {description.cta1}
                </button>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;