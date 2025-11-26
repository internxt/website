/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Transition, Disclosure } from '@headlessui/react';
import Link from 'next/link';
import setUTM from '@/lib/conversions';
import LanguageMobileBox from '../components/LanguageMobileBox';
import Image from 'next/legacy/image';
import axios from 'axios';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
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
        groups: [process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID],
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
      className={`flex w-full flex-col overflow-hidden lg:pb-10 ${darkMode ? 'bg-[#1C1C1C] text-white' : ''}`}
      style={{ background: darkMode ? '' : 'linear-gradient(180deg, #FFFFFF 0%, #E5EFFF 100%)' }}
    >
      <div className="flex w-full flex-col items-center justify-center pt-10 sm:py-12 lg:px-10 lg:pt-16 xl:px-32 3xl:px-80">
        <div className={`w-full bg-green-120 ${darkMode ? 'bg-cool-gray-90' : 'bg-cool-gray-10'} h-[1px] lg:mb-10`} />

        <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-between lg:gap-8">
          <div className="flex w-full flex-row items-end gap-6 lg:w-1/2 2xl:w-1/3">
            <div className="flex flex-col items-start justify-between gap-9">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-medium">{textContent.DownloadApp.title}</h2>
                <p className={`max-w-[380px] text-sm ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
                  {textContent.DownloadApp.description}
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="flex gap-4">
                  <Image
                    src={getImage('/images/footer/app-store.svg')}
                    width={148}
                    height={44}
                    className="cursor-pointer"
                    alt="Download on the App Store"
                    onClick={() => platforms && window.open(platforms.iPhone, '_blank')}
                  />
                  <Image
                    src={getImage('/images/footer/store-for-android.svg')}
                    width={148}
                    height={44}
                    className="cursor-pointer"
                    alt="Get it on Google Play"
                    onClick={() => platforms && window.open(platforms.Android, '_blank')}
                  />
                </div>
              </div>
            </div>
            <Image
              src={getImage('/images/components/AppDownload.webp')}
              width={125}
              height={125}
              className="cursor-pointer"
              alt="QR code for download Internxt APP"
            />
          </div>

          {!hideNewsletter && (
            <div className="flex w-full flex-col gap-3 lg:w-1/3 2xl:w-1/3">
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-medium">{textContent.NewsletterSection.title}</h2>
                <p className={`text-sm ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
                  {textContent.NewsletterSection.description}
                </p>
              </div>

              <form
                data-code="Frjj25"
                method="post"
                target="_blank"
                rel="noopener"
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 sm:flex-row"
              >
                <input type="hidden" name="ml-submit" value="1" />
                <input
                  name="fields[email]"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={textContent.NewsletterSection.input}
                  className={`flex-1 rounded-lg border px-4 py-2.5 text-base outline-none transition-all
            ${
              darkMode
                ? 'border-cool-gray-70 bg-cool-gray-90 focus:border-primary'
                : 'border-cool-gray-20 bg-white focus:border-blue-50'
            } focus:ring focus:ring-primary focus:ring-opacity-20`}
                  required
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-4 py-2.5 text-base font-medium text-white 
            transition-all hover:bg-primary-dark active:bg-primary-dark"
                >
                  {textContent.NewsletterSection.cta}
                </button>
              </form>

              <span className="text-sm text-gray-40">
                {textContent.NewsletterSection.privacy}{' '}
                <Link href="/legal" locale={lang} className="underline hover:text-gray-30">
                  {textContent.NewsletterSection.privacyLink}
                </Link>
              </span>
            </div>
          )}
        </div>

        <div className={`w-full bg-green-120 ${darkMode ? 'bg-cool-gray-90' : 'bg-cool-gray-10'} h-[1px] lg:my-10`} />

        <footer className="flex w-full items-center justify-center">
          <div className="hidden w-full flex-col items-center justify-center md:space-y-16 lg:flex">
            <div className="flex w-full flex-row justify-between md:justify-between">
              <div className="flex max-w-[30%] flex-1 flex-col items-center lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-1' : 'text-gray-100'} `}>
                    {textContent.FooterSection.sections.products.title}
                  </h3>
                  <div
                    className={`flex flex-col gap-1 text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}
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
                      className="items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.products.antivirus}
                      <span
                        className={`ml-2  h-max items-center justify-center rounded-2 ${
                          darkMode ? 'bg-primary/10' : 'bg-primary'
                        } bg-opacity-15 px-1 py-0.5 text-10 font-semibold text-primary`}
                      >
                        {textContent.FooterSection.new}
                      </span>
                    </Link>

                    <a
                      href="https://send.internxt.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-row items-center hover:text-primary"
                    >
                      <div>{textContent.FooterSection.sections.products.send}</div>
                    </a>

                    <Link href="/vpn" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.products.vpn}
                      <span
                        className={`ml-2  h-max items-center justify-center rounded-2 ${
                          darkMode ? 'bg-primary/10' : 'bg-primary'
                        } bg-opacity-15 px-1 py-0.5 text-10 font-semibold text-primary`}
                      >
                        {textContent.FooterSection.new}
                      </span>
                    </Link>
                    <Link href="/cleaner" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.products.cleaner}
                      <span
                        className={`ml-2  h-max items-center justify-center rounded-2 ${
                          darkMode ? 'bg-primary/10' : 'bg-primary'
                        } bg-opacity-15 px-1 py-0.5 text-10 font-semibold text-primary`}
                      >
                        {textContent.FooterSection.new}
                      </span>
                    </Link>
                    <Link href="/meet" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.products.meet}
                      <span
                        className={`ml-2  h-max items-center justify-center rounded-2 ${
                          darkMode ? 'bg-primary/10' : 'bg-primary'
                        } bg-opacity-15 px-1 py-0.5 text-10 font-semibold text-primary`}
                      >
                        {textContent.FooterSection.new}
                      </span>
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

              <div className="flex max-w-[14%] flex-1 flex-col items-center text-gray-100 lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-1' : 'text-gray-100'} `}>
                    {textContent.FooterSection.sections.company.title}
                  </h3>
                  <div
                    className={`flex flex-col gap-1 text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}
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

              <div className="flex max-w-[14%] flex-1 flex-col items-center text-gray-100 lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-1' : 'text-gray-100'} `}>
                    {textContent.FooterSection.sections.join.title}
                  </h3>
                  <div
                    className={`flex flex-col gap-1 text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}
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
                  </div>
                </div>
              </div>

              <div className="flex max-w-[14%] flex-1 flex-col items-center text-gray-100 lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-1' : 'text-gray-100'} `}>
                    {textContent.FooterSection.sections.resources.title}
                  </h3>
                  <div
                    className={`flex flex-col gap-1 text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}
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
                      href="/mega-alternative"
                      locale={lang}
                      passHref
                      className="w-full max-w-[160px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.megaAlternative}
                    </Link>

                    <Link
                      href="/koofr-alternative"
                      locale={lang}
                      passHref
                      className="w-full max-w-[160px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.koofrAlternative}
                    </Link>

                    <Link
                      href="/icedrive-alternative"
                      locale={lang}
                      passHref
                      className="w-full max-w-[160px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.icedriveAlternative}
                    </Link>
                    <Link
                      href="/onedrive-alternative"
                      locale={lang}
                      passHref
                      className="w-full max-w-[160px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.onedriveAlternative}
                    </Link>
                    <Link
                      href="/google-drive-alternative"
                      locale={lang}
                      passHref
                      className="w-full max-w-[160px] hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.googleDriveAlternative}
                    </Link>

                    <Link
                      href="/what-does-google-know-about-me"
                      locale={lang}
                      passHref
                      className="items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.resources.whatGoogleKnowsAboutMe}
                    </Link>
                    <Link href="/webdav" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.resources.WebDAV}
                    </Link>
                    <Link href="/nas" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.resources.nas}
                    </Link>
                    <Link href="/coupons" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.resources.coupons}
                    </Link>
                    <Link href="/reviews" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.resources.reviews}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[18%] flex-1 flex-col items-center text-gray-100 lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-1' : 'text-gray-100'} `}>
                    {textContent.FooterSection.sections.tools.title}
                  </h3>
                  <div
                    className={`flex flex-col gap-1 text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}
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
                    <Link href="/password-generator" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.tools.passwordGenerator}
                    </Link>
                    <Link href="/file-converter" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.tools.fileConverter}
                    </Link>
                    <Link href="/dark-web-monitor" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.tools.haveIBeenPwned}
                    </Link>
                    <Link href="/metadata-remover" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.tools.metadataRemover}
                    </Link>
                    <Link href="/ai-detector" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.tools.aiDetector}
                    </Link>
                    <Link href="/file-compressor" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.tools.fileCompressor}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex max-w-[14%] flex-1 flex-col items-center text-gray-100 lg:flex-none">
                <div className="flex flex-shrink-0 flex-col space-y-3">
                  <h3 className={`text-xs font-semibold ${darkMode ? 'text-gray-1' : 'text-gray-100'} `}>
                    {textContent.FooterSection.sections.features.title}
                  </h3>
                  <div
                    className={`flex flex-col gap-1 text-xs ${darkMode ? 'text-cool-gray-30' : 'text-cool-gray-60'}`}
                  >
                    <Link
                      href="/private-cloud-storage-solutions"
                      locale={lang}
                      passHref
                      className=" items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.features.privateCloud}
                    </Link>
                    <Link
                      href="/cloud-storage-backup-solutions"
                      locale={lang}
                      passHref
                      className="items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.features.cloudBakcup}
                    </Link>
                    <Link href="/gdpr-cloud-storage" locale={lang} passHref className="items-center hover:text-primary">
                      {textContent.FooterSection.sections.features.GDPRCloud}
                    </Link>
                    <Link
                      href="/cloud-storage-for-photos"
                      locale={lang}
                      passHref
                      className="items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.features.cloudPhotos}
                    </Link>
                    <Link
                      href="/cloud-storage-for-videos"
                      locale={lang}
                      passHref
                      className="items-center hover:text-primary"
                    >
                      {textContent.FooterSection.sections.features.cloudVideo}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`w-full bg-green-120 ${darkMode ? 'bg-cool-gray-90' : 'bg-cool-gray-10'} h-[1px] lg:mb-10`}
            />

            {/* Logos */}
            <div className="flex w-full flex-row justify-between">
              <div className="flex flex-row gap-10">
                <Image
                  src={getImage('/icons/social/ISO-27001-logo-eturia.png')}
                  alt="Eturia logo"
                  width={60}
                  height={60}
                />
                {lang !== 'es' ? (
                  <Image
                    src={getImage('/icons/social/gdpr-internxt.svg')}
                    alt="GDPR Internxt"
                    width={146}
                    height={48}
                  />
                ) : (
                  <Image src={getImage('/icons/social/cdti.png')} alt="GDPR Internxt" width={200} height={60} />
                )}
              </div>

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
          </div>

          {/* Mobile version */}
          <div
            className={`${
              darkMode ? 'bg-[#1C1C1C] text-white' : 'bg-gray-5 bg-opacity-50'
            } flex flex-col overflow-hidden lg:hidden`}
          >
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      darkMode ? 'text-gray-1' : 'text-gray-100'
                    } flex w-full items-center justify-between px-6 py-4 text-lg font-medium`}
                  >
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
                      className={`flex flex-col px-6 font-semibold text-gray-100 ${!open ? 'hidden' : 'flex'} ${
                        darkMode ? 'bg-gray-71 text-green-120' : 'bg-gray-1 text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <Link href="/drive" locale={lang} passHref legacyBehavior>
                        <div className="flex flex-row space-x-2">
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
                          <p>{textContent.FooterSection.sections.products.send}</p>
                        </div>
                      </a>

                      <Link href="/vpn" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.products.vpn}
                      </Link>
                      <Link href="/cleaner" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.products.cleaner}
                      </Link>
                      <Link href="/meet" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.products.meet}
                      </Link>
                      <Link href="/business" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.products.business}
                      </Link>
                      <Link href="/family" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.products.family}
                      </Link>
                      <Link href="/pricing" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.products.pricing}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      darkMode ? 'text-gray-1' : 'text-gray-100'
                    } flex w-full items-center justify-between px-6 py-4 text-lg font-medium`}
                  >
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
                        darkMode ? 'bg-gray-71 text-green-120' : 'text-gray-60'
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
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      darkMode ? 'text-gray-1' : 'text-gray-100'
                    } flex w-full items-center justify-between px-6 py-4 text-lg font-medium`}
                  >
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
                        darkMode ? 'bg-gray-71 text-green-120' : 'text-gray-60'
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
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      darkMode ? 'text-gray-1' : 'text-gray-100'
                    } flex w-full items-center justify-between px-6 py-4 text-lg font-medium`}
                  >
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
                        darkMode ? 'bg-gray-71 text-green-120' : 'text-gray-60'
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
                        href="/mega-alternative"
                        locale={lang}
                        passHref
                        className="w-full max-w-[160px] hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.megaAlternative}
                      </Link>

                      <Link
                        href="/google-drive-alternative"
                        locale={lang}
                        passHref
                        className="w-full max-w-[160px] hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.googleDriveAlternative}
                      </Link>

                      <Link
                        href="/koofr-alternative"
                        locale={lang}
                        passHref
                        className="w-full max-w-[160px] hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.koofrAlternative}
                      </Link>

                      <Link
                        href="/icedrive-alternative"
                        locale={lang}
                        passHref
                        className="w-full max-w-[160px] hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.icedriveAlternative}
                      </Link>
                      <Link
                        href="/onedrive-alternative"
                        locale={lang}
                        passHref
                        className="w-full max-w-[160px] hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.onedriveAlternative}
                      </Link>
                      <Link
                        href="/what-does-google-know-about-me"
                        locale={lang}
                        passHref
                        className="items-center hover:text-primary"
                      >
                        {textContent.FooterSection.sections.resources.whatGoogleKnowsAboutMe}
                      </Link>
                      <Link href="/webdav" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.resources.WebDAV}
                      </Link>
                      <Link href="/nas" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.resources.nas}
                      </Link>
                      <Link href="/coupons" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.resources.coupons}
                      </Link>
                      <Link href="/reviews" locale={lang} passHref className="items-center hover:text-primary">
                        {textContent.FooterSection.sections.resources.reviews}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      darkMode ? 'text-gray-1' : 'text-gray-100'
                    } flex w-full items-center justify-between px-6 py-4 text-lg font-medium`}
                  >
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
                        darkMode ? 'bg-gray-71 text-green-120' : 'text-gray-60'
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
                      <Link href="/metadata-remover" locale={lang} passHref legacyBehavior>
                        {textContent.FooterSection.sections.tools.metadataRemover}
                      </Link>
                      <Link href="/ai-detector" locale={lang} passHref>
                        {textContent.FooterSection.sections.tools.aiDetector}
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
            <Disclosure as="div" className="w-screen">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      darkMode ? 'text-gray-1' : 'text-gray-100'
                    } flex w-full items-center justify-between px-6 py-4 text-lg font-medium`}
                  >
                    <span className="flex flex-row">{textContent.FooterSection.sections.features.title}</span>
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
                        darkMode ? 'bg-gray-71 text-green-120' : 'text-gray-60'
                      } space-y-8 p-4`}
                    >
                      <Link href="/private-cloud-storage-solutions" locale={lang} passHref>
                        {textContent.FooterSection.sections.features.privateCloud}
                      </Link>

                      <Link href="/cloud-storage-backup-solutions" locale={lang} passHref>
                        {textContent.FooterSection.sections.features.cloudBakcup}
                      </Link>

                      <Link href="/gdpr-cloud-storage" locale={lang} passHref>
                        {textContent.FooterSection.sections.features.GDPRCloud}
                      </Link>

                      <Link href="/cloud-storage-for-photos" locale={lang} passHref>
                        {textContent.FooterSection.sections.features.cloudPhotos}
                      </Link>

                      <Link href="/cloud-storage-for-videos" locale={lang} passHref>
                        {textContent.FooterSection.sections.features.cloudVideo}
                      </Link>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            {/* Language selection for mobile view */}
            <LanguageMobileBox darkMode={darkMode} />

            <div className="flex flex-col items-center space-y-4 py-10 text-gray-100">
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

              <Link href="/" locale={lang} className="flex flex-shrink-0 text-gray-100">
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
