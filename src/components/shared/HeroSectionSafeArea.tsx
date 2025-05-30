const HeroSectionSafeArea = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="w-full items-center justify-center md:px-40 lg:px-10 xl:px-32">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-5 py-10 pt-20 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:px-0">
        {children}
      </div>
    </div>
  );
};

export default HeroSectionSafeArea;
