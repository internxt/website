import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useState } from 'react';
import TextInput, { TextInputProps } from '@/components/components/TextInput';

export default function PasswordInput(props: Readonly<TextInputProps>) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="relative flex w-full">
      <TextInput {...props} type={showPassword ? 'text' : 'password'} isPasswordInput />
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowPassword(!showPassword);
        }}
        className={`absolute right-0 top-0 flex h-11 w-11 flex-col items-center justify-center ${
          props.disabled ? 'text-gray-30' : 'text-gray-100'
        } cursor-pointer`}
        onKeyDown={(e) => (e['code'] === 'Space' || e['code'] === 'Enter') && setShowPassword(!showPassword)}
      >
        {showPassword ? <Eye className="h-6 w-6" /> : <EyeSlash className="h-6 w-6" />}
      </button>
    </div>
  );
}
