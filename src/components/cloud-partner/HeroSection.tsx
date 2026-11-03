import { CloudPartnerText } from '@/assets/types/cloud-partner';
import Link from 'next/link';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface HeroSectionProps {
  textContent: CloudPartnerText['HeroSection'];
}

export default function HeroSection({ textContent }: HeroSectionProps): JSX.Element {
  return (
    <div
      className="mt-20 flex flex-row items-center justify-between pb-8 pt-20 lg:mt-16 lg:px-10 xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex flex-col gap-8">
        <span className="flex flex-col gap-4">
          <p className="text-2xl font-semibold text-primary lg:text-4xl">{textContent.title}</p>
          <p className="text-xl font-semibold text-gray-95 lg:text-2xl">{textContent.description}</p>
        </span>
        <Link
          href={'#contactSalesForm'}
          className="no z-10 flex h-[48px] w-1/2 items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary  py-4 text-base font-medium text-white hover:bg-primary-dark lg:w-[177px]"
        >
          {textContent.cta}
        </Link>
      </div>
      <Image
        src={getImage('/images/cloud-partners/HeroSection.webp')}
        alt="Internxt Drive panel interface"
        height={600}
        width={600}
        quality={100}
      />
    </div>
  );
}
