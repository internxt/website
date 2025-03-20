const Header = ({
  children,
  maxWidth = 'max-w-[796px]',
  className,
  textHeightForDesk = 'sm:text-5xl',
  withoutLeading,
}: {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
  withoutLeading?: boolean;
  isToolsPage?: boolean;
  textHeightForDesk?: string;
}): JSX.Element => {
  const leading = withoutLeading ? '' : 'sm:leading-tight';
  return (
    <h1
      className={`${maxWidth} ${className} whitespace-normal font-semibold leading-tight ${textHeightForDesk} ${leading}`}
    >
      {children}
    </h1>
  );
};

export default Header;
