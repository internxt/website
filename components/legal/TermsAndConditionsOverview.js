import { useEffect, useState } from 'react';
import SelectSection from './components/SelectSection';
import CookiesSection from './CookiesSection';
import WhenWhyHowSection from './WhenWhyHowSection';
import MainSection from './MainSection';
import { CalendarBlank } from 'phosphor-react';

const TermsAndConditionsOverview = ({ textContent }) => {
  const [itemSelected, setItemSelected] = useState();

  useEffect(() => {
    window.document.getElementById(itemSelected)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [itemSelected]);

  return (
    <>
      <div className="sticky hidden flex-col overflow-hidden pt-24 text-start lg:flex">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-dark py-20">
          <h1 className="mb-8 select-none text-6xl font-semibold text-white">{textContent.HeroSection.title}</h1>
        </div>
        <div className="flex flex-row items-start space-x-16 overflow-hidden py-20 px-24">
          <SelectSection textContent={textContent} itemSelected={itemSelected} setItemSelected={setItemSelected} />
          <div className="flex h-screen w-full flex-col space-y-8">
            <div className="flex flex-row items-center space-x-2 text-base text-gray-80">
              <CalendarBlank size={17} />
              <p>Last updated: 15 march 2023</p>
            </div>
            <div className="border border-gray-10" />
            <div className="flex justify-end overflow-y-scroll">
              <div className="flex flex-col">
                <MainSection textContent={textContent} />
                <CookiesSection textContent={textContent} />
                <WhenWhyHowSection textContent={textContent} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col overflow-hidden pt-32 lg:hidden">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-dark py-20 text-center">
          <h1 className="mb-8 select-none text-6xl font-semibold text-white">{textContent.HeroSection.title}</h1>
        </div>
        <div className="flex flex-col py-10 px-5">
          <SelectSection textContent={textContent} itemSelected={itemSelected} setItemSelected={setItemSelected} />
          <MainSection textContent={textContent} />
          <CookiesSection textContent={textContent} />
          <WhenWhyHowSection textContent={textContent} />
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsOverview;
