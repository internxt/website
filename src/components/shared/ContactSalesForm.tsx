import { CaretDown } from '@phosphor-icons/react';
import { useState } from 'react';

interface ContactSalesFormProps {
  textContent: any;
}

export const ContactSalesForm = ({ textContent }: ContactSalesFormProps) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => {
      const updatedFormData = { ...prev, [id]: value };
      const isValid = Object.values(updatedFormData).every((field) => field.trim() !== '');
      setIsFormValid(isValid);
      return updatedFormData;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const apiKey = process.env.NEXT_PUBLIC_MAILERLITE_API_CONTACT_SALES;
    const groupId = '145043133822928056';

    const payload = {
      email: formData.email,
      fields: {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        storage: formData.storage,
        help: formData.help,
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

      alert('Formulario enviado con éxito!');
      setFormData({ name: '', company: '', email: '', phone: '', storage: '', help: '' }); // 🔹 Reiniciar formulario
      setIsFormValid(false);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al enviar el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="overflow-hidden pt-5 lg:pt-10">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h2>
        <h3 className="max-w-[774px] text-xl text-gray-80">{textContent.description}</h3>
      </div>

      <div className="mb-10 mt-10 flex h-screen items-center justify-center lg:mb-20 lg:mt-20" id="contactSales">
        <div className="flex w-full max-w-screen-lg">
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
                    className="w-full rounded-lg border px-3 py-2 outline-none focus:border-black focus:ring-0 focus:ring-black"
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
                    className="w-full rounded-lg border px-3 py-2 focus:outline-none  "
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
                    className="w-full rounded-lg border px-3 py-2 focus:outline-none "
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
                    className="w-full rounded-lg border px-3 py-2 focus:outline-none "
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
                  className="w-full appearance-none rounded-lg border bg-white px-3 py-2"
                  value={formData.storage}
                  onChange={handleChange}
                >
                  {textContent.form.options.map((option, index) => (
                    <option key={index} value={index === 0 ? '' : option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formData.storage === '' && (
                  <CaretDown className="pointer-events-none absolute right-6 top-1/2 h-6 w-6 transform text-gray-100" />
                )}
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
                  className="h-32 w-full resize-none rounded-lg border px-3 py-2 focus:outline-none "
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
