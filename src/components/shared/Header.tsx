const Header = ({
  children,
  maxWidth = 'max-w-[796px]',
  className,
  textHeightForDesk = 'sm:text-5xl',
  isToolsPage,
}: {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
  isToolsPage?: boolean;
  textHeightForDesk?: string;
}) => {
  return (
    <h1
      className={`${maxWidth} ${className} whitespace-normal text-4xl font-semibold leading-tight ${textHeightForDesk} sm:leading-tight`}
    >
      {children}
    </h1>
  );
};

export default Header;
