/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const SocialProofSection = ({ textContent, lang }) => (
  <section>
    <div className="content">
      <div className="flex w-full flex-shrink-0 flex-col items-center justify-center px-10 py-12 text-center md:px-0 md:py-24">
        <h3 className="mb-8 text-4xl font-medium">{textContent.title}</h3>

        <div className="mb-8 flex flex-row flex-wrap justify-around sm:px-10">
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img loading="lazy" src="../../logos/investors/ovhcloud.svg" draggable="false" alt="ovh cloud logo" />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img loading="lazy" src="../../logos/investors/telefonica.svg" draggable="false" alt="telefonica logo" />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img
              loading="lazy"
              src="../../logos/investors/theventurecity.svg"
              draggable="false"
              alt="the venture city logo"
            />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img
              loading="lazy"
              src="../../logos/investors/esade.webp"
              className="mx-auto h-7"
              draggable="false"
              alt="esade logo"
            />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img
              loading="lazy"
              src="../../logos/investors/notion_vc.webp"
              className="mx-auto h-4"
              draggable="false"
              alt="notion vc logo"
            />
          </div>
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <img
              loading="lazy"
              src="../../logos/investors/angelscapital.svg"
              draggable="false"
              alt="angels capital logo"
            />
          </div>
          {lang === 'es' && (
            <div
              className="flex h-20 w-2/5 flex-shrink-0 cursor-pointer items-center justify-center md:w-1/3 xl:w-auto xl:px-6"
              onClick={() => {
                window.open('https://opentrustedcloud.ovhcloud.com/es-es/', '_blank');
              }}
              target="_blank"
            >
              <img
                loading="lazy"
                src="../../logos/investors/open–trusted-cloud.png"
                draggable="false"
                alt="OTC logo"
                className="mx-auto h-[26px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default SocialProofSection;
