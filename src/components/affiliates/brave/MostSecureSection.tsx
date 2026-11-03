import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Button from '@/components/shared/Button';
import HeroSectionSafeArea from '@/components/shared/HeroSectionSafeArea';

interface MostSecureSectionProps {
  textContent: any;
  onRedirectButtonClicked?: () => void;
  showButton?: boolean;
  bgColor?: string;
}

const MostSecureSection: React.FC<MostSecureSectionProps> = ({
  textContent,
  onRedirectButtonClicked,
  showButton = 'true',
  bgColor = 'bg-gray-1',
}) => {
  function redirectToPricingTable() {
    window.location.href = '#priceTable';
  }

  return (
    <section
      className={`flex flex-col gap-4 overflow-hidden lg:flex-row ${bgColor} w-full items-center justify-center py-10 md:px-40 lg:px-10 xl:px-32`}
    >
      <div className="flex h-[400px] w-[400px] items-center justify-center ">
        <Image
          src={getImage('/images/affiliates/internxt_secure_file_storage.webp')}
          alt="Most secure cloud storage image "
          draggable={false}
          height={350}
          width={350}
        />
      </div>

      <div className="flex w-[323px] flex-col items-center justify-center space-y-8 text-center lg:w-[550px] lg:items-start lg:text-left">
        <div className="flex flex-col space-y-4">
          <h1 className="text-30 font-semibold leading-tight text-gray-100 lg:text-3xl">{textContent.title}</h1>
          <h2 className="font-regular text-lg leading-tight text-gray-80 lg:text-xl">{textContent.description}</h2>
        </div>
        {showButton ? (
          <button
            className="flex items-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary-dark"
            onClick={() => {
              onRedirectButtonClicked ? onRedirectButtonClicked() : redirectToPricingTable();
            }}
          >
            {textContent.cta}
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default MostSecureSection;
