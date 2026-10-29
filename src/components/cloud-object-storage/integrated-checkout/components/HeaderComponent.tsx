import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderComponentProps {
  darkMode?: boolean;
  textContent: IntegratedCheckoutText;
  lang: string;
}

export const HeaderComponent = ({ darkMode = false, textContent, lang }: HeaderComponentProps): JSX.Element => (
  <div className="flex w-full flex-row justify-between">
    <div className="flex flex-row items-center justify-center space-x-2">
      <Link href="/" hrefLang={lang}>
        <Image
          src={getImage(`/logos/internxt/${darkMode ? 'white' : 'cool-gray-90'}.svg`)}
          alt="Internxt logo"
          width={96}
          height={10}
        />
      </Link>
      <p className={`text-lg ${darkMode ? 'text-cool-gray-30' : 'text-gray-70'}`}>{textContent.checkout}</p>
    </div>
  </div>
);
