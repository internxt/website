import React from 'react';

const SuiteSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className=" py-24">
        <div className="center flex flex-col items-center">
          <h1 className="text-4xl font-semibold">{textContent.SuiteSection.title}</h1>
          <p className="text-xl font-normal">{textContent.SuiteSection.subtitle}</p>
        </div>
        <div className="mt-32 flex-col space-y-12">
          <div className="center ml-40 flex flex-row pt-10">
            <div className="flex flex-col justify-center">
              <p className="text-3xl font-semibold">{textContent.SuiteSection.drive.title}</p>
              <p className="text-xl font-normal">
                {textContent.SuiteSection.drive.subtitle}
                <br />
                {textContent.SuiteSection.drive.subtitle2}
                <br />
                {textContent.SuiteSection.drive.title}
              </p>
            </div>
            <div className="ml-auto flex h-96 w-1/2 rounded-l-3xl bg-teal"></div>
          </div>
          <div className="center mr-40 flex flex-row space-y-5 pt-10">
            <div className="mr-auto flex h-96 w-1/2 rounded-r-3xl bg-teal"></div>
            <div className="flex flex-col justify-center">
              <p className="text-3xl font-semibold">{textContent.SuiteSection.photos.title}</p>
              <p className="text-xl font-normal">
                {textContent.SuiteSection.photos.subtitle}
                <br />
                {textContent.SuiteSection.photos.subtitle2}
                <br />
                {textContent.SuiteSection.photos.subtitle3}
              </p>
            </div>
          </div>
          <div className="center ml-40 flex flex-row space-y-5 pt-10">
            <div className="flex flex-col justify-center">
              <p className="text-3xl font-semibold">{textContent.SuiteSection.send.title}</p>
              <p className="text-xl font-normal">
                {textContent.SuiteSection.send.subtitle}
                <br />
                {textContent.SuiteSection.send.subtitle2}
                <br />
                {textContent.SuiteSection.send.subtitle3}
              </p>
            </div>
            <div className="ml-auto flex h-96 w-1/2 rounded-l-3xl bg-teal"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
