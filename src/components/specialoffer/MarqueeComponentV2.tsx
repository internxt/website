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
          <div className="featured flex w-full flex-row items-center space-x-10 p-6">
            <Image
              loading="lazy"
              src={getImage('/logos/featured/Valenciacf.png')}
              draggable={false}
              width="90"
              height="30"
              alt="Valencia CF logo"
            />
            <Image
              loading="lazy"
              src={getImage('/logos/featured/ESET_logo.svg')}
              draggable={false}
              width="140"
              height="60"
              alt="eset logo"
            />
            <Image
              src={getImage('/logos/featured/telefonica.svg')}
              width="200"
              height="80"
              alt="Telefonica logo"
              loading="lazy"
              draggable={false}
            />
            <Image
              src={getImage('/logos/featured/startpage.svg')}
              width="160"
              height="80"
              alt="StartPage logo"
              loading="lazy"
              draggable={false}
            />
            <Image
              src={getImage('/logos/featured/Revolut.svg')}
              width={190}
              height={10}
              alt="Revolut logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/gobierno_de_espana.png')}
              width="300"
              height="150"
              alt="Gobierno de España logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/aepd.svg')}
              width="180"
              height="60"
              alt="AEPD logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/pc_componentes.svg')}
              width="180"
              height="60"
              alt="PCComponentes logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/levante_ud.svg')}
              width={80}
              height={15}
              alt="Levante Union Deportiva logo"
              loading="lazy"
              draggable={false}
            />
          </div>
        </Marquee>
      </div>

      <div className={'mx-auto hidden w-full overflow-hidden xl:flex'}>
        <div className={`featured flex w-full flex-row justify-center overflow-x-auto ${bgColor}  px-4 pb-10`}>
          <div className="flex flex-row items-center space-x-12">
            {label ? <p className="text-xl font-medium text-gray-60">{label}</p> : undefined}
            <Image
              loading="lazy"
              src={getImage('/logos/featured/Valenciacf.png')}
              draggable={false}
              width="40"
              height="10"
              alt="Valencia CF logo"
            />

            <Image
              loading="lazy"
              src={getImage('/logos/featured/ESET_logo.svg')}
              draggable={false}
              width="100"
              height="20"
              alt="eset logo"
            />

            <Image
              src={getImage('/logos/featured/telefonica.svg')}
              width="140"
              height="30"
              alt="Telefonica logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/startpage.svg')}
              width="120"
              height="20"
              alt="StartPage logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/Revolut.svg')}
              width="100"
              height="20"
              alt="Revolut logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/gobierno_de_espana.png')}
              width="150"
              height="40"
              alt="Gobierno de España logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/aepd.svg')}
              width="110"
              height="30"
              alt="AEPD logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/pc_componentes.svg')}
              width="100"
              height="20"
              alt="PCComponentes logo"
              loading="lazy"
              draggable={false}
            />

            <Image
              src={getImage('/logos/featured/levante_ud.svg')}
              width={40}
              height={15}
              alt="Levante Union Deportiva logo"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
