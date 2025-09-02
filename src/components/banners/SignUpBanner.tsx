import SignUpInline from '@/components/auth/SignUpInline';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

const SignUpBanner = ({
  textContent,
  lang,
  changeTextOrder,
}: {
  textContent: any;
  lang: string;
  changeTextOrder?: boolean;
}) => {
  const signUpLang = require(`../../assets/lang/${lang}/home.json`);

  return (
    <section className="flex h-auto w-full flex-col overflow-hidden rounded-16 bg-gradient-to-br from-blue-20 to-white px-4 py-8 md:h-[400px] md:flex-row md:px-0 md:py-0 lg:h-[330px] lg:max-w-[1000px] lg-xl:max-w-[1075px] 2xl:max-w-[1250px]">
      <div className="flex w-full flex-col items-center justify-center md:w-max md:flex-row">
        <div className="flex flex-col items-center justify-center space-y-6 md:ml-11 md:items-start md:space-y-8 lg:w-[600px]">
          <div className="w-full text-center md:w-[600px] md:text-left">
            <p className="text-30 font-semibold md:text-3xl">
              {changeTextOrder ? (
                <>
                  <span className="text-primary">{textContent.blueText}</span>
                  {textContent.line1}
                </>
              ) : (
                <>
                  {textContent.line1} <span className="text-primary">{textContent.blueText}</span>
                </>
              )}
            </p>
          </div>
          <div className="flex w-full justify-center md:justify-start">
            <SignUpInline textContent={signUpLang.HeroSection.SignUp} isBanner />
          </div>
        </div>

        {/* Imagen oculta en móvil, visible desde md */}
        <div className="relative hidden md:flex md:items-center">
          <div className="relative right-0 flex flex-col object-contain pt-10">
            <Image
              src={getImage('/banners/components_for_banners/Grid.webp')}
              width={527}
              height={840}
              draggable="false"
              quality={100}
              loading="eager"
              className="object-contain"
              layout="intrinsic"
              alt="Internxt Grid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpBanner;
