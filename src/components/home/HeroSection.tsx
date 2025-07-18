import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { HomeText } from '@/assets/types/home';
import TitleAndOnePlan from './components/heroSection/TitleAndOnePlan';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styles from '@/components/privacy/HeroSection.module.scss';

const Animation = dynamic(() => import('./components/Animation'));

interface HeroSectionForHomeProps {
  textContent: HomeText['HeroSection'];
  lang: string;
  isHomePageV2?: boolean;
  percentOff: string;
  minimumPrice: string;
}

export default function HeroSection({
  textContent,
  lang,
  isHomePageV2,
  percentOff,
  minimumPrice,
}: HeroSectionForHomeProps): JSX.Element {
  const router = useRouter();
  const mobileImage = getImage('/images/home/image_mobile.webp');
  const bgImage = getImage('/images/campaigns/5th-anniversary/confetti.webp');
  const bgImage2 = getImage('/images/campaigns/5th-anniversary/visual (hero).webp');
  const titleAndOnePlanText = isHomePageV2 ? textContent.TitleAndOnePlanV2 : textContent.TitleAndOnePlan;

  const handleOnClick = () => {
    router.push('/pricing');
  };
  return (
    <section className={`overflow-hidden ${styles.horizontalLinearGardient}`}>
      <div
        className="relative"
        style={{
          backgroundImage: ` url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:block" />
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-center ">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div
            className={`flex h-[700px] w-screen flex-shrink-0 flex-row px-3 pt-[94px] xl:pl-28  1.5xl:pl-10 2xl:pl-0`}
          >
            <TitleAndOnePlan
              textContent={titleAndOnePlanText}
              lang={lang}
              percentOff={percentOff}
              minimumPrice={minimumPrice}
            />
            <div className="hidden h-full justify-center lg:block xl:flex xl:w-[450px]">
              <Image
                loading="eager"
                src={bgImage2}
                draggable="false"
                quality={100}
                width={753.19}
                height={642}
                alt="HeroSection Mobile Image"
                onClick={handleOnClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
