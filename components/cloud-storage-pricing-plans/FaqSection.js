import React from 'react';
import Link from 'next/link';
import FaqAccordion from './FaqAccordion';

const FaqSection = ({
  textContent,
  lang
}) => (
  <section className="relative bg-gray-5">
    <div className="flex flex-col items-center px-6 py-10 lg:p-20 space-y-10 sm:space-y-20">

      {/* Title */}
      <h2 className="text-4xl lg:text-5xl font-semibold text-center">
        {textContent.title.line1}
        <br />
        {textContent.title.line2}
      </h2>

      {/* FAQ Section */}
      <div className="flex flex-col w-full max-w-screen-sm divide-y divide-gray-10">
        {textContent.faq.map((item) => (
          <FaqAccordion key={item.question} question={item.question}>
            {item.answer}
          </FaqAccordion>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center text-center p-6 md:p-10 rounded-3xl bg-white space-y-4 shadow-subtle">
        <h3 className="text-2xl sm:text-3xl font-medium">
          {textContent.getStartedSection.title.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.getStartedSection.title.line2}
        </h3>

        <span className="text-gray-50">{textContent.getStartedSection.subtitle}</span>

        <a
          href="#pricing"
          className="button-primary-rounded"
        >
          {textContent.getStartedSection.cta}
        </a>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col items-center text-center font-medium space-y-2">
        <p>{textContent.footer.copyright}</p>

        <div className="flex flex-row items-center justify-center text-gray-50 space-x-8 md:space-x-5">
          <a href="mailto:hello@internxt.com" className="hover:text-primary">{textContent.footer.contactUs}</a>
          <Link href="/privacy" locale={lang} passHref>
            <a className="hover:text-primary">{textContent.footer.privacy}</a>
          </Link>
        </div>
      </div>

    </div>
  </section>
);

export default FaqSection;
