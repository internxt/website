interface ButtonProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
}

const Button = ({ text, className, type, id, disabled, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      id={id}
      type={type}
      className={`flex ${className} w-max justify-center rounded-lg bg-primary py-3 px-5 text-xl font-medium text-white hover:bg-primary-dark`}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
