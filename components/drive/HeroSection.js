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
          INTERNXT DRIVE
        </h2>

        <h1 className="text-6xl font-semibold text-cool-gray-90 mb-10">
          The safest place for all your
          <br />
          files, photos and more.
        </h1>

        <h3 className="text-base font-normal text-cool-gray-80 mb-20">
          Syncing, backing up and sharing your files in total privacy couldn’t be easier.
          <br />
          With Internxt Drive we focus in a user-friendly cloud storage with military-grade
          <br />
          encryption, so only you have the control over your files and data.
        </h3>

      </div>

      {/* Main title Mockup */}
      <div
        className="py-72 rounded-xl bg-cool-gray-10 border border-cool-gray-20 mt-8 mb-12"
        style={{
          width: 884,
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
