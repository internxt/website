import React from 'react';
import ProductCard from '../shared/ProductCard';

const ProductsSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="z-10 flex flex-col items-center bg-gray-1 py-20 text-black">
        <div className="space-y-16 px-6 text-left sm:text-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</h2>

            <h3 className="max-w-3xl text-xl font-normal text-gray-80">{textContent.description}</h3>
          </div>

          <div className="flex flex-col space-y-20 text-left lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
            {/* Internxt Drive */}
            <ProductCard
              imageUrl={'/images/privacy/Internxt-Drive.webp'}
              animationDirection={'right'}
              lang={lang}
              textContent={textContent.drive}
            />
            {/* Internxt Photos */}
            <ProductCard
              imageUrl={'/images/privacy/photos-image.webp'}
              animationDirection={'left'}
              lang={lang}
              textContent={textContent.photos}
            />
            {/* Internxt Send */}
            <ProductCard
              imageUrl={'/images/privacy/Share-by-email.webp'}
              animationDirection={'right'}
              lang={lang}
              textContent={textContent.send}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
