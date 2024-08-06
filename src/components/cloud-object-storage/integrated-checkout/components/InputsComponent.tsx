import { FieldErrors, UseFormRegister } from 'react-hook-form';
import PasswordInput from '@/components/components/PasswordInput';
import TextInput from '@/components/components/TextInput';
import { IFormValues } from '../IntegratedCheckoutView';
import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';

export const MAX_PASSWORD_LENGTH = 50;

interface InputsComponentProps {
  textContent: IntegratedCheckoutText['authComponent'];
  errors: FieldErrors<IFormValues>;
  authError?: string;
  register: UseFormRegister<IFormValues>;
}

export const InputsComponent = ({ register, textContent, errors, authError }: InputsComponentProps) => {
  return (
    <>
      <div className="flex w-full flex-col gap-1">
        <p className="text-sm text-gray-80">{textContent.signup.emailAddress}</p>
        <TextInput
          placeholder={'Email'}
          type="email"
          register={register}
          required={true}
          minLength={{ value: 1, message: textContent.emailMustNotBeEmpty }}
          error={errors.password}
        />
      </div>

      <div className="flex w-full flex-col gap-1">
        <p className="text-sm text-gray-80">{textContent.signup.password}</p>
        <label className="space-y-0.5">
          <PasswordInput
            placeholder={'Password'}
            maxLength={MAX_PASSWORD_LENGTH}
            register={register}
            required={true}
            error={errors.password}
          />
        </label>
      </div>
      {authError && <div className="text-red-dark">{authError}</div>}
      <p className="text-sm font-medium text-gray-50">{textContent.privacyGuarantee}</p>
    </>
  );
};
