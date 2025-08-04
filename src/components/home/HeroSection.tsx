import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { HomeText } from '@/assets/types/home';
import TitleAndOnePlan from './components/heroSection/TitleAndOnePlan';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styles from '@/components/privacy/HeroSection.module.scss';
import HeroSafeArea from '../HeroSafeArea';

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
        <HeroSafeArea>
          <TitleAndOnePlan
            textContent={titleAndOnePlanText}
            lang={lang}
            percentOff={percentOff}
            minimumPrice={minimumPrice}
          />
          <div className="relative mx-4 hidden w-full flex-col items-center justify-center lg:flex">
            <Image
              src={getImage('/images/campaigns/5th-anniversary/5th_anniversary_logo.png')}
              alt="Internxt x Valencia logo"
              width={1000}
              height={20}
              quality={100}
              className="absolute top-10 z-10"
            />
            <Image
              src={getImage('/images/campaigns/5th-anniversary/logos (mobile).webp')}
              alt="Internxt x Valencia logo"
              width={300}
              height={200}
              quality={100}
              className="absolute bottom-16 right-0 z-10"
            />
          </div>
        </HeroSafeArea>
      </div>
    </section>
  );
}
