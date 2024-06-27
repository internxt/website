import moment from 'moment';
import Link from 'next/link';

interface MinimalFooterProps {
  lang: string;
  footerLang: any;
  bgColor?: string;
}

export const MinimalFooter = ({ lang, footerLang, bgColor }: MinimalFooterProps) => {
  const year = moment().format('YYYY');

  return (
    <div className={`flex w-full flex-col md:flex-row ${bgColor} items-center justify-center gap-4 py-16`}>
      <Link href="/" locale={lang} className="flex flex-shrink-0">
        <img loading="lazy" src={`../../logos/internxt/cool-gray-90.svg`} alt="Internxt logo" />
      </Link>
      <p className={`text-xs text-cool-gray-60`}>{footerLang.copyright.line1 + year + footerLang.copyright.line2}</p>
    </div>
  );
};
