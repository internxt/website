import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import PrimaryButton from '../components/PrimaryButton';
import { signup, toggleAuthMethod } from '../../lib/auth';
import testPasswordStrength from '@internxt/lib/dist/src/auth/testPasswordStrength';
import { WarningCircle } from 'phosphor-react';
import { useState } from 'react';
import PasswordStrength from '../components/PasswordStrength';

interface SignUpProps {
  textContent: any;
  error?: string;
  loading?: boolean;
}

export default function SignUp(props: SignUpProps) {
  const [passwordState, setPasswordState] = useState<{
    tag: 'error' | 'warning' | 'success';
    label: string;
  } | null>(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    signup({ email: form.email.value, password: form.password.value });
  };

  const checkPassword = (input) => {
    const password = input.target.value;
    const result = testPasswordStrength(password, '');
    if (!result.valid) {
      setPasswordState({
        tag: 'error',
        label:
          result['reason'] === 'NOT_COMPLEX_ENOUGH'
            ? props.textContent.SignUp.fields.password.strength.complexity
            : props.textContent.SignUp.fields.password.strength.length,
      });
    } else if (result.strength === 'medium') {
      setPasswordState({ tag: 'warning', label: props.textContent.SignUp.fields.password.strength.weak });
    } else {
      setPasswordState({ tag: 'success', label: props.textContent.SignUp.fields.password.strength.strong });
    }
  };

  return (
    <>
      <div className="flex w-full flex-col items-center pt-3 text-center">
        <h1 className="text-2xl font-medium">{props.textContent.SignUp.title}</h1>

        <span>
          {props.textContent.SignUp.or}{' '}
          <a
            onClick={() => !props.loading && toggleAuthMethod('login')}
            className={`text-primary active:text-primary-dark ${props.loading && 'cursor-not-allowed'}`}
          >
            {props.textContent.SignUp.login}
          </a>
        </span>
      </div>

      <form className="flex w-full flex-col space-y-3" onSubmit={onSubmit}>
        <TextInput
          name="email"
          placeholder={props.textContent.SignUp.fields.email.placeholder}
          type="email"
          autoComplete="email"
          required
          autoCompleteOnFocus
          disabled={props.loading}
        />

        <div className="space-y-0.5">
          <PasswordInput
            name="password"
            placeholder={props.textContent.SignUp.fields.password.placeholder}
            autoComplete="password"
            pattern={
              passwordState && (passwordState.tag === 'warning' || passwordState.tag === 'success') ? '[\\s\\S]+' : ''
            }
            required
            autoCompleteOnFocus
            disabled={props.loading}
            onChange={(e) => checkPassword(e)}
          />
          {passwordState && <PasswordStrength strength={passwordState.tag} label={passwordState.label} />}
        </div>

        {props.error && (
          <div className="flex w-full flex-row items-start">
            <div className="flex h-5 flex-row items-center">
              <WarningCircle weight="fill" className="mr-1 h-4 text-red" />
            </div>
            <span className="text-sm text-red">{props.error}</span>
          </div>
        )}

        <PrimaryButton
          type="submit"
          label={props.textContent.SignUp.fields.submit}
          disabled={props.loading}
          loading={props.loading}
        />

        <span className="text-center text-sm text-gray-50">
          <span>{props.textContent.SignUp.disclaimer.text}</span>{' '}
          <a href="/legal" target="_blank" className="hover:text-gray-60 hover:underline active:text-gray-80">
            {props.textContent.SignUp.disclaimer.link}
          </a>
          {'.'}
        </span>
      </form>
    </>
  );
}
