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
        <div className="absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat  lg:block" />
        <div className={`flex h-[740px] w-full flex-shrink-0 flex-row pt-8 lg:h-[700px] 1.5xl:h-[800px]`}>
          <div className="flex h-full w-full items-center mobile-md:m-6 lg:mx-10 xl:mx-32">
            <TitleAndOnePlan
              textContent={titleAndOnePlanText}
              lang={lang}
              percentOff={percentOff}
              minimumPrice={minimumPrice}
            />
            <div className="relative flex w-full flex-col items-center justify-center lg:h-[33rem]  1.5xl:h-[37rem] ">
              <Image
                src={getImage('/images/campaigns/5th-anniversary/visual (mobile).webp')}
                alt="Internxt 5th anniversary"
                width={600}
                height={600}
                quality={100}
                className="absolute top-0 z-0 "
              />
              <Image
                src={getImage('/images/campaigns/5th-anniversary/logos (mobile).webp')}
                alt="Internxt x Valencia logo"
                width={300}
                height={200}
                quality={100}
                className="absolute bottom-16 right-0 z-10 1.5xl:bottom-24 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
