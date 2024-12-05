const HeroSectionSafeArea = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="w-full items-center justify-center px-4 lg:px-10 xl:px-32">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col space-y-10 px-5 py-20 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:px-0">
        {children}
      </div>
    </div>
  );
};

export default HeroSectionSafeArea;
