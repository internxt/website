import React from 'react';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';

export default function Navbar({lang}) {
  const router = useRouter();

  return (
    <section>
      <div className="content">
        <div className="navbar items-center flex justify-between p-4 md:px-10 md:py-8 lg:px-32 lg:py-8">
          <div className="flex flex-row space-x-4 md:space-x-0 pl-2">
            <img className="flex md:hidden" src="../../icons/menu.svg"/>
            <a href="/" className="flex flex-shrink-0">
              <img src="../../logos/internxt/internxt.svg"/>
            </a>
          </div>
          
          <div className="links">
            <div className="hidden md:inline-flex">
              <a href="/" className="mr-6 lg:mr-8 text-neutral-300 focus:text-neutral-700 font-medium">{lang.products}</a>
              <a href="/" className="mr-6 lg:mr-8 text-neutral-300 focus:text-neutral-700 font-medium">{lang.pricing}</a>
              <a href="/" className="mr-6 lg:mr-8 text-neutral-300 focus:text-neutral-700 font-medium">{lang.about}</a>
              <a href="/login" className="mr-6 lg:mr-8 text-blue-60 focus:text-blue-70 font-medium">{lang.login}</a>
            </div>
            <a href="https://drive.internxt.com/new" target="_blank">
              <button
                type="button"
                className="flex justify-center sm:inline-flex px-4 py-2 border border-transparent rounded-full text-base font-medium text-blue-60 md:text-white bg-blue-10 md:bg-blue-60 active:bg-blue-20 focus:bg-blue-20 md:active:bg-blue-70 md:focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75"
              >
                {lang.getstarted}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
}
