import React from 'react';
import DownloadComponent from './DownloadComponent';

const HeroSection = ({
  textContent,
  download
}) => (
  <section className="flex flex-col w-full pt-36">
    <div className="flex flex-col items-center py-40">

      {/* Main title */}
      <div className="text-center">

        <h2 className="text-base font-semibold text-cool-gray-90 mb-2">
          INTERNXT PHOTOS
        </h2>

        <h1 className="text-6xl font-semibold text-cool-gray-90 mb-10">
          Your picture-perfect moments
          <br />
          under lock and key.
        </h1>

        <h3 className="text-base font-normal text-cool-gray-80 mb-20">
          Relive, share and keep your best memories safe all in one place.
          <br />
          With Internxt Photos focus on privacy and security
          <br />
          your photos are yours and yours alone.
        </h3>

      </div>

      {/* Main title Mockup */}
      <div
        className="py-72 rounded-xl bg-cool-gray-10 border border-cool-gray-20 mt-8 mb-12"
        style={{
          width: 720,
          height: 505
        }}
      />

      {/* Download links */}
      <DownloadComponent
        textContent={textContent.DownloadLinks}
        download={download}
      />

    </div>

  </section>
);

export default HeroSection;
