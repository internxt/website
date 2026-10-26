import { Check } from '@phosphor-icons/react';
import { MouseEventHandler } from 'react';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface CheckboxProps {
  darkMode?: boolean;
  id: string;
  checked: boolean;
  showCheckIcon?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  required?: boolean;
  className?: string;
  rounded?: string;
}

function Checkbox({
  darkMode = DARK_MODE_ENABLED,
  id,
  checked,
  showCheckIcon,
  onClick,
  required,
  className,
  rounded,
}: Readonly<CheckboxProps>): JSX.Element {
  const borderClass = darkMode ? 'border-gray-71' : 'border-gray-30';
  return (
    <button className={`relative h-5 w-5 focus-within:outline-primary ${className}`} onClick={onClick}>
      <div
        className={`relative flex h-5 w-5 cursor-pointer flex-col items-center justify-center ${
          rounded ?? 'rounded-full'
        } border p-1 text-white ${checked ? 'border-primary bg-primary' : `${borderClass} hover:border-gray-40`}`}
      >
        {checked && (
          <div
            className={`flex cursor-pointer flex-col items-center justify-center ${
              rounded ?? 'rounded-full'
            } text-white`}
          >
            {showCheckIcon ? (
              <Check size={16} weight="bold" />
            ) : (
              <div className={`rounded-full ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} p-1`} />
            )}
          </div>
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
