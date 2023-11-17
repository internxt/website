import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BFMainPageBanner = () => {
  const router = useRouter();
  const lang = router.locale;

  const header = () => {
    switch (lang) {
      case 'en':
        return 'Black Friday Super Sale!';
      case 'es':
        return '¡Ya es Black Friday!';
      case 'fr':
        return 'Black Friday arrivé!';
      case 'ru':
        return 'Черная пятница наступила!';
      default:
        return 'Black Friday super deal!';
    }
  };

  const title = () => {
    switch (lang) {
      case 'en':
        return 'Get 91% off our annual plans.';
      case 'es':
        return '91% de descuento en los planes anuales.';
      case 'fr':
        return '91% de réduction sur nos plans annuels.';
      case 'ru':
        return '91% скидку на наши годовые тарифные планы.';
      default:
        return 'Get 91% off our annual plans.';
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
      className="flex overflow-hidden rounded-[10px] p-10 lg:hidden"
      style={{ background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #18181B 100%)' }}
    >
      <div className="flex flex-col items-center justify-center space-y-5 text-center text-white">
        <p className="text-xl font-semibold">{header()}</p>

        <p className="text-4xl font-bold">{title()}</p>

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

        <div className="flex max-h-[224px] w-full max-w-[249px] flex-col">
          <Image
            src="/images/black-friday/internxt_black_friday_offer.png"
            width={249}
            height={224}
            alt="Percentage icon"
          />
        </div>
      </div>
    </div>
  );
};

export default BFMainPageBanner;
