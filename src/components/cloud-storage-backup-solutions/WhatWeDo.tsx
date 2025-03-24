import ProductCard from '@/components/shared/ProductCard';
import { getImage } from '@/lib/getImage';

const WhatWeDo = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="z-10 flex flex-col items-center space-y-16 bg-gray-1 px-5 py-20 text-gray-100 ">
        {/* <div className="px-6 text-center">
          <h2 className="mb-5 text-5xl font-semibold">
            {textContent.title.line1} <br className="hidden sm:flex" />
            {textContent.title.line2} <br className="hidden sm:flex" />
            {textContent.title.line3}
          </h2>
          <h3 className="mx-auto w-full max-w-[774px] text-center text-xl font-normal text-gray-80">
            {textContent.subtitle}
          </h3>
        </div> */}

        <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden px-5 py-10">
          <div className="flex w-full max-w-[858px] flex-col items-center justify-center space-y-6 text-center">
            <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title.line1} {textContent.title.line2} {textContent.title.line3}</p>
            <div className="flex flex-col space-y-6">
              <p className="text-lg text-gray-80">{textContent.subtitle}</p>
            </div>
          </div>
        </section>
        <div className="flex flex-col space-y-20 text-left lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
          <ProductCard
            imageUrl={getImage('/images/privacy-cloud-storage-solutions/internxt_drive.webp')}
            animationDirection={'left'}
            redirect={'/drive'}
            lang={lang}
            textContent={textContent.square1}
          />

          <ProductCard
            imageUrl={getImage('/images/privacy-cloud-storage-solutions/internxt_s3.webp')}
            animationDirection={'left'}
            redirect={'/cloud-object-storage'}
            lang={lang}
            textContent={textContent.square2}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
