import React from 'react';

const SuiteSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className=" py-24">
        <div className="center flex flex-col items-center px-5 text-center">
          <h1 className="text-4xl font-semibold">{textContent.SuiteSection.title}</h1>
          <p className="pt-5 text-xl font-normal">{textContent.SuiteSection.subtitle}</p>
        </div>
        <div className="mt-16 flex-col space-y-12">
          <div className="flex flex-col items-center space-y-5 pt-10 md:ml-40  md:flex-row">
            <div className="flex flex-col items-center text-center md:mr-24 md:w-96 md:items-start md:justify-center md:text-left">
              <p className="text-3xl font-semibold">{textContent.SuiteSection.drive.title}</p>
              <p className="text-xl font-normal">{textContent.SuiteSection.drive.subtitle}</p>
            </div>
            <div className="flex h-auto rounded-3xl bg-teal p-32 sm:p-40 md:ml-auto md:h-96 md:w-2/5 md:rounded-none md:rounded-l-3xl"></div>
          </div>
          <div className="flex flex-col-reverse items-center space-y-5 pt-10 md:mr-40 md:flex-row">
            <div className="flex h-auto rounded-3xl bg-teal p-32 sm:p-40 md:mr-auto md:h-96 md:w-2/5 md:rounded-none md:rounded-r-3xl"></div>
            <div className="flex flex-col items-center text-center md:ml-24 md:w-96 md:items-start md:justify-center md:text-left">
              <p className="text-3xl font-semibold">{textContent.SuiteSection.photos.title}</p>
              <p className="text-xl font-normal">{textContent.SuiteSection.photos.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-5 pt-10 md:ml-40 md:flex-row">
            <div className="flex flex-col items-center text-center md:mr-24 md:w-96 md:items-start md:justify-center md:text-left">
              <p className="text-3xl font-semibold">{textContent.SuiteSection.send.title}</p>
              <p className="text-xl font-normal">{textContent.SuiteSection.send.subtitle}</p>
            </div>
            <div className="flex h-auto rounded-3xl bg-teal p-32 sm:p-40 md:ml-auto md:h-96 md:w-2/5 md:rounded-none md:rounded-l-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
