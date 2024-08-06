import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderComponentProps {
  textContent: IntegratedCheckoutText;
  lang: string;
}

export const HeaderComponent = ({ textContent, lang }: HeaderComponentProps): JSX.Element => {
  const onInxtLogoClicked = () => {
    window.location.href = 'https://internxt.com';
  };

  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex flex-row space-x-2">
        <Link href="/" hrefLang={lang}>
          <Image src={getImage(`/logos/internxt/cool-gray-90.svg`)} alt="Internxt logo" width={96} height={10} />
        </Link>
        <p className="text-lg text-gray-70">{textContent.checkout}</p>
      </div>
    </div>
  );
};
