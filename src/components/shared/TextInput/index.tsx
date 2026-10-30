import { FieldError, Path, UseFormRegister, ValidationRule } from 'react-hook-form';
import type { IFormValues } from '../../cloud-object-storage/integrated-checkout/IntegratedCheckoutView';

interface InputProps {
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
  const defaultBorderClass = 'border-gray-40 dark:border-gray-71';
  const borderStyles = error
    ? 'border-red focus:shadow-[0_0_4px_rgb(255,13,0)]'
    : `${defaultBorderClass} focus:border-primary focus:shadow-[0_0_4px_rgb(0,102,255)]`;

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
        className={`w-full rounded-md border p-3 text-base placeholder-gray-50 outline-none bg-white text-gray-100 dark:bg-gray-95 dark:text-white-95 ${borderStyles} disabled:border-gray-10 disabled:text-gray-40 dark:disabled:border-gray-71 dark:disabled:text-gray-50`}
      />
    </div>
  );
}
