import React from 'react';
import { Transition, Disclosure } from '@headlessui/react';
import { UilMinus } from '@iconscout/react-unicons';
import Link from 'next/link';
import cookies from '../../lib/cookies';
import setUTM from '../../lib/conversions';
import styles from './Footer.module.scss';

export default function Footer({
  textContent,
  lang,
  hideNewsletter,
  darkMode
}) {
  const [consentCookie, setConsentCookie] = React.useState(true);
  const showSupporters = false;

  const handleAcceptCookies = () => {
    localStorage.setItem('CookieConsent', 'true');
    setConsentCookie(true);
  };

  React.useEffect(() => {
    const cookie = localStorage.getItem('CookieConsent');
    setUTM();

    if (!cookie) setConsentCookie(false);
  }, []);

  return (
    <section className={`flex flex-col w-full ${darkMode ? 'bg-cool-gray-100 text-white' : 'bg-cool-gray-5'}`}>
      <div className="flex flex-col items-center justify-center w-full px-6 py-16 sm:p-20">

        {/* Supporters from EU and 'Camara de comercio de España' (Only in Spanish) */}
        {(lang === 'es' && showSupporters) && (
          <div className="flex flex-col space-y-6 sm:space-x-20 py-12 justify-center mx-6 md:mx-10 lg:mx-32 bg-white border border-cool-gray-10 rounded-2xl mb-16">
            <div className="flex flex-col max-w-2xl px-16 mx-auto">
              <div className="flex flex-row justify-center items-center flex-wrap mb-8">
                <img loading="lazy" className="h-8 mx-4" src="../../logos/investors/camara_espana.webp" alt="Cámara de España" draggable="false" />
                <img loading="lazy" className="h-8 mx-4" src="../../logos/investors/camara_valencia.webp" alt="Cámara de Valencia" draggable="false" />
                <img loading="lazy" className="h-10 mx-4" src="../../logos/investors/ciberseguridad.webp" alt="Ciberseguridad Cámara España" draggable="false" />
                <img loading="lazy" className="h-10 mx-4" src="../../logos/investors/ue.webp" alt="Unión Europea" draggable="false" />
              </div>

              <div className="text-center text-xs text-cool-gray-40">Internxt ha sido beneficiaria del Fondo Europeo de Desarrollo Regional cuyo objetivo es mejorar el uso y la calidad de las tecnologías de la información y de las comunicaciones y el acceso a las mismas y gracias al que ha podido trabajar en aumentar la seguridad de la infraestructura para la mejora de competitividad y productividad de la empresa. 21.09.2021. Para ello ha contado con el apoyo del del programa Ciberseguridad 2021 de la Cámara de Comercio de Valencia.</div>
            </div>
          </div>
        )}

        {/* Newsletter */}
        <div className={`${hideNewsletter ? 'hidden' : 'flex'} w-full flex-col md:flex-row space-y-6 md:space-x-20 md:space-y-0 justify-center items-center mb-16`}>

          <div className="flex flex-col space-y-1">
            <h2 className="text-lg font-medium">{textContent.NewsletterSection.title}</h2>
            <p className={`text-base sm:text-sm ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
              {textContent.NewsletterSection.description.line1}
              <br className="hidden md:flex" />
              {' '}
              {textContent.NewsletterSection.description.line2}
              <br className="hidden md:flex" />
              {' '}
              {textContent.NewsletterSection.description.line3}
            </p>
          </div>

          <form
            data-code="r3s4c1"
            method="post"
            target="_blank"
            rel="noopener"
            action="https://app.mailerlite.com/webforms/submit/r3s4c1"
            className="flex flex-col w-full md:w-auto justify-items-start"
          >
            <input type="hidden" name="ml-submit" value="1" />
            <input
              name="fields[email]"
              type="email"
              placeholder={`${textContent.NewsletterSection.input}`}
              className={`flex flex-row w-full md:w-64 h-auto px-4 py-3 sm:py-2 outline-none rounded-lg text-lg sm:text-base ${darkMode ? 'bg-cool-gray-90 border-cool-gray-70 focus:border-blue-60 focus:ring-opacity-30' : 'bg-white border-cool-gray-20 focus:border-blue-50 focus:ring-opacity-20'} border focus:ring-3 focus:ring-blue-60 transition-all duration-150 text-left appearance-none mb-2`}
              required
            />
            <input
              name="signup"
              type="submit"
              value={`${textContent.NewsletterSection.cta}`}
              className="flex justify-center w-full sm:w-auto items-center px-4 py-3 sm:py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:outline-none transition-all duration-75 cursor-pointer"
            />
          </form>

        </div>

        {/* Separator */}
        <div className={`${hideNewsletter ? 'hidden' : 'flex'} h-px w-full ${darkMode ? 'bg-cool-gray-90' : 'bg-cool-gray-10'} mb-16`} />

        {/* Footer content */}
        <footer className="w-full">

          {/* Desktop version */}
          <div className="hidden md:flex flex-col md:space-y-16 items-center">

            <div className="flex flex-row w-full lg:space-x-40 justify-between lg:justify-center">

              <div className="flex flex-col flex-1 lg:flex-none items-center">
                <div className="flex flex-col flex-shrink-0 space-y-4">
                  <h3 className="text-lg font-semibold">
                    {textContent.FooterSection.sections.products.title}
                  </h3>
                  <div className={`flex flex-col space-y-3 text-base ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>

                    <Link href="/drive" locale={lang}>
                      <a>{textContent.FooterSection.sections.products.drive}</a>
                    </Link>

                    <Link href="/photos" locale={lang}>
                      <a>{textContent.FooterSection.sections.products.photos}</a>
                    </Link>

                    <a className={`flex flex-row items-center ${darkMode ? 'text-cool-gray-60' : 'text-cool-gray-40'}`}>
                      <div>
                        {textContent.FooterSection.sections.products.send}
                      </div>
                      <div className="text-orange-50 text-supporting-2 whitespace-nowrap ml-3 mt-0.5 pointer-events-none">
                        {textContent.FooterSection.comingSoon}
                      </div>
                    </a>

                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 lg:flex-none items-center">
                <div className="flex flex-col flex-shrink-0 space-y-4">
                  <h3 className="text-lg font-semibold">
                    {textContent.FooterSection.sections.company.title}
                  </h3>
                  <div className={`flex flex-col space-y-3 text-base ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                    <Link href="/privacy" locale={lang}>
                      <a>{textContent.FooterSection.sections.company.privacy}</a>
                    </Link>
                    <Link href="/about" locale={lang}>
                      <a>{textContent.FooterSection.sections.company.about}</a>
                    </Link>
                    <a href="https://help.internxt.com/" target="_blank" rel="noreferrer">
                      {textContent.FooterSection.sections.company.contact}
                    </a>
                    <Link href="/legal" locale={lang}>
                      <a>{textContent.FooterSection.sections.company.legal}</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 lg:flex-none items-center">
                <div className="flex flex-col flex-shrink-0 space-y-4">
                  <h3 className="text-lg font-semibold">
                    {textContent.FooterSection.sections.join.title}
                  </h3>
                  <div className={`flex flex-col space-y-3 text-base ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                    <a href="https://drive.internxt.com/new" target="_self">
                      {textContent.FooterSection.sections.join.signup}
                    </a>
                    <a href="https://drive.internxt.com/login" target="_self">
                      {textContent.FooterSection.sections.join.login}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 lg:flex-none items-center">
                <div className="flex flex-col flex-shrink-0 space-y-4">
                  <h3 className="text-lg font-semibold">
                    {textContent.FooterSection.sections.follow.title}
                  </h3>
                  <div className={`flex flex-col space-y-3 text-base ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                    <div className="flex flex-row space-x-1">
                      <a href="https://twitter.com/Internxt" target="_blank" className="h-6 py-1.5 pr-2" rel="noreferrer">
                        <img loading="lazy" className="h-4" src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/twitter.svg`} draggable="false" alt="twitter icon" />
                      </a>
                      <a href="https://linkedin.com/company/internxt" target="_blank" className="h-6 py-1.5 pr-2" rel="noreferrer">
                        <img loading="lazy" className="h-4" src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/linkedin.svg`} draggable="false" alt="linkedin icon" />
                      </a>
                      <a href="https://instagram.com/internxt/" target="_blank" className="h-6 py-1.5 pr-2" rel="noreferrer">
                        <img loading="lazy" className="h-4" src={`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/instagram.svg`} draggable="false" alt="instagram icon" />
                      </a>
                    </div>
                    <a href="https://github.com/internxt" target="_blank" rel="noreferrer">
                      Github
                    </a>
                    <a href="https://blog.internxt.com/" target="_blank" rel="noreferrer">
                      Blog
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col items-center space-y-4 mt-16">
              <p className={`text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                {textContent.FooterSection.copyright}
              </p>
              <Link href="/" locale={lang}>
                <a className="flex flex-shrink-0">
                  <img loading="lazy" src={`../../logos/internxt/${darkMode ? 'white' : 'cool-gray-90'}.svg`} alt="Internxt logo" />
                </a>
              </Link>
            </div>

          </div>

          {/* Mobile version */}
          <div className="flex flex-col md:hidden">

            <Disclosure as="div" className={`border-b ${darkMode ? 'border-cool-gray-90' : 'border-cool-gray-10'}`}>
              {({ open }) => (
                <div>

                  <Disclosure.Button className="flex justify-between items-center w-full py-4 text-lg font-medium">
                    <span className="flex flex-row">
                      {textContent.FooterSection.sections.products.title}
                    </span>
                    <span className="relative w-5 h-5">
                      <UilMinus className={`absolute top-0 left-0 w-full h-full ${((open && darkMode) || (!open && !darkMode)) ? 'text-cool-gray-30' : 'text-cool-gray-60'} transition duration-300 transform ${open ? 'text-cool-gray-30' : '-rotate-180'}`} />
                      <UilMinus className={`absolute top-0 left-0 w-full h-full ${((open && darkMode) || (!open && !darkMode)) ? 'text-cool-gray-30' : 'text-cool-gray-60'} transition duration-300 transform ${open ? 'text-cool-gray-30' : '-rotate-90'}`} />
                    </span>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform -translate-y-10 opacity-0"
                    enterTo="transform translate-y-0 opacity-100"
                    leave="transition duration-0"
                  >
                    <Disclosure.Panel className={`flex flex-col ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'} p-4 pt-2 space-y-4`}>
                      <Link href="/drive" locale={lang}>
                        <a>{textContent.FooterSection.sections.products.drive}</a>
                      </Link>
                      <Link href="/photos" locale={lang}>
                        <a>{textContent.FooterSection.sections.products.photos}</a>
                      </Link>
                      <Link href="" locale={lang}>
                        <a className={`flex flex-row items-center ${darkMode ? 'text-cool-gray-60' : 'text-cool-gray-40'}`}>
                          <div>
                            {textContent.FooterSection.sections.products.send}
                          </div>
                          <div className={`${darkMode ? 'text-orange-40' : 'text-orange-50'} text-supporting-2 whitespace-nowrap ml-3 pointer-events-none`}>
                            {textContent.FooterSection.comingSoon}
                          </div>
                        </a>
                      </Link>
                    </Disclosure.Panel>
                  </Transition>

                </div>
              )}
            </Disclosure>

            <Disclosure as="div" className={`border-b ${darkMode ? 'border-cool-gray-90' : 'border-cool-gray-10'}`}>
              {({ open }) => (
                <div>

                  <Disclosure.Button className="flex justify-between items-center w-full py-4 text-lg font-medium">
                    <span className="flex flex-row">
                      {textContent.FooterSection.sections.company.title}
                    </span>
                    <span className="relative w-5 h-5">
                      <UilMinus className={`absolute top-0 left-0 w-full h-full ${((open && darkMode) || (!open && !darkMode)) ? 'text-cool-gray-30' : 'text-cool-gray-60'} transition duration-300 transform ${open ? 'text-cool-gray-30' : '-rotate-180'}`} />
                      <UilMinus className={`absolute top-0 left-0 w-full h-full ${((open && darkMode) || (!open && !darkMode)) ? 'text-cool-gray-30' : 'text-cool-gray-60'} transition duration-300 transform ${open ? 'text-cool-gray-30' : '-rotate-90'}`} />
                    </span>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform -translate-y-10 opacity-0"
                    enterTo="transform translate-y-0 opacity-100"
                    leave="transition duration-0"
                  >
                    <Disclosure.Panel className={`flex flex-col ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'} p-4 pt-2 space-y-4`}>

                      <Link href="/privacy" locale={lang}>
                        <a>{textContent.FooterSection.sections.company.privacy}</a>
                      </Link>

                      <Link href="/about" locale={lang}>
                        <a>{textContent.FooterSection.sections.company.about}</a>
                      </Link>

                      <a href="https://help.internxt.com/" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.company.contact}
                      </a>

                      <Link href="/legal" locale={lang}>
                        <a>{textContent.FooterSection.sections.company.legal}</a>
                      </Link>

                    </Disclosure.Panel>
                  </Transition>

                </div>
              )}
            </Disclosure>

            <Disclosure as="div" className={`border-b ${darkMode ? 'border-cool-gray-90' : 'border-cool-gray-10'}`}>
              {({ open }) => (
                <div>

                  <Disclosure.Button className="flex justify-between items-center w-full py-4 text-lg font-medium">
                    <span className="flex flex-row">
                      {textContent.FooterSection.sections.join.title}
                    </span>
                    <span className="relative w-5 h-5">
                      <UilMinus className={`absolute top-0 left-0 w-full h-full ${((open && darkMode) || (!open && !darkMode)) ? 'text-cool-gray-30' : 'text-cool-gray-60'} transition duration-300 transform ${open ? 'text-cool-gray-30' : '-rotate-180'}`} />
                      <UilMinus className={`absolute top-0 left-0 w-full h-full ${((open && darkMode) || (!open && !darkMode)) ? 'text-cool-gray-30' : 'text-cool-gray-60'} transition duration-300 transform ${open ? 'text-cool-gray-30' : '-rotate-90'}`} />
                    </span>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform -translate-y-10 opacity-0"
                    enterTo="transform translate-y-0 opacity-100"
                    leave="transition duration-0"
                  >
                    <Disclosure.Panel className={`flex flex-col ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'} p-4 pt-2 space-y-4`}>

                      <a href="https://drive.internxt.com/new" target="_self">
                        {textContent.FooterSection.sections.join.signup}
                      </a>

                      <a href="https://drive.internxt.com/login" target="_self">
                        {textContent.FooterSection.sections.join.login}
                      </a>

                    </Disclosure.Panel>
                  </Transition>

                </div>
              )}
            </Disclosure>

            <Disclosure as="div" className={`border-b ${darkMode ? 'border-cool-gray-90' : 'border-cool-gray-10'}`}>
              {({ open }) => (
                <div>

                  <Disclosure.Button className="flex justify-between items-center w-full py-4 text-lg font-medium">
                    <span className="flex flex-row">
                      {textContent.FooterSection.sections.follow.title}
                    </span>
                    <span className="relative w-5 h-5">
                      <UilMinus className={`absolute top-0 left-0 w-full h-full ${((open && darkMode) || (!open && !darkMode)) ? 'text-cool-gray-30' : 'text-cool-gray-60'} transition duration-300 transform ${open ? 'text-cool-gray-30' : '-rotate-180'}`} />
                      <UilMinus className={`absolute top-0 left-0 w-full h-full ${((open && darkMode) || (!open && !darkMode)) ? 'text-cool-gray-30' : 'text-cool-gray-60'} transition duration-300 transform ${open ? 'text-cool-gray-30' : '-rotate-90'}`} />
                    </span>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform -translate-y-10 opacity-0"
                    enterTo="transform translate-y-0 opacity-100"
                    leave="transition duration-0"
                  >
                    <Disclosure.Panel className={`flex flex-col ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'} p-4 pt-2 space-y-4`}>
                      <a href="https://twitter.com/Internxt" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.follow.twitter}
                      </a>
                      <a href="https://linkedin.com/company/internxt" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.follow.linkedin}
                      </a>
                      <a href="https://instagram.com/internxt/" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.follow.instagram}
                      </a>
                      <a href="https://github.com/internxt" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.follow.github}
                      </a>
                      <a href="https://blog.internxt.com/" target="_blank" rel="noreferrer">
                        {textContent.FooterSection.sections.follow.blog}
                      </a>
                    </Disclosure.Panel>
                  </Transition>

                </div>
              )}
            </Disclosure>

            <div className="flex flex-col items-center space-y-4 mt-16">
              <p className={`text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                {textContent.FooterSection.copyright}
              </p>
              <Link href="/" locale={lang}>
                <a className="flex flex-shrink-0">
                  <img loading="lazy" src={`../../logos/internxt/${darkMode ? 'white' : 'cool-gray-90'}.svg`} alt="Internxt logo" />
                </a>
              </Link>
            </div>

          </div>

        </footer>
      </div>

      {/* Cookies modal */}
      <div data-aos="fade-up" data-aos-duration="350" data-aos-offset="500" className={`${styles.cookiesBgFallback} ${consentCookie ? 'hidden' : 'flex'} fixed bottom-0 left-0 sm:bottom-8 sm:left-8 z-50 p-4 sm:p-6 bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg sm:rounded-lg w-full sm:max-w-xs justify-between border border-black border-opacity-5 shadow-2xl`}>
        <div className="flex flex-row sm:flex-col items-center justify-between w-full space-x-4 sm:space-y-8 sm:space-x-0">

          <div className="flex flex-col space-y-2">
            <p className="text-cool-gray-90 text-base font-semibold">
              {textContent.Cookies.title}
            </p>
            <Link href="/legal" locale={lang}>
              <a className="flex flex-row text-cool-gray-60 text-sm items-center cursor-pointer">
                <img loading="lazy" className="mt-0.5 mr-2" src="/icons/newTabNeutral40.svg" draggable="false" alt="new tab icon" />
                {textContent.Cookies.link}
              </a>
            </Link>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleAcceptCookies}
                className="flex justify-center items-center h-10 p-0 w-full sm:px-4 sm:py-2 border border-transparent rounded-lg text-base font-medium text-cool-gray-60 bg-black bg-opacity-5 active:bg-cool-gray-20 focus:outline-none transition-all duration-75 cursor-pointer"
              >
                <span className="flex">{textContent.Cookies.close}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>

  );
}

export async function getServerSideProps(ctx) {
  // eslint-disable-next-line no-undef
  const downloadUrl = await getDriveDownloadUrl(ctx);
  // eslint-disable-next-line no-undef
  const devicePlatform = await getPlatform(ctx);

  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      downloadUrl,
      devicePlatform,
      deviceLang
    },
  };
}
