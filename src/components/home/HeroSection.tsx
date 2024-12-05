import dynamic from 'next/dynamic';
import { getImage } from '@/lib/getImage';
import { HomeText } from '@/assets/types/home';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import TitleAndOnePlan from './components/heroSection/TitleAndOnePlan';
import { HomePageBannerForMobile } from '../banners/HomePageBannerForMobile';
const Animation = dynamic(() => import('./components/Animation'));
import Image from 'next/image';
import Header from '../shared/Header';

interface HeroSectionForHomeProps {
  textContent: HomeText['HeroSection'];
  lang: string;
  isHomePageV2?: boolean;
}

export default function HeroSection({ textContent, lang, isHomePageV2 }: HeroSectionForHomeProps): JSX.Element {
  const { dialogIsOpen } = useGlobalDialog();
  const shouldShowMobileBanner = dialogIsOpen(GlobalDialog.MobileBannerForHome);
  const previewImg = getImage('/images/lifetime/file_item.webp');
  const componentsFlow = isHomePageV2 ? 'flex-col-reverse' : 'flex-col';

  const titleAndOnePlanText = isHomePageV2 ? textContent.TitleAndOnePlanV2 : textContent.TitleAndOnePlan;

  return (
    <section className="overflow-hidden">
      <div className="relative flex h-full flex-col bg-white pt-16 xl:mx-32">
        {/* Desktop version */}
        <div className="relative mx-auto hidden w-full max-w-screen-xl flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-between lg:py-10 ">
          <div
            className={`flex w-screen flex-shrink-0 ${componentsFlow} items-center justify-center gap-5 px-5 pt-5 text-center sm:w-auto sm:px-0 md:ml-2 lg:ml-0 lg:items-start lg:text-left`}
          >
            <TitleAndOnePlan textContent={titleAndOnePlanText} />
          </div>
          <div className="hidden h-[580px] w-full lg:flex">
            <Animation previewImg={previewImg} />
          </div>
        </div>
        {/* Mobile version */}
        <div className="flex flex-col items-center px-4 py-5 lg:hidden">
          <Header maxWidth="max-w-max" className="pb-8 text-center text-gray-100">
            <span>{textContent.title.line1}</span>
            <br />
            <span className="text-primary">{textContent.title.blueText}</span>
            <br />
            <span>{textContent.title.line2}</span>
          </Header>

          <Image
            src={getImage('/images/lifetime/image_mobile.webp')}
            alt={'Internxt Header Image'}
            width={641}
            height={401}
          />
        </div>
      </div>
    </section>
  );
}
