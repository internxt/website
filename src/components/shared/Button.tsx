const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex w-max rounded-lg bg-primary py-3 px-5 text-xl font-medium text-white hover:bg-primary-dark"
    >
      {text}
    </button>
  );
};

export default Button;
