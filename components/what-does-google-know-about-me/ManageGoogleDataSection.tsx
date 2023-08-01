import Image from 'next/image';
import { Trash } from '@phosphor-icons/react';
import RenderDescription from '../shared/RenderDescription';

const ManageGoogleDataSection = ({ textContent }) => {
  const numberedList = textContent.section2.numberedList.map((item) => (
    <li key={item} className="text-lg leading-normal text-gray-80">
      {item}
    </li>
  ));
  return (
    <section className="overflow-hidden px-5 py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-2xl flex-col space-y-16">
          <div className="flex flex-col items-center space-y-3 text-center lg:items-start lg:text-start">
            <Trash size={48} className="text-primary" />
            <p className="text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</p>
          </div>
          <p className="text-lg text-gray-80">{textContent.description}</p>
          {/* Fisrt Section */}
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-medium text-gray-100">{textContent.section1.title}</p>
            <RenderDescription description={textContent.section1.description} />
          </div>
        </div>
        <img
          src="/images/what-does-google-know-about-me/google-privacy-activity-settings.png"
          alt="google privacy activity settings"
          draggable={false}
          className="w-full max-w-2xl"
        />
        {/* Second Section */}
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium text-gray-100">{textContent.section2.title}</p>
          <p className="text-lg text-gray-80">{textContent.section2.description}</p>
        </div>
        <div className="flex max-w-2xl flex-col">
          <ul className="list-decimal space-y-3 pt-6 pl-6">{numberedList}</ul>
        </div>
        <img
          src="/images/what-does-google-know-about-me/google-activity-settings.png"
          alt="google activity settings"
          draggable={false}
          className="w-full max-w-2xl"
        />

        <img
          onClick={() => {
            window.open('https://drive.internxt.com/new', '_blank');
          }}
          className="w-full max-w-[897px] cursor-pointer"
          src="/images/what-does-google-know-about-me/Internxt_CTA_WhatGoogleKnows_EN.png"
          alt="google activity settings"
          draggable={false}
        />
        <div className="flex max-w-2xl flex-col space-y-3 py-16">
          {/* Third Section */}
          <p className="text-2xl font-medium text-gray-100">{textContent.section3.title}</p>
          <p className="text-lg text-gray-80">{textContent.section3.description}</p>
        </div>
        <img
          src="/images/what-does-google-know-about-me/google-activity-controls.png"
          alt="google activity controls"
          draggable={false}
          className="w-full max-w-2xl"
        />
        {/* Forth Section */}
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium text-gray-100">{textContent.section4.title}</p>
          <RenderDescription description={textContent.section4.description} />
        </div>
        {/* Fifth Section */}
        <div className="flex max-w-2xl flex-col space-y-3 py-16">
          <p className="text-2xl font-medium text-gray-100">{textContent.section5.title}</p>
          <p className="text-lg text-gray-80">{textContent.section5.description}</p>
        </div>
        {/* Sixth Section */}
        <div className="flex max-w-2xl flex-col space-y-3">
          <p className="text-2xl font-medium text-gray-100">{textContent.section6.title}</p>
          <RenderDescription description={textContent.section6.description} />
        </div>
        <img
          src="/images/what-does-google-know-about-me/google-security-settings.png"
          alt="google security settings"
          className="w-full max-w-md pt-16"
          draggable={false}
        />
        <img
          onClick={() => {
            window.open('https://drive.internxt.com/new', '_blank');
          }}
          src="/images/what-does-google-know-about-me/Internxt_CTA_WhatGoogleKnowsAboutUs_EN.png"
          alt="Internxt CTA"
          className="w-full max-w-[897px] cursor-pointer"
          draggable={false}
        />
        {/* Seventh Section */}
        <div className="flex max-w-2xl flex-col space-y-3 py-16">
          <p className="text-2xl font-medium text-gray-100">{textContent.section7.title}</p>
          <RenderDescription description={textContent.section7.description} />
        </div>
        <img
          src="/images/what-does-google-know-about-me/google-access-personal-account.png"
          alt="google access personal account"
          draggable={false}
          className="w-full max-w-2xl"
        />
        {/* Eighth Section */}
        <div className="flex max-w-2xl flex-col space-y-3 pb-16">
          <p className="text-2xl font-medium text-gray-100">{textContent.section8.title}</p>
          <p className="text-lg text-gray-80">{textContent.section8.description}</p>
        </div>
        <img
          src="/images/what-does-google-know-about-me/google-search-privacy-settings.png"
          alt="google search privacy settings"
          draggable={false}
          className="w-full max-w-2xl"
        />
        {/* Ninth Section */}
        <div className="flex max-w-2xl flex-col space-y-3 pb-16">
          <p className="text-2xl font-medium text-gray-100">{textContent.section9.title}</p>
          <RenderDescription description={textContent.section9.description} />
        </div>
        <img
          src="/images/what-does-google-know-about-me/google-privacy-settings-options.png"
          alt="google privacy settings options"
          draggable={false}
          className="w-full max-w-2xl"
        />
      </div>
    </section>
  );
};

export default ManageGoogleDataSection;
