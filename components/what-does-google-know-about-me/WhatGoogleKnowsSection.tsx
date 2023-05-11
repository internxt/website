import { MagnifyingGlass } from 'phosphor-react';
import RenderDescription from '../shared/RenderDescription';

const WhatGoogleKnowsSection = ({ textContent }) => {
  const numberedList = textContent.section1.numberedList.map((item, index) => (
    <li key={index} className="text-lg leading-normal text-gray-80">
      {item}
    </li>
  ));

  const eightSectionList = textContent.section8.numberedList.map((item, index) => (
    <li key={index} className="text-lg leading-normal text-gray-80">
      <p className="text-lg font-semibold text-gray-100">
        {item.title}: <span className="font-normal text-gray-80">{item.description}</span>
      </p>
    </li>
  ));

  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-2xl flex-col space-y-16">
          <div className="flex flex-col space-y-9">
            <div className="flex flex-col space-y-3">
              <MagnifyingGlass size={48} className="text-primary" />
              <p className="text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</p>
            </div>
            <p className="text-lg text-gray-80">{textContent.description}</p>
          </div>
          {/* First section */}
          <div className="flex flex-col space-y-3 text-start">
            <p className="text-2xl font-medium text-gray-100">{textContent.section1.title}</p>
            <ul className="list-decimal space-y-3 pl-6">{numberedList}</ul>
          </div>
          <p className="text-lg text-gray-80">{textContent.section1.footer}</p>
        </div>

        <img
          src="/images/what-does-google-know-about-me/google-privacy-settings.webp"
          alt="google privacy settings"
          className="pt-16"
        />

        <div className="flex max-w-2xl flex-col space-y-16">
          {/* Second section */}
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.section2.title}</p>
            <RenderDescription description={textContent.section2.description} />
          </div>
          {/* Third section */}
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.section3.title}</p>
            <RenderDescription description={textContent.section3.description} />
          </div>
        </div>
        <img
          onClick={() => {
            window.open('https://drive.internxt.com/new', '_blank');
          }}
          src="/images/what-does-google-know-about-me/Internxt_CTA_WhatGoogleKnows_EN.webp"
          alt="google privacy settings"
          className="w-full max-w-4xl cursor-pointer py-16"
        />
        <div className="flex max-w-2xl flex-col space-y-16">
          {/* Forth section */}
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.section4.title}</p>
            <RenderDescription description={textContent.section4.description} />
          </div>
          {/* Firth section */}
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.section5.title}</p>
            <p className="text-lg text-gray-80">{textContent.section5.description}</p>
          </div>
        </div>
        <img
          src="/images/what-does-google-know-about-me/google-location-settings.webp"
          alt="google location privacy settings"
          className="pt-16"
        />
        {/* Sixth section */}
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium text-gray-100">{textContent.section6.title}</p>
          <RenderDescription description={textContent.section6.description} />
        </div>
        <img
          src="/images/what-does-google-know-about-me/google-account-privacy-settings.webp"
          alt="google privacy settings"
          className="pt-16"
        />
        <div className="flex max-w-2xl flex-col space-y-16">
          {/* Seventh section */}
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.section7.title}</p>
            <RenderDescription description={textContent.section7.description} />
          </div>
          {/* Eighth section */}
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.section8.title}</p>
            <p className="text-lg text-gray-80">{textContent.section8.description}</p>
          </div>
          <div className="flex flex-col">
            <ul className="list-decimal space-y-3 pl-6">{eightSectionList}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatGoogleKnowsSection;
