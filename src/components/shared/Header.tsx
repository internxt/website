const Header = ({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element => {
  return (
    <h1
      className={`h-[72px] whitespace-normal text-3xl font-semibold leading-tight lg:text-5xl xl:h-[116px] xl:pt-2 ${className} `}
    >
      {children}
    </h1>
  );
};

export default Header;
