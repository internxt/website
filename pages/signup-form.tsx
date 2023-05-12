import Image from 'next/image';
import SignUpInline from '../components/auth/SignUpInline';
import SignUpBanner from '../components/banners/SignUpBanner';
import signUpLang from '../assets/lang/en/home.json';

const SignupForm = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex w-full flex-row bg-gradient-to-br from-blue-20 to-white">
        <div className="mt-11 mb-11 ml-11 flex w-full max-w-[495px] flex-col items-center justify-center space-y-10">
          <p className="text-3xl font-semibold">
            Make privacy a priority and join<span className="text-primary"> Internxt </span>today
          </p>
          <div className="flex w-full">
            <SignUpInline textContent={signUpLang.HeroSection.SignUp} />
          </div>
        </div>
        <div className="-ml-40 flex items-center">
          <div className="relative left-56 top-6 flex flex-col bg-contain">
            <Image
              src="/images/special-offer/black-friday/Devices.png"
              width={534}
              height={340}
              // draggable="false"
              quality={100}
              loading="eager"
              layout="intrinsic"
              alt="desktop, laptop and phone with Internxt app"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  // const bannerLang = require(`../../assets/lang/en/banners.json`);

  return {
    props: {
      lang,
      // bannerLang,
      // signUpLang,
    },
  };
}

export default SignupForm;
