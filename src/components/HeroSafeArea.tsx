const HeroSafeArea = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="pt-20 lg:pt-16">
      <div className="flex justify-center py-6 lg:justify-between lg:px-10 lg:py-9 xl:px-32 3xl:px-80">{children}</div>
    </div>
  );
};

export default HeroSafeArea;
