import React from 'react';
import NgoCard from './NgoCard';

const WikiSection = ({ textContent }) => (
  <section className="relative flex flex-col items-center bg-gray-1 px-6">
    <div className="flex w-full max-w-screen-lg flex-col items-center space-y-16 py-16 sm:space-y-24 sm:py-24">
      {/* Title */}
      <h2 className="text-center text-3xl font-medium text-gray-100 md:text-4xl lg:text-5xl">
        {textContent.title.line1} <br className="hidden sm:flex" />
        {textContent.title.line2}
      </h2>

      {/* Cards */}
      <div className="hidden flex-row space-x-8 md:flex">
        {/* Column 1 */}
        <div className="flex w-full flex-col items-stretch space-y-8">
          {textContent.ngos.map((ngo, i) => (
            <React.Fragment key={ngo.id}>
              {i % 2 === 0 && <NgoCard id={ngo.id} name={ngo.name} short={ngo.short} description={ngo.description} />}
            </React.Fragment>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex w-full flex-col items-stretch space-y-8">
          {textContent.ngos.map((ngo, i) => (
            <React.Fragment key={ngo.id}>
              {i % 2 === 1 && <NgoCard id={ngo.id} name={ngo.name} short={ngo.short} description={ngo.description} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Cards (mobile) */}
      <div className="flex w-full flex-col items-stretch space-y-6 md:hidden">
        {textContent.ngos.map((ngo) => (
          <NgoCard
            key={`${ngo.id}-mobile`}
            id={ngo.id}
            name={ngo.name}
            short={ngo.short}
            description={ngo.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WikiSection;
