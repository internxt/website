import { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { IFormValues } from '../IntegratedCheckoutView';
import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';
import TextInput from '@/components/shared/TextInput';
import PasswordInput from '@/components/shared/PasswordInput';
import { DARK_MODE_ENABLED } from '@/theme.config';

export const MAX_PASSWORD_LENGTH = 50;

interface InputsComponentProps {
  darkMode?: boolean;
  textContent: IntegratedCheckoutText['authComponent'];
  errors: FieldErrors<IFormValues>;
  authError?: string;
  register: UseFormRegister<IFormValues>;
}

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

export const InputsComponent = ({
  darkMode = DARK_MODE_ENABLED,
  register,
  textContent,
  errors,
  authError,
}: InputsComponentProps): JSX.Element => {
  return (
    <>
      <div className="flex w-full flex-col gap-1">
        <p className={`text-sm ${darkMode ? 'text-cool-gray-30' : 'text-gray-100'}`}>
          {textContent.signup.emailAddress}
        </p>
        <TextInput
          placeholder={'Email'}
          label="email"
          type="email"
          register={register}
          required={true}
          minLength={{ value: 1, message: textContent.emailMustNotBeEmpty }}
          error={errors.email}
        />
      </div>

      <div className="flex w-full flex-col gap-1">
        <p className={`text-sm ${darkMode ? 'text-cool-gray-30' : 'text-gray-100'}`}>{textContent.signup.password}</p>
        <label className="space-y-0.5">
          <PasswordInput
            placeholder={'Password'}
            label="password"
            maxLength={MAX_PASSWORD_LENGTH}
            register={register}
            required={true}
            error={errors.password}
            pattern={{
              value: PASSWORD_REGEX,
              message:
                'Password must contain 6 letters or more, at least one digit, mix between uppercase and lowercase letters, one special character.',
            }}
          />
        </label>
      </div>
      {errors && (
        <div className="text-red-dark">
          <p>{errors.email?.message ?? errors.password?.message}</p>
        </div>
      )}
      <p className="text-sm font-medium text-gray-50">{textContent.privacyGuarantee}</p>
    </>
  );
};
