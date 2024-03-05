import TextInput from '@/components/components/TextInput';
import PasswordInput from '@/components/components/PasswordInput';
import PrimaryButton from '@/components/components/PrimaryButton';
import { login } from '@/lib/auth';
import { WarningCircle } from '@phosphor-icons/react';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

interface LogInProps {
  textContent: any;
  tfa?: boolean;
  error?: string;
  loading?: boolean;
  openDialog?: boolean;
}

export default function LogIn(props: LogInProps) {
  const globalDialogs = useGlobalDialog();
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    if (props.tfa) {
      login({ email: form.email.value, password: form.password.value, tfa: form.tfa.value }, window.location.href);
    } else {
      login({ email: form.email.value, password: form.password.value }, window.location.href);
    }
  };

  return (
    <>
      <div className={'flex w-full flex-col items-center pt-3 text-center'}>
        <h1 className="text-2xl font-medium">{props.textContent.LogIn.title}</h1>

        <span>
          {props.textContent.LogIn.or}{' '}
          <button
            onClick={() => {
              if (!props.loading) {
                globalDialogs.openDialog(GlobalDialog.Auth, { data: { mode: 'signup' } });
              }
            }}
            className={`text-primary active:text-primary-dark ${props.loading && 'cursor-not-allowed'}`}
          >
            {props.textContent.LogIn.signup}
          </button>
        </span>
      </div>

      <form className="flex w-full flex-col space-y-3" onSubmit={onSubmit}>
        <TextInput
          name="email"
          placeholder={props.textContent.LogIn.fields.email.placeholder}
          type="email"
          autoComplete="email"
          required
          disabled={props.loading}
        />

        <PasswordInput
          name="password"
          placeholder={props.textContent.LogIn.fields.password.placeholder}
          autoComplete="password"
          required
          disabled={props.loading}
        />

        {props.tfa && (
          <PasswordInput
            name="tfa"
            placeholder={props.textContent.LogIn.fields.tfa.placeholder}
            autoComplete="one-time-code"
            pattern="[0-9]{6}"
            patternHint={props.textContent.LogIn.fields.tfa.hint}
            required
            disabled={props.loading}
          />
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

        <button
          onClick={() => {
            if (!props.loading) {
              globalDialogs.openDialog(GlobalDialog.Auth, { data: { mode: 'recover' } });
            }
          }}
          className={`text-center text-primary active:text-primary-dark ${props.loading && 'cursor-not-allowed'}`}
        >
          {props.textContent.LogIn.fields.password.helper}
        </button>
      </form>
    </>
  );
}
