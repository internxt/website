import React from 'react';
import Marquee from 'react-fast-marquee';

const HeroSection = ({
  textContent,
  lang
}) => (

  <section>

    <div className="content pt-24">

      <div className="flex flex-col md:flex-row items-center justify-between w-full sm:mb-6">

        <div className="flex flex-col w-auto md:hidden mx-20 mb-6">
          <img loading="lazy" src="/images/home/devicesMobileView.webp" draggable="false" alt="laptop and phone with Internxt app" />
        </div>

        <div className="flex-shrink-0 px-6 md:px-0 m-6 md:m-10 lg:m-32 lg:mr-16 flex flex-col w-screen sm:w-auto text-center md:text-left">

          <h1 className="title mb-4 md:mb-8 text-4xl md:text-5xl lg:text-6xl">
            {textContent.title.line1}
            <br className="hidden sm:inline-flex" />
            {' '}
            {textContent.title.line2}
          </h1>

          <h2 className="mb-8 md:mb-8 text-lg lg:text-xl text-neutral-500">
            {textContent.subtitle.line1}
            <br className="hidden sm:inline-flex" />
            {' '}
            {textContent.subtitle.line2}
          </h2>

          <div>

            <a
              href="https://drive.internxt.com/new"
              id="get-started-link"
              target="_top"
              rel="noreferrer"
              className="flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
            >
              {textContent.cta1}
              {' '}
              <span className="font-normal text-blue-30">
                <span className="px-1.5">—</span>
                {textContent.cta1detail}
              </span>
            </a>

          </div>

        </div>

        <div className="hidden md:flex flex-grow flex-col max-w-2xl mr-0 xl:mr-32">

          <img loading="lazy" className="hidden xl:flex" src="/images/home/devicesAsc.webp" draggable="false" alt="desktop, laptop and phone with Internxt app" />

          <img loading="lazy" className="flex xl:hidden" src="/images/home/devicesAscCut.webp" draggable="false" alt="desktop, laptop and phone with Internxt app" />

        </div>

      </div>

      {(lang === 'es') && (
        <div className="flex justify-center sm:-mt-6 md:mt-0 lg:-mt-6 mb-4">
          <div className="flex items-center h-12 px-4 rounded-lg ring-3 ring-cool-gray-10 border border-cool-gray-30">
            <img loading="lazy" className="h-14" src="../../logos/investors/ue.webp" alt="Unión Europea" draggable="false" />
            <span className="text-sm whitespace-nowrap">Fondo Europeo de Desarrollo Regional</span>
          </div>
        </div>
      )}

      <div className="featuredMarquee">

        <div className="flex xl:hidden">

          <Marquee className="bg-white" gradientColor="[255,255,255]" gradientWidth="32px" speed="30">

            <div className="featured flex flex-row w-full p-6">

              <a href="https://forbes.es/empresas/155897/telefonica-se-une-a-roig-e-invierte-en-internxt-el-google-drive-espanol-que-vale-40-millones/" target="_blank" rel="noreferrer">
                <img loading="lazy" className="mr-12" src="../../logos/featured/forbes.svg" draggable="false" width="62" height="16" alt="forbes logo" />
              </a>

              {lang === 'es' ? (
                <a href="https://forbes.es/empresas/155897/telefonica-se-une-a-roig-e-invierte-en-internxt-el-google-drive-espanol-que-vale-40-millones/" target="_blank" rel="noreferrer">
                  <img loading="lazy" className="mr-12" src="../../logos/featured/forbes.svg" draggable="false" width="62" height="16" alt="forbes logo" />
                </a>
              ) : (
                <a href="https://www.forbes.com/sites/alisoncoleman/2021/07/13/hard-knocks-how-a-schoolboy-rugby-injury-inspired-this-tech-entrepreneur/?sh=7108d8d570ee" target="_blank" rel="noreferrer">
                  <img loading="lazy" className="mr-12" src="../../logos/featured/forbes.svg" draggable="false" width="62" height="16" alt="forbes logo" />
                </a>
              )}

              {lang === 'es' && (
                <a href="https://www.elconfidencial.com/empresas/2022-04-25/telefonica-juan-roig-google-drive-espanol_3413834/" target="_blank" rel="noreferrer">
                  <img loading="lazy" className="mr-12" src="../../logos/featured/elconfidencial.svg" draggable="false" width="144" height="16" alt="elconfidencial logo" />
                </a>
              )}

              <a href="https://www.techradar.com/news/how-decentralized-models-are-reimagining-the-cloud" target="_blank" rel="noreferrer">
                <img loading="lazy" className="mr-12" src="../../logos/featured/techradar.svg" draggable="false" width="94" height="16" alt="techradar logo" />
              </a>

              <a href="https://techcrunch.com/2021/06/17/internxt-gets-1m-to-be-the-coinbase-of-decentralized-storage/" target="_blank" rel="noreferrer">
                <img loading="lazy" className="mr-12" src="../../logos/featured/techcrunch.svg" draggable="false" width="113" height="16" alt="techcrunch logo" />
              </a>

              <a href="https://venturebeat.com/2022/04/25/web3-startup-internxt-valued-at-40m-aims-to-compete-with-google-drive/" target="_blank" rel="noreferrer">
                <img loading="lazy" className="mr-12" src="../../logos/featured/venturebeat.svg" draggable="false" width="125" height="16" alt="venturebeat logo" />
              </a>

              {lang === 'es' && (
                <a href="https://www.lavanguardia.com/local/valencia/20210130/6207854/valenciano-emprendedor-joven-internxt-drive.html" target="_blank" rel="noreferrer">
                  <img loading="lazy" className="mr-12" src="../../logos/featured/lavanguardia.svg" draggable="false" width="152" height="16" alt="lavanguardia logo" />
                </a>
              )}

              {lang === 'es' && (
                <a href="https://cincodias.elpais.com/cincodias/2021/01/26/companias/1611660127_471030.html" target="_blank" rel="noreferrer">
                  <img loading="lazy" src="../../logos/featured/elpais.svg" draggable="false" width="82" height="16" alt="elpais logo" />
                </a>
              )}

            </div>

          </Marquee>

        </div>

        <div className="overflow-hidden hidden xl:flex">

          <div className="featured flex flex-row justify-center w-full p-6 md:px-10 lg:px-32 bg-white overflow-x-auto">

            {lang === 'es' ? (
              <a href="https://forbes.es/empresas/155897/telefonica-se-une-a-roig-e-invierte-en-internxt-el-google-drive-espanol-que-vale-40-millones/" target="_blank" rel="noreferrer">
                <img loading="lazy" className="mr-12" src="../../logos/featured/forbes.svg" draggable="false" width="62" height="16" alt="forbes logo" />
              </a>
            ) : (
              <a href="https://www.forbes.com/sites/alisoncoleman/2021/07/13/hard-knocks-how-a-schoolboy-rugby-injury-inspired-this-tech-entrepreneur/?sh=7108d8d570ee" target="_blank" rel="noreferrer">
                <img loading="lazy" className="mr-12" src="../../logos/featured/forbes.svg" draggable="false" width="62" height="16" alt="forbes logo" />
              </a>
            )}

            {lang === 'es' && (
              <a href="https://www.elconfidencial.com/empresas/2022-04-25/telefonica-juan-roig-google-drive-espanol_3413834/" target="_blank" rel="noreferrer">
                <img loading="lazy" className="mr-12" src="../../logos/featured/elconfidencial.svg" draggable="false" width="144" height="16" alt="elconfidencial logo" />
              </a>
            )}

            <a href="https://www.techradar.com/news/how-decentralized-models-are-reimagining-the-cloud" target="_blank" rel="noreferrer">
              <img loading="lazy" className="mr-12" src="../../logos/featured/techradar.svg" draggable="false" width="94" height="16" alt="techradar logo" />
            </a>

            <a href="https://techcrunch.com/2021/06/17/internxt-gets-1m-to-be-the-coinbase-of-decentralized-storage/" target="_blank" rel="noreferrer">
              <img loading="lazy" className="mr-12" src="../../logos/featured/techcrunch.svg" draggable="false" width="113" height="16" alt="techcrunch logo" />
            </a>

            <a href="https://venturebeat.com/2022/04/25/web3-startup-internxt-valued-at-40m-aims-to-compete-with-google-drive/" target="_blank" rel="noreferrer">
              <img loading="lazy" className="mr-12" src="../../logos/featured/venturebeat.svg" draggable="false" width="125" height="16" alt="venturebeat logo" />
            </a>

            {lang === 'es' && (
              <a href="https://www.lavanguardia.com/local/valencia/20210130/6207854/valenciano-emprendedor-joven-internxt-drive.html" target="_blank" rel="noreferrer">
                <img loading="lazy" className="mr-12" src="../../logos/featured/lavanguardia.svg" draggable="false" width="152" height="16" alt="lavanguardia logo" />
              </a>
            )}

            {lang === 'es' && (
              <a href="https://cincodias.elpais.com/cincodias/2021/01/26/companias/1611660127_471030.html" target="_blank" rel="noreferrer">
                <img loading="lazy" src="../../logos/featured/elpais.svg" draggable="false" width="82" height="16" alt="elpais logo" />
              </a>
            )}

          </div>

        </div>

      </div>

    </div>

  </section>

);

export default HeroSection;
