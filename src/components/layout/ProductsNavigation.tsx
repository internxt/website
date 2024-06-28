import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import Link from 'next/link';

interface ProductsNavigationProps {
  textContent: Record<string, any>;
  selectedItem: string;
  lang: string;
}

const ProductsNavigation = ({ textContent, selectedItem, lang }: ProductsNavigationProps): JSX.Element => {
  const { dialogIsOpen } = useGlobalDialog();
  const isTopBannerDialogOpen = dialogIsOpen(GlobalDialog.TopBanner);

  const paddingTop = isTopBannerDialogOpen ? 'lg:top-[120px]' : 'lg:top-[64px]';

  return (
    <div
      className={`absolute z-10 hidden h-14 w-full flex-row items-center justify-start overflow-x-auto bg-cool-gray-5 px-6 sm:justify-center ${paddingTop} lg:flex`}
    >
      <div className="mx-auto space-x-8 sm:space-x-6">
        <Link
          href="/drive"
          locale={lang}
          passHref
          className={`relative whitespace-nowrap py-1.5 px-4 font-semibold transition duration-150 ease-in-out ${
            selectedItem === 'drive' ? 'text-primary' : 'text-gray-60 hover:text-primary-dark'
          } text-base`}
        >
          {textContent.products.drive}
        </Link>

        <a
          href="https://send.internxt.com"
          target="_blank"
          rel="noreferrer"
          className={`relative whitespace-nowrap py-1.5 px-4 font-semibold transition duration-150 ease-in-out ${
            selectedItem === 'send' ? 'text-primary' : 'text-gray-60 hover:text-primary-dark'
          } text-base`}
        >
          {textContent.products.send}
        </a>
      </div>
    </div>
  );
};

export default ProductsNavigation;
