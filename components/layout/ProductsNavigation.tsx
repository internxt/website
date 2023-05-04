import React from 'react';
import Link from 'next/link';

const ProductsNavigation = ({ textContent, selectedItem, lang }) => (
  <div className="absolute top-28 z-10 flex h-14 w-full flex-row items-center justify-start overflow-x-auto bg-cool-gray-5 px-6 sm:justify-center">
    <div className="mx-auto space-x-8 sm:space-x-6">
      <Link href="/drive" locale={lang} passHref>
        <a
          className={`relative whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
            selectedItem === 'drive' ? 'text-cool-gray-70' : 'text-cool-gray-40 hover:text-cool-gray-50'
          } text-base font-medium sm:text-sm`}
        >
          {textContent.products.drive}
        </a>
      </Link>
      <Link href="/photos" locale={lang} passHref>
        <a
          className={`relative whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
            selectedItem === 'photos' ? 'text-cool-gray-70' : 'text-cool-gray-40 hover:text-cool-gray-50'
          } text-base font-medium sm:text-sm`}
        >
          {textContent.products.photos}
        </a>
      </Link>
      <a
        href="https://send.internxt.com"
        target="_blank"
        rel="noreferrer"
        className={`relative whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${
          selectedItem === 'send' ? 'text-cool-gray-70' : 'text-cool-gray-40 hover:text-cool-gray-50'
        } text-base font-medium sm:text-sm`}
      >
        {textContent.products.send}
      </a>
    </div>
  </div>
);

export default ProductsNavigation;
