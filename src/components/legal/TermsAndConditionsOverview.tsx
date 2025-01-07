import { useEffect, useState } from 'react';
import SelectSection from './components/SelectSection';
import CookiesSection from './CookiesSection';
import WhenWhyHowSection from './WhenWhyHowSection';
import MainSection from './MainSection';
import { CalendarBlank } from '@phosphor-icons/react';
import { isMobile } from 'react-device-detect';

const TermsAndConditionsOverview = ({ textContent, lang }) => {
  const [itemSelected, setItemSelected] = useState();

  // Set the scroll at center of the screen with anchor tag
  useEffect(() => {
    if (itemSelected && !isMobile) {
      const element = document.getElementById(itemSelected);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }, [itemSelected]);

  return (
    <>
      <div className="hidden flex-col pt-16 text-start lg:flex">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-dark py-20">
          <h1 className="mb-8 select-none text-6xl font-semibold text-white">{textContent.HeroSection.title}</h1>
        </div>
        <div className="flex flex-row items-start space-x-16 px-24 py-20">
          <SelectSection textContent={textContent} itemSelected={itemSelected} setItemSelected={setItemSelected} />
          <div className="flex w-full flex-col space-y-8">
            <div className="flex flex-row items-center space-x-2 text-base text-gray-80">
              <CalendarBlank size={17} />
              <p>{textContent.lastUpdated}</p>
            </div>
            <div className="border border-gray-10" />
            <div className="flex scroll-smooth">
              <div className="flex flex-col">
                <MainSection textContent={textContent} />
                <CookiesSection textContent={textContent} lang={lang} />
                <WhenWhyHowSection textContent={textContent} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col overflow-hidden pt-16 lg:hidden">
        {/* <div className="flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-dark py-20 text-center">
          <h1 className="mb-8 select-none text-6xl font-semibold text-white">{textContent.HeroSection.title}</h1>
        </div> */}
        <div className="flex flex-col space-y-8 px-5 py-10">
          <div className="flex flex-row items-center space-x-2 text-base text-gray-80">
            <CalendarBlank size={17} />
            <p>{textContent.lastUpdated}</p>
          </div>
          <div className="border border-gray-10" />
          <div className="flex flex-col">
            <MainSection textContent={textContent} />
            <CookiesSection textContent={textContent} lang={lang} />
            <WhenWhyHowSection textContent={textContent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsOverview;
