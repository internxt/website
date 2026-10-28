import { useState } from 'react';
import { Info, WarningCircle } from '@phosphor-icons/react';
import Link from 'next/link';

import TextInput from '@/components/components/TextInput';
import PrimaryButton from '@/components/components/PrimaryButton';
import PasswordStrength from '@/components/components/PasswordStrength';
import testPasswordStrength from '@/components/auth/testPasswordStrength';
import { goToLoginURL, signup } from '@/lib/auth';

const DRIVE_WEB_LOGIN_URL = 'https://drive.internxt.com/login';

export interface SignUpFormText {
  fields: {
    email: {
      label: string;
      placeholder: string;
    };
    password: {
      label: string;
      placeholder: string;
      show: string;
      hide: string;
      strength: {
        complexity: string;
        length: string;
        weak: string;
        strong: string;
      };
    };
    submit: string;
  };
  info?: string;
  disclaimer: {
    text: string;
    link: string;
  };
  login?: {
    text: string;
    link: string;
  };
}

interface SignUpFormProps {
  textContent: SignUpFormText;
  lang?: string;
  error?: string;
  loading?: boolean;
  onSubmitEmail?: (email: string) => Promise<void> | void;
}

type PasswordState = {
  tag: 'error' | 'warning' | 'success';
  label: string;
};

export const SignUpForm = ({ textContent, lang, error, loading, onSubmitEmail }: SignUpFormProps): JSX.Element => {
  const [passwordState, setPasswordState] = useState<PasswordState | undefined>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const getPasswordState = (password: string): PasswordState => {
    const result = testPasswordStrength(password, '');

    if (!result.valid) {
      return {
        tag: 'error',
        label:
          result['reason'] === 'NOT_COMPLEX_ENOUGH'
            ? textContent.fields.password.strength.complexity
            : textContent.fields.password.strength.length,
      };
    }

    if (result.strength === 'medium') {
      return { tag: 'warning', label: textContent.fields.password.strength.weak };
    }

    return { tag: 'success', label: textContent.fields.password.strength.strong };
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target.elements;

    const state = getPasswordState(form.password.value);
    setPasswordState(state);

    if (state.tag === 'error') return;

    const email = form.email.value;

    if (onSubmitEmail) {
      try {
        await onSubmitEmail(email);
      } catch (err) {
        console.warn('Lead capture failed');
      }
    }

    signup({ email, password: form.password.value });
  };

  const checkPassword = (input) => setPasswordState(getPasswordState(input.target.value));

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="signUpFormEmail" className="text-sm font-medium text-gray-80">
          {textContent.fields.email.label}
        </label>
        <TextInput
          id="signUpFormEmail"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={textContent.fields.email.placeholder}
          required
          disabled={loading}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="signUpFormPassword" className="text-sm font-medium text-gray-80">
          {textContent.fields.password.label}
        </label>
        <div className="relative flex w-full">
          <TextInput
            id="signUpFormPassword"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="password"
            placeholder={textContent.fields.password.placeholder}
            className="pr-20"
            patternHint={passwordState?.label}
            required
            disabled={loading}
            onChange={checkPassword}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-0 flex h-11 items-center px-3 text-sm font-medium text-gray-60 hover:text-gray-80"
          >
            {showPassword ? textContent.fields.password.hide : textContent.fields.password.show}
          </button>
        </div>
        {passwordState && <PasswordStrength strength={passwordState.tag} label={passwordState.label} />}
      </div>

      {textContent.info && (
        <div className="flex flex-row items-start gap-2 rounded-lg bg-neutral-17 p-3">
          <Info size={20} weight="fill" className="shrink-0 text-primary" />
          <p className="text-sm font-normal leading-tight text-gray-60">{textContent.info}</p>
        </div>
      )}

      {error && (
        <div className="flex w-full flex-row items-start">
          <div className="flex h-5 flex-row items-center">
            <WarningCircle weight="fill" className="mr-1 h-4 text-red" />
          </div>
          <span className="text-sm text-red">{error}</span>
        </div>
      )}

      <PrimaryButton
        id="signUpFormSubmit"
        type="submit"
        className="w-full text-lg font-medium hover:bg-primary-dark"
        label={textContent.fields.submit}
        disabled={loading}
        loading={loading}
      />

      <p className="text-sm font-normal leading-tight text-gray-50">
        <span>{textContent.disclaimer.text}</span>{' '}
        <Link href="/legal" className="text-primary hover:underline">
          {textContent.disclaimer.link}
        </Link>
        <span>{'. '}</span>
        {textContent.login && (
          <>
            <span>{textContent.login.text}</span>{' '}
            <button
              type="button"
              onClick={() => goToLoginURL({ redirectURL: DRIVE_WEB_LOGIN_URL, lang })}
              className="text-primary hover:underline"
            >
              {textContent.login.link}
            </button>
          </>
        )}
      </p>
    </form>
  );
};

export default SignUpForm;
