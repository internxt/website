import { Globe, SketchLogo, CloudCheck, FileArrowUp, ClockCounterClockwise } from 'phosphor-react';
import React from 'react';
import ShowSnackbar from '../ShowSnackbar';

const HeroSection = ({ textContent, isTechradar }) => {
  const [open, setOpen] = React.useState(false);

  const subtitle1Partner = textContent.subtitle.split('SPECIAL15')[0];
  const subtitle2Partner = textContent.subtitle.split('SPECIAL15')[1];
  const flash = textContent.subtitle.substr(textContent.subtitle.indexOf('SPECIAL15'), 9);

  const subtitleTechradar = textContent.subtitle1.split('TECHRADAR')[0];
  const techradar = textContent.subtitle1.substr(textContent.subtitle1.indexOf('TECHRADAR'), 9);

  const FeatureSection = [
    {
      id: 1,
      icon: SketchLogo,
      title: 'Clean and intuitive interface',
    },
    {
      id: 2,
      icon: Globe,
      title: 'Available on any device',
    },
    {
      id: 3,
      icon: CloudCheck,
      title: 'Offline file access',
    },
    {
      id: 4,
      icon: FileArrowUp,
      title: 'Derestricted file sizes',
    },
    {
      id: 5,
      icon: ClockCounterClockwise,
      title: 'Backup service included',
    },
  ];

  const copyCoupon = () => {
    if (isTechradar) {
      navigator.clipboard.writeText(techradar);
    } else {
      navigator.clipboard.writeText(flash);
    }
    setOpen(true);
  };

  if (open) {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }

  return (
    <>
      {isTechradar ? (
        <>
          <section className=" partnerHeroSection overflow-hidden">
            <div className="mt-[77px] mb-20 flex flex-col justify-center lg:mx-10 lg:flex-row lg:justify-evenly xl:mx-32">
              <div className="mx-4 flex flex-col items-center justify-center space-y-8 text-center text-white lg:mr-52 lg:max-w-[456px]  lg:items-start lg:text-start">
                <div>
                  <h1 className=" text-6xl font-semibold">{textContent.title1.line1}</h1>
                  <p className="pt-2 text-3xl font-semibold">{textContent.title1.line2}</p>
                </div>
                <p className="text-2xl font-normal">
                  {subtitleTechradar}
                  {
                    <button onClick={copyCoupon} className="">
                      <b>
                        <p className="underline underline-offset-4">{techradar}</p>
                      </b>
                    </button>
                  }
                </p>
                <div className="flex rounded-full bg-white px-9 py-4">
                  <a href="#pricing">
                    <button className="text-lg font-normal text-primary" onClick={() => {}}>
                      {textContent.cta}
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative px-10 pt-20 lg:px-0 lg:pt-10">
                <div className="absolute z-10 hidden flex-row pr-5 lg:-top-10 lg:flex">
                  <img src="/images/partners-discount/Vector.svg" className="pr-3" />
                  <img src="/images/partners-discount/Vector.svg" />
                </div>
                <div className="z-20 flex flex-col items-center justify-center rounded-2xl bg-white p-5 sm:p-10 lg:pt-10">
                  <div className=" flex max-w-[401px] flex-col p-10 text-center">
                    <p className="text-3xl font-normal text-gray-60">{textContent.card}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="flex flex-col pb-2 text-center text-lg text-gray-60">Recommended by:</p>
                    <img src="/images/partners-discount/Techradar.svg" />
                  </div>
                </div>
              </div>
            </div>
            <ShowSnackbar open={open} />
          </section>
          <div className="sm:gap-x-30 flex flex-row flex-wrap justify-center gap-y-10 gap-x-20 py-14">
            {FeatureSection.map((item, index) => (
              <div
                key={index}
                className="flex max-w-[185px] flex-col items-center justify-center space-y-8 text-center"
              >
                <item.icon size={40} className="text-primary" />
                <p className="text-2xl font-normal">{item.title}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <section className=" partnerHeroSection overflow-hidden">
          <div className="mt-[77px] mb-20 flex flex-col justify-center lg:flex-row lg:justify-between 2xl:justify-evenly">
            <div className="mx-20 mb-6 flex w-auto flex-col lg:hidden">
              <img
                loading="lazy"
                src="/images/home/devicesMobileView.webp"
                draggable="false"
                alt="laptop and phone with Internxt app"
              />
            </div>
            <div className="mx-4 flex flex-col items-center justify-center space-y-8 text-center text-white lg:ml-32 lg:max-w-[456px] lg:items-start lg:text-start 2xl:ml-20">
              <h1 className=" text-6xl font-semibold">{textContent.title}</h1>
              <p className=" text-2xl font-normal">
                {subtitle1Partner}
                {
                  <button onClick={copyCoupon} className="">
                    <b>
                      <p className="underline underline-offset-4">{flash}</p>
                    </b>
                  </button>
                }
                {subtitle2Partner}
              </p>
              <div className="flex rounded-full bg-white px-9 py-4">
                <a href="#pricing">
                  <button className="text-lg font-normal text-primary" onClick={() => {}}>
                    {textContent.cta}
                  </button>
                </a>
              </div>
            </div>
            <div className="hidden max-w-[679px] flex-col pl-32 pt-8 lg:flex lg:pt-0 2xl:hidden">
              <img src="/images/partners-discount/partners-image.png" alt="Devices image" className="" />
            </div>
            <div className="hidden 2xl:flex">
              <img src="/images/home/devicesDesc.png" alt="Devices image" />
            </div>
          </div>
          <ShowSnackbar open={open} />
        </section>
      )}
    </>
  );
};

export default HeroSection;
