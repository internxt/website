import React from 'react';
import Link from 'next/link';
import {
  Ruler,
  TextT,
  TextAa,
  NumberCircleThree,
  Hash,
  CirclesThree
} from 'phosphor-react';
import FaqAccordion from './FaqAccordion';

const FeaturesSection = ({
  textContent,
  lang
}) => {
  const iconSize = 32;
  const tipIcons = [
    <Ruler size={iconSize} />,
    <TextT size={iconSize} />,
    <TextAa size={iconSize} />,
    <NumberCircleThree size={iconSize} />,
    <Hash size={iconSize} />,
    <CirclesThree size={iconSize} />,
  ];

  return (
    <section className="relative">

      {/* Password tips and rules */}
      <div className="flex flex-col w-full items-center justify-center bg-gray-5 bg-opacity-50">
        <div className="flex flex-col items-center justify-center pt-20 pb-5 px-4 lg:p-16 w-full mx-auto max-w-screen-xl space-y-20">

          <div className="flex flex-col w-full items-center space-y-16">

            <div className="flex flex-col space-y-3 px-4">
              <h3 className="text-3xl lg:text-2xl font-medium">
                {textContent.section1.title}
              </h3>

              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section1.subtitle}
              </p>
            </div>

            <div className="flex flex-col space-y-3 px-4">
              <h3 className="text-3xl lg:text-2xl font-medium">
                {textContent.section2.title}
              </h3>

              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section2.subtitle}
              </p>
            </div>

            <div className="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-1 lg:max-w-max">
              {textContent.section2.tips.map((tip, index) => (
                <div key={tip} className="flex flex-row sm:flex-col lg:w-64 lg:h-48 bg-white rounded-2xl p-8">
                  <div className="flex flex-col h-full text-primary pb-6 pr-6">
                    {tipIcons[index]}
                  </div>

                  <span className="text-2xl tracking-tight">
                    {tip}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Password tool info */}
      <div className="flex flex-col w-full items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center pt-20 pb-5 px-4 lg:p-16 w-full mx-auto max-w-screen-xl space-y-20">

          <div className="flex flex-col items-center w-full space-y-16">

            <div className="flex flex-col space-y-3 px-4">
              <h3 className="text-2xl font-medium">
                {textContent.section3.title}
              </h3>

              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section3.subtitle}
              </p>

              <ul className="lg:max-w-2xl list-disc pl-4 space-y-1.5">
                {textContent.section3.features.map((feature) => (
                  <li key={feature} className="text-lg font-medium">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-3 px-4">
              <h3 className="text-2xl font-medium">
                {textContent.section4.title}
              </h3>

              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section4.subtitle1}
              </p>

              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section4.subtitle2.part1}
                {' '}
                <a
                  href="https://github.com/internxt"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  {textContent.section4.subtitle2.link}
                </a>
                {' '}
                {textContent.section4.subtitle2.part2}
              </p>
            </div>

            <div className="flex flex-col space-y-3 px-4">
              <h3 className="text-2xl font-medium">
                {textContent.section5.title}
              </h3>
              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section5.subtitle1.part1}
                {' '}
                <Link href="/privacy" lang={lang} passHref>
                  <a
                    target="_top"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    {textContent.section5.subtitle1.link}
                  </a>
                </Link>
                {' '}
                {textContent.section5.subtitle1.part2}
              </p>

              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section5.subtitle2}
              </p>

              <p className="text-lg text-gray-80 md:max-w-2xl">
                {textContent.section5.subtitle3.part1}
                {' '}
                <a
                  href={`https://blog.internxt.com/${lang === 'es' ? 'es/que-es-la-tecnologia-web3/' : 'what-is-web3/'}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  {textContent.section5.subtitle3.link}
                </a>
                {' '}
                {textContent.section5.subtitle3.part2}
              </p>
            </div>

          </div>

          {/* Create account */}
          <div className="flex flex-col-reverse md:flex-row items-stretch justify-center bg-white shadow-box-floating rounded-3xl overflow-hidden">
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

                <p className="text-lg text-gray-80">
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

          <div className="flex flex-col space-y-3 px-4">
            <h3 className="text-2xl font-medium">
              {textContent.section6.title}
            </h3>

            <p className="text-lg text-gray-80 md:max-w-2xl">
              {textContent.section6.subtitle1.part1}
              {' '}
              <a
                href={`https://blog.internxt.com/${lang === 'es' ? 'es/13-estrategias-para-proteger-tus-datos/' : '13-oversimplified-strategies-for-protecting-your-data-on-the-internet/'}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                {textContent.section6.subtitle1.link}
              </a>
              {' '}
              {textContent.section6.subtitle1.part2}
            </p>

            <p className="text-lg text-gray-80 md:max-w-2xl">
              {textContent.section6.subtitle2.part1}
              {' '}
              <Link href="/virus-scanner" lang={lang} passHref>
                <a
                  target="_top"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  {textContent.section6.subtitle2.link}
                </a>
              </Link>
              {' '}
              {textContent.section6.subtitle2.part2}
            </p>

            <p className="text-lg text-gray-80 md:max-w-2xl">
              {textContent.section6.subtitle3.part1}
              {' '}
              <Link href="/privacy-directory" lang={lang} passHref>
                <a
                  target="_top"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  {textContent.section6.subtitle3.link}
                </a>
              </Link>
              {textContent.section6.subtitle3.part2}
            </p>
          </div>
        </div>
      </div>

      {/* Password FAQ */}
      <div className="flex flex-col w-full items-center justify-center bg-gray-5 bg-opacity-50">
        <div className="flex flex-col items-center justify-center pt-20 pb-5 px-6 lg:p-16 w-full mx-auto max-w-screen-xl space-y-12">

          <h4 className="text-3xl lg:text-4xl font-medium text-center">
            {textContent.faq.title}
          </h4>

          <div className="flex flex-col w-full max-w-screen-sm divide-y divide-gray-10">
            {textContent.faq.faq.map((item) => (
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;
