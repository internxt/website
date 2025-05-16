import SignUpInline from '@/components/auth/SignUpInline';
import Image from 'next/legacy/image';

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
    <section className="flex w-full max-w-[977px] overflow-hidden bg-gradient-to-br from-blue-20 to-white">
      <div className="flex w-full flex-row items-center justify-center md:w-max">
        <div className="mb-11 mt-11 flex w-full max-w-[390px] flex-col items-center justify-center px-5 md:ml-11 md:items-start md:space-y-8 md:px-0 lg:max-w-[490px]">
          <div className="flex w-full max-w-[500px] items-start text-left">
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
        <div className="absolute -right-64 hidden items-center md:flex">
          <div className="relative right-0  flex flex-col bg-contain">
            <Image
              src="/images/home/internxt_secure_cloud_storage.webp"
              width={534}
              height={300}
              draggable="false"
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
