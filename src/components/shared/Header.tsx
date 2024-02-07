const Header = ({
  children,
  maxWidth = 'max-w-[796px]',
  className,
  isToolsPage,
}: {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
  isToolsPage?: boolean;
}) => {
  const isToolsPageStyle = isToolsPage ? 'sm:text-5xl' : 'sm:text-6xl';

  return (
    <h1
      className={`${maxWidth} ${className} whitespace-normal text-4xl font-semibold leading-tight sm:leading-tight ${isToolsPageStyle}`}
    >
      {children}
    </h1>
  );
};

export default Header;
