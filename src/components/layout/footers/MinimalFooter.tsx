import moment from 'moment';
import { getImage } from '@/lib/getImage';
import Link from 'next/link';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface MinimalFooterProps {
  darkMode?: boolean;
  lang: string;
  footerLang: any;
  bgColor?: string;
  logoColor?: string;
  textColor?: string;
}

export const MinimalFooter = ({
  darkMode = DARK_MODE_ENABLED,
  lang,
  footerLang,
  bgColor,
  textColor,
  logoColor,
}: MinimalFooterProps) => {
  const year = moment().format('YYYY');
  const color = logoColor ?? (darkMode ? 'white' : 'cool-gray-90');

  return (
    <div
      className={`flex w-full flex-col md:flex-row ${bgColor} items-center justify-center gap-4 py-16 ${
        darkMode ? 'text-white-95' : 'text-gray-100'
      }`}
    >
      <Link href="/" locale={lang} className="flex flex-shrink-0">
        <img loading="lazy" src={getImage(`/logos/internxt/${color}.svg`)} alt="Internxt logo" />
      </Link>
      <p className={`text-xs ${textColor}`}>{footerLang.copyright.line1 + year + footerLang.copyright.line2}</p>
    </div>
  );
};
