/*eslint-disable @typescript-eslint/no-explicit-any */
/*eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { FieldError, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../cloud-object-storage/integrated-checkout/IntegratedCheckoutView';
import { CSSProperties } from 'react';

export interface TextInputProps {
  className?: string;
  type?: 'text' | 'email' | 'number' | 'password';
  value?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
  name?: string;
  min?: string | number;
  max?: string | number;
  disabled?: boolean;
  readonly?: boolean;
  register?: UseFormRegister<IFormValues>;
  label?: 'email' | 'password';
  minLength?: { value: number; message: string };
  maxLength?: number;
  error?: FieldError;
  autoComplete?:
    | 'false'
    | 'off'
    | 'on'
    | 'name'
    | 'username'
    | 'email'
    | 'password'
    | 'new-password'
    | 'current-password'
    | 'one-time-code'
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-aditional-name'
    | 'cc-family-name'
    | 'cc-number'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-csc'
    | 'cc-type'
    | 'transaction-currency'
    | 'transaction-ammount'
    | 'language'
    | 'tel'
    | 'url'
    | 'counrty'
    | 'counrty-name'
    | 'postal-code'
    | 'street-adress'
    | 'adress-line1'
    | 'adress-line2'
    | 'adress-line3';
  isPasswordInput?: boolean;
  pattern?: string;
  patternHint?: string;
  passwordError?: boolean;
  onChange?: (e: any) => void | (() => void);
  onChangeText?: (text: string) => void;
  onFocus?: (e: any) => void | (() => void);
  onBlur?: (e: any) => void | (() => void);
  onKeyDown?: (e: any) => void | (() => void);
  autoCompleteOnFocus?: boolean;
  disabledText?: string;
  style?: CSSProperties;
}

const validatePassword = (password: string) => {
  const minLength = /.{6,}/;
  const hasDigit = /\d/;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

  if (!minLength.test(password)) {
    return 'Password must be 6 characters or more.';
  }
  if (!hasDigit.test(password)) {
    return 'Password must contain at least one digit.';
  }
  if (!hasUpperCase.test(password)) {
    return 'Password must contain at least one uppercase letter.';
  }
  if (!hasLowerCase.test(password)) {
    return 'Password must contain at least one lowercase letter.';
  }
  if (!hasSpecialChar.test(password)) {
    return 'Password must contain at least one special character.';
  }
  return true;
};

const TextInput = (props: TextInputProps) => {
  const { register } = props;

  const handleChange = (e: any) => {
    if (props.onChange) {
      props.onChange(e);
    }
    if (props.onChangeText) {
      props.onChangeText(e.target.value);
    }
  };

  return (
    <input
      type={props.type ?? 'text'}
      placeholder={props.placeholder}
      value={props.value}
      required={props.required}
      id={props.id}
      max={props.max}
      {...(register && props.min && props.label
        ? register(props.label, {
            required: 'Password is required',
            minLength: {
              value: Number(props.min),
              message: `Password must be at least ${props.min} characters`,
            },
            validate: validatePassword,
            min: props.min,
          })
        : {})}
      name={props.name}
      title={props.patternHint}
      disabled={props.disabled}
      readOnly={props.readonly || props.autoCompleteOnFocus}
      autoComplete={props.autoComplete ?? 'off'}
      className={`h-11 w-full appearance-none rounded-lg  border-gray-30 bg-white px-3 ${
        props.isPasswordInput ? 'pr-12' : ''
      } text-lg text-gray-100 shadow-sm transition duration-100 focus:outline-none ${
        props.passwordError ? 'border-2 focus:border-red' : 'border focus:border-primary'
      } focus:shadow-none focus:ring focus:ring-primary/10 disabled:cursor-not-allowed disabled:border-gray-10 ${
        props.disabledText ?? 'disabled:text-gray-30'
      } md:text-base ${props.className ?? ''}`}
      onChange={handleChange}
      onFocus={(e) => {
        if (props.autoCompleteOnFocus) {
          e.target.removeAttribute('readonly');
        }
        if (props.onFocus) {
          props.onFocus(e);
        }
      }}
      onBlur={props.onBlur}
      onKeyDown={props.onKeyDown}
      style={props.style}
    />
  );
};

export default TextInput;
