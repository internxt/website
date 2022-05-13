import React from 'react';
import Link from 'next/link';

const FeaturesSection = ({
  textContent,
  lang
}) => (
  <section className="relative bg-gradient-to-b from-cool-gray-5 to-white py-20 lg:pt-10 lg:pb-0">

    <div className="flex flex-col items-center justify-center px-4 lg:p-16 w-full mx-auto max-w-screen-xl space-y-20">

      {/* Marketing text */}
      <div className="flex flex-col w-full space-y-16">

        <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-6 px-4">
          <h3 className="text-2xl font-medium">
            {textContent.marketing.whyToScan.title}
          </h3>
          <p className="text-lg text-cool-gray-80 lg:max-w-2xl">
            {textContent.marketing.whyToScan.description1}
          </p>
          <p className="text-lg text-cool-gray-80 lg:max-w-2xl">
            {textContent.marketing.whyToScan.description2}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-6 px-4">
          <h3 className="text-2xl font-medium">
            {textContent.marketing.freeScanner.title}
          </h3>
          <p className="text-lg text-cool-gray-80 lg:max-w-2xl">
            {textContent.marketing.freeScanner.description.line1}
            {' '}
            <a
              href={`https://blog.internxt.com/${lang === 'es' ? 'es/que-es-un-malware/' : 'what-is-malware/'}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {textContent.marketing.freeScanner.description.line2}
            </a>
            {textContent.marketing.freeScanner.description.line3}
          </p>
          <p className="text-lg text-cool-gray-80 font-medium lg:max-w-2xl">
            {textContent.marketing.freeScanner.cta}
          </p>
        </div>

      </div>

      {/* Create account */}
      <div className="flex flex-col-reverse md:flex-row items-stretch justify-center bg-white shadow-subtle rounded-3xl overflow-hidden">
        <div className="flex flex-col items-start justify-start p-8 md:p-16 md:mr-6 space-y-8">
          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold">
              {textContent.createAccount.title.line1}
              <br className="hidden md:inline-flex" />
              {' '}
              {textContent.createAccount.title.line2}
              <br className="hidden md:inline-flex" />
              {' '}
              {textContent.createAccount.title.line3}
            </h3>

            <p className="text-lg text-cool-gray-80">
              {textContent.createAccount.description.line1}
              <br className="hidden md:inline-flex" />
              {' '}
              {textContent.createAccount.description.line2}
              <br className="hidden md:inline-flex" />
              {' '}
              {textContent.createAccount.description.line3}
            </p>
          </div>

          <a
            id="get-started-link"
            href="https://drive.internxt.com/new"
            target="_top"
            rel="noreferrer"
            className="flex flex-row justify-center items-center px-5 h-11 w-full md:w-auto border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-primary focus:bg-primary-dark focus:outline-none sm:whitespace-nowrap"
          >
            <span>
              {textContent.createAccount.cta.getUpTo10GB}
              &nbsp;
            </span>
            <span className="opacity-75 font-normal">{textContent.createAccount.cta.forFree}</span>
          </a>
        </div>

        <div className="flex flex-col w-full md:w-64 lg:w-80 pt-10 md:pt-16 px-8 md:px-0">
          <img loading="lazy" className="object-cover object-left-top w-full h-full" src="/images/comparison/iphone-and-mac.webp" draggable="false" alt="Internxt Drive web and mobile apps" />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-lg text-center text-base md:text-sm text-cool-gray-40">
        {textContent.disclaimer.text}
        {' '}
        <Link href="/legal" lang={lang} passHref>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-cool-gray-60 hover:underline"
          >
            {textContent.disclaimer.link}
          </a>
        </Link>
      </div>
    </div>

  </section>
);

export default FeaturesSection;
