import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import PrimaryButton from '../components/PrimaryButton';
import { signup } from '../../lib/auth';
import { WarningCircle } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import PasswordStrength from '../components/PasswordStrength';
import axios from 'axios';
import testPasswordStrength from './testPasswordStrength';

interface SignUpProps {
  textContent: any;
  loading?: boolean;
  provider?: 'STACKCOMMERCE' | 'TECHCULT' | 'DEALMIRROR' | 'MIGHTYDEALS';
}

export default function SignUp(props: SignUpProps) {
  const [autoCompleteOnFocus, setAutoCompleteOnFocus] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [passwordState, setPasswordState] = useState<{
    tag: 'error' | 'warning' | 'success';
    label: string;
  } | null>(null);

  //Remove error message when the user starts typing
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  }, [error]);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;

    axios
      .get(`${window.origin}/api/check_code`, {
        params: {
          code: form.redeemCode.value,
          provider: props.provider,
        },
      })
      .then((res) => {
        signup({
          email: form.email.value,
          password: form.password.value,
          redeemCode: form.redeemCode.value,
          provider: props.provider,
        });
      })
      .catch((error) => {
        const err = error.response;
        if (err.status === 404) {
          setError(err.data.message);
        } else {
          console.error(err.response.data.message);
        }
      });
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
    <div className="z-50 flex w-full flex-col space-y-5">
      <div className="flex w-full flex-col items-center pt-3 text-center">
        <h1 className="text-2xl font-medium">{props.textContent.SignUp.title}</h1>
      </div>

      <form
        className="flex w-full flex-col space-y-3"
        onClick={() => {
          autoCompleteOnFocus && setAutoCompleteOnFocus(false);
        }}
        onSubmit={onSubmit}
      >
        <TextInput
          name="email"
          placeholder={props.textContent.SignUp.fields.email.placeholder}
          type="email"
          autoComplete="email"
          required
          autoCompleteOnFocus={autoCompleteOnFocus}
          disabled={props.loading}
        />

        <div className="space-y-0.5">
          <PasswordInput
            name="password"
            placeholder={props.textContent.SignUp.fields.password.placeholder}
            autoComplete="password"
            pattern={
              passwordState && (passwordState.tag === 'warning' || passwordState.tag === 'success')
                ? '[\\s\\S]+'
                : '^[]{1}'
            }
            required
            autoCompleteOnFocus={autoCompleteOnFocus}
            disabled={props.loading}
            onChange={(e) => checkPassword(e)}
          />
          {passwordState && <PasswordStrength strength={passwordState.tag} label={passwordState.label} />}
        </div>

        <TextInput
          name="redeemCode"
          placeholder={'Redeem Code'}
          type="text"
          autoComplete="email"
          required
          autoCompleteOnFocus={autoCompleteOnFocus}
          disabled={props.loading}
        />

        {error && (
          <div className="flex w-full flex-row items-start">
            <div className="flex h-5 flex-row items-center">
              <WarningCircle weight="fill" className="mr-1 h-4 text-red" />
            </div>
            <span className="text-sm text-red">{error}</span>
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
    </div>
  );
}
