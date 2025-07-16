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
    <section className="flex h-[400px] w-full overflow-hidden rounded-16 bg-gradient-to-br from-blue-20 to-white lg:h-[330px] lg:max-w-[1000px] lg-xl:max-w-[1075px] 2xl:max-w-[1250px]">
      <div className="flex w-full flex-row items-center justify-center md:w-max">
        <div className="flex flex-col items-center justify-center md:ml-11 md:items-start md:space-y-8 md:px-0 lg:w-[600px]">
          <div className="flex w-[600px] items-start text-left">
            <p className=" text-center text-4xl font-semibold md:text-left">
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
          <div className="flex w-full">
            <SignUpInline textContent={signUpLang.HeroSection.SignUp} isBanner />
          </div>
        </div>
        <div className="absolute -right-0  hidden items-center md:flex">
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
