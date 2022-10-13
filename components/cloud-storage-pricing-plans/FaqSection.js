import React from 'react';
import Link from 'next/link';
import FaqAccordion from './FaqAccordion';

const FaqSection = ({ textContent, lang }) => (
  <section className="relative bg-gray-5">
    <div className="flex flex-col items-center space-y-10 px-6 py-10 sm:space-y-20 lg:p-20">
      {/* Title */}
      <h2 className="text-center text-4xl font-medium lg:text-5xl">
        {textContent.title.line1}
        <br />
        {textContent.title.line2}
      </h2>

      {/* FAQ Section */}
      <div className="flex w-full max-w-screen-sm flex-col divide-y divide-gray-10">
        {textContent.faq.map((item) => (
          <FaqAccordion key={item.question} question={item.question}>
            {item.answer}
          </FaqAccordion>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center space-y-4 rounded-3xl bg-white p-6 text-center shadow-subtle md:p-10">
        <h3 className="text-2xl font-medium sm:text-3xl">
          {textContent.getStartedSection.title.line1} <br className="hidden sm:flex" />
          {textContent.getStartedSection.title.line2}
        </h3>

        <span className="text-gray-50">{textContent.getStartedSection.subtitle}</span>

        <a href="#pricing" className="button-primary-rounded">
          {textContent.getStartedSection.cta}
        </a>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col items-center space-y-2 text-center font-medium">
        <p>{textContent.footer.copyright}</p>

        <div className="flex flex-row items-center justify-center space-x-8 text-gray-50 md:space-x-5">
          <a href="mailto:hello@internxt.com" className="hover:text-primary">
            {textContent.footer.contactUs}
          </a>
          <Link href="/privacy" locale={lang} passHref>
            <a className="hover:text-primary">{textContent.footer.privacy}</a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default FaqSection;
