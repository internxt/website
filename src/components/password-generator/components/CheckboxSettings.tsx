import { Check } from '@phosphor-icons/react';
import { DARK_MODE_ENABLED } from '@/theme.config';

const CheckboxSettings = ({
  darkMode = DARK_MODE_ENABLED,
  id,
  checked,
  onClick,
  required,
  className,
}: {
  darkMode?: boolean;
  id: string;
  checked: boolean;
  onClick?: React.DOMAttributes<HTMLLabelElement>['onClick'];
  required?: boolean;
  className?: string;
}) => {
  const borderClass = darkMode ? 'border-gray-71' : 'border-gray-30';
  return (
    <label className={`relative h-5 w-5 rounded focus-within:outline-primary ${className}`} onClick={onClick}>
      <button
        onClick={(e) => e.preventDefault()}
        className={`relative flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded border text-white ${
          checked ? 'border-primary bg-primary' : `${borderClass} hover:border-gray-40`
        }`}
      >
        {checked && <Check size={16} weight="bold" />}
      </button>
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
};

export default CheckboxSettings;
