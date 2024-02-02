import { Check } from '@phosphor-icons/react';

function Checkbox({
  id,
  checked,
  onClick,
  required,
  className,
  rounded,
}: {
  id: string;
  checked: boolean;
  onClick?: React.DOMAttributes<HTMLLabelElement>['onClick'];
  required?: boolean;
  className?: string;
  rounded?: string;
}): JSX.Element {
  return (
    <label className={`relative h-5 w-5 focus-within:outline-primary ${className}`} onClick={onClick}>
      <div
        onClick={(e) => e.preventDefault()}
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
    </label>
  );
}

export default Checkbox;
