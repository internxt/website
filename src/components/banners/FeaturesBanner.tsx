import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  X,
  CloudArrowUp,
  ShieldPlus,
  Sparkle,
  CellTower,
  VideoConference,
  Envelope,
  ShieldCheck,
  Brain,
} from '@phosphor-icons/react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { DARK_MODE_ENABLED } from '@/theme.config';

const FeaturesBanner = (): JSX.Element => {
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`@/assets/lang/${lang}/banners.json`);
  const banner = textContent.featuresBanner;

  const [showBanner, setShowBanner] = useState<boolean>(false);

  const handleClose = () => {
    sessionStorage.setItem('hideBanner', 'true');
    setShowBanner(false);
  };

  useEffect(() => {
    const hideBanner = sessionStorage.getItem('hideBanner');
    if (hideBanner) return;

    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleOnClick = () => {
    window.open(
      'https://internxt.com/specialoffer?utm_source=intranet&utm_medium=direct&utm_campaign=specialoffer',
      '_blank',
      'noopener noreferrer',
    );
    handleClose();
  };

  const products = [
    { id: 'drive', icon: CloudArrowUp, text: banner.products.drive },
    { id: 'antivirus', icon: ShieldPlus, text: banner.products.antivirus },
    { id: 'cleaner', icon: Sparkle, text: banner.products.cleaner },
    { id: 'vpn', icon: CellTower, text: banner.products.vpn },
    { id: 'meet', icon: VideoConference, text: banner.products.meet },
    { id: 'mail', icon: Envelope, text: banner.products.mail },
    { id: 'ai', icon: Brain, text: banner.products.ai },
  ];

  const bgColor = DARK_MODE_ENABLED
    ? 'linear-gradient(360deg, #082D66 0%, #1C1C1C 100%)'
    : 'linear-gradient(360deg, #E5EFFF 0%, #FFFFFF 100%)';

  return (
    <div
      className={`${showBanner ? 'flex' : 'hidden'}
      fixed bottom-0 left-0 right-0 top-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div
        className={
          'absolute inset-0 left-1/2 top-1/2 flex h-[450px] w-[1100px] -translate-x-[50%] -translate-y-[50%] flex-row items-center justify-between overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat'
        }
        style={{ background: bgColor }}
      >
        <button
          id="close-banner"
          aria-label="close-banner"
          className={`absolute right-0 top-0 m-3 flex border-[0.1px] border-white ${
            DARK_MODE_ENABLED ? 'text-white-95' : 'text-gray-100'
          } dark:text-gray-10 hover:bg-gray-1/10`}
          onClick={handleClose}
        >
          <X size={32} />
        </button>

        <div className="flex h-[358px] w-[509px] flex-col items-start justify-center gap-8 pl-14">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 px-1">
              <p
                className={`text-lg font-semibold text-primary ${
                  DARK_MODE_ENABLED ? 'bg-gray-71' : 'bg-gray-10'
                } dark:bg-gray-90 rounded-sm px-1 py-0.5`}
              >
                {banner.label.blueText}
              </p>
              <p
                className={`text-lg font-semibold ${
                  DARK_MODE_ENABLED ? 'text-white-95' : 'text-gray-100'
                } dark:text-gray-1 px-1 py-0.5`}
              >
                {banner.label.text}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p
                className={`text-4xl font-semibold ${
                  DARK_MODE_ENABLED ? 'text-white-95' : 'text-gray-100'
                } dark:text-gray-1 whitespace-nowrap`}
              >
                {banner.title}
              </p>
              <div className="flex gap-1 px-1">
                <p className="text-lg font-semibold text-primary">{banner.subTitle.blueText}</p>
                <p
                  className={`text-lg font-semibold ${
                    DARK_MODE_ENABLED ? 'text-white-95' : 'text-gray-100'
                  } dark:text-gray-1`}
                >
                  {banner.subTitle.text}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex h-min w-min flex-row items-start gap-4">
              <button
                onClick={handleOnClick}
                className="dark:text-white flex h-[48px] w-[177px] items-center justify-center whitespace-nowrap rounded-lg bg-primary px-6 py-4 text-base font-medium text-white"
              >
                {banner.ctaGet}
              </button>
              <button
                onClick={handleClose}
                className="dark:text-primary-dark flex h-[48px] w-[177px] items-center justify-center whitespace-nowrap rounded-lg border border-primary bg-transparent px-6 py-4 text-base font-medium text-primary"
              >
                {banner.ctaContinue}
              </button>
            </div>
            <div className="flex flex-row items-center gap-2">
              <ShieldCheck size={24} weight="fill" className="text-primary" />
              <p
                className={`whitespace-nowrap font-medium ${
                  DARK_MODE_ENABLED ? 'text-white-95' : 'text-gray-100'
                } dark:text-gray-1 lg:text-base`}
              >
                {banner.guarantee}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-start justify-start gap-2 lg:flex-nowrap lg:justify-between">
            {products.map((feature) => (
              <div
                key={feature.id}
                className={`flex h-6 w-min flex-row items-center justify-center gap-1 rounded ${
                  DARK_MODE_ENABLED ? 'bg-white/10' : 'bg-white/50'
                } px-1 py-0.5 shadow-sm lg:h-8 lg:px-2 lg:py-1`}
              >
                <feature.icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
                <p
                  className={`whitespace-nowrap text-sm font-medium leading-tight ${
                    DARK_MODE_ENABLED ? 'text-white' : 'text-gray-80'
                  } dark:text-gray-20`}
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[358px] w-[342px]">
          <Image
            src={getImage('/images/banners/freeCardPromoBanner/image_internxt.webp')}
            alt="Features Banner"
            width={342}
            height={358}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
