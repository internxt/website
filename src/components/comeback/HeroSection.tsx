import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ImageConfig } from '@/assets/types/private-cloud-storage-solutions';
import { BannerForMobile } from '../cloud-storage-backup-solutions/components/heroSection/BannerForMobile';
import Countdown from '../components/Countdown';
import Header from '../shared/Header';
import { Alarm, Check } from '@phosphor-icons/react';
import Link from 'next/link';
const Animation = dynamic(() => import('../shared/Animation'));
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
interface HeroSectionForHomeProps {
  textContent: any;
  lang: string;
  isHomePageV2?: boolean;
}

export default function HeroSection({ textContent, lang, isHomePageV2 }: HeroSectionForHomeProps): JSX.Element {
  const router = useRouter();
  const { dialogIsOpen } = useGlobalDialog();
  const shouldShowMobileBanner = dialogIsOpen(GlobalDialog.MobileBannerForHome);
  const mobileImage = getImage('/images/campaigns/spring/image_mobile.webp');

  const BgImage = 'linear-gradient(to bottom, #001D6C, #121923)';
  const componentsFlow = isHomePageV2 ? 'flex-col-reverse' : 'flex-col';

  const handleOnClick = () => {
    router.push('/pricing');
  };
  const images: ImageConfig[] = [
    {
      src: '/images/home/header/browser.webp',
      alt: 'Browser window',
      animationDelay: 200,
      size: { width: 800, height: 520 },
      position: { top: '12%', left: '200px' },
      boxShadow: '56px 56px 80px rgba(0,0,0,.2)',
      borderRadius: '24px',
      className: 'rounded-2xl',
    },
    {
      src: '/images/home/header/folder.svg',
      alt: 'Folder icon',
      animationDelay: 600,
      size: { width: 64, height: 64 },
      position: { top: '12%', left: '12%' },
      filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1)) opacity(0.3)',
    },
    {
      src: '/images/home/header/zip.svg',
      alt: 'Zip icon',
      animationDelay: 800,
      size: { width: 56, height: 56 },
      position: { top: '34%', left: '18%' },
      filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1)) opacity(0.3)',
    },
    {
      src: '/images/home/header/powerpoint.svg',
      alt: 'PowerPoint icon',
      animationDelay: 1000,
      size: { width: 56, height: 56 },
      position: { top: '47%', left: '10%' },
      filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1)) opacity(0.3)',
    },
    {
      src: '/images/home/header/csv.svg',
      alt: 'CSV icon',
      animationDelay: 1200,
      size: { width: 56, height: 56 },
      position: { top: '85%', left: '16%' },
      filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1)) opacity(0.3)',
    },
    {
      src: '/images/cloud-storage-backup-solutions/vpn_item.webp',
      alt: 'File preview',
      animationDelay: 400,
      size: { width: 178, height: 165 },
      position: { top: '300px', left: '21%' },
      boxShadow: '16px 32px 40px rgba(0,0,0,.1)',
      borderRadius: '24px',
    },
    {
      src: '/images/antivirus/Internxt_Antivirus_Header.png',
      alt: 'Task logger',
      animationDelay: 900,
      size: { width: 355, height: 257 },
      position: { top: '65%', left: '95%' },
      boxShadow: '16px 32px 40px rgba(0,0,0,.1)',
      borderRadius: '24px',
    },
  ];

  return (
    <section className={`overflow-hidden ${styles.inverseLinearGradient}`}>
      <div className="relative mx-4 pb-12 pt-24 lg:pt-0 xl:mx-32">
        <div
          className={`absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:block`}
        />
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-center">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div
            className={`flex w-screen flex-shrink-0 ${componentsFlow} items-center justify-center gap-5 px-5 text-center sm:w-auto sm:px-0 md:ml-2 lg:ml-0 lg:items-start lg:text-left`}
          >
            {!shouldShowMobileBanner ? (
              <div className="flex lg:hidden">
                <Image
                  loading="eager"
                  src={mobileImage}
                  draggable="false"
                  quality={100}
                  width={600}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="HeroSection Mobile Image"
                  onClick={handleOnClick}
                />
              </div>
            ) : undefined}

            <div className="flex flex-col gap-6  pt-6 lg:pt-20 ">
              <div className="flex w-full flex-row items-center justify-center rounded-lg lg:justify-center">
                <Alarm className="mr-6 h-6 w-6 text-white" />
                <Countdown textFont="font-medium" textHeight="text-2xl text-white" />
              </div>

              <div className="flex flex-col">
                <Header maxWidth="max-w-[500px]" className="text-5xl text-white">
                  {textContent.title}
                </Header>
                <p className="font-regular pt-4 text-2xl ">
                  <span className="text-white">{textContent.subtitle}</span>
                </p>
              </div>
              <div className="mx-auto flex flex-col lg:mx-0">
                {textContent.features.map((feat) => (
                  <div key={feat} className="flex flex-row gap-2">
                    <Check className="pt-2 text-green-1 lg:pt-0" weight="bold" size={24} />
                    <p className="text-left text-lg font-semibold text-white ">{feat}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-row justify-center gap-4 pt-4 lg:justify-start ">
                <div className="flex flex-col items-center lg:flex-row">
                  <Link
                    href={'#priceTable'}
                    className={`z-10 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-xl font-medium text-white hover:bg-primary-dark`}
                  >
                    {textContent.cta1}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" hidden min-h-[700px] w-full justify-center pt-24 lg:flex">
            <Animation images={images} />;
          </div>
        </div>
      </div>
    </section>
  );
}
