import React from 'react';
import { UilCheck, UilMinus } from '@iconscout/react-unicons';

const HeroSection = ({
  textContent
}) => {
  const table = {
    internxt: {
      line1: 'test'
    }
  };

  return (

    <section id="buy" className="relative flex flex-col w-full pt-16 bg-gradient-to-b from-white via-neutral-10 to-white">

      <div className="flex flex-col">

        {/* Header */}
        <div className="relative flex flex-col items-center justify-center pt-32 pb-16 bg-blue-60 text-white overflow-hidden z-20">
          <div className="relative flex flex-col items-center justify-center mb-8 z-10">
            <h1 className="text-6xl font-medium text-center mb-4">
              {textContent.title.line1}
              <br />
              {textContent.title.line2}
            </h1>

            <h2 className="text-lg text-center">
              {textContent.description}
            </h2>
          </div>

          <div className="relative flex flex-col items-center justify-center z-10">
            <a
              href="https://drive.internxt.com/new"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-xl text-lg sm:text-base font-semibold text-blue-60 bg-white focus:outline-none"
            >
              {textContent.cta}
            </a>

            <p className="text-xs text-center mt-1.5">
              {textContent.noCredirCardNeeded}
            </p>
          </div>

          <div className="absolute top-2/3 left-0 w-full h-full rounded-t-full-percentage transform scale-y-200 filter blur-4xl bg-blue-70" />
        </div>

        {/* Table */}
        <div className="flex flex-col items-center justify-start py-10 bg-white">
          <table className="relative border-collapse table-auto text-base text-center text-cool-gray-80 bg-none mb-20">

            {/* Competitors */}
            <thead className="sticky top-16 h-44 z-10 text-cool-gray-90">
              <tr className="relative z-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md">
                <th> </th>
                <th className="relative w-32 align-bottom p-0 text-lg font-medium">
                  <div className="flex flex-col items-center justify-center w-full h-32 bg-blue-10 rounded-t-2xl">
                    Internxt
                  </div>
                </th>
                <th className="relative w-24 align-bottom p-0 font-normal">
                  <div className="flex flex-col items-center justify-center w-full h-24 rounded-t-lg">
                    Others
                  </div>
                </th>
              </tr>
            </thead>

            {/* Section */}
            <thead className="sticky top-60 h-12 text-left text-cool-gray-90">
              <tr className="bg-cool-gray-10 font-medium h-12">
                <td className="rounded-l-lg px-6">Encryption & Security</td>
                <td />
                <td />
              </tr>
            </thead>

            {/* Rows */}
            <tbody className="divide-y divide-cool-gray-10">
              <tr className="h-12">
                <td className="text-left px-6">Encryption in data transit</td>
                <td className="bg-blue-10">
                  <div className="flex flex-col items-center justify-center h-full">
                    <UilCheck className="w-7 h-7 text-blue-50" />
                  </div>
                </td>
                <td>
                  <div className="flex flex-col items-center justify-center h-full">
                    <UilCheck className="w-7 h-7 text-cool-gray-40" />
                  </div>
                </td>
              </tr>
              <tr className="h-12">
                <td className="text-left px-6">End-to-end encrypted storage</td>
                <td className="bg-blue-10">
                  <div className="flex flex-col items-center justify-center h-full">
                    <UilCheck className="w-7 h-7 text-blue-50" />
                  </div>
                </td>
                <td>
                  <div className="flex flex-col items-center justify-center h-full">
                    <UilMinus className="w-7 h-7 text-cool-gray-20" />
                  </div>
                </td>
              </tr>
            </tbody>

            {/* Section */}
            <thead className="sticky top-60 h-12 text-left text-cool-gray-90">
              <tr className="bg-cool-gray-10 font-medium h-12">
                <td className="rounded-l-lg px-6">Storage & File management</td>
                <td />
                <td />
              </tr>
            </thead>

            {/* Rows */}
            <tbody className="divide-y divide-cool-gray-10">
              <tr className="h-12">
                <td className="text-left px-6">Sync any folders</td>
                <td className="bg-blue-10">
                  <div className="flex flex-col items-center justify-center h-full">
                    <UilCheck className="w-7 h-7 text-blue-50" />
                  </div>
                </td>
                <td>
                  <div className="flex flex-col items-center justify-center h-full">
                    <UilCheck className="w-7 h-7 text-cool-gray-40" />
                  </div>
                </td>
              </tr>
              <tr className="h-12">
                <td className="text-left px-6">Desktop sync app</td>
                <td className="relative bg-blue-10">
                  <div className="flex flex-col items-center justify-center h-full">
                    <UilCheck className="w-7 h-7 text-blue-50" />
                  </div>
                  <a className="absolute top-full left-0 h-10 w-full flex flex-col items-center justify-center rounded-b-2xl bg-blue-60 text-white">Start now</a>
                </td>
                <td>
                  <div className="flex flex-col items-center justify-center h-full">
                    <UilMinus className="w-7 h-7 text-cool-gray-20" />
                  </div>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>

    </section>

  );
};

export default HeroSection;
