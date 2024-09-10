import FAQSection from '@/components/shared/sections/FaqSection';
import { ArrowUpRight } from '@phosphor-icons/react';
import ProductCard from '@/components/shared/ProductCard';

const ManifestoSection2 = ({ textContent, lang }) => (
  <section className="relative flex w-full flex-col">
    {/* Why privacy is so important */}
    <div className="z-10 flex flex-col items-center py-20 ">
      <div className="px-6 text-left sm:text-center">
        <h2 className="mb-10 text-3xl font-medium lg:text-4xl">
          {textContent.section1.title.line1} <br className="hidden sm:flex" />
          {textContent.section1.title.line2}
        </h2>

        <h3 className="mb-10 w-full max-w-2xl text-lg font-normal text-cool-gray-80 sm:text-base">
          {textContent.section1.subtitle.line1} {textContent.section1.subtitle.line2}{' '}
          {textContent.section1.subtitle.line3} {textContent.section1.subtitle.line4}{' '}
          {textContent.section1.subtitle.line5}
        </h3>

        <div className="flex flex-col items-center">
          <p className="mb-4 text-sm font-medium text-cool-gray-40 sm:text-xs">{textContent.section1.signature}</p>
          <img
            loading="lazy"
            className="w-24 select-none"
            src="/images/privacy/signature.webp"
            draggable="false"
            alt="Fran's signature"
          />
        </div>
      </div>
    </div>

    {/* How we ensure user privacy */}
    <div className="z-10 flex flex-col items-center py-20 lg:pt-0">
      <div className="flex flex-col items-center px-6 text-left sm:text-center">
        <h2 className="mb-10 text-3xl font-medium lg:text-4xl">
          {textContent.section2.title.line1} <br className="hidden sm:flex" />
          {textContent.section2.title.line2}
        </h2>

        <h3 className="mb-20 w-full max-w-md text-lg font-normal text-cool-gray-80 sm:text-base">
          {textContent.section2.subtitle.line1} {textContent.section2.subtitle.line2}
        </h3>

        <div className="flex flex-col space-y-16 text-left sm:grid sm:grid-flow-row sm:grid-cols-1 sm:gap-10 sm:space-y-0 md:grid-cols-2 md:grid-rows-2 md:gap-20">
          <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:h-full md:w-80">
            <h4 className="mb-6 text-2xl font-medium">{textContent.section2.square1.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section2.square1.description}</h5>
          </div>

          <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:h-full md:w-80">
            <h4 className="mb-6 text-2xl font-medium">{textContent.section2.square2.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section2.square2.description}</h5>
          </div>

          <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:h-full md:w-80">
            <h4 className="mb-6 text-2xl font-medium">{textContent.section2.square3.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section2.square3.description}</h5>
          </div>

          <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:h-full md:w-80">
            <h4 className="mb-6 text-2xl font-medium">{textContent.section2.square4.title}</h4>
            <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.section2.square4.description}</h5>
          </div>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <FAQSection textContent={textContent.FaqSection} />

    <div className="bg- flex flex-col bg-gray-1 py-20">
      <div className="flex flex-col items-center justify-center space-y-16 px-6">
        {/* Text content */}
        <div className="flex max-w-[450px] flex-col space-y-10 text-center">
          <p className="text-4xl font-semibold">{textContent.securitum.title}</p>
          <p className="text-xl">{textContent.securitum.subtitle}</p>
        </div>
        {/* Links to PDFs */}
        <div className="flex flex-wrap items-center justify-center gap-32">
          <button
            className="flex cursor-pointer flex-row items-center space-x-2 text-primary hover:underline"
            onClick={() => window.open('/securitum/securitum-web.pdf', '_blank')}
          >
            <p className="text-lg font-semibold">{textContent.securitum.links.web}</p>
            <ArrowUpRight size={18} weight="bold" />
          </button>
          <button
            className="flex cursor-pointer flex-row items-center space-x-2 text-primary hover:underline"
            onClick={() => window.open('/securitum/securitum-mobile.pdf', '_blank')}
          >
            <p className="text-lg font-semibold">{textContent.securitum.links.mobile}</p>
            <ArrowUpRight size={18} weight="bold" />
          </button>
          <button
            className="flex cursor-pointer flex-row items-center space-x-2 text-primary hover:underline"
            onClick={() => window.open('/securitum/securitum-desk.pdf', '_blank')}
          >
            <p className="text-lg font-semibold">{textContent.securitum.links.desk}</p>
            <ArrowUpRight size={18} weight="bold" />
          </button>
        </div>
      </div>
    </div>

    {/* Apps designed to protect your privacy */}
    <div className="z-10 flex flex-col items-center bg-cool-gray-100 py-20 text-white ">
      <div className="px-6 text-left sm:text-center">
        <h2 className="mb-10 text-4xl font-medium">
          {textContent.section3.title.line1} <br className="hidden sm:flex" />
          {textContent.section3.title.line2}
        </h2>

        <h3 className="mb-40 text-lg font-normal text-cool-gray-20 sm:text-base">
          {textContent.section3.subtitle.line1} <br className="hidden sm:flex" />
          {textContent.section3.subtitle.line2}
        </h3>

        <div className="flex flex-col space-y-20 text-left lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
          {/* Internxt Drive */}
          <ProductCard
            imageUrl={'/images/privacy/Internxt-Drive.webp'}
            animationDirection={'right'}
            redirect={'/drive'}
            lang={lang}
            textContent={textContent.section3.square1}
          />

          {/* Internxt Send */}
          <ProductCard
            imageUrl={'/images/privacy/Share-by-email.webp'}
            animationDirection={'left'}
            redirect={'https://send.internxt.com'}
            lang={lang}
            textContent={textContent.section3.square3}
          />
        </div>
      </div>
    </div>
  </section>
);

export default ManifestoSection2;
