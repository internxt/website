import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface MarqueeComponentProps {
  label?: string;
  bgColor?: string;
}

export const MarqueeComponent = ({ label, bgColor = 'bg-color-1' }: MarqueeComponentProps) => {
  return (
    <div className={`relative left-1/2 z-10 w-screen -translate-x-1/2`}>
      <div className={'flex xl:hidden'}>
        <Marquee gradientColor={[255, 255, 255]} className={bgColor} gradientWidth="32px" speed={30}>
          <div className="featured flex w-full flex-row space-x-10 p-6">
            <Image
              loading="lazy"
              src={getImage('/logos/featured/techradar.svg')}
              draggable={false}
              width="171"
              height="28"
              alt="techradar logo"
            />

            <Image
              src={getImage('/logos/featured/wired.svg')}
              width={113}
              height={22}
              alt="Wired logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/itsfoss-logo.webp')}
              width={122}
              height={22}
              alt="Its Foss logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/zdnet.svg')}
              width={118}
              height={21}
              alt="ZDNet logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/toms_guide.svg')}
              width={161}
              height={28}
              alt="Toms logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/Valenciacf.png')}
              width={64}
              height={16}
              alt="Valencia CF logo"
              loading="lazy"
              draggable={false}
            />
          </div>
        </Marquee>
      </div>

      <div className={'mx-auto hidden w-full overflow-hidden xl:flex'}>
        <div className={`featured flex w-full flex-row justify-center overflow-x-auto ${bgColor} px-4 py-5`}>
          <div className="flex flex-row items-center space-x-20">
            {label ? <p className="text-xl font-medium text-gray-60">{label}</p> : undefined}
            <Image
              loading="lazy"
              src={getImage('/logos/featured/techradar.svg')}
              draggable={false}
              width="171"
              height="28"
              alt="techradar logo"
            />

            <Image
              src={getImage('/logos/featured/wired.svg')}
              width={113}
              height={22}
              alt="Wired logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/itsfoss-logo.webp')}
              width={110}
              height={27}
              alt="Its Foss logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/zdnet.svg')}
              width={118}
              height={22}
              alt="ZDNet logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/toms_guide.svg')}
              width={161}
              height={28}
              alt="Toms logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/Valenciacf.png')}
              width={64}
              height={16}
              alt="Valencia CF logo"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
