import React from 'react';
import Link from 'next/link';
import { CaretRight } from 'phosphor-react';

const HeroSection = ({
  textContent,
  lang
}) => (
  <section className="relative flex flex-col items-center bg-white px-6">
    <div className="flex flex-col items-start w-full max-w-screen-lg pt-24 pb-10 sm:pt-24 lg:pt-36 lg:px-0 space-y-8 sm:space-y-12">

      {/* Title */}
      <div className="flex flex-col w-full space-y-2">
        <h1 className="text-4xl lg:text-6xl font-semibold sm:font-medium">
          {textContent.title}
        </h1>
        <h2 className="text-lg sm:text-2xl font-medium text-gray-50">{textContent.subtitle}</h2>
      </div>

      {/* Description */}
      <h2 className="text-xl lg:text-2xl font-medium">
        {textContent.brief.intro}
      </h2>

      {/* Body */}
      <div className="flex flex-col space-y-8 sm:space-y-4 md:space-y-0">

        {/* Paragraphs (mobile) */}
        <div className="flex sm:hidden flex-col space-y-4">
          <p className="text-lg lg:text-xl">
            {textContent.brief.body.paragraph1}
          </p>
          <p className="text-lg lg:text-xl">
            {textContent.brief.body.paragraph2}
          </p>
        </div>

        {/* Paragraphs & Card */}
        <div className="flex flex-row items-start justify-center sm:justify-between sm:space-x-12">

          {/* Paragraphs (desktop) */}
          <div className="hidden sm:flex flex-col space-y-4 pt-4">
            <p className="text-lg lg:text-xl">
              {textContent.brief.body.paragraph1}
            </p>
            <p className="text-lg lg:text-xl">
              {textContent.brief.body.paragraph2}
            </p>
            <p className="text-lg lg:text-xl hidden md:flex">
              {textContent.brief.body.paragraph3}
            </p>
            <p className="text-lg lg:text-xl hidden md:flex">
              {textContent.brief.body.paragraph4}
            </p>
          </div>

          {/* Card */}
          <Link href="/privacy" locale={lang} passHref>
            <div
              className="flex flex-col flex-shrink-0 items-start w-full sm:w-96 bg-black text-white p-8 sm:p-12 pb-48 sm:pb-60 space-y-6 bg-cover bg-center rounded-3xl cursor-pointer"
              style={{
                backgroundImage: 'url("./images/privacy-directory/typing.webp")',
              }}
            >
              <h3 className="text-3xl sm:text-4xl font-semibold">{textContent.brief.body.card.title}</h3>

              <div className="flex flex-col text-lg sm:text-xl -space-y-1.5 sm:space-y-0">
                <p>{textContent.brief.body.card.cta.line1}</p>
                <p className="flex flex-row items-end">
                  {textContent.brief.body.card.cta.line2}
                  <CaretRight size={16} weight="bold" className="mb-1 ml-1" />
                </p>
              </div>
            </div>
          </Link>

        </div>

        {/* Paragraphs (mobile) */}
        <div className="flex flex-col space-y-4">
          <p className="text-lg lg:text-xl flex md:hidden">
            {textContent.brief.body.paragraph3}
          </p>
          <p className="text-lg lg:text-xl flex md:hidden">
            {textContent.brief.body.paragraph4}
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default HeroSection;
