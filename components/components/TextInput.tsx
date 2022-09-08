export interface TextInputProps {
  className?: string;
  type?: 'text' | 'email' | 'number' | 'password';
  value?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;
  autoComplete?:
    | 'off'
    | 'om'
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
  onChange?: (e: any) => void | (() => void);
  onFocus?: (e: any) => void | (() => void);
  onBlur?: (e: any) => void | (() => void);
}

export default function TextInput(props: TextInputProps) {
  return (
    <input
      type={props.type ?? 'text'}
      placeholder={props.placeholder}
      value={props.value}
      required={props.required}
      id={props.id}
      name={props.name}
      pattern={props.pattern}
      title={props.patternHint}
      disabled={props.disabled}
      autoComplete={props.autoComplete ?? 'off'}
      className={`h-11 w-full appearance-none rounded-lg border border-gray-30 bg-white px-3 ${
        props.isPasswordInput && 'pr-12'
      } text-lg text-gray-100 shadow-sm transition duration-100 focus:border-primary focus:shadow-none focus:outline-none focus:ring focus:ring-primary/10 disabled:cursor-not-allowed disabled:border-gray-10 disabled:text-gray-30 md:text-base ${
        props.className ?? ''
      }`}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
}
