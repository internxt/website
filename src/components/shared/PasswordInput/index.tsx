import { FieldError, Path, UseFormRegister, ValidationRule } from 'react-hook-form';

import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useState } from 'react';
import type { IFormValues } from '@/components/cloud-object-storage/integrated-checkout/IntegratedCheckoutView';

interface InputProps {
  darkMode?: boolean;
  label: Path<IFormValues>;
  disabled?: boolean;
  register: UseFormRegister<IFormValues>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  placeholder: string;
  pattern?: ValidationRule<RegExp>;
  error?: FieldError;
  min?: ValidationRule<number | string>;
  required?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  autoFocus?: boolean;
  value?: string;
  autoComplete?: string;
  inputDataCy?: string;
}

const PasswordInput = ({
  darkMode = false,
  label,
  disabled,
  register,
  minLength,
  maxLength,
  placeholder,
  pattern,
  error,
  min,
  required,
  onFocus,
  onBlur,
  className = '',
  autoFocus,
  autoComplete,
  inputDataCy,
}: InputProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const borderStyles = error
    ? 'border-red focus:shadow-[0_0_4px_rgb(255,13,0)]'
    : `${darkMode ? 'border-gray-71' : 'border-gray-40'} focus:border-primary focus:shadow-[0_0_4px_rgb(0,102,255)]`;

  return (
    <div className={`relative z-20 flex-1 ${className}`}>
      <input
        type={showPassword ? 'text' : 'password'}
        disabled={disabled}
        placeholder={placeholder}
        min={0}
        required={true}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        data-cy={inputDataCy}
        {...register(label, {
          required,
          minLength,
          min,
          maxLength,
          pattern,
        })}
        onFocus={() => {
          if (onFocus) onFocus();
        }}
        onBlur={() => {
          if (onBlur) onBlur();
        }}
        className={`w-full rounded-md border p-3 pr-12 text-base placeholder-gray-50 outline-none ${
          darkMode ? 'bg-[#1C1C1C] text-white-95' : 'bg-white text-gray-100'
        } ${borderStyles} ${
          darkMode ? 'disabled:border-gray-71 disabled:text-gray-50' : 'disabled:border-gray-10 disabled:text-gray-40'
        }`}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        onKeyDown={(e) => (e['code'] === 'Space' || e['code'] === 'Enter') && setShowPassword(!showPassword)}
        tabIndex={0}
        className={`absolute right-4 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center ${
          darkMode ? 'text-white-95' : 'text-gray-100'
        }`}
      >
        {showPassword ? <Eye className="h-6 w-6" /> : <EyeSlash className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default PasswordInput;
