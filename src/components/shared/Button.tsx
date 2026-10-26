import Spinner from './Spinner';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface ButtonProps {
  darkMode?: boolean;
  text: string;
  showSpinner?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  id?: string;
  textColor?: string;
  hoverColor?: string;
  onClick?: () => void;
}

const Button = ({
  darkMode = DARK_MODE_ENABLED,
  text,
  className,
  type,
  showSpinner,
  id,
  disabled,
  textColor,
  hoverColor,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      id={id}
      type={type}
      className={[
        'flex w-max justify-center rounded-md px-5 py-3 text-base font-medium',
        disabled ? `${darkMode ? 'bg-gray-71' : 'bg-gray-10'}` : `bg-primary ${hoverColor}`,
        textColor || 'text-white',
        className || '',
      ].join(' ')}
    >
      {showSpinner ? <Spinner size={20} /> : <p>{text}</p>}
    </button>
  );
};

export default Button;
