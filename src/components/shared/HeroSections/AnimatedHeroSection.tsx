import dynamic from 'next/dynamic';
import { ImageConfig } from '@/assets/types/private-cloud-storage-solutions';
const Animation = dynamic(() => import('../Animation'));

interface AnimatedHeroSectionProps {
  textComponent: JSX.Element;
  height?: string;
}

export default function AnimatedHero({ textComponent, height }: AnimatedHeroSectionProps): JSX.Element {
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
    <section className="overflow-hidden bg-gradient-to-t from-[#001D6C] to-[#121923] lg:bg-gradient-to-b">
      <div className="relative mx-4 xl:mx-32">
        <div
          className={`absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:block`}
        />
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-center lg:pb-24">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div
            className={`flex w-screen flex-shrink-0 flex-col items-center justify-center gap-5 px-5 text-center sm:w-auto sm:px-0 md:ml-2 lg:ml-0 lg:items-start lg:text-left`}
          >
            <div
              className={`mt-20 flex ${
                height ? height : 'h-[450px]'
              } w-[400px] flex-col items-center justify-between px-6 text-start lg:mt-40 lg:h-[530px] lg:w-[550px] lg:items-start lg:px-0`}
            >
              {textComponent}
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
