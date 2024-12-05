import Image from 'next/image';
import Header from '../shared/Header';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import Link from 'next/link';

export const HeroSection = ({ textContent }) => {
  return (
    <section className="-mb-10 overflow-hidden px-5 pt-10">
      <HeroSectionSafeArea>
        <div className="flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-0">
          <div className="flex h-full max-w-[553px] flex-col items-center justify-center gap-8 text-center md:items-start md:text-left">
            <Header>{textContent.title}</Header>
            <p className="text-xl text-gray-80">{textContent.description}</p>
            <Link
              href={'#downloadCli'}
              className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
            >
              {textContent.cta}
            </Link>
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
