import React from 'react';
import Link from 'next/link';

const ProductsNavigation = ({
  textContent,
  selectedItem,
  lang
}) => (
  <div className="absolute top-16 h-14 flex flex-row items-center justify-start sm:justify-center w-full px-6 overflow-x-auto bg-cool-gray-5">
    <div className="mx-auto space-x-8 sm:space-x-6">
      <Link href="/drive" locale={lang}>
        <a className={`relative whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${selectedItem === 'drive' ? 'text-cool-gray-70' : 'text-cool-gray-40 hover:text-cool-gray-50'} text-base sm:text-sm font-medium`}>
          {textContent.products.drive}
        </a>
      </Link>
      <Link href="/photos" locale={lang}>
        <a className={`relative whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${selectedItem === 'photos' ? 'text-cool-gray-70' : 'text-cool-gray-40 hover:text-cool-gray-50'} text-base sm:text-sm font-medium`}>
          {textContent.products.photos}
        </a>
      </Link>
      <a href="https://send.internxt.com" target="_blank" rel="noreferrer" className={`relative whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${selectedItem === 'send' ? 'text-cool-gray-70' : 'text-cool-gray-40 hover:text-cool-gray-50'} text-base sm:text-sm font-medium`}>
        {textContent.products.send}
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-orange-dark text-supporting-2">
          {textContent.products.new}
        </span>
      </a>
    </div>
  </div>
);

export default ProductsNavigation;
