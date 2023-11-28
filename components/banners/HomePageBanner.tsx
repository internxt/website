import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HomePageBanner = () => {
  const router = useRouter();
  const lang = router.locale;

  const header = () => {
    switch (lang) {
      case 'en':
        return 'Christmas savings!';
      case 'es':
        return '¡Ya es Black Friday!';
      case 'fr':
        return 'Black Friday arrivé!';
      case 'ru':
        return 'Черная пятница наступила!';
      default:
        return 'Christmas savings!';
    }
  };

  const title = () => {
    switch (lang) {
      case 'en':
        return '50% OFF all lifetime plans!';
      case 'es':
        return 'DESCUENTO 50% en planes lifetime!';
      case 'fr':
        return '50% de reduction sur plans lifetime!';
      case 'ru':
        return 'Скидка 50% на пожизненные планы!';
      default:
        return '50% OFF all lifetime plans!';
    }
  };

  const description = () => {
    switch (lang) {
      case 'en':
        return '30-day money-back guarantee';
      case 'es':
        return '30 días de garantía';
      case 'fr':
        return 'Garantie de remboursement de 30 jours';
      case 'ru':
        return '30-дневная гарантия возврата денег';
      default:
        return '30-day money-back guarantee';
    }
  };

  const ctaText = () => {
    switch (lang) {
      case 'en':
        return 'Get the deal!';
      case 'es':
        return '¡Obtén la oferta!';
      case 'fr':
        return "Obtenez l'offre";
      case 'ru':
        return 'Получить скидку!';
      default:
        return 'Get the deal!';
    }
  };

  return (
    <div
      className="flex flex-col overflow-hidden rounded-[10px] pt-10 lg:hidden"
      style={{ background: 'linear-gradient(180deg, #112D91 0%, #060C40)' }}
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center text-white">
        <div className="flex flex-col space-y-4">
          <p className="text-xl font-semibold">{header()}</p>

          <p className="text-4xl font-bold">{title()}</p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button
            className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-primary py-1.5 px-3.5 text-base font-medium text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
            onClick={() => {
              router.push('/black-friday#priceTable');
            }}
          >
            {ctaText()}
          </button>
          <div className="flex flex-row items-center space-x-3">
            <CheckCircle size={24} className="text-primary" />
            <p className="font-medium text-gray-5 lg:text-lg">{description()}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col bg-contain">
        <Image src="/images/banners/Banner_Mobile.png" width={646} height={591} alt="Percentage icon" />
      </div>
    </div>
  );
};

export default HomePageBanner;
