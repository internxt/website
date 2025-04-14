import ProductCard from '@/components/shared/ProductCard';
import { getImage } from '@/lib/getImage';

const WhatWeDo = ({ textContent, lang, products }) => {
  return (
    <section className="overflow-hidden ">
      <div className="z-10 flex flex-col items-center space-y-16 bg-gray-1 px-5 py-10 text-gray-100 md:py-20">
        {/* Section Title */}
        <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden px-5 py-10">
          <div className="flex w-full max-w-[858px] flex-col items-center justify-center space-y-6 text-center">
            <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">
              {textContent.title.line1} {textContent.title.line2} {textContent.title.line3}
            </p>
            <div className="flex flex-col space-y-6">
              <p className="text-lg text-gray-80">{textContent.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Dynamic Product Cards */}
        <div className="flex flex-col space-y-20 text-left lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={getImage(product.imageUrl)}
              animationDirection={product.animationDirection || 'left'}
              redirect={product.redirect}
              lang={lang}
              textContent={product.textContent}
              imagePosition={product.imagePosition || 'left'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
