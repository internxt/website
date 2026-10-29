import axios from 'axios';
import Image from 'next/image';

import { getImage } from '@/lib/getImage';
import { HighlightText } from '@/components/components/HighlightText';
import { HeroSection as HeroSectionText } from '@/assets/types/test-ppc-leads';
import SignUpForm from '@/components/shared/SignUpForm';
import { analyticsService } from '@/services/ga.services';

interface HeroSectionProps {
  darkMode?: boolean;
  textContent: HeroSectionText;
  lang?: string;
}

const LANDING_NAME = 'test-ppc-leads';
const LEAD_REQUEST_TIMEOUT = 3000;
const LEAD_EVENT = 'ppc_lead';

export const HeroSection = ({ darkMode = false, textContent, lang }: HeroSectionProps): JSX.Element => {
  const registerLead = async (email: string) => {
    await axios.post(
      '/api/ppc-leads',
      { email, locale: lang, landing: LANDING_NAME },
      { timeout: LEAD_REQUEST_TIMEOUT },
    );

    analyticsService.trackCustomEvent(LEAD_EVENT, { landing: LANDING_NAME, locale: lang });
  };

  return (
    <section
      id="heroSection"
      className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden px-5 pb-10 pt-28 lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-20 xl:px-32 3xl:px-80"
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, #082D66 0%, #1C1C1C 100%)'
          : 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="flex w-full flex-col gap-8 lg:min-w-0 lg:max-w-[760px] lg:flex-1">
        <div className="flex flex-col gap-3">
          <h1
            className={`text-30 font-semibold leading-tight ${
              darkMode ? 'text-white-95' : 'text-gray-100'
            } lg:text-5xl`}
          >
            <HighlightText text={textContent.title} />
          </h1>
          <HighlightText
            text={textContent.subtitle}
            className={`text-base font-medium leading-tight ${darkMode ? 'text-green-120' : 'text-gray-55'} lg:text-xl`}
          />
        </div>

        <div
          className={`flex w-full flex-col rounded-16 border ${
            darkMode ? 'border-gray-71 bg-[#1C1C1C]' : 'border-gray-10 bg-white'
          } p-6 shadow-soft lg:max-w-[480px] lg:p-8`}
        >
          <SignUpForm textContent={textContent.SignUp} lang={lang} onSubmitEmail={registerLead} darkMode={darkMode} />
        </div>
      </div>

      <div className="flex w-full min-w-0 flex-1 items-center justify-center lg:justify-end">
        <Image
          src={getImage('/images/home/NewDesign/mockup.png')}
          alt="Internxt Drive web app"
          width={580}
          height={508}
          quality={100}
          priority
          className="h-auto w-full max-w-[580px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
