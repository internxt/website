import { CaretRight } from '@phosphor-icons/react';
import Image from 'next/legacy/image';

const SupportNGOsSection = ({ textContent }) => (
  <section className="relative flex flex-col items-center bg-white px-6">
    <div className="flex w-full max-w-screen-lg flex-col items-center justify-center space-y-10 py-16 sm:py-24 md:flex-row md:space-y-0 md:space-x-10 lg:space-x-20 lg:px-0">
      {/* Card */}
      <div className="flex flex-col">
        <Image
          src="/images/privacy-directory/support-NGO.png"
          width={496}
          height={520}
          alt="Support NGO"
          draggable={false}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-start">
        {/* Title */}
        <h2 className="max-w-[387px] text-4xl font-semibold lg:text-5xl">{textContent.body.title}</h2>

        {/* Paragraphs */}
        <div className="flex w-full max-w-[387px] flex-col space-y-4 font-normal">
          <p className="text-xl">{textContent.body.paragraph1}</p>
          <p className="text-xl">
            {textContent.body.paragraph2.regular} <span>{textContent.body.paragraph2.semibold}</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-row text-primary">
          <a
            href="mailto:hello@internxt.com"
            className="flex flex-row flex-wrap items-center justify-center text-lg font-semibold lg:justify-start"
          >
            <span className="flex flex-row">{textContent.body.cta.line1}</span>
            &nbsp;
            <span className="flex flex-row items-end">
              {textContent.body.cta.line2}
              <CaretRight size={18} weight="bold" className="mb-1 ml-0.5" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SupportNGOsSection;
