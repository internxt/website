import { FieldError, Path, UseFormRegister, ValidationRule } from 'react-hook-form';
import './TextInput.scss';
import { IFormValues } from '../../cloud-object-storage/integrated-checkout/IntegratedCheckoutView';

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
  className,
  autoFocus,
  autoComplete,
  inputDataCy,
}: Readonly<InputProps>): JSX.Element {
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
        className={error ? 'inxt-input input-error' : 'inxt-input input-primary'}
      />
    </div>
  );
}
