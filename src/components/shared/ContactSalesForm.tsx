import { CaretDown, CheckCircle, WarningCircle } from '@phosphor-icons/react';
import axios from 'axios';
import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

interface ContactSalesFormProps {
  textContent: any;
  isBusiness?: boolean;
  locale?: string;
}

type FormStatus = 'error' | 'success' | 'default';

const PHONE_PREFIXES = [
  { code: '+1', flag: '🇺🇸', label: 'US/CA' },
  { code: '+7', flag: '🇷🇺', label: 'RU' },
  { code: '+20', flag: '🇪🇬', label: 'EG' },
  { code: '+27', flag: '🇿🇦', label: 'ZA' },
  { code: '+30', flag: '🇬🇷', label: 'GR' },
  { code: '+31', flag: '🇳🇱', label: 'NL' },
  { code: '+32', flag: '🇧🇪', label: 'BE' },
  { code: '+33', flag: '🇫🇷', label: 'FR' },
  { code: '+34', flag: '🇪🇸', label: 'ES' },
  { code: '+36', flag: '🇭🇺', label: 'HU' },
  { code: '+39', flag: '🇮🇹', label: 'IT' },
  { code: '+40', flag: '🇷🇴', label: 'RO' },
  { code: '+41', flag: '🇨🇭', label: 'CH' },
  { code: '+43', flag: '🇦🇹', label: 'AT' },
  { code: '+44', flag: '🇬🇧', label: 'GB' },
  { code: '+45', flag: '🇩🇰', label: 'DK' },
  { code: '+46', flag: '🇸🇪', label: 'SE' },
  { code: '+47', flag: '🇳🇴', label: 'NO' },
  { code: '+48', flag: '🇵🇱', label: 'PL' },
  { code: '+49', flag: '🇩🇪', label: 'DE' },
  { code: '+51', flag: '🇵🇪', label: 'PE' },
  { code: '+52', flag: '🇲🇽', label: 'MX' },
  { code: '+54', flag: '🇦🇷', label: 'AR' },
  { code: '+55', flag: '🇧🇷', label: 'BR' },
  { code: '+56', flag: '🇨🇱', label: 'CL' },
  { code: '+57', flag: '🇨🇴', label: 'CO' },
  { code: '+58', flag: '🇻🇪', label: 'VE' },
  { code: '+60', flag: '🇲🇾', label: 'MY' },
  { code: '+61', flag: '🇦🇺', label: 'AU' },
  { code: '+62', flag: '🇮🇩', label: 'ID' },
  { code: '+63', flag: '🇵🇭', label: 'PH' },
  { code: '+64', flag: '🇳🇿', label: 'NZ' },
  { code: '+65', flag: '🇸🇬', label: 'SG' },
  { code: '+66', flag: '🇹🇭', label: 'TH' },
  { code: '+81', flag: '🇯🇵', label: 'JP' },
  { code: '+82', flag: '🇰🇷', label: 'KR' },
  { code: '+84', flag: '🇻🇳', label: 'VN' },
  { code: '+86', flag: '🇨🇳', label: 'CN' },
  { code: '+90', flag: '🇹🇷', label: 'TR' },
  { code: '+91', flag: '🇮🇳', label: 'IN' },
  { code: '+92', flag: '🇵🇰', label: 'PK' },
  { code: '+93', flag: '🇦🇫', label: 'AF' },
  { code: '+94', flag: '🇱🇰', label: 'LK' },
  { code: '+95', flag: '🇲🇲', label: 'MM' },
  { code: '+98', flag: '🇮🇷', label: 'IR' },
  { code: '+212', flag: '🇲🇦', label: 'MA' },
  { code: '+213', flag: '🇩🇿', label: 'DZ' },
  { code: '+216', flag: '🇹🇳', label: 'TN' },
  { code: '+218', flag: '🇱🇾', label: 'LY' },
  { code: '+220', flag: '🇬🇲', label: 'GM' },
  { code: '+234', flag: '🇳🇬', label: 'NG' },
  { code: '+254', flag: '🇰🇪', label: 'KE' },
  { code: '+351', flag: '🇵🇹', label: 'PT' },
  { code: '+352', flag: '🇱🇺', label: 'LU' },
  { code: '+353', flag: '🇮🇪', label: 'IE' },
  { code: '+358', flag: '🇫🇮', label: 'FI' },
  { code: '+380', flag: '🇺🇦', label: 'UA' },
  { code: '+420', flag: '🇨🇿', label: 'CZ' },
  { code: '+421', flag: '🇸🇰', label: 'SK' },
  { code: '+966', flag: '🇸🇦', label: 'SA' },
  { code: '+971', flag: '🇦🇪', label: 'AE' },
  { code: '+972', flag: '🇮🇱', label: 'IL' },
  { code: '+974', flag: '🇶🇦', label: 'QA' },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const shannonEntropy = (str: string): number => {
  const freq: Record<string, number> = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return Object.values(freq).reduce((sum, count) => {
    const p = count / str.length;
    return sum - p * Math.log2(p);
  }, 0);
};

const isRandomString = (str: string): boolean => {
  const trimmed = str.trim();
  if (trimmed.length < 10) return false;
  const hasNoSpaces = !trimmed.includes(' ');
  const entropy = shannonEntropy(trimmed);
  return hasNoSpaces && entropy > 3.5;
};

const isValidPhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return false;
  return /^\+?[\d\s\-().]{7,20}$/.test(phone.trim());
};

const isFormDataLegitimate = (data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  storage: string;
  help: string;
}): boolean => {
  if (isRandomString(data.company)) return false;
  if (data.help.trim().length > 0 && isRandomString(data.help)) return false;
  if (!isValidPhone(data.phone)) return false;
  return true;
};

export const ContactSalesForm = ({ textContent, isBusiness, locale }: ContactSalesFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    storage: '',
    help: '',
  });

  const [phonePrefix, setPhonePrefix] = useState('+34');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>('default');

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

  const onSubmitSuccess = async () => {
    setFormStatus('success');
    await sleep(3000);
    setFormData({ name: '', company: '', email: '', phone: '', storage: '', help: '' });
    setIsFormValid(false);
    setFormStatus('default');
  };

  const onSubmitError = (error: unknown) => {
    console.error('Error:', error);
    setFormStatus('error');
  };

  const handleSubmitDebounced = useCallback(
    debounce(async (formData, phonePrefix, isBusiness, locale, onSubmitSuccess, onSubmitError, setIsSubmitting) => {
      const fullPhone = `${phonePrefix} ${formData.phone}`.trim();

      if (!isFormDataLegitimate({ ...formData, phone: fullPhone })) {
        await onSubmitSuccess();
        return;
      }

      setIsSubmitting(true);
      const origin_contact = isBusiness ? 'B2B' : 'S3';
      const payload = {
        email: formData.email,
        name: formData.name,
        company: formData.company,
        phone: fullPhone,
        origin_contact: origin_contact,
        help: formData.help,
        storage: formData.storage,
        locale: locale,
      };

      try {
        await axios.post('/api/contact', payload);
        await onSubmitSuccess();
      } catch (error) {
        onSubmitError(error);
      } finally {
        setIsSubmitting(false);
      }
    }, 250),
    [],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitDebounced(formData, phonePrefix, isBusiness, locale, onSubmitSuccess, onSubmitError, setIsSubmitting);
  };

  return (
    <section className=" overflow-hidden px-8 py-10 lg:px-0 lg:py-20">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>
      <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>
      <div className="flex flex-col items-center gap-6 text-center ">
        <p className="text-30 font-semibold leading-tight text-gray-100 lg:text-3xl">{textContent.title}</p>
        <p className="max-w-[774px] px-10 text-lg leading-tight text-gray-80 lg:px-0" id="contactSales">
          {textContent.description}
        </p>
      </div>

      <div className="flex items-center justify-center py-8 ">
        <div className="flex w-[636px]">
          <div className="flex-1 rounded-32 bg-neutral-17 p-10 text-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-4 lg:space-y-0">
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

              <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-4 lg:space-y-0">
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
                  <div className="flex rounded-lg border border-highlight overflow-hidden">
                    <select
                      id="phonePrefix"
                      value={phonePrefix}
                      onChange={(e) => setPhonePrefix(e.target.value)}
                      className="appearance-none bg-white px-2 py-2 text-sm text-gray-100 focus:outline-none border-r border-highlight cursor-pointer"
                    >
                      {PHONE_PREFIXES.map(({ code, flag, label }) => (
                        <option key={code} value={code}>
                          {flag} {code}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      placeholder={textContent.form.phone}
                      className="flex-1 bg-white px-3 py-2 focus:outline-none"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
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
                  placeholder={textContent.form.howWeCanHelpPlaceHolder}
                  maxLength={1000}
                  value={formData.help}
                  onChange={handleChange}
                  className="h-32 w-full resize-none rounded-lg border border-highlight px-3 py-2 focus:outline-none "
                />
              </div>

              <div className="flex">
                <button
                  type="submit"
                  className={`w-full rounded-md px-6 py-4 text-white transition lg:w-1/3 ${
                    isFormValid ? 'bg-primary' : 'cursor-not-allowed bg-primary/40'
                  }`}
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? textContent.form.ctaSending : textContent.form.cta}
                </button>
              </div>

              {formStatus === 'success' && (
                <div className="flex items-center justify-center rounded-md border border-highlight bg-white px-5 py-2">
                  <CheckCircle height={24} width={24} weight="fill" className="text-green-1" />
                  <p className="ml-2 text-sm text-gray-80">{textContent.form.successMessage}</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="flex items-center justify-center rounded-md border border-highlight bg-white px-5 py-2">
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
