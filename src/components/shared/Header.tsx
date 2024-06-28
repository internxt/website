interface HeaderProps {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
  isToolsPage?: boolean;
}

const Header = ({ children, maxWidth = 'max-w-[796px]', className }: HeaderProps) => {
  return (
    <h1
      className={`${maxWidth} ${className} whitespace-normal text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight`}
    >
      {children}
    </h1>
  );
};

export default Header;
