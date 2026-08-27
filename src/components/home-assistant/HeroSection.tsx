import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';

interface HeroSectionForPartnerProps {
  textContent: any;
  darkMode?: boolean;
  isValentinesMode?: boolean;
}

export default function HeroSection({
  textContent,
  darkMode = false,
}: Readonly<HeroSectionForPartnerProps>): JSX.Element {

  return (
    <section
      className={`mt-20 flex h-min w-full flex-row items-center justify-center overflow-hidden py-10 lg:mt-16 lg:h-[657px] lg:justify-between lg:pl-10 lg:pr-4 xl:pl-32 xl:pr-16 3xl:pl-80 3xl:pr-60`}
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, #082D66 0%, #1C1C1C 100%)'
          : 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:h-[392px] lg:w-[606px] lg:justify-between">
        <h1
          className={`text-30 font-semibold leading-tight ${darkMode ? 'text-white-95' : 'text-gray-100'} lg:text-5xl`}
        >
            <HighlightText text={textContent.title} />
        </h1>

        <p
              className={`font-regular ${
                darkMode ? 'text-white-95' : 'text-gray-100'
              } text-lg leading-tight lg:text-xl`}
            >
              {textContent.description}
            </p>

        <div className="flex h-min w-full flex-col justify-center gap-4">
          <div className="flex w-full flex-row items-start gap-4">
            <Link
              href={'#billingButtons'}
              className="z-10 flex items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary-dark"
            >
              {textContent.claimDeal}
            </Link>
          </div>
        </div>
      </div>

      <div
        className={'h-[500px] w-[562px] hidden justify-center lg:flex'}
      >
        <Image
          src={getImage(`/images/influencers/internxt-private-cloud.webp`)}
          alt="Internxt Partners HeroSection Image"
          height={529}
          width={562}
          quality={100}
        />
      </div>
    </section>
  );
}
