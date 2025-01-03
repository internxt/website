import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface MarqueeComponentProps {
  label?: string;
  bgColor?: string;
}

export const MarqueeComponentV2 = ({ label, bgColor = 'bg-color-1' }: MarqueeComponentProps) => {
  return (
    <div className={`relative left-1/2 z-10 w-screen -translate-x-1/2`}>
      <div className={'flex xl:hidden'}>
        <Marquee gradientColor={[255, 255, 255]} className={bgColor} gradientWidth="32px" speed={30}>
          <div className="featured flex w-full flex-row space-x-10 p-6">
            <Image
              loading="lazy"
              src={getImage('/logos/featured/ESET_logo.svg')}
              draggable={false}
              width="171"
              height="40"
              alt="eset logo"
            />

            <Image
              src={getImage('/logos/featured/telefonica.svg')}
              width={113}
              height={60}
              alt="Telefonica logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/startpage.svg')}
              width={110}
              height={27}
              alt="Start Page logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/Revolut.svg')}
              width={118}
              height={18}
              alt="Telefonica logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/gobierno_de_espana.png')}
              width={181}
              height={28}
              alt="Gobierno de Espana logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/aepd.svg')}
              width={181}
              height={34}
              alt="AEPD logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/pc_componentes.svg')}
              width={181}
              height={34}
              alt="Heise logo"
              loading="lazy"
              draggable={false}
            />
          </div>
        </Marquee>
      </div>

      <div className={'mx-auto hidden w-full overflow-hidden xl:flex'}>
        <div className={`featured flex w-full flex-row justify-center overflow-x-auto ${bgColor} px-4 py-5`}>
          <div className="flex flex-row items-center space-x-12">
            {label ? <p className="text-xl font-medium text-gray-60">{label}</p> : undefined}
            <Image
              loading="lazy"
              src={getImage('/logos/featured/ESET_logo.svg')}
              draggable={false}
              width="94"
              height="16"
              alt="eset logo"
            />

            <Image
              src={getImage('/logos/featured/telefonica.svg')}
              width={82}
              height={16}
              alt="Telefonica logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/startpage.svg')}
              width={78}
              height={19}
              alt="StartPage logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/Revolut.svg')}
              width={83}
              height={16}
              alt="Revolut logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/gobierno_de_espana.png')}
              width={113}
              height={20}
              alt="Gobierno de España logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/aepd.svg')}
              width={128}
              height={24}
              alt="AEPD logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/pc_componentes.svg')}
              width={128}
              height={24}
              alt="PCComponentes logo"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
