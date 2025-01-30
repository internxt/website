import ProductCard from '@/components/shared/ProductCard';
import { getImage } from '@/lib/getImage';

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
              imageUrl={getImage('/images/privacy/Internxt-Drive.webp')}
              redirect="/drive"
              animationDirection={'right'}
              lang={lang}
              textContent={textContent.drive}
            />

            {/* Internxt Send */}
            <ProductCard
              imageUrl={getImage('/images/privacy/Share-by-email.webp')}
              redirect={'https://send.internxt.com'}
              animationDirection={'left'}
              lang={lang}
              textContent={textContent.send}
            />

            {/* Internxt VPN */}
            <ProductCard
              imageUrl={getImage('/images/privacy/Internxt-VPN.png')}
              redirect={'/vpn'}
              animationDirection={'right'}
              lang={lang}
              textContent={textContent.vpn}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
