import SignUpInline from '@/components/auth/SignUpInline';
import Header from '@/components/shared/Header';
import { goToSignUpURL } from '@/lib/auth';

export const TitleAndSignup = ({ textContent }) => {
  return (
    <div className="z-10 flex flex-col md:max-w-lg">
      <Header maxWidth="max-w-[485px]" className="text-gray-100">
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
  );
};
