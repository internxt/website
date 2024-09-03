import { Globe, SketchLogo, CloudCheck, FileArrowUp, ClockCounterClockwise } from '@phosphor-icons/react';
import styles from './Background.module.scss';
import { toast } from 'react-toastify';
import Link from 'next/link';

const HeroSection = ({ textContent }) => {
  const open = () => toast.success('Copied to clipboard!');

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
    navigator.clipboard.writeText(techradar);

    open();
  };

  return (
    <>
      <section className="overflow-hidden pt-16">
        <div className="mb-20 mt-[77px] flex flex-col justify-center lg:mx-10 lg:flex-row lg:justify-evenly xl:mx-32">
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
            <div className="flex rounded-lg bg-white px-9 py-4">
              <Link href="#pricing" className="text-lg font-normal text-primary">
                {textContent.cta}
              </Link>
            </div>
          </div>
          <div className="relative px-10 pt-20 lg:px-0 lg:pt-10">
            <div className="absolute z-10 hidden flex-row pr-5 lg:-top-10 lg:flex">
              <img src="/images/partners-discount/Vector.svg" alt="Vector image" className="pr-3" />
              <img src="/images/partners-discount/Vector.svg" alt="Vector image" />
            </div>
            <div className="z-20 flex flex-col items-center justify-center rounded-2xl bg-white p-5 sm:p-10 lg:pt-10">
              <div className=" flex max-w-[401px] flex-col p-10 text-center">
                <p className="text-3xl font-normal text-gray-60">{textContent.card}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="flex flex-col pb-2 text-center text-lg text-gray-60">Recommended by:</p>
                <img src="/images/partners-discount/Techradar.svg" alt="Techradar image" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute left-0 top-16 -z-10 flex h-screen w-screen ${styles.partnerHeroSection} pointer-events-none origin-center`}
        />
      </section>
      <div className="sm:gap-x-30 flex flex-row flex-wrap justify-center gap-x-20 gap-y-10 py-14">
        {FeatureSection.map((item, index) => (
          <div key={index} className="flex max-w-[185px] flex-col items-center justify-center space-y-8 text-center">
            <item.icon size={40} className="text-primary" />
            <p className="text-2xl font-normal">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
