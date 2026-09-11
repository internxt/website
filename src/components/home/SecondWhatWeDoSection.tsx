import ProductCard from '@/components/shared/ProductCard';
import { getImage } from '@/lib/getImage';

const SecondWhatWeDoSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className={`z-10 flex flex-col items-center bg-white py-20 text-gray-100`}>
        <div className="flex flex-col gap-16 px-6 text-left sm:text-center">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</h2>

            <h3 className="max-w-3xl text-xl font-normal text-gray-80">{textContent.description}</h3>
          </div>

          <div className="flex flex-col space-y-20 text-left lg:grid lg:grid-cols-1 lg:grid-rows-2 lg:gap-20 lg:space-y-0">
            {/* Internxt Drive */}
            <ProductCard
              imageUrl={getImage('/images/privacy/Internxt-Drive.webp')}
              redirect="/drive"
              animationDirection={'right'}
              lang={lang}
              textContent={textContent.square1}
            />

            {/* Internxt Send */}
            <ProductCard
              imageUrl={getImage('/images/privacy/Share-by-email.webp')}
              animationDirection={'left'}
              redirect={'https://send.internxt.com'}
              lang={lang}
              textContent={textContent.square2}
            />

            {/* Internxt Send */}
            <ProductCard
              imageUrl={getImage('/images/home/VPN-extension.webp')}
              animationDirection={'right'}
              redirect={'/vpn'}
              lang={lang}
              textContent={textContent.square3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondWhatWeDoSection;
