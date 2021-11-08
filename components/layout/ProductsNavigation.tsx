import React from 'react';
import Link from 'next/link';

const ProductsNavigation = ({
  textContent,
  selectedItem,
  lang
}) => (
  <div className="absolute top-16 h-14 flex flex-row items-center justify-center space-x-6 w-full px-6 overflow-x-auto bg-cool-gray-5">
    <Link href="/drive" locale={lang}>
      <a className={`relative whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${selectedItem === 'drive' ? 'text-cool-gray-70' : 'text-cool-gray-40 hover:text-cool-gray-50'} text-sm font-medium`}>
        {/* textContent.products.drive */}
        Drive
      </a>
    </Link>
    <Link href="/photos" locale={lang}>
      <a className={`relative whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${selectedItem === 'photos' ? 'text-cool-gray-70' : 'text-cool-gray-40 hover:text-cool-gray-50'} text-sm font-medium`}>
        {/* textContent.products.drive */}
        Photos
      </a>
    </Link>
    <a className={`relative whitespace-nowrap py-1.5 px-4 transition duration-150 ease-in-out ${selectedItem === 'send' ? 'text-cool-gray-70' : 'text-cool-gray-40'} text-sm font-medium`}>
      {/* textContent.products.drive */}
      Send
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-orange-50 text-supporting-2">
        Coming soon
      </span>
    </a>
  </div>
);

export default ProductsNavigation;
