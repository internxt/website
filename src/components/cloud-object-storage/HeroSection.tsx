import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import Header from '../shared/Header';
import Button from '../shared/Button';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface HeroSectionProps {
  textContent: CloudObjectStorageText['HeroSection'];
}

export const CloudObjectStorageHeroSection = ({ textContent }: HeroSectionProps): JSX.Element => (
  <section
    className="-mb-28 -mt-10 overflow-hidden px-5 py-20"
    style={{
      background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
    }}
  >
    <HeroSectionSafeArea>
      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:justify-between">
        <div className="flex max-w-[533px] flex-col items-center justify-center gap-8 text-center text-white lg:items-start lg:text-left">
          <Header withoutLeading className="leading-none" textHeightForDesk="sm:text-7xl">
            {textContent.title.line1}
            <span className="font-bold lg:text-5xl">{textContent.title.line2}</span>
          </Header>
          <p className="text-xl">{textContent.description}</p>
          <Button
            className="!w-full lg:!w-max"
            text={textContent.cta}
            onClick={() => (window.location.hash = '#storageSection')}
          />
        </div>
        <div className="flex">
          <Image
            src={getImage('/images/cloud-object-storage/s3_internxt.webp')}
            alt="cloud object storage"
            quality={100}
            width={631}
            height={745}
            draggable={false}
          />
        </div>
      </div>
    </HeroSectionSafeArea>
  </section>
);
