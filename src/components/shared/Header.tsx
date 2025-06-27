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
      className={`h-[72px] whitespace-normal text-3xl font-semibold leading-tight lg:text-5xl xl:h-[116px] xl:pt-2 ${className} `}
    >
      {children}
    </h1>
  );
};

export default Header;
