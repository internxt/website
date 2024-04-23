import Image from 'next/image';
import Button from '../shared/Button';
import Header from '../shared/Header';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';

export const HeroSection = ({ textContent }) => {
  return (
    <section className="-mb-10 overflow-hidden px-5 pt-10">
      <HeroSectionSafeArea>
        <div className="flex w-full items-center justify-between">
          <div className="flex h-full max-w-[553px] flex-col justify-center gap-8">
            <Header>{textContent.title}</Header>
            <p className="text-xl text-gray-80">{textContent.description}</p>
            <Button
              text={textContent.cta}
              onClick={() => {
                // NO OP
              }}
            />
          </div>
          <div className="flex h-full lg:translate-x-10">
            <Image
              src={'/images/webdav/cli-and-drive-web.svg'}
              draggable={false}
              alt="WebDAV and Drive Web"
              width={614}
              height={491}
            />
          </div>
        </div>
      </HeroSectionSafeArea>
    </section>
  );
};
