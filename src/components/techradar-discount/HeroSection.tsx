import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import dynamic from 'next/dynamic';
import { ImageConfig } from '@/assets/types/private-cloud-storage-solutions';
import { Percent } from '@phosphor-icons/react';
const Animation = dynamic(() => import('../shared/Animation'));
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import Link from 'next/link';
interface HeroSectionForHomeProps {
  textContent: any;

  isHomePageV2?: boolean;
}

export default function HeroSection({ textContent, isHomePageV2 }: HeroSectionForHomeProps): JSX.Element {
  const componentsFlow = isHomePageV2 ? 'flex-col-reverse' : 'flex-col';

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
      <div className="relative mx-4 pb-12 pt-0 lg:pt-0 xl:mx-32">
        <div
          className={`absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:block`}
        />
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-center">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div
            className={`flex w-screen flex-shrink-0 ${componentsFlow} items-center justify-center gap-5 px-5 text-center sm:w-auto sm:px-0 md:ml-2 lg:ml-0 lg:items-start lg:text-left`}
          >
            <div className="flex max-w-[550px] flex-col items-center justify-center space-y-6 pt-32 text-center lg:items-start lg:text-left">
              <div className="flex flex-col space-y-4">
                <div className="px-18 flex flex-row items-center space-x-3.5 pb-6 pl-8 lg:pl-0">
                  <Image
                    src={getImage('/icons/techradarXInternxt.svg')}
                    width={300}
                    height={16}
                    alt="techradar x internxt logo"
                  />
                </div>
                <h1 className="text-4xl font-bold text-white xl:text-6xl">{textContent.title1.line1}</h1>
                <h2 className="text-2xl font-semibold text-primary xl:text-4xl">{textContent.title1.line2}</h2>
              </div>
              <div className="flex w-[350px] flex-row items-center space-x-2.5 rounded-lg bg-primary/7 p-4 px-2 lg:w-[470px] xl:items-center">
                <Percent className="h-48 w-48 text-primary xl:h-12 xl:w-12" />
                <p className="font-regular pl-10 pr-20 text-xl text-white">{textContent.subtitle1}</p>
              </div>
              <Link
                href={'#priceTable'}
                className={`z-10 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-xl font-medium text-white hover:bg-primary-dark`}
              >
                {textContent.cta}
              </Link>
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
