import ProductCard from '@/components/shared/ProductCard';
import { getImage } from '@/lib/getImage';

const InxtAppsSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="z-10 flex flex-col items-center space-y-16 bg-gray-1 px-5 pt-20 text-gray-100 ">
        <div className="px-6 text-center">
          <h2 className="mb-10 text-5xl font-semibold">
            {textContent.title.line1} <br className="hidden sm:flex" />
            {textContent.title.line2}
          </h2>
          <h3 className="w-full max-w-[774px] text-xl font-normal text-gray-80">{textContent.subtitle}</h3>
        </div>

        <div className="flex flex-col space-y-20 text-left lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
          {/* Internxt Drive */}
          <ProductCard
            imageUrl={getImage('/images/privacy/Internxt-Drive.webp')}
            animationDirection={'left'}
            redirect={'/drive'}
            lang={lang}
            textContent={textContent.square1}
          />

          {/* Internxt Send */}
          <ProductCard
            imageUrl={getImage('/images/privacy/Share-by-email.webp')}
            animationDirection={'right'}
            redirect={'https://send.internxt.com'}
            lang={lang}
            textContent={textContent.square2}
          />

          {/* Internxt VPN */}
          <ProductCard
            imageUrl={getImage('/images/privacy/internxt_vpn_extension.webp')}
            animationDirection={'left'}
            redirect={'/vpn'}
            lang={lang}
            textContent={textContent.square3}
          />
        </div>
      </div>
    </section>
  );
};

export default InxtAppsSection;
