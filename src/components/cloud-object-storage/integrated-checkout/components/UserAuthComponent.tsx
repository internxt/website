import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../IntegratedCheckoutView';
import { InputsComponent } from './InputsComponent';
import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface UserAuthComponentProps {
  darkMode?: boolean;
  textContent: IntegratedCheckoutText['authComponent'];
  errors: FieldErrors<IFormValues>;
  authError: string;
  register: UseFormRegister<IFormValues>;
}

export const UserAuthComponent = ({
  darkMode = DARK_MODE_ENABLED,
  textContent,
  errors,
  authError,
  register,
}: UserAuthComponentProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-8">
      <p className={`text-2xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
        1. {textContent.title.signUp}
      </p>
      <div
        className={`flex flex-col space-y-4 rounded-2xl border ${
          darkMode ? 'border-gray-71 bg-[#1C1C1C]' : 'border-gray-10 bg-white'
        } p-5`}
      >
        <InputsComponent errors={errors} authError={authError} textContent={textContent} register={register} />
      </div>
    </div>
  );
};
