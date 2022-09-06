import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import PrimaryButton from '../components/PrimaryButton';
import { signup } from '../../lib/auth';
import { WarningCircle } from 'phosphor-react';
import Link from 'next/link';

interface SignUpInlineProps {
  textContent: any;
  error?: string;
  loading?: boolean;
}

export default function SignUpInline(props: SignUpInlineProps) {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    // "inline" attribute allows to differenciate Hero's inline form errors from auth dialog errors
    signup({ email: form.email.value, password: form.password.value, inline: true });
  };

  return (
    <form className="flex w-full flex-col items-center space-y-2 pt-10 md:items-start md:pt-0" onSubmit={onSubmit}>
      <div className="flex w-full flex-col pb-6 sm:pb-5">
        <h3 className="text-2xl font-medium">{props.textContent.SignUp.title}</h3>
        <p className="text-lg text-gray-60">{props.textContent.SignUp.subtitle}</p>
      </div>

      <div className="flex w-full flex-col space-x-0 space-y-3 md:flex-row md:space-y-0 md:space-x-3">
        <label className="flex w-full flex-col items-start space-y-0.5">
          <div className="text-sm">{props.textContent.SignUp.fields.email.label}</div>
          <TextInput
            name="email"
            placeholder={props.textContent.SignUp.fields.email.placeholder}
            type="email"
            autoComplete="off"
            required
            disabled={props.loading}
          />
        </label>

        <label className="flex w-full flex-col items-start space-y-0.5">
          <div className="text-sm">{props.textContent.SignUp.fields.password.label}</div>
          <PasswordInput
            name="password"
            placeholder={props.textContent.SignUp.fields.password.placeholder}
            autoComplete="off"
            required
            disabled={props.loading}
          />
        </label>
      </div>

      {props.error && (
        <div className="flex w-full flex-row items-start justify-center md:justify-start">
          <div className="flex h-5 flex-row items-center">
            <WarningCircle weight="fill" className="mr-1 h-4 text-red" />
          </div>
          <span className="text-sm text-red">{props.error}</span>
        </div>
      )}

      <div className="flex w-full flex-col items-center justify-start space-x-0 space-y-2 pt-2 sm:flex-row sm:space-x-6 sm:space-y-0 sm:pt-0 md:w-auto">
        <PrimaryButton
          className="h-12 w-full rounded-full text-lg shadow-2xl shadow-primary/25 sm:w-auto sm:px-9"
          type="submit"
          label={props.textContent.SignUp.fields.submit}
          disabled={props.loading}
        />

        <span className="w-full pb-8 text-xs text-gray-50 sm:w-44 sm:pb-0 sm:text-left">
          <span>{props.textContent.SignUp.disclaimer.text}</span>{' '}
          <Link href={'/legal'} passHref>
            <a className="hover:text-gray-60 hover:underline active:text-gray-80">
              {props.textContent.SignUp.disclaimer.link}
            </a>
          </Link>
          <span>{'.'}</span>
        </span>
      </div>
    </form>
  );
}
