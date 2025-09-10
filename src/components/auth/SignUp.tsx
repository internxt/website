import TextInput from '@/components/components/TextInput';
import PasswordInput from '@/components/components/PasswordInput';
import PrimaryButton from '@/components/components/PrimaryButton';
import { WarningCircle } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import PasswordStrength from '@/components/components/PasswordStrength';
import axios from 'axios';
import testPasswordStrength from '@/components/auth/testPasswordStrength';
import { signup } from '@/lib/auth';

interface SignUpProps {
  textContent: any;
  loading?: boolean;
  provider?: 'STACKCOMMERCE' | 'TECHCULT' | 'DEALMIRROR' | 'MIGHTYDEALS' | 'OYSTERVPN' | 'COINGATE' | 'DRIFFLE';
}

export default function SignUp(props: Readonly<SignUpProps>) {
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
    const formData = new FormData(event.target);

    const form = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redeemCode: formData.get('redeemCode') as string,
    };

    axios
      .get(`${window.origin}/api/check_code`, {
        params: {
          code: form.redeemCode,
          provider: props.provider,
        },
      })
      .then(() => {
        signup({
          email: form.email,
          password: form.password,
          redeemCode: form.redeemCode,
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

      <form className="flex w-full flex-col space-y-3" onSubmit={onSubmit}>
        <TextInput
          name="email"
          placeholder={props.textContent.SignUp.fields.email.placeholder}
          type="email"
          autoComplete="email"
          required
          id="email"
          disabled={props.loading}
        />

        <div className="space-y-0.5">
          <PasswordInput
            name="password"
            placeholder={props.textContent.SignUp.fields.password.placeholder}
            autoComplete="password"
            id="password"
            pattern={
              passwordState && (passwordState.tag === 'warning' || passwordState.tag === 'success')
                ? '[\\s\\S]+'
                : '^[]{1}'
            }
            required
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
          id="redeemCode"
          required
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
