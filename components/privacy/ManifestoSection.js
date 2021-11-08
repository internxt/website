import React from 'react';

const ManifestoSection = ({
  textContent,
  device,
  lang
}) => (
  <section className="relative flex flex-col w-full pt-10">
    <div className="flex flex-col items-center py-10 lg:py-40 z-10">

      <div className="text-center px-10">

        <h2 className="text-3xl lg:text-5xl font-semibold mb-10">
          Why is privacy
          {' '}
          <br className="hidden sm:flex" />
          so important.
        </h2>

      </div>

    </div>

  </section>
);

export default ManifestoSection;
