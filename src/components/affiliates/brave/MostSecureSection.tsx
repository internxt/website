import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Button from '@/components/shared/Button';
import HeroSectionSafeArea from '@/components/shared/HeroSectionSafeArea';

interface MostSecureSectionProps {
  textContent: any;
}

const MostSecureSection: React.FC<MostSecureSectionProps> = ({ textContent }) => {
  function redirectToPricingTable() {
    window.location.href = '#priceTable';
  }

  return (
    <section className="overflow-hidden pt-12">
      <HeroSectionSafeArea>
        <Image
          src={getImage('/images/affiliates/internxt_secure_file_storage.webp')}
          alt="Most secure cloud storage image "
          draggable={false}
          width={500}
          height={500}
        />
        <div className="flex max-w-[550px] flex-col items-center justify-center space-y-8 text-center lg:items-start lg:text-left">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-semibold text-gray-100 xl:text-5xl">{textContent.title}</h1>
            <h2 className="font-regular text-xl text-gray-80 xl:text-xl">{textContent.description}</h2>
          </div>
          <button
            className="flex items-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary-dark"
            onClick={() => {
              window.location.hash = '#priceTable';
            }}
          >
            {textContent.cta}
          </button>
        </div>
      </HeroSectionSafeArea>
    </section>
  );
};

export default MostSecureSection;
