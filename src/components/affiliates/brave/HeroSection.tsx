import { ImageConfig } from '@/assets/types/private-cloud-storage-solutions';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import Button from '@/components/shared/Button';
import HeroSectionSafeArea from '@/components/shared/HeroSectionSafeArea';
import { Percent } from '@phosphor-icons/react';
import dynamic from 'next/dynamic';
const Animation = dynamic(() => import('@/components/shared/Animation'));

interface HeroSectionBraveProps {
  textContent: any;
  onButtonClicked?: () => void;
}

export default function HeroSection({ textContent, onButtonClicked }: HeroSectionBraveProps): JSX.Element {
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

  function redirectToPricingTable() {
    window.location.href = '#priceTable';
  }

  return (
    <section className={`${styles.inverseLinearGradient} overflow-hidden`}>
      <div className=" relative mx-4 pb-12 pt-36 lg:px-10 lg:pt-0">
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-center">
          <div className="flex max-w-[2000px] flex-col items-center justify-center space-y-8 text-center lg:items-start lg:pt-20 lg:text-left">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl font-bold text-white xl:text-5xl">{textContent.title}</h1>
              <h2 className="text-2xl font-semibold text-primary xl:text-3xl">{textContent.subtitle}</h2>
            </div>
            <div className="flex max-w-[400px] flex-row items-start space-x-2.5 rounded-lg bg-primary/25 p-2 xl:items-center">
              <Percent className="h-16 w-16 text-primary xl:h-24 xl:w-24" />
              <p className="text-md font-regular text-white" dangerouslySetInnerHTML={{ __html: textContent.info }}></p>
            </div>
            <Button onClick={onButtonClicked ? onButtonClicked : redirectToPricingTable} text={textContent.cta} />
          </div>
          <div className="hidden min-h-[700px] w-full justify-center pt-24 lg:flex">
            <Animation images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}
