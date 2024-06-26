const Button = ({ text, className, onClick }: { text: string; className?: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`flex ${className} w-max justify-center rounded-lg bg-primary py-3 px-5 text-xl font-medium text-white hover:bg-primary-dark`}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
