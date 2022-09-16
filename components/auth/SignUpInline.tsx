import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import PrimaryButton from '../components/PrimaryButton';
import { signup } from '../../lib/auth';
import testPasswordStrength from '@internxt/lib/dist/src/auth/testPasswordStrength';
import { WarningCircle } from 'phosphor-react';
import { useState } from 'react';

interface SignUpInlineProps {
  textContent: any;
  error?: string;
  loading?: boolean;
}

export default function SignUpInline(props: SignUpInlineProps) {
  const [passwordState, setPasswordState] = useState<{
    tag: 'error' | 'warning' | 'success';
    label: string;
  } | null>(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    // "inline" attribute allows to differenciate Hero's inline form errors from auth dialog errors
    signup({ email: form.email.value, password: form.password.value, inline: true });
  };

  const checkPassword = (input) => {
    const password = input.target.value;
    const result = testPasswordStrength(password, '');
    if (!result.valid) {
      setPasswordState({
        tag: 'error',
        label:
          result['reason'] === 'NOT_COMPLEX_ENOUGH'
            ? props.textContent.fields.password.strength.complexity
            : props.textContent.fields.password.strength.length,
      });
    } else if (result.strength === 'medium') {
      setPasswordState({ tag: 'warning', label: props.textContent.fields.password.strength.weak });
    } else {
      setPasswordState({ tag: 'success', label: props.textContent.fields.password.strength.strong });
    }
  };

  return (
    <form
      className="flex w-full max-w-lg flex-col items-center space-y-2 pt-10 md:items-start md:pt-0"
      onSubmit={onSubmit}
    >
      <div className="flex w-full flex-col space-x-0 space-y-3 md:flex-row md:space-y-0 md:space-x-3">
        <div className="w-full">
          <TextInput
            id="email"
            name="email"
            placeholder={props.textContent.fields.email.placeholder}
            type="email"
            autoComplete="email"
            required
            autoCompleteOnFocus
            disabled={props.loading}
          />
        </div>

        <div className="w-full">
          <PasswordInput
            name="password"
            placeholder={props.textContent.fields.password.placeholder}
            autoComplete="password"
            pattern={
              passwordState && (passwordState.tag === 'warning' || passwordState.tag === 'success')
                ? '[\\s\\S]+'
                : '^[]{1}'
            }
            patternHint={passwordState && passwordState.label}
            required
            autoCompleteOnFocus
            disabled={props.loading}
            onChange={(e) => checkPassword(e)}
          />
        </div>
      </div>

      {props.error && (
        <div className="flex w-full flex-row items-start justify-center md:justify-start">
          <div className="flex h-5 flex-row items-center">
            <WarningCircle weight="fill" className="mr-1 h-4 text-red" />
          </div>
          <span className="text-sm text-red">{props.error}</span>
        </div>
      )}

      <div className="flex w-full flex-row items-center space-x-3">
        <div className="w-full">
          <PrimaryButton
            className="h-auto w-full px-0 py-2.5 text-lg shadow-2xl shadow-primary/25 sm:text-base"
            type="submit"
            label={
              <div className="flex flex-row items-center space-x-1.5">
                <span>{props.textContent.fields.submit.get}</span>
                <span className="opacity-50">{'—'}</span>
                <span className="opacity-50">{props.textContent.fields.submit.free}</span>
              </div>
            }
            disabled={props.loading}
          />
        </div>

        <span className="w-full text-xs text-gray-50 sm:text-left">
          <span>{props.textContent.disclaimer.text}</span>{' '}
          <a href="/legal" target="_blank" className="hover:text-gray-60 hover:underline active:text-gray-80">
            {props.textContent.disclaimer.link}
          </a>
          <span>{'.'}</span>
        </span>
      </div>
    </form>
  );
}
