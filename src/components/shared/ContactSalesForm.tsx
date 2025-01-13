import { CaretDown } from '@phosphor-icons/react';
import { useState } from 'react';

interface ContactSalesFormProps {
  textContent: any;
}

export const ContactSalesForm = ({ textContent }: ContactSalesFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    email: '',
    phone: '',
    storage: '',
    help: '',
  });
  const [charCount, setCharCount] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => {
      const updatedFormData = { ...prev, [id]: value };
      const isValid = Object.values(updatedFormData).every((field) => field.trim() !== '');
      setIsFormValid(isValid);
      return updatedFormData;
    });

    if (id === 'help') {
      setCharCount(value.length);
    }
  };

  return (
    <section className="overflow-hidden pt-5 lg:pt-10">
      <div className="text-cente flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h2>
        <h3 className="max-w-[774px] text-xl text-gray-80">{textContent.description}</h3>
      </div>

      <div className="mb-10 mt-10 flex h-screen items-stretch justify-center lg:mb-20 lg:mt-20 " id="contactSales">
        <div className="flex w-full max-w-screen-lg">
          <div className="flex-1 rounded-l-lg bg-gray-1 p-10 text-gray-100">
            <form className="space-y-4">
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                  <label className="font-regular mb-1 block text-sm" htmlFor="name">
                    {textContent.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={textContent.form.name}
                    className="w-full rounded-lg border-2 border-transparent px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="font-regular mb-1 block text-sm" htmlFor="surname">
                    {textContent.form.surname}
                  </label>
                  <input
                    id="surname"
                    type="text"
                    placeholder={textContent.form.surname}
                    className="w-full rounded-lg border-2 border-transparent px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                    value={formData.surname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="font-regular mb-1 block text-sm" htmlFor="company">
                  {textContent.form.company}
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder={textContent.form.company}
                  className="w-full rounded-lg border-2 border-transparent px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                  <label className="font-regular mb-1 block text-sm" htmlFor="email">
                    {textContent.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={textContent.form.email}
                    className="w-full rounded-lg border-2 border-transparent px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="font-regular mb-1 block text-sm" htmlFor="phone">
                    {textContent.form.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={textContent.form.phone}
                    className="w-full rounded-lg border-2 border-gray-1 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="font-regular mb-1 block text-sm" htmlFor="storage">
                  {textContent.form.howMuchStorage}
                </label>
                <select
                  id="storage"
                  className="w-full appearance-none rounded-lg border-2 border-transparent bg-white px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                  value={formData.storage}
                  onChange={handleChange}
                >
                  {textContent.form.options.map((option, index) => (
                    <option key={index} value={option === index ? '' : option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-regular mb-1 block text-sm" htmlFor="help">
                  {textContent.form.howWeCanHelp}
                </label>
                <textarea
                  id="help"
                  placeholder={textContent.form.howWeCanHelp}
                  maxLength={1000}
                  value={formData.help}
                  onChange={handleChange}
                  className="h-32 w-full resize-none rounded-lg border-2 border-transparent px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                />
              </div>
              <p className="mt-1 text-right text-sm text-gray-100">
                {charCount}
                {textContent.form.totalCharacters}
              </p>
              <div className="flex pt-4">
                <button
                  type="submit"
                  className={`w-full rounded-lg px-4 py-2 text-white transition lg:w-1/3 ${
                    isFormValid ? 'bg-primary' : 'cursor-not-allowed bg-gray-30'
                  }`}
                  disabled={!isFormValid}
                >
                  {textContent.form.cta}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
