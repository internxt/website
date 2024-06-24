import dynamic from 'next/dynamic';

import { goToSignUpURL } from '@/lib/auth';
import SignUpInline from '@/components/auth/SignUpInline';
import { HomePageBannerForMobile } from '../banners/HomePageBannerForMobile';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
const Header = dynamic(() => import('@/components/shared/Header'));
const Animation = dynamic(() => import('./components/Animation'));

export default function HeroSection({ textContent, lang }) {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-4 pt-24 lg:mx-10 lg:pt-12 xl:mx-32">
        <div
          className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex"
          style={{ backgroundImage: "url('images/home/header/bg.svg')", filter: 'blur(24px)' }}
        />

        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-stretch lg:py-10">
          <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
          <div className="flex w-screen flex-shrink-0 flex-col items-center gap-5 px-5 pt-5 text-center sm:w-auto  sm:px-0 md:ml-2 lg:my-28 lg:ml-0 lg:items-start lg:text-left">
            <div className="flex lg:hidden">
              <Image
                loading="eager"
                src={getImage('/images/home/image_mobile.webp')}
                draggable="false"
                quality={100}
                width={600}
                height={450}
                alt="Laptop and phone with Internxt app"
              />
            </div>
            <HomePageBannerForMobile />
            <div className="z-10 flex flex-col md:max-w-lg">
              <Header maxWidth="max-w-[476px]" className="text-gray-100">
                {textContent.title.line1} <span className="text-primary">{textContent.title.blueText}</span>
              </Header>

              <h2 className="mb-4 text-xl font-normal text-gray-100">{textContent.subtitle}</h2>

              <button
                className="relative mt-3 flex w-full flex-row items-center justify-center space-x-4 rounded-lg bg-primary px-5 py-2.5 text-lg text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:mt-0 sm:w-auto sm:text-base md:hidden"
                onClick={() => goToSignUpURL()}
              >
                <div className="flex flex-row items-center space-x-2">
                  <span className="font-medium">{textContent.cta.title}</span>
                  <span className="opacity-60">{'—'}</span>
                  <span className="opacity-60">{textContent.cta.subtitle}</span>
                </div>
              </button>

              <div className="z-10 mb-8 hidden w-full md:flex">
                <SignUpInline textContent={textContent.SignUp} />
              </div>
            </div>
          </div>

          {/* Desktop animation/image */}
          <Animation />
        </div>
      </div>
    </section>
  );
}
