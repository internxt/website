import Spinner from './Spinner';

interface ButtonProps {
  text: string;
  showSpinner?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
}

const Button = ({ text, className, type, showSpinner, id, disabled, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      id={id}
      type={type}
      className={`flex ${className} ${
        disabled ? 'bg-gray-10' : 'bg-primary hover:bg-primary-dark'
      } w-max justify-center rounded-lg px-5 py-3 text-xl font-medium text-white `}
    >
      {showSpinner ? <Spinner size={20} /> : <p>{text}</p>}
    </button>
  );
};

export default Button;
