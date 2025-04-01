/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Transition, Disclosure } from '@headlessui/react';
import Link from 'next/link';
import setUTM from '@/lib/conversions';
import LanguageMobileBox from '../components/LanguageMobileBox';
import Image from 'next/legacy/image';
import axios from 'axios';
import { CaretDown, CaretUp, HardDrives, PaperPlaneTilt } from '@phosphor-icons/react';
import moment from 'moment';
import { notificationService } from '@/components/Snackbar';
import { FooterText } from '@/assets/types/layout/types';
import { getImage } from '@/lib/getImage';

export default function Footer({
  textContent,
  lang,
  hideNewsletter,
  darkMode,
}: Readonly<{
  textContent: FooterText;
  lang: string;
  hideNewsletter?: boolean;
  darkMode?: boolean;
}>) {
  const [email, setEmail] = useState('');
  const [platforms, setPlatforms] = useState<any>();

  const year = moment().format('YYYY');

  useEffect(() => {
    setUTM();

    axios.get(`${window.location.origin}/api/download`).then((res) => {
      setPlatforms(res.data.platforms);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`/api/subscribe`, {
        email,
        groups: [process.env.NEXT_PUBLIC_FREE_GROUP_ID],
      })
      .then(() => {
        notificationService.openSuccessToast('Successfully submitted');
      })
      .catch(() => {
        notificationService.openErrorToast('Something went wrong!');
      });
  };

  return (
    <section
      id="footer"
      className={`flex w-full flex-col overflow-hidden lg:pb-10 ${
        darkMode ? 'bg-[#111111] text-white' : 'bg-gray-5 bg-opacity-50'
      }`}
    >
      <div className="flex w-full flex-col items-center justify-center px-6 pt-16 sm:p-20 sm:py-12">
        <div className="flex w-full max-w-[896px] flex-col items-center justify-center space-y-8 pb-9 text-center lg:flex-row lg:items-start lg:space-x-32 lg:space-y-0 lg:text-left">
          {/* Download app for iOS and Android */}

          <div className="flex w-full max-w-[384px] flex-col items-center justify-center space-y-3 lg:items-start">
            <div className="flex flex-col space-y-1">
              <h2 className="text-lg font-medium ">{textContent.DownloadApp.title}</h2>
              <p className={`${darkMode ? 'text-cool-gray-30' : 'text-gray-80'} text-sm`}>
                {textContent.DownloadApp.description}
              </p>
            </div>
            {/* Images */}
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
              <div className="flex">
                <Image
                  src={getImage('/images/footer/app-store.svg')}
                  width={148}
                  height={44}
                  quality={100}
                  className="cursor-pointer"
                  alt="Download on the App Store"
                  onClick={() => {
                    platforms && window.open(platforms.iPhone, '_blank');
                  }}
                />
              </div>
              <div className="flex">
                <Image
                  src={getImage('/images/footer/store-for-android.svg')}
                  onClick={() => {
                    platforms && window.open(platforms.Android, '_blank');
                  }}
                  width={148}
                  height={44}
                  className="cursor-pointer"
                  alt="Get it on Google Play"
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              hideNewsletter ? 'hidden' : 'flex'
            } mb-10 max-w-[384px] flex-col items-center justify-center space-y-3 text-center md:items-start md:text-left `}
          >
            <div className="flex w-full flex-col space-y-1 md:max-w-sm">
              <h2 className="text-lg font-medium">{textContent.NewsletterSection.title}</h2>
              <p className={`text-base sm:text-sm ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
                {textContent.NewsletterSection.description}
              </p>
            </div>

            <form
              data-code="Frjj25"
              method="post"
              target="_blank"
              rel="noopener"
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-center justify-center md:flex-row"
            >
              <input type="hidden" name="ml-submit" value="1" />
              <input
                name="fields[email]"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`${textContent.NewsletterSection.input}`}
                className={`flex h-auto w-full flex-row rounded-lg px-4 py-3 text-lg outline-none sm:py-2 sm:text-base md:w-64 ${
                  darkMode
                    ? 'border-cool-gray-70 bg-cool-gray-90 focus:border-primary focus:ring-opacity-30'
                    : 'border-cool-gray-20 bg-white focus:border-blue-50 focus:ring-opacity-20'
                } mb-2 appearance-none border text-left transition-all duration-150 focus:ring focus:ring-primary`}
                required
              />
              <input
                name="signup"
                type="submit"
                value={`${textContent.NewsletterSection.cta}`}
                className="ml-2 flex w-full cursor-pointer items-center justify-center rounded-lg border border-transparent bg-primary px-4 py-3 text-lg font-medium text-white transition-all duration-75 hover:bg-primary-dark focus:outline-none active:bg-primary-dark sm:mb-2 sm:py-2 sm:text-base"
              />
            </form>
            <span className="text-sm text-gray-40">
              {textContent.NewsletterSection.privacy}{' '}
              <Link href="/legal" locale={lang} legacyBehavior>
                <span className="cursor-pointer underline">{textContent.NewsletterSection.privacyLink}</span>
              </Link>
            </span>
          </div>
        </div>

        {/* Separator */}
        <div
          className={`${hideNewsletter ? 'hidden' : 'flex'} h-px w-full max-w-[896px] ${
            darkMode ? 'bg-cool-gray-90' : 'bg-cool-gray-10'
          } lg:mb-10`}
        />

        {/* Footer content */}
        <footer className="flex max-w-[896px] items-center justify-center">
          {/* Desktop version */}
          <div className="hidden w-full flex-col items-center justify-center md:space-y-16 lg:flex">
            <div className="flex w-full flex-row justify-between space-x-20 md:justify-center md:space-x-12">
              <div className="flex flex-1 flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.products.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <Link href="/drive" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.products.drive}
                    </Link>

                    <Link
                      href="/cloud-object-storage"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row items-center hover:text-primary"
                    >
                      <div className="flex flex-row">{textContent.FooterSection.sections.products.objStorage}</div>
                    </Link>

                    <Link
                      href="/antivirus"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row items-center hover:text-primary"
                    >
                      <div className="flex flex-row">{textContent.FooterSection.sections.products.antivirus}</div>
                      <div className="ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 px-2 py-1 text-xs font-medium uppercase text-primary">
                        {textContent.FooterSection.new}
                      </div>
                    </Link>

                    <a
                      href="https://send.internxt.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row items-center hover:text-primary"
                    >
                      <div>{textContent.FooterSection.sections.products.send}</div>
                    </a>

                    <Link href="/vpn" locale={lang} passHref className="flex items-center hover:text-primary">
                      {textContent.FooterSection.sections.products.vpn}
                      <div className="ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 px-2 py-1 text-xs font-medium uppercase text-primary">
                        {textContent.FooterSection.new}
                      </div>
                    </Link>
                    <Link
                      href="/business"
                      locale={'en'}
                      passHref
                      className="flex max-w-[250px] items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.products.business}
                    </Link>

                    <Link
                      href="/family"
                      locale={'en'}
                      passHref
                      className="flex max-w-[250px] items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.products.family}
                    </Link>

                    <Link href="/pricing" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.products.pricing}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.company.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <Link href="/about" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.company.about}
                    </Link>

                    <Link href="/privacy" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.company.privacy}
                    </Link>

                    <a
                      href={`https://blog.internxt.com/${
                        lang === 'es' ? 'es/como-internxt-protege-tus-datos/' : 'how-internxt-protects-your-data/'
                      }`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      {textContent.FooterSection.sections.company.security}
                    </a>

                    <Link
                      href="/open-source"
                      locale={lang}
                      passHref
                      className="flex max-w-[200px] flex-row items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.company.openSource}
                    </Link>

                    <Link href="/legal" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.company.legal}
                    </Link>

                    <Link
                      href="/media-area"
                      locale={lang}
                      passHref
                      className="flex max-w-[200px] flex-row items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.company.mediaArea}
                    </Link>
                    <Link
                      href="/green-cloud-computing"
                      locale={lang}
                      passHref
                      className="flex max-w-[200px] flex-row items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.company.sustainability}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.join.title}</h3>
                  <div
                    className={`flex flex-col items-start space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <a href="https://drive.internxt.com/new" target="_top" className="hover:text-primary">
                      {textContent.FooterSection.sections.join.signup}
                    </a>
                    <a href="https://drive.internxt.com/login" target="_top" className="hover:text-primary">
                      {textContent.FooterSection.sections.join.login}
                    </a>
                    <Link
                      href={'https://help.internxt.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-primary"
                    >
                      {textContent.FooterSection.sections.join.support}
                    </Link>

                    <a
                      href={`/whitepaper/internxt-white-paper-1.pdf`}
                      target="_blank"
                      rel="noreferrer"
                      download={true}
                      className="hover:text-primary"
                    >
                      {textContent.FooterSection.sections.join.whitePaper}
                    </a>

                    <Link href="/newsletter-subscribe" className="hover:text-primary">
                      {textContent.FooterSection.sections.join.newsletter}
                    </Link>

                    <Link
                      href="https://github.com/internxt"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      {textContent.FooterSection.sections.join.github}
                    </Link>

                    <Link href="/affiliates" target="_blank" className="hover:text-primary">
                      {textContent.FooterSection.sections.join.affiliates}
                    </Link>

                    <Link lang={lang} href={'/cloud-storage-for-education'} className="hover:text-primary">
                      {textContent.FooterSection.sections.join.storageForEducation}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex max-w-[180px] flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.resources.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <a
                      href={`https://blog.internxt.com/${lang === 'es' ? 'es/' : ''}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.blog}
                    </a>
                    <Link
                      href="/cloud-storage-comparison"
                      locale={lang}
                      passHref
                      className="w-full max-w-[160px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.comparison}
                    </Link>

                    <Link
                      href="/pcloud-alternative"
                      locale={lang}
                      passHref
                      className="w-full max-w-[160px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.pCloudAlternative}
                    </Link>

                    <Link
                      href="/dropbox-alternative"
                      locale={lang}
                      passHref
                      className="w-full max-w-[160px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.dropboxAlternative}
                    </Link>

                    <Link
                      href="/privacy-directory"
                      locale={lang}
                      passHref
                      className="w-full max-w-[265px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.directoryOfPrivacyOrganizations}
                    </Link>

                    <Link href="/cyber-awareness" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.resources.cyberAwareness}
                    </Link>
                    <Link
                      href="/what-does-google-know-about-me"
                      locale={lang}
                      passHref
                      className="flex items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.whatGoogleKnowsAboutMe}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[220px] flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.tools.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <Link href="/byte-converter" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.tools.byteConverter}
                    </Link>

                    <Link href="/temporary-email" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.tools.temporaryEmail}
                    </Link>

                    <Link href="/password-checker" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.tools.passwordChecker}
                    </Link>

                    <Link href="/virus-scanner" locale={lang} passHref className="hover:text-primary">
                      {textContent.FooterSection.sections.tools.fileVirusScan}
                    </Link>

                    <Link
                      href="/password-generator"
                      locale={lang}
                      passHref
                      className="flex items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.tools.passwordGenerator}
                    </Link>

                    <Link
                      href="/file-converter"
                      locale={lang}
                      passHref
                      className="flex items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.tools.fileConverter}
                    </Link>
                    <Link
                      href="/dark-web-monitor"
                      locale={lang}
                      passHref
                      className="flex items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.tools.haveIBeenPwned}
                      <div className="ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 px-2 py-1 text-xs font-medium uppercase text-primary">
                        {textContent.FooterSection.new}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex max-w-[220px] flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className="text-lg font-medium">{textContent.FooterSection.sections.features.title}</h3>
                  <div
                    className={`flex flex-col space-y-1.5 text-base ${
                      darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'
                    }`}
                  >
                    <Link
                      href="/private-cloud-storage-solutions"
                      locale={lang}
                      passHref
                      className="flex items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.features.privateCloud}
                      <div className="ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 px-2 py-1 text-xs font-medium uppercase text-primary">
                        {textContent.FooterSection.new}
                      </div>
                    </Link>
                    <Link
                      href="/cloud-storage-backup-solutions"
                      locale={lang}
                      passHref
                      className="flex items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.features.cloudBakcup}
                      <div className="ml-2 flex h-max items-center justify-center rounded-full bg-primary bg-opacity-15 px-2 py-1 text-xs font-medium uppercase text-primary">
                        {textContent.FooterSection.new}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div
              className={`${hideNewsletter ? 'hidden' : 'flex'} h-px w-full ${
                darkMode ? 'bg-cool-gray-90' : 'bg-cool-gray-10'
              } mb-10`}
            />

            {/* Logos */}
            <div className="flex w-screen max-w-[1140px] flex-row justify-between px-5">
              {lang !== 'es' ? (
                <Image src={getImage('/icons/social/gdpr-internxt.svg')} alt="GDPR Internxt" width={146} height={48} />
              ) : (
                <Image src={getImage('/icons/social/cdti.png')} alt="GDPR Internxt" width={200} height={60} />
              )}
              <div className="flex flex-row items-center space-x-4">
                <Link href="/" locale={lang} className="flex flex-shrink-0">
                  <Image
                    width={110}
                    height={12}
                    loading="lazy"
                    src={getImage(`/logos/internxt/${darkMode ? 'white' : 'cool-gray-90'}.svg`)}
                    alt="Internxt logo"
                  />
                </Link>
                <p className={`text-sm font-medium ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                  {textContent.FooterSection.copyright.line1 + year + textContent.FooterSection.copyright.line2}
                </p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <Link href="https://twitter.com/Internxt" target="_blank" rel="noreferrer">
                  <Image
                    width={15}
                    height={14}
                    loading="lazy"
                    src={getImage(`/icons/social/X_logo.svg`)}
                    draggable="false"
                    alt="twitter icon"
                  />
                </Link>
                <Link href="https://www.reddit.com/r/internxt/" target="_blank" rel="noreferrer">
                  <Image
                    width={16}
                    height={16}
                    loading="lazy"
                    src={getImage(`/icons/social/reddit.svg`)}
                    draggable="false"
                    alt="Reddit icon"
                  />
                </Link>
                <Link href="https://linkedin.com/company/internxt" target="_blank" rel="noreferrer">
                  <Image
                    width={16}
                    height={16}
                    loading="lazy"
                    src={getImage(`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/linkedin.svg`)}
                    draggable="false"
                    alt="linkedin icon"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCW2SxWdVEAEACYuejCgpGwg/featured"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    loading="lazy"
                    width={16}
                    height={16}
                    src={getImage(`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/youtube.svg`)}
                    draggable="false"
                    alt="youtube icon"
                  />
                </Link>
                <Link href="https://instagram.com/internxt/" target="_blank" rel="noreferrer">
                  <Image
                    loading="lazy"
                    width={16}
                    height={16}
                    src={getImage(`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/instagram.svg`)}
                    draggable="false"
                    alt="instagram icon"
                  />
                </Link>
              </div>
            </div>
            {/* <p className="text-xs text-gray-50">{textContent.FooterSection.independentPromotion}</p> */}
          </div>

          {/* Mobile version */}
          <div
            className={`${
              darkMode ? 'bg-[#111111] text-white' : 'bg-gray-5 bg-opacity-50'
            } flex flex-col overflow-hidden lg:hidden`}
          >
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.products.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'bg-gray-1 text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <Link href="/drive" locale={lang} passHref legacyBehavior>
                        <div className="flex flex-row space-x-2">
                          <HardDrives className={`h-6 w-6 ${!darkMode && 'text-gray-80'}`} />
                          <p>{textContent.FooterSection.sections.products.drive}</p>
                        </div>
                      </Link>
                      <Link
                        href="/antivirus"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row items-center hover:text-primary"
                      >
                        <div className="flex flex-row">{textContent.FooterSection.sections.products.antivirus}</div>
                      </Link>

                      <Link
                        href="/cloud-object-storage"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row items-center hover:text-primary"
                      >
                        {textContent.FooterSection.sections.products.objStorage}
                      </Link>

                      <a
                        href="https://send.internxt.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row items-center"
                      >
                        <div className="flex flex-row space-x-2">
                          <PaperPlaneTilt className={`h-6 w-6 ${!darkMode && 'text-gray-80'}`} />
                          <p>{textContent.FooterSection.sections.products.send}</p>
                        </div>
                      </a>

                      <Link href="/vpn" locale={lang} passHref className="flex items-center hover:text-primary">
                        {textContent.FooterSection.sections.products.vpn}
                      </Link>

                      <Link href="/antivirus" locale={lang} passHref className="flex items-center hover:text-primary">
                        {textContent.FooterSection.sections.products.antivirus}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.company.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col bg-gray-1 px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <Link href="/about" locale={lang} passHref>
                        {textContent.FooterSection.sections.company.about}
                      </Link>

                      <Link href="/privacy" locale={lang} passHref>
                        {textContent.FooterSection.sections.company.privacy}
                      </Link>

                      <Link
                        href={`https://blog.internxt.com/${
                          lang === 'es' ? 'es/como-internxt-protege-tus-datos/' : 'how-internxt-protects-your-data/'
                        }`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row items-center"
                        legacyBehavior
                      >
                        <div>{textContent.FooterSection.sections.company.security}</div>
                      </Link>

                      <Link
                        href="/open-source"
                        locale={lang}
                        passHref
                        className="flex max-w-[200px] flex-row items-center hover:text-primary"
                      >
                        {textContent.FooterSection.sections.company.openSource}
                      </Link>

                      <Link href="/legal" locale={lang} passHref>
                        {textContent.FooterSection.sections.company.legal}
                      </Link>

                      <Link
                        href="/media-area"
                        locale={lang}
                        passHref
                        className="flex max-w-[200px] flex-row items-center hover:text-primary"
                      >
                        {textContent.FooterSection.sections.company.mediaArea}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.join.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col bg-gray-1 px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <a href="https://drive.internxt.com/new" target="_top" className="hover:text-primary">
                        {textContent.FooterSection.sections.join.signup}
                      </a>
                      <a href="https://drive.internxt.com/login" target="_top" className="hover:text-primary">
                        {textContent.FooterSection.sections.join.login}
                      </a>
                      <Link
                        href={'https://help.internxt.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:text-primary"
                      >
                        {textContent.FooterSection.sections.join.support}
                      </Link>

                      <a
                        href={getImage(`/whitepaper/internxt-white-paper-1.pdf`)}
                        target="_blank"
                        rel="noreferrer"
                        download={true}
                        className="hover:text-primary"
                      >
                        {textContent.FooterSection.sections.join.whitePaper}
                      </a>

                      <Link href="/newsletter-subscribe" className="hover:text-primary">
                        {textContent.FooterSection.sections.join.newsletter}
                      </Link>

                      <Link
                        href="https://github.com/internxt"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary"
                      >
                        {textContent.FooterSection.sections.join.github}
                      </Link>

                      <Link href="/affiliates" target="_blank" className="hover:text-primary">
                        {textContent.FooterSection.sections.join.affiliates}
                      </Link>

                      <Link lang={lang} href={'/cloud-storage-for-education'} className="hover:text-primary">
                        {textContent.FooterSection.sections.join.storageForEducation}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.resources.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col bg-gray-1 px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <a
                        href={`https://blog.internxt.com/${lang === 'es' ? 'es/' : ''}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.blog}
                      </a>
                      <Link
                        href="/cloud-storage-comparison"
                        locale={lang}
                        passHref
                        className="w-full max-w-[160px] hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.comparison}
                      </Link>

                      <Link
                        href="/pcloud-alternative"
                        locale={lang}
                        passHref
                        className="w-full max-w-[160px] hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.pCloudAlternative}
                      </Link>

                      <Link
                        href="/dropbox-alternative"
                        locale={lang}
                        passHref
                        className="w-full max-w-[160px] hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.dropboxAlternative}
                      </Link>

                      <Link
                        href="/privacy-directory"
                        locale={lang}
                        passHref
                        className="w-full max-w-[265px] hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.directoryOfPrivacyOrganizations}
                      </Link>

                      <Link href="/cyber-awareness" locale={lang} passHref className="hover:text-primary">
                        {textContent.FooterSection.sections.resources.cyberAwareness}
                      </Link>
                      <Link
                        href="/what-does-google-know-about-me"
                        locale={lang}
                        passHref
                        className="flex items-center hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.whatGoogleKnowsAboutMe}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium">
                    <span className="flex flex-row">{textContent.FooterSection.sections.tools.title}</span>
                    <CaretDown className={`${open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                    <CaretUp className={`${!open ? 'hidden' : 'flex'} text-gray-80`} weight="bold" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="-translate-y-10 opacity-0"
                    enterTo="translate-y-0 opacity-100"
                    leave="transition duration-200 ease-out"
                  >
                    <Disclosure.Panel
                      className={`flex flex-col bg-gray-1 px-6 font-semibold ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-black text-gray-30' : 'text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <Link href="/byte-converter" locale={lang} passHref>
                        {textContent.FooterSection.sections.tools.byteConverter}
                      </Link>

                      <Link href="/temporary-email" locale={lang} passHref>
                        {textContent.FooterSection.sections.tools.temporaryEmail}
                      </Link>

                      <Link href="/password-checker" locale={lang} passHref legacyBehavior>
                        <div>{textContent.FooterSection.sections.tools.passwordChecker}</div>
                      </Link>

                      <Link href="/virus-scanner" locale={lang} passHref>
                        {textContent.FooterSection.sections.tools.fileVirusScan}
                      </Link>
                      <Link href="/password-generator" locale={lang} passHref legacyBehavior>
                        {textContent.FooterSection.sections.tools.passwordGenerator}
                      </Link>
                      <Link href="/file-converter" locale={lang} passHref legacyBehavior>
                        {textContent.FooterSection.sections.tools.fileConverter}
                      </Link>
                      <Link href="/dark-web-monitor" locale={lang} passHref legacyBehavior>
                        {textContent.FooterSection.sections.tools.haveIBeenPwned}
                      </Link>
                      <Link href="/vpn" locale={lang} passHref>
                        {textContent.FooterSection.sections.tools.vpn}
                      </Link>
                      <Link href="/business" locale={lang} passHref className="hover:text-primary">
                        {textContent.FooterSection.sections.products.business}
                      </Link>
                      <Link href="/family" locale={lang} passHref className="hover:text-primary">
                        {textContent.FooterSection.sections.products.family}
                      </Link>
                      <Link href="/pricing" locale={lang} passHref className="hover:text-primary">
                        {textContent.FooterSection.sections.products.pricing}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            {/* Language selection for mobile view */}
            <LanguageMobileBox darkMode={darkMode} />

            <div className="flex flex-col items-center space-y-4 py-10">
              <div className="flex flex-row gap-5">
                <Link href="https://twitter.com/Internxt" target="_blank" rel="noreferrer">
                  <Image
                    width={15}
                    height={14}
                    loading="lazy"
                    src={getImage(`/icons/social/X_logo.svg`)}
                    draggable="false"
                    alt="twitter icon"
                  />
                </Link>
                <Link href="https://www.reddit.com/r/internxt/" target="_blank" rel="noreferrer">
                  <Image
                    width={16}
                    height={16}
                    loading="lazy"
                    src={getImage(`/icons/social/reddit.svg`)}
                    draggable="false"
                    alt="Reddit icon"
                  />
                </Link>
                <Link href="https://linkedin.com/company/internxt" target="_blank" rel="noreferrer">
                  <Image
                    width={16}
                    height={16}
                    loading="lazy"
                    src={getImage(`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/linkedin.svg`)}
                    draggable="false"
                    alt="linkedin icon"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCW2SxWdVEAEACYuejCgpGwg/featured"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    loading="lazy"
                    width={16}
                    height={16}
                    src={getImage(`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/youtube.svg`)}
                    draggable="false"
                    alt="youtube icon"
                  />
                </Link>
                <Link href="https://instagram.com/internxt/" target="_blank" rel="noreferrer">
                  <Image
                    loading="lazy"
                    width={16}
                    height={16}
                    src={getImage(`/icons/social/${darkMode ? 'cool-gray-30' : 'cool-gray-60'}/instagram.svg`)}
                    draggable="false"
                    alt="instagram icon"
                  />
                </Link>
              </div>

              <p className={`text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}>
                {textContent.FooterSection.copyright.line1 + year + textContent.FooterSection.copyright.line2}
              </p>

              <Link href="/" locale={lang} className="flex flex-shrink-0">
                <Image
                  width={96}
                  height={10.5}
                  loading="lazy"
                  src={getImage(`/logos/internxt/${darkMode ? 'white' : 'cool-gray-90'}.svg`)}
                  alt="Internxt logo"
                />
              </Link>
            </div>
          </div>
        </footer>
        {lang === 'es' && (
          <p className="text- max-w-[896px] pb-5 pt-10 text-center text-xs text-cool-gray-60">
            {textContent.FooterSection.financialProject}
          </p>
        )}
      </div>
    </section>
  );
}

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  return {
    props: {
      lang,
    },
  };
}
