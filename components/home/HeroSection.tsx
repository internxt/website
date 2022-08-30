import React from 'react';
import Marquee from 'react-fast-marquee';

export default function HeroSection({ textContent, lang }) {
  return (
    <section>
      <div className="mx-4 lg:mx-10 xl:mx-32 pt-24 border-b border-gray-5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between w-full sm:mb-6">
          <div className="flex flex-col w-auto md:hidden mx-20 mb-6">
            <img
              loading="lazy"
              src="/images/home/devicesMobileView.webp"
              draggable="false"
              alt="laptop and phone with Internxt app"
            />
          </div>

          <div className="flex-shrink-0 my-6 md:my-8 md:ml-2 lg:my-20 lg:ml-0 flex flex-col items-center md:items-start w-screen sm:w-auto text-center md:text-left">
            <h1 className="pb-5 lg:pb-10 bg-clip-text text-transparent bg-gradient-to-tr from-primary to-gradients-electric-cyan font-medium text-5xl lg:text-6xl max-w-md lg:max-w-lg">
              {textContent.title}
            </h1>

            <h2 className="mb-5 md:mb-10 text-lg lg:text-xl text-gray-80 max-w-md">{textContent.subtitle}</h2>

            <h3 className="pb-2.5 font-medium">{textContent.ctaSubtitle}</h3>
            <iframe
              className="w-full px-4 sm:px-0 h-64 sm:h-64 lg:h-40"
              src="https://drive.internxt.com/signupwebsite"
            ></iframe>
          </div>

          <div className="hidden md:flex flex-grow flex-col max-w-2xl ml-5 xl:ml-20">
            <img
              loading="lazy"
              className="hidden xl:flex"
              src="/images/home/devicesAsc.webp"
              draggable="false"
              alt="desktop, laptop and phone with Internxt app"
            />

            <img
              loading="lazy"
              className="flex xl:hidden transform translate-x-10"
              src="/images/home/devicesAscCut.webp"
              draggable="false"
              alt="desktop, laptop and phone with Internxt app"
            />
          </div>
        </div>

        <div className="relative">
          <div className="flex xl:hidden">
            <Marquee className="bg-white" gradientColor={[255, 255, 255]} gradientWidth="32px" speed={30}>
              <div className="featured flex flex-row w-full p-6">
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
            </Marquee>
          </div>

          <div className="overflow-hidden hidden xl:flex">
            <div className="featured flex flex-row justify-center w-full p-6 md:px-10 lg:px-32 bg-white overflow-x-auto">
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
    </section>
  );
}
