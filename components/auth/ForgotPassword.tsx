import TextInput from '../components/TextInput';
import PrimaryButton from '../components/PrimaryButton';
import { recover, toggleAuthMethod } from '../../lib/auth';
import { CaretLeft, EnvelopeSimple, WarningCircle } from 'phosphor-react';
import { useState } from 'react';
import { GlobalDialog, useGlobalDialog } from '../../contexts/GlobalUIManager';

interface ForgotPasswordProps {
  textContent: any;
  error?: string;
  loading?: boolean;
  sent?: boolean;
}

export default function ForgotPassword(props: ForgotPasswordProps) {
  const globalDialogs = useGlobalDialog();
  const [email, setEmail] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    recover({ email: form.email.value });
    setEmail(form.email.value);
  };

  return (
    <>
      {props.sent ? (
        <>
          <div className="flex flex-col items-center justify-center rounded-full bg-primary/9 p-3 text-primary ring-12 ring-primary/4">
            <EnvelopeSimple className="h-11 w-11" weight="light" />
          </div>

          <div className="flex w-full flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-medium">{props.textContent.Recover.success.title}</h1>

            <div className="flex w-full flex-col items-center">
              <span className="text-gray-60">{props.textContent.Recover.success.subtitle}</span>
              <span className="w-full overflow-hidden text-ellipsis text-center font-medium text-gray-80">{email}</span>
            </div>
          </div>

          <a
            onClick={() => {
              if (!props.loading) {
                globalDialogs.openDialog(GlobalDialog.Auth, { data: { mode: 'login' } });
              }
            }}
            className="flex flex-row items-center space-x-0.5 text-primary active:text-primary-dark"
          >
            <CaretLeft className="-mb-0.5 h-4 w-4" weight="bold" />
            <span>{props.textContent.Recover.back}</span>
          </a>
        </>
      ) : (
        <>
          <div className="flex w-full flex-col items-center">
            <h1 className="text-2xl font-medium">{props.textContent.Recover.title}</h1>
            <a
              onClick={() => {
                if (!props.loading) {
                  globalDialogs.openDialog(GlobalDialog.Auth, { data: { mode: 'login' } });
                }
              }}
              className={`flex flex-row items-center space-x-0.5 text-primary active:text-primary-dark ${
                props.loading && 'cursor-not-allowed'
              }`}
            >
              <CaretLeft className="-mb-0.5 h-4 w-4" weight="bold" />
              <span>{props.textContent.Recover.back}</span>
            </a>
          </div>

          <form className="flex w-full flex-col space-y-3" onSubmit={onSubmit}>
            <div className="rounded-lg border border-gray-10 bg-gray-1 p-4 text-sm text-gray-60">
              {props.textContent.Recover.disclaimer}
            </div>

            <TextInput
              name="email"
              placeholder={props.textContent.Recover.fields.email.placeholder}
              type="email"
              autoComplete="email"
              required
              disabled={props.loading}
            />

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
              label={props.textContent.Recover.fields.submit}
              disabled={props.loading}
              loading={props.loading}
            />
          </form>
        </>
      )}
    </>
  );
}
