import { FieldError, Path, UseFormRegister, ValidationRule } from 'react-hook-form';
import type { IFormValues } from '../../cloud-object-storage/integrated-checkout/IntegratedCheckoutView';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface InputProps {
  darkMode?: boolean;
  label: Path<IFormValues>;
  type: 'text' | 'email' | 'number';
  disabled?: boolean;
  register: UseFormRegister<IFormValues>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  placeholder: string;
  pattern?: ValidationRule<RegExp>;
  error?: FieldError;
  min?: ValidationRule<number | string>;
  required?: boolean;
  className?: string;
  autoFocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  autoComplete?: string;
  inputDataCy?: string;
}

export default function TextInput({
  darkMode = DARK_MODE_ENABLED,
  label,
  type,
  disabled,
  register,
  minLength,
  maxLength,
  placeholder,
  pattern,
  error,
  min,
  required,
  className = '',
  autoFocus,
  autoComplete,
  inputDataCy,
}: Readonly<InputProps>): JSX.Element {
  const borderStyles = error
    ? 'border-red focus:shadow-[0_0_4px_rgb(255,13,0)]'
    : `${darkMode ? 'border-gray-71' : 'border-gray-40'} focus:border-primary focus:shadow-[0_0_4px_rgb(0,102,255)]`;

  return (
    <div className={`${className}`}>
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        id={label}
        required={true}
        autoFocus={autoFocus}
        data-cy={inputDataCy}
        {...register(label, {
          required,
          minLength,
          min,
          maxLength,
          pattern,
        })}
        className={`w-full rounded-md border p-3 text-base placeholder-gray-50 outline-none ${
          darkMode ? 'bg-[#1C1C1C] text-white-95' : 'bg-white text-gray-100'
        } ${borderStyles} ${
          darkMode ? 'disabled:border-gray-71 disabled:text-gray-50' : 'disabled:border-gray-10 disabled:text-gray-40'
        }`}
      />
    </div>
  );
}
