import { MouseEventHandler } from 'react';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  required?: boolean;
  className?: string;
  rounded?: string;
}

function Checkbox({ id, checked, onClick, required, className, rounded }: Readonly<CheckboxProps>): JSX.Element {
  return (
    <button className={`relative h-5 w-5 focus-within:outline-primary ${className}`} onClick={onClick}>
      <div
        className={`relative flex h-5 w-5 cursor-pointer flex-col items-center justify-center ${
          rounded ?? 'rounded-full'
        } border p-1 text-white ${checked ? 'border-primary bg-primary' : 'border-gray-30 hover:border-gray-40'}`}
      >
        {checked && (
          <div
            className={`flex h-3 w-2.5 cursor-pointer flex-col items-center justify-center rounded-full border bg-white text-white ${
              checked && 'bg-white'
            }`}
          />
        )}
      </div>
      <input
        id={id}
        checked={checked}
        type="checkbox"
        required={required ?? false}
        readOnly
        className="base-checkbox h-0 w-0 appearance-none opacity-0"
      />
    </button>
  );
}

export default Checkbox;
