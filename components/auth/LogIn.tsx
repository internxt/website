import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import PrimaryButton from '../components/PrimaryButton';
import { login, toggleAuthMethod } from '../../lib/auth';
import { WarningCircle } from 'phosphor-react';

interface LogInProps {
  textContent: any;
  tfa?: boolean;
  error?: string;
  loading?: boolean;
}

export default function LogIn(props: LogInProps) {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    if (props.tfa) {
      login({ email: form.email.value, password: form.password.value, tfa: form.tfa.value });
    } else {
      login({ email: form.email.value, password: form.password.value });
    }
  };

  return (
    <>
      <img className="h-16 w-16 rounded-xl shadow-subtle" src="/favicon.ico" draggable={false} />

      <div className="flex w-full flex-col items-center text-center">
        <h1 className="text-2xl font-medium">{props.textContent.LogIn.title}</h1>

        <span>
          {props.textContent.LogIn.or}{' '}
          <a
            onClick={() => !props.loading && toggleAuthMethod('signup')}
            className={`text-primary active:text-primary-dark ${props.loading && 'cursor-not-allowed'}`}
          >
            {props.textContent.LogIn.signup}
          </a>
        </span>
      </div>

      <form className="flex w-full flex-col space-y-3" onSubmit={onSubmit}>
        <label className="space-y-0.5">
          <div className="text-sm">{props.textContent.LogIn.fields.email.label}</div>
          <TextInput
            name="email"
            placeholder={props.textContent.LogIn.fields.email.placeholder}
            type="email"
            autoComplete="email"
            required
            disabled={props.loading}
          />
        </label>

        <label className="space-y-0.5">
          <div className="flex w-full flex-row justify-between text-sm">
            <span>{props.textContent.LogIn.fields.password.label}</span>
            <a
              onClick={() => !props.loading && toggleAuthMethod('recover')}
              className={`text-primary active:text-primary-dark ${props.loading && 'cursor-not-allowed'}`}
            >
              {props.textContent.LogIn.fields.password.helper}
            </a>
          </div>
          <PasswordInput
            name="password"
            placeholder={props.textContent.LogIn.fields.password.placeholder}
            autoComplete="password"
            required
            disabled={props.loading}
          />
        </label>

        {props.tfa && (
          <label className="space-y-0.5">
            <div className="text-sm">{props.textContent.LogIn.fields.tfa.label}</div>
            <PasswordInput
              name="tfa"
              placeholder={props.textContent.LogIn.fields.tfa.placeholder}
              autoComplete="one-time-code"
              pattern="[0-9]{6}"
              patternHint={props.textContent.LogIn.fields.tfa.hint}
              required
              disabled={props.loading}
            />
          </label>
        )}

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
          label={props.textContent.LogIn.fields.submit}
          disabled={props.loading}
          loading={props.loading}
        />
      </form>
    </>
  );
}
