import React from 'react'
import styles from './CardsSection.module.scss';

const CardsSection = ({textContent, lang, download, platform}) => {
  return (
    <section className="bg-neutral-10">
      <div className="content px-6 pb-24 flex flex-col">
        <div className={`flex flex-col items-center justify-center w-full text-center flex-shrink-0 py-20 md:py-24`}>
            <h3 className={`mb-1 text-base font-medium text-neutral-50`}>
              {textContent.eyebrow}
            </h3>
            <h2 className={`mb-6 text-4xl sm:text-5xl font-semibold`}>
              {textContent.title.line1}<br className="hidden sm:flex"/> {textContent.title.line2}
            </h2>
            <p className={`mb-6 text-lg text-neutral-500`}>
              {textContent.subtitle.line1}<br className="hidden sm:inline-flex"/> {textContent.subtitle.line2}
            </p>
        </div>

        <div className="grid mx-auto grid-cols-2 grid-rows-1 gap-6 sm:gap-10 lg:p-10 max-w-5xl">
            
          <div data-aos="fade-up" data-aos-duration="500" className={`${styles.card} col-span-2 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-0 auto-cols-min bg-white rounded-3xl overflow-hidden`}>
            
            <div className={`sm:row-auto flex flex-col flex-shrink-0 pb-0 p-12 sm:pb-12 lg:p-16 space-y-6`}>
              <div id="web" className="scrollAnchor absolute -top-24"></div>
              <span className="text-5xl sm:text-4xl font-semibold">
                {textContent.web.title}
              </span>
              <span className="text-lg text-neutral-500">
                {textContent.web.description}
              </span>
              <a href="https://drive.internxt.com" target="_blank" className={`${(platform === 'iOS' || platform === 'Android') ? 'hidden' : 'flex'} text-lg text-blue-60`}>
                <div className="flex flex-row items-center"><img loading="lazy" className="w-3 h-3 mt-0.5 mr-3" src="/icons/newTab.svg" draggable="false"/>{textContent.web.cta}</div>
              </a>
            </div>

            <div className="grid place-content-end">
              <img loading="lazy" className="object-cover" src="/images/products/safari.webp" draggable="false" alt="Internxt Drive Web on Safari"/>
            </div>

          </div>

          <div className="relative col-span-2 sm:col-span-1">
            <div id="desktop" className="scrollAnchor absolute -top-24"></div>
            <div data-aos="fade-up" data-aos-duration="500" className={`${styles.card} grid grid-cols-1 grid-rows-2 gap-0 auto-cols-min place-content-between place-items-stretch bg-white rounded-3xl overflow-hidden space-y-8`}>   
              
              <div className="flex flex-col text-left pb-0 p-12 px-8 lg:p-16 lg:pb-0 lg:py-14">
                <div className="flex flex-col space-y-6">
                  <span className="text-5xl sm:text-4xl font-semibold">
                    {textContent.desktop.title}
                  </span>
                  <span className="text-lg text-neutral-500">
                    {textContent.desktop.description}
                  </span>
                  <a href={download} target="_self" className={`${(platform === 'Windows' || platform === 'macOS' || platform === 'Linux') ? 'flex' : 'hidden'}`}>
                    <button type="button" className="flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75">
                      {textContent.desktop.cta} {textContent.desktop.ctaConcat} {platform}
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex items-end content-end">
                <img loading="lazy" className="object-cover" src="/images/products/mackbook.webp" draggable="false" alt="Internxt Drive Desktop App running on a Macbook Pro"/>
              </div>
            
            </div>
          </div>

          <div className="relative col-span-2 sm:col-span-1">
            <div id="mobile" className="scrollAnchor absolute -top-24"></div>
            <div data-aos="fade-up" data-aos-duration="500" className={`${styles.card} grid grid-cols-1 grid-rows-2 gap-0 auto-cols-min place-content-between place-items-stretch bg-white rounded-3xl overflow-hidden`}>
              
              <div className="flex flex-col text-left pb-0 p-12 px-8 lg:p-16 lg:pb-0 lg:py-14">
                <div className="flex flex-col space-y-6">
                  <span className="text-5xl sm:text-4xl font-semibold">
                    {textContent.mobile.title}
                  </span>
                  <span className="text-lg text-neutral-500">
                    {textContent.mobile.description}
                  </span>

                  <div>
                    <div className={`${(platform === 'iOS' || platform === 'Android') ? 'hidden' : 'flex flex-row space-x-4 justify-between'}`}>
                      <a href={download} className="flex justify-center mt-2">
                        <img loading="lazy" className={`h-14 ${(lang === 'en') ? '' : 'hidden'} max-h-12`} src="/badges/appStoreEN.svg" draggable="false" alt="Apple App Store badge for download Internxt Drive Mobile App"/>
                        <img loading="lazy" className={`h-14 ${(lang === 'es') ? '' : 'hidden'} max-h-12`} src="/badges/appStoreES.svg" draggable="false" alt="Apple App Store badge for download Internxt Drive Mobile App"/>
                        
                      </a>
                      <a href={download} className="flex justify-center mt-2">
                        <img loading="lazy" className={`h-14 ${(lang === 'en') ? '' : 'hidden'} max-h-12`} src="/badges/playStoreEN.svg" draggable="false" alt="Google Play Store badge for download Internxt Drive Mobile App"/>
                        <img loading="lazy" className={`h-14 ${(lang === 'es') ? '' : 'hidden'} max-h-12`} src="/badges/playStoreES.svg" draggable="false" alt="Google Play Store badge for download Internxt Drive Mobile App"/>
                      </a>
                    </div>

                    <a href={download} className={`${(platform === 'iOS' || platform === 'Android') ? 'flex' : 'hidden'} justify-center mt-2 max-h-4`}>
                      <img loading="lazy" className={`h-14 ${(platform === 'iOS' && lang === 'en') ? '' : 'hidden'}`} src="/badges/appStoreEN.svg" draggable="false" alt="Apple App Store badge for download Internxt Drive Mobile App"/>
                      <img loading="lazy" className={`h-14 ${(platform === 'iOS' && lang === 'es') ? '' : 'hidden'}`} src="/badges/appStoreES.svg" draggable="false" alt="Apple App Store badge for download Internxt Drive Mobile App"/>
                      <img loading="lazy" className={`h-14 ${(platform === 'Android' && lang === 'en') ? '' : 'hidden'}`} src="/badges/playStoreEN.svg" draggable="false" alt="Google Play Store badge for download Internxt Drive Mobile App"/>
                      <img loading="lazy" className={`h-14 ${(platform === 'Android' && lang === 'es') ? '' : 'hidden'}`} src="/badges/playStoreES.svg" draggable="false" alt="Google Play Store badge for download Internxt Drive Mobile App"/>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-end content-end">
                <img loading="lazy" className={`${(platform === 'iOS' || platform === 'Android') ? 'hidden' : 'object-cover'}`} src="/images/products/iosandandroidCut.webp" draggable="false" alt="iPhone and Android side by side with Internxt Drive Mobile App on screen"/>
                <img loading="lazy" className={`${(platform === 'iOS') ? 'object-cover' : 'hidden'} `} src="/images/products/iphoneCut.webp" draggable="false" alt="iPhone and Android side by side with Internxt Drive Mobile App on screen"/>
                <img loading="lazy" className={`${(platform === 'Android') ? 'object-cover' : 'hidden'}`} src="/images/products/pixel4xlCut.webp" draggable="false" alt="iPhone and Android side by side with Internxt Drive Mobile App on screen"/>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CardsSection;