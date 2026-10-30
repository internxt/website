import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Button from '../shared/Button';
import { HomeText } from '@/assets/types/home';

interface AwardWinningSectionProps {
  textContent: HomeText['AwardWinningSection'];
}
const onButtonClick = () => (window.location.href = '#priceTable');

export default function AwardWinningSection({
  textContent,
}: Readonly<AwardWinningSectionProps>): JSX.Element {
  return (
    <section className="flex h-[641px] w-full items-center justify-center overflow-hidden px-6 py-10 lg:h-min lg:px-10 lg:py-20 xl:px-32 3xl:px-80 bg-neutral-17 dark:bg-gray-95">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 dark:bg-gray-71 lg:bottom-0 lg:left-32 lg:right-32"></div>
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-8 rounded-xl p-4 lg:flex-row lg:rounded-16 lg:p-10 bg-[linear-gradient(360deg,#E5EFFF_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(360deg,#082D66_0%,#1C1C1C_100%)]">
        <div className="flex items-center justify-center lg:h-[508px] lg:w-[580px]">
          <Image
            src={getImage('/images/home/NewDesign/mockup.png')}
            alt="Internxt Mockup"
            height={508}
            width={508}
            quality={100}
            className="hidden lg:flex"
          />
          <Image
            src={getImage('/images/home/NewDesign/mockup.png')}
            alt="Internxt Mockup"
            height={280}
            width={330}
            quality={100}
            className="flex lg:hidden"
          />
        </div>
        <div className="flex h-[213px] w-[313px] flex-col justify-center lg:h-full lg:w-[580px] lg:gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-30 font-bold leading-tight text-gray-95 dark:text-white-95 lg:text-3xl">
              {textContent.title}
            </p>
            <p className="text-base font-normal leading-tight text-gray-55 dark:text-green-120 lg:text-xl">
              {textContent.description}
            </p>
            <p className="text-sm font-semibold leading-tight text-gray-55 dark:text-green-120 lg:text-xl">
              {textContent.subtitle}
            </p>
          </div>
          <Button text={textContent.cta} onClick={onButtonClick} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
}
