const Header = ({
  children,
  maxWidth = 'max-w-[796px]',
  className,
}: {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
}) => {
  return <h1 className={`${maxWidth} ${className} text-4xl font-semibold leading-tight sm:text-6xl`}>{children}</h1>;
};

export default Header;
