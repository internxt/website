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
      className={`max-h-[110px] whitespace-normal text-3xl font-semibold leading-tight mobile-md:pt-0   lg:text-5xl xl:h-[116px] xl:pt-2 ${className}  `}
    >
      {children}
    </h1>
  );
};

export default Header;
