import ProductCard from '@/components/shared/ProductCard';
import { getImage } from '@/lib/getImage';

const WhatWeDo = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="z-10 flex flex-col items-center space-y-16 bg-gray-1 px-5 py-20 text-gray-100 ">
        <div className="px-6 text-center">
          <h2 className="mb-5 text-5xl font-semibold">
            {textContent.title.line1} <br className="hidden sm:flex" />
            {textContent.title.line2} <br className="hidden sm:flex" />
            {textContent.title.line3}
          </h2>
          <h3 className="mx-auto w-full max-w-[774px] text-center text-xl font-normal text-gray-80">
            {textContent.subtitle}
          </h3>
        </div>

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
