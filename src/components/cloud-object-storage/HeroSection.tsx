import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import Header from '../shared/Header';
import Button from '../shared/Button';

interface HeroSectionProps {
  textContent: CloudObjectStorageText['HeroSection'];
}

export const CloudObjectStorageHeroSection = ({ textContent }: HeroSectionProps): JSX.Element => (
  <section
    className="overflow-hidden py-20 px-5"
    style={{
      background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
    }}
  >
    <HeroSectionSafeArea>
      <div className="flex max-w-[533px] flex-col items-center gap-8 text-center text-white lg:items-start lg:text-left">
        <Header withoutLeading className="leading-none" textHeightForDesk="sm:text-7xl">
          {textContent.title.line1}
          <span className="text-5xl font-bold">{textContent.title.line2}</span>
        </Header>
        <p className="text-xl">{textContent.description}</p>
        <Button
          className="!w-full lg:!w-max"
          text={textContent.cta}
          onClick={() => (window.location.hash = '#storageSection')}
        />
      </div>
      <div></div>
    </HeroSectionSafeArea>
  </section>
);
