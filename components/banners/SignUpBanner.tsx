import React from 'react';
import SignUpInline from '../auth/SignUpInline';
import Image from 'next/image';

const SignUpBanner = ({ textContent, lang }: { textContent: any; lang: string }) => {
  const signUpLang = require(`../../assets/lang/${lang}/home.json`);

  return (
    <section className="hidden w-full max-w-[857px] overflow-hidden bg-gradient-to-br from-blue-20 to-white lg:flex">
      <div className="flex flex-row items-center justify-center">
        <div className="mt-11 mb-11 ml-11 flex w-full max-w-[495px] flex-col items-center justify-center space-y-10">
          <p className="text-4xl font-semibold">
            {textContent.line1} <span className="text-primary">{textContent.blueText}</span>
          </p>
          <div className="flex w-full">
            <SignUpInline textContent={signUpLang.HeroSection.SignUp} isBanner />
          </div>
        </div>
        <div className="absolute -right-64 flex items-center">
          <div className="relative right-0  flex flex-col bg-contain">
            <Image
              src="/images/home/Internxt-secure-cloud-storage.webp"
              width={534}
              height={300}
              // draggable="false"
              quality={100}
              loading="eager"
              className="object-contain"
              layout="intrinsic"
              alt="desktop, laptop and phone with Internxt app"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpBanner;
