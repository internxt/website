import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { goToSignUpURL } from '../../lib/auth';
import SignUpInline from '../auth/SignUpInline';
import Image from 'next/image';
import Header from '../shared/Header';
import HomePageBanner from '../banners/HomePageBanner';

export default function HeroSection({ textContent, lang }) {
  const [formError, setFormError] = useState<string | null>(null);
  const [formLoading, setFormLoading] = useState<boolean>(false);

  // Header animation
  const [headerAnimation1, setHeaderAnimation1] = useState<boolean>(false);
  const [headerAnimation2, setHeaderAnimation2] = useState<boolean>(false);
  const [headerAnimation3, setHeaderAnimation3] = useState<boolean>(false);
  const [headerAnimation4, setHeaderAnimation4] = useState<boolean>(false);
  const [headerAnimation5, setHeaderAnimation5] = useState<boolean>(false);
  const [headerAnimation6, setHeaderAnimation6] = useState<boolean>(false);
  const [headerAnimation7, setHeaderAnimation7] = useState<boolean>(false);

  const title = textContent.title.line1.split('Internxt')[0];
  const Internxt =
    textContent.title.line1.includes('Internxt') &&
    textContent.title.line1.substr(textContent.title.line1.indexOf('Internxt'), 8);

  useEffect(() => {
    setTimeout(() => {
      setHeaderAnimation1(true);
    }, 500);
    setTimeout(() => {
      setHeaderAnimation2(true);
    }, 900);
    setTimeout(() => {
      setHeaderAnimation3(true);
    }, 1200);
    setTimeout(() => {
      setHeaderAnimation4(true);
    }, 1500);
    setTimeout(() => {
      setHeaderAnimation5(true);
    }, 1650);
    setTimeout(() => {
      setHeaderAnimation6(true);
    }, 1800);
    setTimeout(() => {
      setHeaderAnimation7(true);
    }, 2000);
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="relative mx-4 border-b border-gray-5 pt-24 lg:mx-10 lg:pt-16 xl:mx-32">
        <div
          className="absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('images/home/header/bg.svg')", filter: 'blur(24px)' }}
        />

        <div className="relative mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-start lg:flex-row lg:items-stretch">
          {/* Mobile view */}
          <HomePageBanner />
          <div className="my-6 flex flex-shrink-0 flex-col items-center px-5 text-center sm:px-0 md:my-20 md:ml-2 md:max-w-md lg:my-28 lg:ml-0 lg:max-w-xl lg:items-start lg:text-left">
            <Header>
              {textContent.title.line1}{' '}
              <span className=" whitespace-nowrap text-primary">{textContent.title.blueText}</span>
            </Header>

            <h2 className="mb-4 text-xl font-normal text-gray-80 md:mb-8">{textContent.subtitle}</h2>

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

            <div className="hidden w-full md:flex">
              <SignUpInline error={formError} loading={formLoading} textContent={textContent.SignUp} />
            </div>
          </div>

          {/* Desktop view full */}
          <div className="relative hidden max-w-sm flex-1 items-center justify-start md:flex">
            <div className="absolute -left-16 flex h-full w-[5000px]">
              <img
                className="relative h-full object-contain object-left"
                src="/images/lifetime/Internxt_Lifetime.webp"
              />
            </div>
          </div>
          {/* Desktop view reduced */}
          {/* <div className="ml-5 hidden max-w-2xl flex-grow translate-x-10 transform flex-col md:flex lg:-mr-7 xl:ml-20 xl:hidden">
            <Image
              loading="eager"
              className="object-contain"
              width={600}
              height={450}
              layout="responsive"
              src="/images/home/devicesAscCut.webp"
              draggable="false"
              alt="desktop, laptop and phone with Internxt app"
            />
          </div> */}
        </div>

        <div className="relative left-1/2 z-10 w-screen -translate-x-1/2 bg-transparent">
          <div className={'flex xl:hidden'}>
            <Marquee gradientColor={[255, 255, 255]} className="bg-transparent" gradientWidth="32px" speed={30}>
              <div className="featured flex w-full flex-row p-6">
                {lang === 'es' ? (
                  <a
                    href="https://forbes.es/empresas/155897/telefonica-se-une-a-roig-e-invierte-en-internxt-el-google-drive-espanol-que-vale-40-millones/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/forbes.svg"
                      draggable="false"
                      width="62"
                      height="16"
                      alt="forbes logo"
                    />
                  </a>
                ) : (
                  <a
                    href="https://www.forbes.com/sites/alisoncoleman/2021/07/13/hard-knocks-how-a-schoolboy-rugby-injury-inspired-this-tech-entrepreneur/?sh=7108d8d570ee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/forbes.svg"
                      draggable="false"
                      width="62"
                      height="16"
                      alt="forbes logo"
                    />
                  </a>
                )}

                {lang === 'es' && (
                  <a
                    href="https://www.elconfidencial.com/empresas/2022-04-25/telefonica-juan-roig-google-drive-espanol_3413834/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/elconfidencial.svg"
                      draggable="false"
                      width="144"
                      height="16"
                      alt="elconfidencial logo"
                    />
                  </a>
                )}

                <a
                  href="https://www.techradar.com/news/how-decentralized-models-are-reimagining-the-cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/techradar.svg"
                    draggable="false"
                    width="94"
                    height="16"
                    alt="techradar logo"
                  />
                </a>

                <a
                  href="https://techcrunch.com/2021/06/17/internxt-gets-1m-to-be-the-coinbase-of-decentralized-storage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/techcrunch.svg"
                    draggable="false"
                    width="113"
                    height="16"
                    alt="techcrunch logo"
                  />
                </a>

                <a
                  href="https://venturebeat.com/2022/04/25/web3-startup-internxt-valued-at-40m-aims-to-compete-with-google-drive/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/venturebeat.svg"
                    draggable="false"
                    width="125"
                    height="16"
                    alt="venturebeat logo"
                  />
                </a>

                <a
                  href="https://www.hostingadvice.com/blog/internxt-delivers-secure-by-design-cloud-storage-with-user-privacy-locked-in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-10"
                    src="../../logos/featured/HostingAdvice.png"
                    draggable="false"
                    width="168"
                    height="18"
                    alt="Hosting Advice logo"
                  />
                </a>

                <a href="https://www.wired.com/gallery/best-cloud-storage-services/" target="_blank" rel="noreferrer">
                  <img
                    src="../../logos/featured/wired.svg"
                    width={82}
                    height={16}
                    alt="Wired logo"
                    loading="lazy"
                    className="mr-10"
                  />
                </a>

                {lang === 'es' && (
                  <a
                    href="https://www.lavanguardia.com/local/valencia/20210130/6207854/valenciano-emprendedor-joven-internxt-drive.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/lavanguardia.svg"
                      draggable="false"
                      width="152"
                      height="16"
                      alt="lavanguardia logo"
                    />
                  </a>
                )}

                {lang === 'es' && (
                  <a
                    href="https://cincodias.elpais.com/cincodias/2021/01/26/companias/1611660127_471030.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mr-24"
                      loading="lazy"
                      src="../../logos/featured/elpais.svg"
                      draggable="false"
                      width="82"
                      height="16"
                      alt="elpais logo"
                    />
                  </a>
                )}
              </div>
            </Marquee>
          </div>

          <div className={'mx-auto hidden w-full overflow-hidden xl:flex'}>
            <div className="featured flex w-full flex-row justify-center overflow-x-auto px-4 pb-8 pt-10">
              <div className="flex flex-row items-center">
                {lang === 'es' ? (
                  <a
                    href="https://forbes.es/empresas/155897/telefonica-se-une-a-roig-e-invierte-en-internxt-el-google-drive-espanol-que-vale-40-millones/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/forbes.svg"
                      draggable="false"
                      width="62"
                      height="16"
                      alt="forbes logo"
                    />
                  </a>
                ) : (
                  <a
                    href="https://www.forbes.com/sites/alisoncoleman/2021/07/13/hard-knocks-how-a-schoolboy-rugby-injury-inspired-this-tech-entrepreneur/?sh=7108d8d570ee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/forbes.svg"
                      draggable="false"
                      width="62"
                      height="16"
                      alt="forbes logo"
                    />
                  </a>
                )}

                {lang === 'es' && (
                  <a
                    href="https://www.elconfidencial.com/empresas/2022-04-25/telefonica-juan-roig-google-drive-espanol_3413834/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/elconfidencial.svg"
                      draggable="false"
                      width="144"
                      height="16"
                      alt="elconfidencial logo"
                    />
                  </a>
                )}

                <a
                  href="https://www.techradar.com/news/how-decentralized-models-are-reimagining-the-cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/techradar.svg"
                    draggable="false"
                    width="94"
                    height="16"
                    alt="techradar logo"
                  />
                </a>

                <a
                  href="https://techcrunch.com/2021/06/17/internxt-gets-1m-to-be-the-coinbase-of-decentralized-storage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/techcrunch.svg"
                    draggable="false"
                    width="113"
                    height="16"
                    alt="techcrunch logo"
                  />
                </a>

                <a
                  href="https://venturebeat.com/2022/04/25/web3-startup-internxt-valued-at-40m-aims-to-compete-with-google-drive/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/venturebeat.svg"
                    draggable="false"
                    width="125"
                    height="16"
                    alt="venturebeat logo"
                  />
                </a>

                <a
                  href="https://www.hostingadvice.com/blog/internxt-delivers-secure-by-design-cloud-storage-with-user-privacy-locked-in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className={'mr-12'}
                    src="../../logos/featured/HostingAdvice.png"
                    draggable="false"
                    width="168"
                    height="18"
                    alt="Hosting Advice logo"
                  />
                </a>

                <a href="https://www.wired.com/gallery/best-cloud-storage-services/" target="_blank" rel="noreferrer">
                  <img
                    src="../../logos/featured/wired.svg"
                    width={82}
                    height={16}
                    alt="Wired logo"
                    className="mr-12"
                    loading="lazy"
                  />
                </a>

                {lang === 'es' && (
                  <a
                    href="https://www.lavanguardia.com/local/valencia/20210130/6207854/valenciano-emprendedor-joven-internxt-drive.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/lavanguardia.svg"
                      draggable="false"
                      width="152"
                      height="16"
                      alt="lavanguardia logo"
                    />
                  </a>
                )}

                {lang === 'es' && (
                  <a
                    href="https://cincodias.elpais.com/cincodias/2021/01/26/companias/1611660127_471030.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      src="../../logos/featured/elpais.svg"
                      draggable="false"
                      width="82"
                      height="16"
                      alt="elpais logo"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
