const Header = ({
  children,
  maxWidth = 'max-w-[796px]',
  className,
}: {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
}) => {
  return <h1 className={`${maxWidth} ${className} text-5xl font-semibold sm:text-6xl lg:leading-tight`}>{children}</h1>;
};

export default Header;
