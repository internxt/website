import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import PrimaryButton from '../components/PrimaryButton';
import { signup, toggleAuthMethod } from '../../lib/auth';
import { WarningCircle } from 'phosphor-react';

interface SignUpProps {
  textContent: any;
  error?: string;
  loading?: boolean;
}

export default function SignUp(props: SignUpProps) {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    signup({ email: form.email.value, password: form.password.value });
  };

  return (
    <>
      <img className="h-16 w-16 rounded-xl shadow-subtle" src="/favicon.ico" draggable={false} />

      <div className="flex w-full flex-col items-center text-center">
        <h1 className="text-2xl font-medium">{props.textContent.SignUp.title}</h1>

        <span>
          {props.textContent.SignUp.or}{' '}
          <a
            onClick={() => !props.loading && toggleAuthMethod()}
            className={`text-primary active:text-primary-dark ${props.loading && 'cursor-not-allowed'}`}
          >
            {props.textContent.SignUp.login}
          </a>
        </span>
      </div>

      <form className="flex w-full flex-col space-y-3" onSubmit={onSubmit}>
        <label className="space-y-0.5">
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

        <label className="space-y-0.5">
          <div className="text-sm">{props.textContent.SignUp.fields.password.label}</div>
          <PasswordInput
            name="password"
            placeholder={props.textContent.SignUp.fields.password.placeholder}
            autoComplete="off"
            required
            disabled={props.loading}
          />
        </label>

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
      </form>
    </>
  );
}
