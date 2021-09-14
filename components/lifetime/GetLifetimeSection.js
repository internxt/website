import React, { useEffect, useState } from 'react';

const GetLifetimeSection = ({ lang, textContent }) => {

  return (
    <section className="bg-neutral-10">
      <div className="flex flex-col items-center py-20">

        <div className="flex flex-col items-center text-center mb-8 font-semibold px-6">
          <h2 className="eyebrow text-4xl">
            {textContent.title.line1}<br className="hidden sm:inline-flex"/> {textContent.title.line2}
          </h2>
        </div>

        <a href="#priceTable" className="mb-16">
          <button
            type="button"
            className="flex justify-center sm:inline-flex px-6 py-2 border border-transparent rounded-full text-base font-medium text-blue-60 md:text-white bg-blue-10 md:bg-blue-60 active:bg-blue-20 focus:bg-blue-20 md:active:bg-blue-70 md:focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
          >
            <p className="whitespace-nowrap">{textContent.cta}</p>
          </button>
        </a>

        <img className="h-96" loading="lazy" src="../../images/lifetime/devices.png" alt="Eye slash" draggable="false"/>
        
      </div>
    </section>
  )
}

export default GetLifetimeSection;
