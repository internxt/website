import Image from 'next/image';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import { getImage } from '@/lib/getImage';
import Header from '../shared/Header';
import Button from '../shared/Button';
import { useState } from 'react';

interface ContactSalesFormProps {
  textContent: any;
}
export const ContactSalesForm = ({ textContent }: ContactSalesFormProps) => {
  const [charCount, setCharCount] = useState(0);

  const handleTextareaChange = (e) => {
    setCharCount(e.target.value.length);
  };

  return (
    <section className="overflow-hidden pt-5 lg:pt-10">
      <div className="text-cente flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h2>
        <h3 className="max-w-[774px] text-xl text-gray-80">{textContent.description}</h3>
      </div>

      <div className="mb-10 mt-10 flex h-screen items-stretch justify-center lg:mb-20 lg:mt-20">
        <div className="flex w-full max-w-screen-lg">
          <div className="flex-1 rounded-l-lg bg-gray-1 p-10">
            <form className="space-y-4">
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                  <label className="mb-1 block text-sm font-medium" htmlFor="name">
                    {textContent.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={textContent.form.name}
                    className="border-highligth-10 w-full rounded-lg border px-3 py-2"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="mb-1 block text-sm font-medium" htmlFor="surname">
                    {textContent.form.surname}
                  </label>
                  <input
                    id="surname"
                    type="text"
                    placeholder={textContent.form.surname}
                    className="border-gray-300 w-full rounded-lg border px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="company">
                  {textContent.form.company}
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder={textContent.form.company}
                  className="border-gray-300 w-full rounded-lg border px-3 py-2"
                />
              </div>
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                  <label className="mb-1 block text-sm font-medium" htmlFor="email">
                    {textContent.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={textContent.form.email}
                    className="border-gray-300 w-full rounded-lg border px-3 py-2"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="mb-1 block text-sm font-medium" htmlFor="phone">
                    {textContent.form.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={textContent.form.phone}
                    className="border-gray-300 w-full rounded-lg border px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="storage">
                  {textContent.form.howMuchStorage}
                </label>
                <select id="storage" className="border-gray-300 w-full rounded-lg border bg-white px-3 py-2">
                  {textContent.form.options.map((option, index) => (
                    <option key={index} value={option === 'Select' ? '' : option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="help">
                  {textContent.form.howWeCanHelp}
                </label>
                <textarea
                  id="help"
                  placeholder={textContent.form.howWeCanHelp}
                  maxLength={1000}
                  onChange={handleTextareaChange}
                  className="border-gray-300 h-32 w-full resize-none rounded-lg border px-3 py-2"
                />
              </div>
              <p className="mt-1 text-right text-sm text-gray-100">
                {charCount}
                {textContent.form.totalCharacters}
              </p>
              <div className="flex pt-4">
                <button type="submit" className="w-full rounded-lg bg-gray-30 px-4 py-2 text-white transition lg:w-1/3">
                  {textContent.form.cta}
                </button>
              </div>
            </form>
          </div>
          <div className="flex-1">
            <Image
              src={getImage('/images/business/internxt_sales_contact.webp')}
              width={560}
              draggable={false}
              height={618}
              alt="Internxt cloud Storage"
              className="h-full w-full rounded-r-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
