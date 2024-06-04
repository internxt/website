import moment from 'moment';
import Link from 'next/link';

export const MinimalFooter = ({ lang, footerLang }) => {
  const year = moment().format('YYYY');

  return (
    <div className="flex w-full flex-row items-center justify-center space-x-4 py-16">
      <Link href="/" locale={lang} className="flex flex-shrink-0">
        <img loading="lazy" src={`../../logos/internxt/cool-gray-90.svg`} alt="Internxt logo" />
      </Link>
      <p className={`text-xs text-cool-gray-60`}>{footerLang.copyright.line1 + year + footerLang.copyright.line2}</p>
    </div>
  );
};
