const Button = ({ text }: { text: string }) => {
  return (
    <button className="flex w-max rounded-lg bg-primary py-3 px-5 text-xl font-medium text-white hover:bg-primary-dark">
      {text}
    </button>
  );
};

export default Button;
