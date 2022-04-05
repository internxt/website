import React from 'react';
import NgoCard from './NgoCard';

const WikiSection = ({
  textContent
}) => (
  <section className="relative flex flex-col items-center bg-gray-5 px-6">
    <div className="flex flex-col items-center w-full max-w-screen-lg py-16 sm:py-24 space-y-16 sm:space-y-24">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center">
        {textContent.title.line1}
        {' '}
        <br className="hidden sm:flex" />
        {textContent.title.line2}
      </h2>

      {/* Cards */}
      <div className="hidden md:flex flex-row space-x-8">

        {/* Column 1 */}
        <div className="flex flex-col w-full items-stretch space-y-8">
          {textContent.ngos.map((ngo, i) => (
            <React.Fragment key={ngo.id}>
              {i % 2 === 0 && (
                <NgoCard
                  id={ngo.id}
                  name={ngo.name}
                  short={ngo.short}
                  description={ngo.description}
                  url={ngo.url}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col w-full items-stretch space-y-8">
          {textContent.ngos.map((ngo, i) => (
            <React.Fragment key={ngo.id}>
              {i % 2 === 1 && (
                <NgoCard
                  id={ngo.id}
                  name={ngo.name}
                  short={ngo.short}
                  description={ngo.description}
                  url={ngo.url}
                />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>

      {/* Cards (mobile) */}
      <div className="flex md:hidden flex-col w-full items-stretch space-y-6">
        {textContent.ngos.map((ngo) => (
          <NgoCard
            key={`${ngo.id}-mobile`}
            id={ngo.id}
            name={ngo.name}
            short={ngo.short}
            description={ngo.description}
            url={ngo.url}
          />
        ))}
      </div>

    </div>
  </section>
);

export default WikiSection;
