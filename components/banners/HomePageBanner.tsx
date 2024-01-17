import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HomePageBanner = () => {
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`../../assets/lang/${lang}/pricing.json`);

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
        return (
          <p className="text-4xl font-bold">
            50% OFF <br /> all lifetime plans!
          </p>
        );
      case 'es':
        return (
          <p className="text-4xl font-bold">
            DESCUENTO 50% <br /> en planes lifetime!
          </p>
        );
      case 'fr':
        return (
          <p className="text-4xl font-bold">
            50% de reduction <br /> sur plans lifetime!
          </p>
        );
      case 'ru':
        return (
          <p className="text-4xl font-bold">
            Скидка 50% <br /> на пожизненные планы!
          </p>
        );
      default:
        return (
          <p className="text-4xl font-bold">
            50% OFF <br /> all lifetime plans!
          </p>
        );
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
    <div className="flex flex-col overflow-hidden rounded-[10px] bg-primary pt-10 md:hidden">
      <div className="flex w-full flex-col items-center justify-center space-y-6 px-5 text-center text-white lg:items-start lg:text-left">
        <div className="flex w-max rounded-2xl border-4 border-primary/7 bg-white px-5 py-2">
          <p className="text-5xl font-bold text-primary">{textContent.tableSection.ctaBanner.label}</p>
        </div>
        <div className="flex w-full max-w-[253px] flex-col space-y-4">
          <p className="text-4xl font-bold md:text-5xl">{textContent.tableSection.ctaBanner.title}</p>
          <p className="text-xl">{textContent.tableSection.ctaBanner.subtitle}</p>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <button
            onClick={() => {
              router.push('/pricing');
            }}
            className="flex w-max items-center rounded-lg bg-white px-5 py-3 text-lg font-medium text-gray-80"
          >
            {textContent.tableSection.ctaBanner.cta}
          </button>
          <div className="flex flex-row items-center space-x-3">
            <CheckCircle size={24} className="text-white" />
            <p className="font-medium text-white lg:text-lg">{textContent.tableSection.ctaBanner.guarantee}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <Image
          src="/images/banners/data_privacy_internxt_mobile.webp"
          loading="lazy"
          width={377}
          height={185}
          alt="Percentage icon"
        />
      </div>
    </div>
  );
};

export default HomePageBanner;
