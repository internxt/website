import { CaretDown, CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { set } from 'cypress/types/lodash';
import { useState } from 'react';

interface ContactSalesFormProps {
  textContent: any;
  isBusiness?: boolean;
}
type result = 'error' | 'success' | 'default';
export const ContactSalesForm = ({ textContent, isBusiness }: ContactSalesFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    storage: '',
    help: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [view, setView] = useState<result>('default');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => {
      const updatedFormData = { ...prev, [id]: value };
      const fieldsToValidate = ['name', 'company', 'email', 'phone', 'storage'];
      const isValid = fieldsToValidate.every((field) => updatedFormData[field].trim() !== '');
      setIsFormValid(isValid);
      return updatedFormData;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const apiKey = process.env.NEXT_PUBLIC_MAILERLITE_API_CONTACT_SALES;
    const groupId = '145043133822928056';

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const payload = {
      email: formData.email,
      fields: {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        storage: formData.storage,
        help: formData.help,
        origin_contact: isBusiness ? 'B2B' : 'S3',
      },

      groups: [groupId],
    };

    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setView('success');
      await sleep(2000);
      setFormData({ name: '', company: '', email: '', phone: '', storage: '', help: '' });
      setIsFormValid(false);
      setView('default');
    } catch (error) {
      console.error('Error:', error);
      setView('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-6 overflow-hidden">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h2>
        <h3 className="max-w-[774px] text-xl text-gray-80">{textContent.description}</h3>
      </div>

      <div className="flex items-center justify-center py-8 " id="contactSales">
        <div className="flex w-full max-w-[850px]">
          <div className="flex-1 rounded-lg bg-gray-1 p-10 text-gray-100">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label className="mb-1 block text-sm" htmlFor="name">
                    {textContent.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={textContent.form.name}
                    className="w-full rounded-lg border border-highlight px-3 py-2 outline-none"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="mb-1 block text-sm" htmlFor="company">
                    {textContent.form.company}
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder={textContent.form.company}
                    className="w-full rounded-lg border border-highlight px-3 py-2 focus:outline-none  "
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label className="mb-1 block text-sm" htmlFor="email">
                    {textContent.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={textContent.form.email}
                    className="w-full rounded-lg border border-highlight px-3 py-2 focus:outline-none "
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="mb-1 block text-sm" htmlFor="phone">
                    {textContent.form.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={textContent.form.phone}
                    className="w-full rounded-lg border border-highlight px-3 py-2 focus:outline-none "
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="mb-1 block text-sm" htmlFor="storage">
                  {textContent.form.howMuchStorage}
                </label>
                <select
                  id="storage"
                  className={`w-full appearance-none rounded-lg border border-highlight bg-white px-3 py-2 ${
                    formData.storage === '' ? 'text-gray-40' : 'text-gray-100'
                  }`}
                  value={formData.storage}
                  onChange={handleChange}
                >
                  {textContent.form.options.map((option, index) => (
                    <option
                      key={index}
                      value={index === 0 ? '' : option}
                      className={index === 0 ? 'text-gray-40' : 'text-gray-100'}
                    >
                      {option}
                    </option>
                  ))}
                </select>

                <CaretDown className="pointer-events-none absolute right-6 top-1/2 h-6 w-6 transform text-gray-100" />
              </div>

              <div>
                <label className="mb-1 block text-sm" htmlFor="help">
                  {textContent.form.howWeCanHelp}
                </label>
                <textarea
                  id="help"
                  placeholder={textContent.form.howWeCanHelp}
                  maxLength={1000}
                  value={formData.help}
                  onChange={handleChange}
                  className="h-32 w-full resize-none rounded-lg border border-highlight px-3 py-2 focus:outline-none "
                />
              </div>

              <div className="flex pt-4">
                <button
                  type="submit"
                  className={`w-full rounded-lg px-4 py-2 text-white transition lg:w-1/3 ${
                    isFormValid ? 'bg-primary' : 'cursor-not-allowed bg-gray-30'
                  }`}
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : textContent.form.cta}
                </button>
              </div>
              {view === 'success' && (
                <div className="mt-4 flex items-center justify-center rounded-md border border-highlight bg-white px-5 py-2">
                  <CheckCircle height={24} width={24} weight="fill" className="text-green-1" />
                  <p className="ml-2 text-sm text-gray-80">{textContent.form.successMessage}</p>
                </div>
              )}

              {view === 'error' && (
                <div className="mt-4 flex items-center justify-center rounded-md border border-highlight bg-white px-5 py-2">
                  <WarningCircle height={24} width={24} weight="fill" className="text-red" />
                  <p className="ml-2 text-sm text-gray-80">{textContent.form.errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
