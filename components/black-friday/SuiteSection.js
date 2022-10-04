import React from 'react';

const SuiteSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className=" py-24">
        <div className="center flex flex-col items-center px-5 text-center">
          <h1 className="text-4xl font-semibold">{textContent.SuiteSection.title}</h1>
          <p className="pt-5 text-xl font-normal">{textContent.SuiteSection.subtitle}</p>
        </div>
        <div className="mx-10 mt-16 flex-col space-y-12 md:mx-0">
          <div className=" flex w-full flex-col-reverse items-center justify-center space-y-5 space-y-reverse pt-10 md:flex-row  md:space-y-0">
            <div className="flex flex-1 flex-col items-center justify-center self-stretch text-center md:flex-shrink-0 md:text-left">
              <p className="w-full text-3xl font-semibold lg:w-96">{textContent.SuiteSection.drive.title}</p>
              <p className="mt-5 w-full text-xl font-normal lg:w-96">{textContent.SuiteSection.drive.subtitle}</p>
            </div>
            <div className="flex-1">
              <img
                src="/images/special-offer/black-friday/Drive.png"
                className="aspect-[19/13] w-full rounded-2xl md:rounded-none md:rounded-l-2xl"
              />
            </div>
          </div>
          <div className=" flex w-full flex-col items-center justify-center space-y-5 pt-10 md:flex-row  md:space-y-0">
            <div className="flex-1">
              <img
                src="/images/special-offer/black-friday/Photos.png"
                className="aspect-[19/13] w-full rounded-2xl md:rounded-none md:rounded-r-2xl"
              />
            </div>
            <div className="mx-5 flex flex-1 flex-col items-center justify-center self-stretch text-center md:flex-shrink-0 md:text-left">
              <p className="w-full text-3xl font-semibold lg:w-96">{textContent.SuiteSection.photos.title}</p>
              <p className="mt-5 w-full text-xl font-normal lg:w-96">{textContent.SuiteSection.photos.subtitle}</p>
            </div>
          </div>
          <div className=" flex w-full flex-col-reverse items-center justify-center space-y-5 space-y-reverse pt-10 md:flex-row  md:space-y-0">
            <div className="flex flex-1 flex-col items-center justify-center self-stretch text-center md:flex-shrink-0 md:text-left ">
              <p className="w-full text-3xl font-semibold lg:w-96">{textContent.SuiteSection.send.title}</p>
              <p className="mt-5 w-full text-xl font-normal lg:w-96">{textContent.SuiteSection.send.subtitle}</p>
            </div>
            <div className="flex-1">
              <img
                src="/images/special-offer/black-friday/Send.png"
                className="aspect-[19/13] w-full rounded-2xl md:rounded-none md:rounded-l-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
